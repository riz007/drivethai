"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { RoadSign } from "@/lib/road-signs-data";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import {
  AlertTriangle,
  Ban,
  Info,
  Navigation2,
  Construction,
} from "lucide-react";

interface SignCardProps {
  sign: RoadSign;
}

export function SignCard({ sign }: SignCardProps) {
  const { locale } = useLanguage();
  const name = locale === "en" ? sign.nameEn : sign.nameTh;
  const description = locale === "en" ? sign.descriptionEn : sign.descriptionTh;
  const regulation = locale === "en" ? sign.regulationEn : sign.regulationTh;

  const getCategoryIcon = () => {
    switch (sign.category) {
      case "warning":
        return <AlertTriangle className="size-4" />;
      case "prohibition":
        return <Ban className="size-4" />;
      case "mandatory":
        return <Navigation2 className="size-4" />;
      case "information":
        return <Info className="size-4" />;
      case "temporary":
        return <Construction className="size-4" />;
    }
  };

  const getCategoryColor = () => {
    switch (sign.category) {
      case "warning":
        return "bg-amber-500/10 text-amber-700 dark:text-amber-400";
      case "prohibition":
        return "bg-red-500/10 text-red-700 dark:text-red-400";
      case "mandatory":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "information":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "temporary":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-400";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge
                variant="secondary"
                className={`gap-1 ${getCategoryColor()}`}>
                {getCategoryIcon()}
                <span className="capitalize">{sign.category}</span>
              </Badge>
              {sign.vehicles.length > 0 && !sign.vehicles.includes("all") && (
                <span className="text-muted-foreground text-xs">
                  {sign.vehicles.join(", ")}
                </span>
              )}
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={sign.imageUrl || "/placeholder.svg"}
                alt={name}
                fill
                className="object-contain p-4 transition-transform group-hover:scale-110"
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-2 line-clamp-2 text-lg">{name}</CardTitle>
            <CardDescription className="line-clamp-2 text-sm leading-relaxed">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="mb-4 flex items-center gap-2">
            <Badge
              variant="secondary"
              className={`gap-1 ${getCategoryColor()}`}>
              {getCategoryIcon()}
              <span className="capitalize">{sign.category}</span>
            </Badge>
            {sign.vehicles.length > 0 && !sign.vehicles.includes("all") && (
              <Badge variant="outline">{sign.vehicles.join(", ")}</Badge>
            )}
          </div>
          <DialogTitle className="text-2xl">{name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg bg-muted">
            <Image
              src={sign.imageUrl || "/placeholder.svg"}
              alt={name}
              fill
              className="object-contain p-8"
            />
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              {locale === "en" ? "Description" : "คำอธิบาย"}
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          {regulation && (
            <div>
              <h4 className="mb-2 font-semibold">
                {locale === "en" ? "Regulation" : "กฎระเบียบ"}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {regulation}
              </p>
            </div>
          )}
          {locale === "en" && (
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-semibold text-sm">Thai Name:</p>
              <p className="text-muted-foreground">{sign.nameTh}</p>
            </div>
          )}
          {locale === "th" && (
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-semibold text-sm">English Name:</p>
              <p className="text-muted-foreground">{sign.nameEn}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
