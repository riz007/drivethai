"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { roadSigns } from "@/lib/road-signs-data";
import Image from "next/image";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Target,
  Award,
  Sparkles,
  Clock,
  AlertCircle,
} from "lucide-react";
import { AchievementBadge } from "@/components/achievement-badge";

interface QuizOption {
  id: string;
  textEn: string;
  textTh: string;
}

interface QuizQuestion {
  questionEn: string;
  questionTh: string;
  signId: string;
  options: QuizOption[];
  correctAnswerId: string;
  explanationEn: string;
  explanationTh: string;
}

export default function QuizPage() {
  const { locale } = useLanguage();
  const t = useTranslation(locale);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rateLimit, setRateLimit] = useState<{
    remaining: number;
    resetTime: number;
  } | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress =
    questions.length > 0
      ? ((currentQuestionIndex + 1) / questions.length) * 100
      : 0;

  const startAIQuiz = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const signData = roadSigns.slice(0, 15).map((sign) => ({
        id: sign.id,
        nameEn: sign.nameEn,
        nameTh: sign.nameTh,
        descriptionEn: sign.descriptionEn,
        descriptionTh: sign.descriptionTh,
        category: sign.category,
      }));

      const response = await fetch("/api/ai-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          signData,
          language: locale,
          questionCount: 10,
        }),
      });

      const remaining = response.headers.get("X-RateLimit-Remaining");
      const resetTime = response.headers.get("X-RateLimit-Reset");

      if (remaining && resetTime) {
        setRateLimit({
          remaining: Number.parseInt(remaining),
          resetTime: Number.parseInt(resetTime),
        });
      }

      if (!response.ok) {
        const errorData = await response.json();

        if (response.status === 429) {
          const resetDate = new Date(Number.parseInt(resetTime || "0"));
          throw new Error(
            locale === "en"
              ? `Rate limit exceeded. Please try again after ${resetDate.toLocaleTimeString()}.`
              : `เกินขีดจำกัดการใช้งาน กรุณาลองอีกครั้งหลัง ${resetDate.toLocaleTimeString()}`
          );
        }

        throw new Error(errorData.error || "Failed to generate quiz");
      }

      const data = await response.json();

      if (!data.questions || !Array.isArray(data.questions)) {
        throw new Error("Invalid quiz data received");
      }

      setQuestions(data.questions);
      setQuizStarted(true);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setCorrectAnswers(0);
      setShowResults(false);
    } catch (err) {
      console.error("Error starting AI quiz:", err);
      setError(err instanceof Error ? err.message : "Failed to start quiz");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerSelect = (optionId: string) => {
    if (isAnswered) return;

    setSelectedAnswer(optionId);
    setIsAnswered(true);

    if (optionId === currentQuestion.correctAnswerId) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const calculateResult = () => {
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    return {
      percentage,
      correctAnswers,
      wrongAnswers: questions.length - correctAnswers,
      totalQuestions: questions.length,
    };
  };

  const result = showResults ? calculateResult() : null;

  const getResultMessage = () => {
    if (!result) return "";
    if (result.percentage >= 90) {
      return locale === "en"
        ? "Excellent! You're a road sign expert!"
        : "ยอดเยี่ยม! คุณคือผู้เชี่ยวชาญป้ายจราจร!";
    } else if (result.percentage >= 70) {
      return locale === "en"
        ? "Great job! You know your signs well!"
        : "ดีมาก! คุณรู้จักป้ายจราจรเป็นอย่างดี!";
    } else if (result.percentage >= 50) {
      return locale === "en"
        ? "Good effort! Keep practicing!"
        : "พยายามดีแล้ว! ฝึกฝนต่อไป!";
    } else {
      return locale === "en"
        ? "Keep learning! Practice makes perfect!"
        : "เรียนรู้ต่อไป! การฝึกฝนทำให้สมบูรณ์แบบ!";
    }
  };

  const getCurrentSign = () => {
    if (!currentQuestion) return null;
    return roadSigns.find((sign) => sign.id === currentQuestion.signId);
  };

  if (!quizStarted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 px-4 py-12">
            <Card className="w-full max-w-2xl border-2 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                  <Sparkles className="size-10 text-white" />
                </div>
                <CardTitle className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-4xl text-transparent">
                  {locale === "en" ? "AI-Powered Quiz" : "แบบทดสอบด้วย AI"}
                </CardTitle>
                <p className="text-balance text-muted-foreground text-lg leading-relaxed">
                  {locale === "en"
                    ? "Test your knowledge with AI-generated questions about Thai road signs"
                    : "ทดสอบความรู้ของคุณด้วยคำถามที่สร้างโดย AI เกี่ยวกับป้ายจราจรในไทย"}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {rateLimit && (
                  <Alert>
                    <Clock className="size-4" />
                    <AlertDescription>
                      {locale === "en"
                        ? `${rateLimit.remaining} AI quiz generations remaining this minute`
                        : `เหลือการสร้างแบบทดสอบ AI ${rateLimit.remaining} ครั้งในนาทีนี้`}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="grid gap-4 sm:grid-cols-3">
                  <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                      <Target className="size-8 text-primary" />
                      <p className="font-semibold text-2xl">10</p>
                      <p className="text-center text-muted-foreground text-xs">
                        {locale === "en" ? "Questions" : "คำถาม"}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/20 bg-gradient-to-br from-accent/10 to-accent/5">
                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                      <Sparkles className="size-8 text-accent" />
                      <p className="font-semibold text-center text-lg leading-tight">
                        {locale === "en" ? "AI Generated" : "สร้างโดย AI"}
                      </p>
                      <p className="text-center text-muted-foreground text-xs">
                        {locale === "en"
                          ? "Unique Every Time"
                          : "ไม่ซ้ำทุกครั้ง"}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-secondary/20 bg-gradient-to-br from-secondary/10 to-secondary/5">
                    <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                      <Award className="size-8 text-secondary" />
                      <p className="font-semibold text-2xl">
                        {locale === "en" ? "Learn" : "เรียนรู้"}
                      </p>
                      <p className="text-center text-muted-foreground text-xs">
                        {locale === "en" ? "Instant Feedback" : "ฟีดแบ็คทันที"}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <Button
                  onClick={startAIQuiz}
                  size="lg"
                  disabled={isLoading}
                  className="w-full gap-2 bg-gradient-to-r from-primary via-accent to-secondary text-lg hover:opacity-90">
                  {isLoading ? (
                    <>
                      <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      {locale === "en"
                        ? "Generating Quiz..."
                        : "กำลังสร้างแบบทดสอบ..."}
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-5" />
                      {locale === "en" ? "Start AI Quiz" : "เริ่มแบบทดสอบ AI"}
                    </>
                  )}
                </Button>
                <p className="text-center text-muted-foreground text-xs">
                  {locale === "en"
                    ? "Powered by AI • Rate limited to 15 requests per minute"
                    : "ขับเคลื่อนโดย AI • จำกัด 15 ครั้งต่อนาที"}
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (showResults && result) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <main className="flex-1">
          <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 px-4 py-12">
            <Card className="w-full max-w-2xl border-2 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-lg animate-in zoom-in-90 duration-500">
                  <Trophy className="size-12 text-white" />
                </div>
                <CardTitle className="text-4xl">{t.quiz.score}</CardTitle>
                <p className="text-balance text-muted-foreground text-xl leading-relaxed">
                  {getResultMessage()}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <AchievementBadge
                  locale={locale}
                  score={result.correctAnswers}
                  totalQuestions={result.totalQuestions}
                />

                <div className="space-y-4">
                  <div className="text-center">
                    <p className="mb-2 animate-in fade-in zoom-in-95 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text font-bold text-7xl text-transparent duration-700 slide-in-from-bottom-4">
                      {result.percentage}%
                    </p>
                    <p className="text-muted-foreground">
                      {result.correctAnswers}{" "}
                      {locale === "en" ? "out of" : "จาก"}{" "}
                      {result.totalQuestions}{" "}
                      {locale === "en" ? "correct" : "ถูกต้อง"}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="animate-in fade-in border-2 border-secondary/30 bg-gradient-to-br from-secondary/20 to-secondary/5 duration-500 slide-in-from-left-4">
                      <CardContent className="flex items-center justify-between p-6">
                        <div>
                          <p className="text-muted-foreground text-sm">
                            {locale === "en" ? "Correct" : "ถูกต้อง"}
                          </p>
                          <p className="font-bold text-3xl text-secondary">
                            {result.correctAnswers}
                          </p>
                        </div>
                        <CheckCircle2 className="size-10 text-secondary" />
                      </CardContent>
                    </Card>
                    <Card className="animate-in fade-in border-2 border-destructive/30 bg-gradient-to-br from-destructive/20 to-destructive/5 duration-500 slide-in-from-right-4">
                      <CardContent className="flex items-center justify-between p-6">
                        <div>
                          <p className="text-muted-foreground text-sm">
                            {locale === "en" ? "Wrong" : "ผิด"}
                          </p>
                          <p className="font-bold text-3xl text-destructive">
                            {result.wrongAnswers}
                          </p>
                        </div>
                        <XCircle className="size-10 text-destructive" />
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={startAIQuiz}
                    size="lg"
                    disabled={isLoading}
                    className="flex-1 gap-2">
                    {isLoading ? (
                      <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <RotateCcw className="size-4" />
                    )}
                    {locale === "en" ? "New AI Quiz" : "แบบทดสอบ AI ใหม่"}
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex-1 border-2 bg-transparent">
                    <a href="/signs">
                      {locale === "en" ? "Study Signs" : "ศึกษาป้าย"}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentSign = getCurrentSign();

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 px-4 py-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  <p className="font-semibold text-sm">
                    {locale === "en" ? "Question" : "คำถาม"}{" "}
                    {currentQuestionIndex + 1} / {questions.length}
                  </p>
                </div>
                <Badge variant="secondary" className="text-sm">
                  {Math.round(progress)}%
                </Badge>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            <Card className="mb-6 border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-balance text-xl leading-relaxed">
                  {locale === "en"
                    ? currentQuestion.questionEn
                    : currentQuestion.questionTh}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentSign && (
                  <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-xl border-2 border-border bg-white p-6 shadow-md">
                    <Image
                      src={currentSign.imageUrl || "/placeholder.svg"}
                      alt={
                        locale === "en"
                          ? currentSign.nameEn
                          : currentSign.nameTh
                      }
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                )}

                <div className="space-y-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedAnswer === option.id;
                    const isCorrect =
                      option.id === currentQuestion.correctAnswerId;
                    const showCorrect = isAnswered && isCorrect;
                    const showWrong = isAnswered && isSelected && !isCorrect;

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswerSelect(option.id)}
                        disabled={isAnswered}
                        className={`w-full rounded-xl border-2 p-5 text-left transition-all ${
                          showCorrect
                            ? "border-green-500 bg-green-500/10 shadow-md shadow-green-500/20"
                            : showWrong
                            ? "border-red-500 bg-red-500/10 shadow-md shadow-red-500/20"
                            : isSelected
                            ? "border-primary bg-primary/10 shadow-md shadow-primary/20"
                            : "border-border hover:border-primary/50 hover:shadow-md"
                        } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-medium leading-relaxed">
                            {locale === "en" ? option.textEn : option.textTh}
                          </span>
                          {showCorrect && (
                            <CheckCircle2 className="size-6 shrink-0 text-green-600 dark:text-green-400" />
                          )}
                          {showWrong && (
                            <XCircle className="size-6 shrink-0 text-red-600 dark:text-red-400" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className="rounded-xl border-2 border-border/50 bg-muted/50 p-5 shadow-inner">
                    <div className="mb-2 flex items-center gap-2">
                      {selectedAnswer === currentQuestion.correctAnswerId ? (
                        <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircle className="size-5 text-red-600 dark:text-red-400" />
                      )}
                      <p className="font-semibold">
                        {selectedAnswer === currentQuestion.correctAnswerId
                          ? t.quiz.correct
                          : t.quiz.incorrect}
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {locale === "en"
                        ? currentQuestion.explanationEn
                        : currentQuestion.explanationTh}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {isAnswered && (
              <Button
                onClick={handleNextQuestion}
                size="lg"
                className="w-full shadow-lg">
                {currentQuestionIndex < questions.length - 1
                  ? t.quiz.next
                  : t.quiz.submit}
              </Button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
