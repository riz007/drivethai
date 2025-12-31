"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/i18n";
import { Car } from "lucide-react";
import { DATA_ATTRIBUTION } from "@/lib/road-signs-data";

export function Footer() {
  const { locale } = useLanguage();
  const t = useTranslation(locale);

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
                <Car className="size-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">{t.common.appName}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.common.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              {locale === "en" ? "Quick Links" : "ลิงก์ด่วน"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/signs"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  {t.common.roadSigns}
                </Link>
              </li>
              <li>
                <Link
                  href="/laws"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  {t.common.drivingLaws}
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  {t.common.quiz}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">{t.common.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/legal#terms"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  {t.legal.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#privacy"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  {t.legal.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#copyright"
                  className="text-muted-foreground hover:text-primary transition-colors">
                  {t.legal.copyright}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">
              {locale === "en" ? "Data Attribution" : "แหล่งที่มาของข้อมูล"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              {locale === "en" ? "Road sign images from:" : "ภาพป้ายจราจรจาก:"}
            </p>
            <a
              href={DATA_ATTRIBUTION.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline">
              {DATA_ATTRIBUTION.source}
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              {DATA_ATTRIBUTION.license}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {locale === "en"
                ? "Educational purposes only. Always refer to official Thai Department of Land Transport (DLT) regulations."
                : "เพื่อการศึกษาเท่านั้น กรุณาอ้างอิงกฎระเบียบกรมการขนส่งทางบก (ขบ.) อย่างเป็นทางการเสมอ"}
            </p>
            <p className="text-sm text-muted-foreground">
              {locale === "en"
                ? "© 2025 DriveThai. All rights reserved."
                : "© 2025 ป้ายจราจรไทย สงวนลิขสิทธิ์"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
