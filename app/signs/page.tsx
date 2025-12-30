"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/lib/i18n";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SignCard } from "@/components/sign-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  roadSigns,
  type SignCategory,
  type VehicleType,
} from "@/lib/road-signs-data";
import { Search } from "lucide-react";

export default function SignsPage() {
  const { locale } = useLanguage();
  const t = useTranslation(locale);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    SignCategory | "all"
  >("all");
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>("all");

  const categories: Array<SignCategory | "all"> = [
    "all",
    "warning",
    "prohibition",
    "mandatory",
    "information",
    "temporary",
  ];

  const vehicles: VehicleType[] = ["all", "motorcycle", "car", "truck"];

  const filteredSigns = useMemo(() => {
    let filtered = roadSigns;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((sign) => sign.category === selectedCategory);
    }

    if (selectedVehicle !== "all") {
      filtered = filtered.filter(
        (sign) =>
          sign.vehicles.includes(selectedVehicle) ||
          sign.vehicles.includes("all")
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((sign) => {
        if (locale === "en") {
          return (
            sign.nameEn.toLowerCase().includes(query) ||
            sign.descriptionEn.toLowerCase().includes(query)
          );
        }
        return (
          sign.nameTh.includes(searchQuery) ||
          sign.descriptionTh.includes(searchQuery)
        );
      });
    }

    return filtered;
  }, [selectedCategory, selectedVehicle, searchQuery, locale]);

  const getCategoryLabel = (category: SignCategory | "all") => {
    if (category === "all") return t.signs.filterAll;
    const labels = {
      warning: t.signs.filterWarning,
      prohibition: t.signs.filterProhibition,
      mandatory: t.signs.filterMandatory,
      information: t.signs.filterInformation,
      temporary: t.signs.filterTemporary,
    };
    return labels[category];
  };

  const getVehicleLabel = (vehicle: VehicleType) => {
    const labels = {
      all: t.signs.vehicles.all,
      motorcycle: t.signs.vehicles.motorcycle,
      car: t.signs.vehicles.car,
      truck: t.signs.vehicles.truck,
    };
    return labels[vehicle];
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="gradient-blue-subtle px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <h1 className="mb-3 font-bold text-4xl">{t.signs.title}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.signs.subtitle}
              </p>
            </div>

            <div className="mb-6 mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t.common.search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-12 pr-4 bg-white dark:bg-card border-2 shadow-sm"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-6">
              <h3 className="mb-3 font-semibold text-sm">
                {locale === "en" ? "Category" : "ประเภท"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "gradient-blue text-white border-0 shadow-lg"
                        : ""
                    }>
                    {getCategoryLabel(category)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Vehicle Filters */}
            <div className="mb-8">
              <h3 className="mb-3 font-semibold text-sm">
                {locale === "en" ? "Vehicle Type" : "ประเภทยานพาหนะ"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {vehicles.map((vehicle) => (
                  <Button
                    key={vehicle}
                    variant={
                      selectedVehicle === vehicle ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedVehicle(vehicle)}
                    className={
                      selectedVehicle === vehicle
                        ? "gradient-blue text-white border-0 shadow-lg"
                        : ""
                    }>
                    {getVehicleLabel(vehicle)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-muted-foreground text-sm">
                {locale === "en"
                  ? `Showing ${filteredSigns.length} of ${roadSigns.length} signs`
                  : `แสดง ${filteredSigns.length} จาก ${roadSigns.length} ป้าย`}
              </p>
            </div>

            {/* Signs Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredSigns.map((sign) => (
                <SignCard key={sign.id} sign={sign} />
              ))}
            </div>

            {filteredSigns.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  {locale === "en"
                    ? "No signs found matching your search."
                    : "ไม่พบป้ายที่ตรงกับการค้นหาของคุณ"}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
