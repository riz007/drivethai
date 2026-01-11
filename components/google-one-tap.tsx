"use client";

import Script from "next/script";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/contexts/auth-context";

// Type declarations for Google Identity Services
interface CredentialResponse {
  credential: string;
  select_by: string;
  clientId: string;
}

interface GoogleAccounts {
  id: {
    initialize: (config: {
      client_id: string | undefined;
      callback: (response: CredentialResponse) => void;
      nonce?: string;
      use_fedcm_for_prompt?: boolean;
      auto_select?: boolean;
      itp_support?: boolean;
    }) => void;
    prompt: (
      callback?: (notification: {
        isNotDisplayed: () => boolean;
        isSkippedMoment: () => boolean;
      }) => void
    ) => void;
    renderButton: (
      parent: HTMLElement,
      options: {
        type?: "standard" | "icon";
        theme?: "outline" | "filled_blue" | "filled_black";
        size?: "large" | "medium" | "small";
        text?: "signin_with" | "signup_with" | "continue_with" | "signin";
        shape?: "rectangular" | "pill" | "circle" | "square";
        logo_alignment?: "left" | "center";
        width?: string | number;
        locale?: string;
      }
    ) => void;
    cancel: () => void;
  };
}

declare global {
  interface Window {
    google?: { accounts: GoogleAccounts };
  }
}

// Generate nonce for security
const generateNonce = async (): Promise<[string, string]> => {
  const nonce = btoa(
    String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32)))
  );
  const encoder = new TextEncoder();
  const encodedNonce = encoder.encode(nonce);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encodedNonce);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedNonce = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return [nonce, hashedNonce];
};

interface GoogleOneTapProps {
  onError?: (error: string) => void;
  onSuccess?: () => void;
  redirectTo?: string;
  showButton?: boolean;
  buttonText?: "signin_with" | "signup_with" | "continue_with" | "signin";
  locale?: string;
}

export function GoogleOneTap({
  onError,
  onSuccess,
  redirectTo = "/quiz",
  showButton = true,
  buttonText = "continue_with",
  locale = "en",
}: GoogleOneTapProps) {
  const supabase = createClient();
  const router = useRouter();
  const { user } = useAuth();
  const [isInitialized, setIsInitialized] = useState(false);

  const handleCredentialResponse = useCallback(
    async (response: CredentialResponse, nonce: string) => {
      try {
        const { error } = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: response.credential,
          nonce,
        });

        if (error) {
          onError?.(error.message);
          return;
        }

        onSuccess?.();
        router.push(redirectTo);
      } catch {
        onError?.(
          locale === "en"
            ? "Failed to sign in with Google"
            : "ไม่สามารถเข้าสู่ระบบด้วย Google ได้"
        );
      }
    },
    [supabase.auth, router, redirectTo, onError, onSuccess, locale]
  );

  const initializeGoogleOneTap = useCallback(async () => {
    if (!window.google || isInitialized || user) return;

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId) {
      return;
    }

    const [nonce, hashedNonce] = await generateNonce();

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: (response: CredentialResponse) =>
        handleCredentialResponse(response, nonce),
      nonce: hashedNonce,
      use_fedcm_for_prompt: true,
      auto_select: true,
      itp_support: true,
    });

    // Render the button if showButton is true
    if (showButton) {
      const buttonContainer = document.getElementById("google-signin-button");
      if (buttonContainer) {
        window.google.accounts.id.renderButton(buttonContainer, {
          type: "standard",
          theme: "outline",
          size: "large",
          text: buttonText,
          shape: "rectangular",
          logo_alignment: "left",
          width: "100%",
          locale: locale === "th" ? "th" : "en",
        });
      }
    }

    // Show One Tap prompt
    window.google.accounts.id.prompt();

    setIsInitialized(true);
  }, [
    isInitialized,
    user,
    showButton,
    buttonText,
    locale,
    handleCredentialResponse,
  ]);

  useEffect(() => {
    // If user is already logged in, don't show Google One Tap
    if (user) {
      return;
    }
  }, [user]);

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        onReady={() => {
          initializeGoogleOneTap();
        }}
        strategy="afterInteractive"
      />
      {showButton && (
        <div
          id="google-signin-button"
          className="flex justify-center w-full [&>div]:w-full [&>div>div]:w-full"
        />
      )}
    </>
  );
}
