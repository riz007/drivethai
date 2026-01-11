"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/i18n";
import { useAuth } from "@/contexts/auth-context";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Car,
  Mail,
  Lock,
  User,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import { GoogleOneTap } from "@/components/google-one-tap";

type AuthMode = "signin" | "signup" | "forgot" | "reset";

function AuthPageContent() {
  const { locale } = useLanguage();
  const t = useTranslation(locale);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, signIn, signUp, resetPassword, updatePassword } = useAuth();

  const [mode, setMode] = useState<AuthMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const redirect = searchParams.get("redirect") ?? "/quiz";
  const errorParam = searchParams.get("error");

  useEffect(() => {
    if (errorParam === "auth_callback_error") {
      setError(
        locale === "en"
          ? "Authentication failed. Please try again."
          : "การยืนยันตัวตนล้มเหลว กรุณาลองอีกครั้ง"
      );
    }
  }, [errorParam, locale]);

  useEffect(() => {
    // If user is already logged in, redirect
    if (user) {
      router.push(redirect);
    }
  }, [user, router, redirect]);

  // Check if we're on reset password page (has access_token in URL hash)
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.hash.includes("access_token")
    ) {
      setMode("reset");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      if (mode === "signin") {
        if (!email) {
          setError(t.auth.emailRequired);
          setIsLoading(false);
          return;
        }
        if (!password) {
          setError(t.auth.passwordRequired);
          setIsLoading(false);
          return;
        }

        const { error } = await signIn(email, password);
        if (error) {
          setError(t.auth.invalidCredentials);
        } else {
          router.push(redirect);
        }
      } else if (mode === "signup") {
        if (!email) {
          setError(t.auth.emailRequired);
          setIsLoading(false);
          return;
        }
        if (!password) {
          setError(t.auth.passwordRequired);
          setIsLoading(false);
          return;
        }
        if (password.length < 6) {
          setError(t.auth.passwordMinLength);
          setIsLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError(t.auth.passwordsDoNotMatch);
          setIsLoading(false);
          return;
        }

        const { error } = await signUp(email, password, fullName);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(t.auth.signUpSuccessDesc);
        }
      } else if (mode === "forgot") {
        if (!email) {
          setError(t.auth.emailRequired);
          setIsLoading(false);
          return;
        }

        const { error } = await resetPassword(email);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(t.auth.checkEmailDesc);
        }
      } else if (mode === "reset") {
        if (!password) {
          setError(t.auth.passwordRequired);
          setIsLoading(false);
          return;
        }
        if (password.length < 6) {
          setError(t.auth.passwordMinLength);
          setIsLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError(t.auth.passwordsDoNotMatch);
          setIsLoading(false);
          return;
        }

        const { error } = await updatePassword(password);
        if (error) {
          setError(error.message);
        } else {
          setSuccess(t.auth.passwordUpdated);
          setTimeout(() => {
            router.push("/quiz");
          }, 2000);
        }
      }
    } catch {
      setError(
        locale === "en"
          ? "An unexpected error occurred"
          : "เกิดข้อผิดพลาดที่ไม่คาดคิด"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getTitle = () => {
    switch (mode) {
      case "signin":
        return t.auth.signInTitle;
      case "signup":
        return t.auth.signUpTitle;
      case "forgot":
        return t.auth.resetTitle;
      case "reset":
        return t.auth.resetPassword;
      default:
        return t.auth.signInTitle;
    }
  };

  const getSubtitle = () => {
    switch (mode) {
      case "signin":
        return t.auth.signInSubtitle;
      case "signup":
        return t.auth.signUpSubtitle;
      case "forgot":
        return t.auth.resetSubtitle;
      case "reset":
        return locale === "en"
          ? "Enter your new password"
          : "กรอกรหัสผ่านใหม่ของคุณ";
      default:
        return t.auth.signInSubtitle;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 px-4 py-12">
          <Card className="w-full max-w-md border-2 shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
                <Car className="size-8 text-white" />
              </div>
              <CardTitle className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-2xl text-transparent">
                {getTitle()}
              </CardTitle>
              <p className="text-muted-foreground text-sm">{getSubtitle()}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-500/50 bg-green-500/10">
                  <CheckCircle2 className="size-4 text-green-600" />
                  <AlertDescription className="text-green-600">
                    {success}
                  </AlertDescription>
                </Alert>
              )}

              {(mode === "forgot" || mode === "reset") && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  onClick={() => setMode("signin")}>
                  <ArrowLeft className="size-4" />
                  {t.auth.backToSignIn}
                </Button>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{t.auth.fullName}</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder={
                          locale === "en" ? "John Doe" : "ชื่อ นามสกุล"
                        }
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="pl-10"
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                )}

                {mode !== "reset" && (
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.auth.email}</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder={
                          locale === "en" ? "you@example.com" : "อีเมลของคุณ"
                        }
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        disabled={isLoading}
                        autoComplete="email"
                      />
                    </div>
                  </div>
                )}

                {mode !== "forgot" && (
                  <div className="space-y-2">
                    <Label htmlFor="password">{t.auth.password}</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        disabled={isLoading}
                        autoComplete={
                          mode === "signin"
                            ? "current-password"
                            : "new-password"
                        }
                      />
                    </div>
                  </div>
                )}

                {(mode === "signup" || mode === "reset") && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      {t.auth.confirmPassword}
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10"
                        disabled={isLoading}
                        autoComplete="new-password"
                      />
                    </div>
                  </div>
                )}

                {mode === "signin" && (
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="link"
                      size="sm"
                      className="h-auto p-0 text-primary"
                      onClick={() => {
                        setMode("forgot");
                        setError(null);
                        setSuccess(null);
                      }}>
                      {t.auth.forgotPassword}
                    </Button>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full gap-2 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90"
                  disabled={isLoading}>
                  {isLoading && <Loader2 className="size-4 animate-spin" />}
                  {mode === "signin" && t.auth.signIn}
                  {mode === "signup" && t.auth.signUp}
                  {mode === "forgot" && t.auth.sendResetLink}
                  {mode === "reset" && t.auth.resetPassword}
                </Button>
              </form>

              {(mode === "signin" || mode === "signup") && (
                <>
                  {
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          {t.auth.orContinueWith}
                        </span>
                      </div>
                    </div>
                  }

                  {
                    <div className="grid gap-3">
                      <GoogleOneTap
                        onError={(error) => setError(error)}
                        redirectTo={redirect}
                        showButton={true}
                        buttonText={
                          mode === "signup" ? "signup_with" : "continue_with"
                        }
                        locale={locale}
                      />
                    </div>
                  }
                </>
              )}

              {mode === "signin" && (
                <p className="text-center text-sm text-muted-foreground">
                  {t.auth.noAccount}{" "}
                  <Button
                    type="button"
                    variant="link"
                    className="h-auto p-0 text-primary"
                    onClick={() => {
                      setMode("signup");
                      setError(null);
                      setSuccess(null);
                    }}>
                    {t.auth.signUp}
                  </Button>
                </p>
              )}

              {mode === "signup" && (
                <p className="text-center text-sm text-muted-foreground">
                  {t.auth.haveAccount}{" "}
                  <Button
                    type="button"
                    variant="link"
                    className="h-auto p-0 text-primary"
                    onClick={() => {
                      setMode("signin");
                      setError(null);
                      setSuccess(null);
                    }}>
                    {t.auth.signIn}
                  </Button>
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>
      }>
      <AuthPageContent />
    </Suspense>
  );
}
