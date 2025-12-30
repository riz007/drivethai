"use client";
import { Trophy, Zap, Target, Star, Award, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  id: string;
  icon: typeof Trophy;
  title: string;
  description: string;
  unlocked: boolean;
  color: string;
}

interface AchievementBadgeProps {
  locale: "en" | "th";
  score: number;
  totalQuestions: number;
}

export function AchievementBadge({
  locale,
  score,
  totalQuestions,
}: AchievementBadgeProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const achievements: Achievement[] = [
    {
      id: "perfect",
      icon: Trophy,
      title: locale === "en" ? "Perfect Score!" : "คะแนนเต็ม!",
      description: locale === "en" ? "100% Correct" : "ถูกต้อง 100%",
      unlocked: percentage === 100,
      color: "from-amber-500 to-yellow-500",
    },
    {
      id: "expert",
      icon: Star,
      title: locale === "en" ? "Expert Driver" : "ผู้เชี่ยวชาญ",
      description: locale === "en" ? "90% or higher" : "90% ขึ้นไป",
      unlocked: percentage >= 90,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "skilled",
      icon: Medal,
      title: locale === "en" ? "Skilled" : "มีทักษะ",
      description: locale === "en" ? "70% or higher" : "70% ขึ้นไป",
      unlocked: percentage >= 70,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "learner",
      icon: Target,
      title: locale === "en" ? "Fast Learner" : "เรียนรู้เร็ว",
      description: locale === "en" ? "50% or higher" : "50% ขึ้นไป",
      unlocked: percentage >= 50,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const unlockedAchievements = achievements.filter((a) => a.unlocked);

  if (unlockedAchievements.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Award className="size-5 text-primary" />
        <h3 className="font-semibold text-lg">
          {locale === "en" ? "Achievements Unlocked!" : "ปลดล็อกความสำเร็จ!"}
        </h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {unlockedAchievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <Card
              key={achievement.id}
              className="animate-in fade-in zoom-in-95 border-2 duration-500 slide-in-from-bottom-4">
              <CardContent className="flex items-center gap-3 p-4">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${achievement.color} shadow-lg`}>
                  <Icon className="size-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm leading-tight">
                    {achievement.title}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {achievement.description}
                  </p>
                </div>
                <Zap className="size-5 text-amber-500" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
