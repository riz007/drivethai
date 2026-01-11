"use client";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
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
import { Car, Lock, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

function ResetPasswordContent() {
  const { locale } = useLanguage();
  const t = useTranslation(locale);
  const router = useRouter();
  const { updatePassword } = useAuth();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
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
                {t.auth.resetPassword}
              </CardTitle>
              <p className="text-muted-foreground text-sm">
                {locale === "en"
                  ? "Enter your new password"
                  : "กรอกรหัสผ่านใหม่ของคุณ"}
              </p>
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

              <form onSubmit={handleSubmit} className="space-y-4">
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
                      autoComplete="new-password"
                    />
                  </div>
                </div>

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

                <Button
                  type="submit"
                  className="w-full gap-2 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90"
                  disabled={isLoading}>
                  {isLoading && <Loader2 className="size-4 animate-spin" />}
                  {t.auth.resetPassword}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <Loader2 className="size-8 animate-spin text-primary" />
        </div>
      }>
      <ResetPasswordContent />
    </Suspense>
  );
}
