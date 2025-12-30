"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLocale(locale === "en" ? "th" : "en")}
      className="gap-2">
      <Languages className="size-4" />
      <span className="font-medium">{locale === "en" ? "ไทย" : "EN"}</span>
    </Button>
  );
}
