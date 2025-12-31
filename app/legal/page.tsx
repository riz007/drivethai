"use client";

import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Scale, Database, FileText, ExternalLink } from "lucide-react";

export default function LegalPage() {
  const { locale } = useLanguage();
  const t = useTranslation(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-gradient-to-b from-background to-muted/30 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h1 className="mb-3 font-bold text-4xl">{t.common.legal}</h1>
              <p className="text-balance text-muted-foreground text-lg leading-relaxed">
                {locale === "en"
                  ? "Legal information, copyright notices, and compliance statements"
                  : "ข้อมูลทางกฎหมาย ประกาศลิขสิทธิ์ และข้อกำหนดการปฏิบัติตาม"}
              </p>
            </div>

            <div className="space-y-6">
              <Card id="copyright">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="size-5 text-primary" />
                    {t.legal.copyright}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t.legal.copyrightText}
                  </p>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="mb-2 font-semibold text-sm">
                      {locale === "en"
                        ? "Attribution & Sources"
                        : "แหล่งที่มาและการอ้างอิง"}
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>
                          {locale === "en"
                            ? "Thai Department of Land Transport (DLT) - Official road sign standards and regulations"
                            : "กรมการขนส่งทางบก (ขบ.) - มาตรฐานป้ายจราจรและกฎระเบียบอย่างเป็นทางการ"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>
                          {locale === "en"
                            ? "Vienna Convention on Road Signs and Signals - International traffic sign standards"
                            : "อนุสัญญากรุงเวียนนาว่าด้วยป้ายและสัญญาณจราจรทางถนน - มาตรฐานป้ายจราจรระหว่างประเทศ"}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>
                          {locale === "en"
                            ? "Thai Road Safety Act B.E. 2522 (1979) - Traffic laws and safety regulations"
                            : "พระราชบัญญัติความปลอดภัยทางถนน พ.ศ. 2522 - กฎหมายจราจรและกฎระเบียบความปลอดภัย"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card id="data-sources">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="size-5 text-primary" />
                    {t.legal.dataSource}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t.legal.dataSourceText}
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://www.dlt.go.th"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 p-4 transition-colors hover:border-primary/50">
                      <div className="flex-1">
                        <p className="font-semibold text-sm">
                          {locale === "en"
                            ? "Department of Land Transport"
                            : "กรมการขนส่งทางบก"}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          www.dlt.go.th
                        </p>
                      </div>
                      <ExternalLink className="size-4 text-muted-foreground" />
                    </a>
                    <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                      <p className="mb-2 font-semibold text-sm">
                        {locale === "en"
                          ? "API Endpoint Information"
                          : "ข้อมูล API Endpoint"}
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {locale === "en"
                          ? "This application is designed to fetch road sign data from external APIs. To connect your own data source, please contact us via email: rizwanulrudra@gmail.com"
                          : "แอปพลิเคชันนี้ออกแบบมาเพื่อดึงข้อมูลป้ายจราจรจาก API ภายนอก หากต้องการเชื่อมต่อแหล่งข้อมูลของคุณเอง ให้อัปเดตการตั้งค่า API endpoint ในแอปพลิเคชัน"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="terms">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="size-5 text-primary" />
                    {t.legal.terms}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="acceptance">
                      <AccordionTrigger>
                        {locale === "en"
                          ? "1. Acceptance of Terms"
                          : "1. การยอมรับข้อกำหนด"}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {locale === "en"
                            ? "By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to abide by these terms, please do not use this service."
                            : "การเข้าถึงและใช้เว็บไซต์นี้ คุณยอมรับและตกลงที่จะผูกพันตามข้อกำหนดและเงื่อนไขของข้อตกลงนี้ หากคุณไม่ตกลงที่จะปฏิบัติตามข้อกำหนดเหล่านี้ โปรดอย่าใช้บริการนี้"}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="educational">
                      <AccordionTrigger>
                        {locale === "en"
                          ? "2. Educational Purpose"
                          : "2. วัตถุประสงค์ทางการศึกษา"}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {locale === "en"
                            ? "This website is provided for educational and informational purposes only. While we strive for accuracy, the information should not be considered as legal advice or official guidance. Always refer to official Thai Department of Land Transport regulations for authoritative information."
                            : "เว็บไซต์นี้จัดทำขึ้นเพื่อวัตถุประสงค์ทางการศึกษาและให้ข้อมูลเท่านั้น แม้ว่าเราจะพยายามให้ข้อมูลที่ถูกต้อง แต่ข้อมูลนี้ไม่ควรถือเป็นคำแนะนำทางกฎหมายหรือคำแนะนำอย่างเป็นทางการ โปรดอ้างอิงกฎระเบียบของกรมการขนส่งทางบกไทยอย่างเป็นทางการเสมอสำหรับข้อมูลที่เชื่อถือได้"}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="liability">
                      <AccordionTrigger>
                        {locale === "en"
                          ? "3. Limitation of Liability"
                          : "3. ข้อจำกัดความรับผิด"}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {locale === "en"
                            ? "We make no warranties about the completeness, reliability, or accuracy of this information. Any action you take based on the information provided is strictly at your own risk. We will not be liable for any losses or damages in connection with the use of our website."
                            : "เราไม่รับประกันความสมบูรณ์ ความน่าเชื่อถือ หรือความถูกต้องของข้อมูลนี้ การกระทำใดๆ ที่คุณทำตามข้อมูลที่ให้ไว้จะอยู่ภายใต้ความเสี่ยงของคุณเองโดยเคร่งครัด เราจะไม่รับผิดชอบต่อการสูญเสียหรือความเสียหายใดๆ ที่เกี่ยวข้องกับการใช้เว็บไซต์ของเรา"}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="updates">
                      <AccordionTrigger>
                        {locale === "en"
                          ? "4. Content Updates"
                          : "4. การอัปเดตเนื้อหา"}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {locale === "en"
                            ? "Traffic laws and regulations may change over time. While we attempt to keep information current, we cannot guarantee that all content is up-to-date. Some AI generated contents have been used so we cannot verify that 100%. Users are responsible for verifying current regulations with official sources."
                            : "กฎหมายและกฎระเบียบจราจรอาจเปลี่ยนแปลงตามกาลเวลา แม้ว่าเราจะพยายามรักษาข้อมูลให้ทันสมัย แต่เราไม่สามารถรับประกันได้ว่าเนื้อหาทั้งหมดเป็นปัจจุบัน ผู้ใช้มีความรับผิดชอบในการตรวจสอบกฎระเบียบปัจจุบันกับแหล่งข้อมูลอย่างเป็นทางการ"}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card id="privacy">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="size-5 text-primary" />
                    {t.legal.privacy}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="data-collection">
                      <AccordionTrigger>
                        {locale === "en"
                          ? "Data Collection"
                          : "การเก็บรวบรวมข้อมูล"}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-3 text-muted-foreground text-sm leading-relaxed">
                          {locale === "en"
                            ? "This website collects minimal data to provide services:"
                            : "เว็บไซต์นี้เก็บรวบรวมข้อมูลเพียงเล็กน้อยเพื่อให้บริการ:"}
                        </p>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li className="flex items-start gap-2">
                            <span>•</span>
                            <span>
                              {locale === "en"
                                ? "Language preference stored locally in your browser"
                                : "การตั้งค่าภาษาที่เก็บไว้ในเบราว์เซอร์ของคุณในเครื่อง"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>•</span>
                            <span>
                              {locale === "en"
                                ? "Anonymous usage analytics to improve the service"
                                : "การวิเคราะห์การใช้งานแบบไม่ระบุตัวตนเพื่อปรับปรุงบริการ"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span>•</span>
                            <span>
                              {locale === "en"
                                ? "No personal information is collected or stored"
                                : "ไม่มีการเก็บรวบรวมหรือจัดเก็บข้อมูลส่วนบุคคล"}
                            </span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cookies">
                      <AccordionTrigger>
                        {locale === "en" ? "Cookies" : "คุกกี้"}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {locale === "en"
                            ? "This website uses local storage to save your language preference. No tracking cookies are used. Analytics cookies may be used to understand how visitors use the site, but these do not identify individual users."
                            : "เว็บไซต์นี้ใช้ local storage เพื่อบันทึกการตั้งค่าภาษาของคุณ ไม่ใช้คุกกี้ติดตาม อาจใช้คุกกี้การวิเคราะห์เพื่อทำความเข้าใจว่าผู้เยี่ยมชมใช้เว็บไซต์อย่างไร แต่สิ่งเหล่านี้ไม่ระบุตัวตนผู้ใช้แต่ละราย"}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="third-party">
                      <AccordionTrigger>
                        {locale === "en"
                          ? "Third-Party Services"
                          : "บริการของบุคคลที่สาม"}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {locale === "en"
                            ? "This website may use third-party services for analytics and content delivery. These services have their own privacy policies governing how they handle data. We recommend reviewing their policies."
                            : "เว็บไซต์นี้อาจใช้บริการของบุคคลที่สามสำหรับการวิเคราะห์และการส่งมอบเนื้อหา บริการเหล่านี้มีนโยบายความเป็นส่วนตัวของตนเองที่ควบคุมวิธีจัดการข้อมูล เราขอแนะนำให้ตรวจสอบนโยบายของพวกเขา"}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card id="gdpr">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="size-5 text-primary" />
                    {t.legal.gdpr}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t.legal.gdprText}
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                      <h4 className="mb-2 font-semibold text-sm">
                        {locale === "en"
                          ? "Your Rights Under GDPR"
                          : "สิทธิของคุณภายใต้ GDPR"}
                      </h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>
                            {locale === "en"
                              ? "Right to access your personal data"
                              : "สิทธิในการเข้าถึงข้อมูลส่วนบุคคลของคุณ"}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>
                            {locale === "en"
                              ? "Right to rectification of inaccurate data"
                              : "สิทธิในการแก้ไขข้อมูลที่ไม่ถูกต้อง"}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>
                            {locale === "en"
                              ? "Right to erasure (right to be forgotten)"
                              : "สิทธิในการลบข้อมูล (สิทธิที่จะถูกลืม)"}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>
                            {locale === "en"
                              ? "Right to data portability"
                              : "สิทธิในการโอนย้ายข้อมูล"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="thai-law">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="size-5 text-primary" />
                    {t.legal.thaiLaw}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t.legal.thaiLawText}
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-border/50 bg-muted/30 p-4">
                      <h4 className="mb-2 font-semibold text-sm">
                        {locale === "en"
                          ? "Applicable Thai Laws"
                          : "กฎหมายไทยที่ใช้บังคับ"}
                      </h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>
                            {locale === "en"
                              ? "Computer Crime Act B.E. 2550 (2007) - Governs computer-related offenses"
                              : "พระราชบัญญัติว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ พ.ศ. 2550 - ควบคุมความผิดที่เกี่ยวข้องกับคอมพิวเตอร์"}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>
                            {locale === "en"
                              ? "Personal Data Protection Act B.E. 2562 (2019) - Thailand's data protection law"
                              : "พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 - กฎหมายคุ้มครองข้อมูลของประเทศไทย"}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>
                            {locale === "en"
                              ? "Copyright Act B.E. 2537 (1994) - Protects intellectual property rights"
                              : "พระราชบัญญัติลิขสิทธิ์ พ.ศ. 2537 - คุ้มครองสิทธิในทรัพย์สินทางปัญญา"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {locale === "en" ? "Contact" : "ติดต่อ"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {locale === "en"
                      ? "For questions about these legal terms, data protection, or to exercise your rights, please contact us through email: rizwanulrudra@gmail.com"
                      : "หากมีคำถามเกี่ยวกับข้อกำหนดทางกฎหมาย การคุ้มครองข้อมูล หรือเพื่อใช้สิทธิของคุณ โปรดติดต่อเราผ่านช่องทางอย่างเป็นทางการที่ให้ไว้บนเว็บไซต์นี้"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
