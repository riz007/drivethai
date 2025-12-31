"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Car,
  Languages,
  Gamepad2,
  Shield,
  ArrowRight,
  AlertTriangle,
  Ban,
  Info,
  Navigation2,
  Sparkles,
  BookOpen,
  Trophy,
} from "lucide-react";
import { getSignsByCategory } from "@/lib/road-signs-data";

export default function HomePage() {
  const { locale } = useLanguage();
  const t = useTranslation(locale);

  const features = [
    {
      icon: Car,
      title: t.home.features.allVehicles,
      description: t.home.features.allVehiclesDesc,
    },
    {
      icon: Languages,
      title: t.home.features.bilingual,
      description: t.home.features.bilingualDesc,
    },
    {
      icon: Gamepad2,
      title: t.home.features.interactive,
      description: t.home.features.interactiveDesc,
    },
    {
      icon: Shield,
      title: t.home.features.official,
      description: t.home.features.officialDesc,
    },
  ];

  const signCategories = [
    {
      icon: AlertTriangle,
      name: locale === "en" ? "Warning Signs" : "ป้ายเตือน",
      count: getSignsByCategory("warning").length.toString(),
    },
    {
      icon: Ban,
      name: locale === "en" ? "Prohibition Signs" : "ป้ายห้าม",
      count: getSignsByCategory("prohibition").length.toString(),
    },
    {
      icon: Info,
      name: locale === "en" ? "Information Signs" : "ป้ายข้อมูล",
      count: getSignsByCategory("information").length.toString(),
    },
    {
      icon: Navigation2,
      name: locale === "en" ? "Mandatory Signs" : "ป้ายบังคับ",
      count: getSignsByCategory("mandatory").length.toString(),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden gradient-blue-subtle px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full gradient-blue px-4 py-2 shadow-lg">
                <Sparkles className="size-4 text-white" />
                <span className="font-semibold text-white text-sm">
                  {locale === "en"
                    ? "AI-Powered Quiz Available!"
                    : "มีแบบทดสอบด้วย AI แล้ว!"}
                </span>
              </div>
              <h1 className="mb-6 text-balance font-bold text-4xl text-foreground sm:text-5xl lg:text-6xl">
                {t.home.hero.title}
              </h1>
              <p className="mb-4 text-balance text-muted-foreground text-lg leading-relaxed sm:text-xl">
                {t.home.hero.subtitle}
              </p>
              <p className="mb-8 text-pretty text-muted-foreground leading-relaxed">
                {t.home.hero.description}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 gradient-blue text-white border-0 shadow-lg hover:opacity-90">
                  <Link href="/signs">
                    <BookOpen className="size-4" />
                    {t.home.hero.exploreBtn}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 gradient-blue text-white border-0 shadow-lg hover:opacity-90">
                  <Link href="/quiz">
                    <Sparkles className="size-4" />
                    {locale === "en" ? "AI Quiz" : "แบบทดสอบ AI"}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {signCategories.map((category, idx) => (
                <Card
                  key={category.name}
                  className="border-2 bg-card/80 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg gradient-blue-subtle">
                      <category.icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-tight">
                        {category.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {category.count}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-balance font-bold text-3xl sm:text-4xl">
                {t.home.features.title}
              </h2>
              <p className="mx-auto max-w-2xl text-balance text-muted-foreground leading-relaxed">
                {locale === "en"
                  ? "Everything you need to master Thai road signs and driving regulations"
                  : "ทุกสิ่งที่คุณต้องการเพื่อเชี่ยวชาญป้ายจราจรและกฎจราจรไทย"}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className="group border-2 transition-all hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader>
                    <div
                      className={`mb-4 flex size-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110 ${
                        index === 0
                          ? "bg-gradient-to-br from-primary/30 to-primary/10"
                          : index === 1
                          ? "bg-gradient-to-br from-accent/30 to-accent/10"
                          : index === 2
                          ? "bg-gradient-to-br from-secondary/30 to-secondary/10"
                          : "bg-gradient-to-br from-destructive/30 to-destructive/10"
                      }`}>
                      <feature.icon
                        className={`size-6 ${
                          index === 0
                            ? "text-primary"
                            : index === 1
                            ? "text-accent-foreground"
                            : index === 2
                            ? "text-secondary"
                            : "text-destructive"
                        }`}
                      />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="gradient-blue-subtle px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border-2 bg-card shadow-2xl">
              <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
                <div className="flex flex-col justify-center space-y-6">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full gradient-blue px-4 py-2 shadow-lg">
                    <Sparkles className="size-4 text-white" />
                    <span className="font-semibold text-white text-sm">
                      {locale === "en" ? "NEW FEATURE" : "ฟีเจอร์ใหม่"}
                    </span>
                  </div>
                  <h2 className="text-balance font-bold text-3xl sm:text-4xl">
                    {locale === "en" ? "AI-Powered Quiz" : "แบบทดสอบด้วย AI"}
                  </h2>
                  <p className="text-balance text-muted-foreground text-lg leading-relaxed">
                    {locale === "en"
                      ? "Test your knowledge with dynamically generated questions powered by AI. Every quiz is unique!"
                      : "ทดสอบความรู้ของคุณด้วยคำถามที่สร้างแบบไดนามิกด้วย AI ทุกแบบทดสอบไม่ซ้ำกัน!"}
                  </p>
                  <ul className="space-y-3">
                    {[
                      locale === "en"
                        ? "Unique questions every time"
                        : "คำถามไม่ซ้ำทุกครั้ง",
                      locale === "en"
                        ? "Instant feedback & explanations"
                        : "ฟีดแบ็คและคำอธิบายทันที",
                      locale === "en"
                        ? "Unlock achievements"
                        : "ปลดล็อกความสำเร็จ",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-full gradient-blue-subtle">
                          <Trophy className="size-4 text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    className="w-fit gap-2 gradient-blue text-white border-0 shadow-lg hover:opacity-90">
                    <Link href="/quiz">
                      <Sparkles className="size-4" />
                      {locale === "en" ? "Try AI Quiz Now" : "ลองแบบทดสอบ AI"}
                    </Link>
                  </Button>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="relative size-64 lg:size-80">
                    <div className="absolute inset-0 animate-pulse rounded-full gradient-blue opacity-20 blur-3xl" />
                    <div className="relative flex size-full items-center justify-center rounded-full border-4 border-primary/30 gradient-blue-subtle">
                      <Sparkles className="size-24 animate-pulse text-primary lg:size-32" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-balance font-bold text-3xl sm:text-4xl">
              {t.home.cta.title}
            </h2>
            <p className="mb-8 text-balance text-muted-foreground text-lg leading-relaxed">
              {t.home.cta.description}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="gap-2 gradient-blue text-white border-0 shadow-lg hover:opacity-90">
                <Link href="/signs">
                  {t.common.getStarted}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 shadow-lg bg-transparent">
                <Link href="/laws">{t.common.learnMore}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
