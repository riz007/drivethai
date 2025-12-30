"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LawChapter } from "@/lib/driving-laws-data";
import { useLanguage } from "@/contexts/language-context";
import { Badge } from "@/components/ui/badge";

interface LawChapterProps {
  chapter: LawChapter;
}

export function LawChapterComponent({ chapter }: LawChapterProps) {
  const { locale } = useLanguage();
  const title = locale === "en" ? chapter.titleEn : chapter.titleTh;

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {chapter.sections.map((section, index) => (
            <AccordionItem key={index} value={`section-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">
                  {locale === "en" ? section.titleEn : section.titleTh}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <p className="text-muted-foreground leading-relaxed">
                    {locale === "en" ? section.contentEn : section.contentTh}
                  </p>
                  {section.items && section.items.length > 0 && (
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="rounded-lg border border-border/50 bg-muted/30 p-4">
                          <div className="mb-2 flex items-start justify-between gap-2">
                            <h4 className="font-semibold text-sm">
                              {locale === "en" ? item.labelEn : item.labelTh}
                            </h4>
                            <Badge variant="outline" className="shrink-0">
                              {itemIndex + 1}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {locale === "en"
                              ? item.descriptionEn
                              : item.descriptionTh}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
