"use client";

import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LawChapterComponent } from "@/components/law-chapter";
import { lawChapters } from "@/lib/driving-laws-data";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, BookOpen, Ban, DollarSign } from "lucide-react";

export default function LawsPage() {
  const { locale } = useLanguage();
  const t = useTranslation(locale);

  const getChapterIcon = (icon: string) => {
    switch (icon) {
      case "license":
        return <BookOpen className="size-6 text-primary" />;
      case "rules":
        return <AlertTriangle className="size-6 text-primary" />;
      case "prohibition":
        return <Ban className="size-6 text-primary" />;
      case "fine":
        return <DollarSign className="size-6 text-primary" />;
      default:
        return <BookOpen className="size-6 text-primary" />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-gradient-to-b from-background to-muted/30 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h1 className="mb-3 font-bold text-4xl">{t.laws.title}</h1>
              <p className="text-balance text-muted-foreground text-lg leading-relaxed">
                {t.laws.subtitle}
              </p>
            </div>
            <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {lawChapters.map((chapter, index) => (
                <a key={chapter.id} href={`#${chapter.id}`}>
                  <Card className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        {getChapterIcon(chapter.icon)}
                      </div>
                      <div>
                        <p className="font-semibold text-sm leading-tight">
                          {locale === "en" ? chapter.titleEn : chapter.titleTh}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {locale === "en" ? "Chapter" : "บท"} {index + 1}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Chapters */}
            <div className="space-y-8">
              {lawChapters.map((chapter) => (
                <div key={chapter.id} id={chapter.id} className="scroll-mt-20">
                  <LawChapterComponent chapter={chapter} />
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-12 rounded-lg border border-amber-500/50 bg-amber-500/5 p-6">
              <div className="flex gap-3">
                <AlertTriangle className="size-6 shrink-0 text-amber-600 dark:text-amber-400" />
                <div>
                  <h3 className="mb-2 font-semibold">
                    {locale === "en"
                      ? "Important Disclaimer"
                      : "ข้อจำกัดความรับผิดที่สำคัญ"}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {locale === "en"
                      ? "This information is for educational purposes only. Laws and regulations may change. Always refer to official Thai Department of Land Transport (DLT) regulations and consult legal professionals for specific situations. Fines and penalties mentioned are approximate and may vary by jurisdiction."
                      : "ข้อมูลนี้มีวัตถุประสงค์เพื่อการศึกษาเท่านั้น กฎหมายและกฎระเบียบอาจเปลี่ยนแปลง โปรดอ้างอิงกฎระเบียบของกรมการขนส่งทางบก (ขบ.) อย่างเป็นทางการเสมอ และปรึกษาผู้เชี่ยวชาญด้านกฎหมายสำหรับสถานการณ์เฉพาะ ค่าปรับและบทลงโทษที่กล่าวถึงเป็นเพียงโดยประมาณและอาจแตกต่างกันตามเขตอำนาจศาล"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
