import fs from "fs";

// Import the scrap data
const scrapDataRaw = fs.readFileSync("road-signs-scrap.ts", "utf8");
const scrapMatch = scrapDataRaw.match(
  /export const roadSigns = \[([\s\S]*)\];/
);

if (!scrapMatch) {
  console.error("Could not parse road-signs-scrap.ts");
  process.exit(1);
}

// Parse each sign object
const roadsignStr = `[${scrapMatch[1]}]`;
const roadSigns = eval("(" + roadsignStr + ")");

function mapCategory(scrapCategory) {
  if (scrapCategory.includes("Warning")) return "warning";
  if (scrapCategory.includes("Temporary")) return "temporary";
  if (scrapCategory.includes("Informational")) return "information";
  if (
    scrapCategory.includes("Prohibitory") ||
    scrapCategory.includes("Priority") ||
    scrapCategory.includes("Speed limit") ||
    scrapCategory.includes("Width") ||
    scrapCategory.includes("Height") ||
    scrapCategory.includes("Weight")
  ) {
    return "prohibition";
  }
  if (scrapCategory.includes("Mandatory")) return "mandatory";
  return "information";
}

function inferVehicles(name, category) {
  const lower = name.toLowerCase();

  if (lower.includes("motorcycle") || lower.includes("moto-rickshaw")) {
    return ["motorcycle"];
  }
  if (lower.includes("truck") || lower.includes("tractor")) {
    return ["truck"];
  }
  if (lower.includes("bus") || lower.includes("hov")) {
    return ["all"];
  }

  return ["all"];
}

function generateId(category, name, index) {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 30);

  return `${category}-${index}`;
}

const converted = roadSigns.map((sign, idx) => {
  const category = mapCategory(sign.category);
  const vehicles = inferVehicles(sign.name, category);

  return {
    id: generateId(category, sign.name, idx),
    category,
    vehicles,
    nameEn: sign.name,
    nameTh: sign.name,
    descriptionEn: sign.description,
    descriptionTh: sign.description,
    imageUrl: sign.imageUrl,
  };
});

const output = `export type SignCategory =
  | "warning"
  | "prohibition"
  | "mandatory"
  | "information"
  | "temporary";
export type VehicleType = "all" | "motorcycle" | "car" | "truck";

export interface RoadSign {
  id: string;
  category: SignCategory;
  vehicles: VehicleType[];
  nameEn: string;
  nameTh: string;
  descriptionEn: string;
  descriptionTh: string;
  imageUrl: string;
  regulationEn?: string;
  regulationTh?: string;
}

// Road signs database - Converted from Wikipedia Road signs in Thailand article
// Total: ${converted.length} signs across all categories
export const roadSigns: RoadSign[] = ${JSON.stringify(converted, null, 2)};

export const DATA_ATTRIBUTION = {
  source: "Wikipedia / Wikimedia Commons",
  license: "CC BY-SA 4.0 / Public Domain",
  url: "https://en.wikipedia.org/wiki/Road_signs_in_Thailand",
  wikimediaUrl: "https://commons.wikimedia.org",
};

export function getSignsByCategory(category: SignCategory | "all"): RoadSign[] {
  if (category === "all") return roadSigns;
  return roadSigns.filter((sign) => sign.category === category);
}

export function getSignsByVehicle(vehicle: VehicleType): RoadSign[] {
  if (vehicle === "all") return roadSigns;
  return roadSigns.filter(
    (sign) => sign.vehicles.includes(vehicle) || sign.vehicles.includes("all")
  );
}

export function searchSigns(query: string, locale: "en" | "th"): RoadSign[] {
  const lowerQuery = query.toLowerCase();
  return roadSigns.filter((sign) => {
    if (locale === "en") {
      return (
        sign.nameEn.toLowerCase().includes(lowerQuery) ||
        sign.descriptionEn.toLowerCase().includes(lowerQuery)
      );
    }
    return sign.nameTh.includes(query) || sign.descriptionTh.includes(query);
  });
}
`;

fs.writeFileSync("road-signs-data.ts", output);
console.log(`✓ Converted ${converted.length} signs to lib/road-signs-data.ts`);
