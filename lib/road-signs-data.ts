export type SignCategory =
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
// Total: 473 signs across all categories
export const roadSigns: RoadSign[] = [
  {
    id: "prohibition-0",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Stop (Thai language)",
    nameTh: "Stop (Thai language)",
    descriptionEn: "Stop (Thai language)",
    descriptionTh: "Stop (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Thailand_road_sign_%E0%B8%9A-1.svg/250px-Thailand_road_sign_%E0%B8%9A-1.svg.png",
  },
  {
    id: "prohibition-1",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Stop (Thai and English language)",
    nameTh: "Stop (Thai and English language)",
    descriptionEn: "Stop (Thai and English language)",
    descriptionTh: "Stop (Thai and English language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Thailand_road_sign_%E0%B8%9A-1-1.svg/250px-Thailand_road_sign_%E0%B8%9A-1-1.svg.png",
  },
  {
    id: "prohibition-2",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Give way (Thai language)",
    nameTh: "Give way (Thai language)",
    descriptionEn: "Give way (Thai language)",
    descriptionTh: "Give way (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Thailand_road_sign_%E0%B8%9A-2.svg/250px-Thailand_road_sign_%E0%B8%9A-2.svg.png",
  },
  {
    id: "prohibition-3",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Give way (Thai and English languages)",
    nameTh: "Give way (Thai and English languages)",
    descriptionEn: "Give way (Thai and English languages)",
    descriptionTh: "Give way (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Thailand_road_sign_%E0%B8%9A-2-1.svg/250px-Thailand_road_sign_%E0%B8%9A-2-1.svg.png",
  },
  {
    id: "prohibition-4",
    category: "prohibition",
    vehicles: ["all"],
    nameEn:
      "Give way to oncoming vehicles (used at traffic\n                        bottleneck points)",
    nameTh:
      "Give way to oncoming vehicles (used at traffic\n                        bottleneck points)",
    descriptionEn:
      "Give way to oncoming vehicles (used at traffic\n                        bottleneck points)",
    descriptionTh:
      "Give way to oncoming vehicles (used at traffic\n                        bottleneck points)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Thailand_road_sign_%E0%B8%9A-3.svg/250px-Thailand_road_sign_%E0%B8%9A-3.svg.png",
  },
  {
    id: "prohibition-5",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No overtaking",
    nameTh: "No overtaking",
    descriptionEn: "No overtaking",
    descriptionTh: "No overtaking",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Thailand_road_sign_%E0%B8%9A-4.svg/250px-Thailand_road_sign_%E0%B8%9A-4.svg.png",
  },
  {
    id: "prohibition-6",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No entry",
    nameTh: "No entry",
    descriptionEn: "No entry",
    descriptionTh: "No entry",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Thailand_road_sign_%E0%B8%9A-5.svg/250px-Thailand_road_sign_%E0%B8%9A-5.svg.png",
  },
  {
    id: "prohibition-7",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No right U-turn",
    nameTh: "No right U-turn",
    descriptionEn: "No right U-turn",
    descriptionTh: "No right U-turn",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Thailand_road_sign_%E0%B8%9A-6.svg/250px-Thailand_road_sign_%E0%B8%9A-6.svg.png",
  },
  {
    id: "prohibition-8",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No left U-turn, Unused",
    nameTh: "No left U-turn, Unused",
    descriptionEn: "No left U-turn, Unused",
    descriptionTh: "No left U-turn, Unused",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Thailand_road_sign_%E0%B8%9A-7.svg/250px-Thailand_road_sign_%E0%B8%9A-7.svg.png",
  },
  {
    id: "prohibition-9",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No left turn",
    nameTh: "No left turn",
    descriptionEn: "No left turn",
    descriptionTh: "No left turn",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Thailand_road_sign_%E0%B8%9A-8.svg/250px-Thailand_road_sign_%E0%B8%9A-8.svg.png",
  },
  {
    id: "prohibition-10",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No right turn",
    nameTh: "No right turn",
    descriptionEn: "No right turn",
    descriptionTh: "No right turn",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Thailand_road_sign_%E0%B8%9A-9.svg/250px-Thailand_road_sign_%E0%B8%9A-9.svg.png",
  },
  {
    id: "prohibition-11",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No changing to left lane",
    nameTh: "No changing to left lane",
    descriptionEn: "No changing to left lane",
    descriptionTh: "No changing to left lane",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Thailand_road_sign_%E0%B8%9A-10.svg/250px-Thailand_road_sign_%E0%B8%9A-10.svg.png",
  },
  {
    id: "prohibition-12",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No changing to right lane",
    nameTh: "No changing to right lane",
    descriptionEn: "No changing to right lane",
    descriptionTh: "No changing to right lane",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Thailand_road_sign_%E0%B8%9A-11.svg/250px-Thailand_road_sign_%E0%B8%9A-11.svg.png",
  },
  {
    id: "prohibition-13",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No right turn nor right U-turn",
    nameTh: "No right turn nor right U-turn",
    descriptionEn: "No right turn nor right U-turn",
    descriptionTh: "No right turn nor right U-turn",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Thailand_road_sign_%E0%B8%9A-12.svg/250px-Thailand_road_sign_%E0%B8%9A-12.svg.png",
  },
  {
    id: "prohibition-14",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No Left Turn nor U-turn, Unused",
    nameTh: "No Left Turn nor U-turn, Unused",
    descriptionEn: "No Left Turn nor U-turn, Unused",
    descriptionTh: "No Left Turn nor U-turn, Unused",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Thailand_road_sign_%E0%B8%9A-13.svg/250px-Thailand_road_sign_%E0%B8%9A-13.svg.png",
  },
  {
    id: "prohibition-15",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No cars",
    nameTh: "No cars",
    descriptionEn: "No cars",
    descriptionTh: "No cars",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Thailand_road_sign_%E0%B8%9A-14.svg/250px-Thailand_road_sign_%E0%B8%9A-14.svg.png",
  },
  {
    id: "prohibition-16",
    category: "prohibition",
    vehicles: ["truck"],
    nameEn: "No trucks",
    nameTh: "No trucks",
    descriptionEn: "No trucks",
    descriptionTh: "No trucks",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Thailand_road_sign_%E0%B8%9A-15.svg/250px-Thailand_road_sign_%E0%B8%9A-15.svg.png",
  },
  {
    id: "prohibition-17",
    category: "prohibition",
    vehicles: ["motorcycle"],
    nameEn: "No motorcycles",
    nameTh: "No motorcycles",
    descriptionEn: "No motorcycles",
    descriptionTh: "No motorcycles",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Thailand_road_sign_%E0%B8%9A-16.svg/250px-Thailand_road_sign_%E0%B8%9A-16.svg.png",
  },
  {
    id: "prohibition-18",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No trailers",
    nameTh: "No trailers",
    descriptionEn: "No trailers",
    descriptionTh: "No trailers",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Thailand_road_sign_%E0%B8%9A-17.svg/250px-Thailand_road_sign_%E0%B8%9A-17.svg.png",
  },
  {
    id: "prohibition-19",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No tuk-tuks",
    nameTh: "No tuk-tuks",
    descriptionEn: "No tuk-tuks",
    descriptionTh: "No tuk-tuks",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Thailand_road_sign_%E0%B8%9A-18.svg/250px-Thailand_road_sign_%E0%B8%9A-18.svg.png",
  },
  {
    id: "prohibition-20",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No tricycle",
    nameTh: "No tricycle",
    descriptionEn: "No tricycle",
    descriptionTh: "No tricycle",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thailand_road_sign_%E0%B8%9A-19.svg/250px-Thailand_road_sign_%E0%B8%9A-19.svg.png",
  },
  {
    id: "prohibition-21",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No bicycles",
    nameTh: "No bicycles",
    descriptionEn: "No bicycles",
    descriptionTh: "No bicycles",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Thailand_road_sign_%E0%B8%9A-20.svg/250px-Thailand_road_sign_%E0%B8%9A-20.svg.png",
  },
  {
    id: "prohibition-22",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No carts",
    nameTh: "No carts",
    descriptionEn: "No carts",
    descriptionTh: "No carts",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Thailand_road_sign_%E0%B8%9A-21.svg/250px-Thailand_road_sign_%E0%B8%9A-21.svg.png",
  },
  {
    id: "prohibition-23",
    category: "prohibition",
    vehicles: ["truck"],
    nameEn: "No tractors",
    nameTh: "No tractors",
    descriptionEn: "No tractors",
    descriptionTh: "No tractors",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Thailand_road_sign_%E0%B8%9A-22.svg/250px-Thailand_road_sign_%E0%B8%9A-22.svg.png",
  },
  {
    id: "prohibition-24",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No animal-drawn carts",
    nameTh: "No animal-drawn carts",
    descriptionEn: "No animal-drawn carts",
    descriptionTh: "No animal-drawn carts",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Thailand_road_sign_%E0%B8%9A-23.svg/250px-Thailand_road_sign_%E0%B8%9A-23.svg.png",
  },
  {
    id: "prohibition-25",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No motor vehicles",
    nameTh: "No motor vehicles",
    descriptionEn: "No motor vehicles",
    descriptionTh: "No motor vehicles",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Thailand_road_sign_%E0%B8%9A-24.svg/250px-Thailand_road_sign_%E0%B8%9A-24.svg.png",
  },
  {
    id: "prohibition-26",
    category: "prohibition",
    vehicles: ["motorcycle"],
    nameEn: "No tricycle or bicycles and motorcycles.",
    nameTh: "No tricycle or bicycles and motorcycles.",
    descriptionEn: "No tricycle or bicycles and motorcycles.",
    descriptionTh: "No tricycle or bicycles and motorcycles.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Thailand_road_sign_%E0%B8%9A-25.svg/250px-Thailand_road_sign_%E0%B8%9A-25.svg.png",
  },
  {
    id: "prohibition-27",
    category: "prohibition",
    vehicles: ["motorcycle"],
    nameEn: "No motorcycles or moto-rickshaws",
    nameTh: "No motorcycles or moto-rickshaws",
    descriptionEn: "No motorcycles or moto-rickshaws",
    descriptionTh: "No motorcycles or moto-rickshaws",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Thailand_road_sign_%E0%B8%9A-26.svg/250px-Thailand_road_sign_%E0%B8%9A-26.svg.png",
  },
  {
    id: "prohibition-28",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No honking",
    nameTh: "No honking",
    descriptionEn: "No honking",
    descriptionTh: "No honking",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Thailand_road_sign_%E0%B8%9A-27.svg/250px-Thailand_road_sign_%E0%B8%9A-27.svg.png",
  },
  {
    id: "prohibition-29",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No pedestrians",
    nameTh: "No pedestrians",
    descriptionEn: "No pedestrians",
    descriptionTh: "No pedestrians",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Thailand_road_sign_%E0%B8%9A-28.svg/250px-Thailand_road_sign_%E0%B8%9A-28.svg.png",
  },
  {
    id: "prohibition-30",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No parking",
    nameTh: "No parking",
    descriptionEn: "No parking",
    descriptionTh: "No parking",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Thailand_road_sign_%E0%B8%9A-29.svg/250px-Thailand_road_sign_%E0%B8%9A-29.svg.png",
  },
  {
    id: "prohibition-31",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "No stopping",
    nameTh: "No stopping",
    descriptionEn: "No stopping",
    descriptionTh: "No stopping",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Thailand_road_sign_%E0%B8%9A-30.svg/250px-Thailand_road_sign_%E0%B8%9A-30.svg.png",
  },
  {
    id: "prohibition-32",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Stop at checkpoint (e.g.: customs, police)",
    nameTh: "Stop at checkpoint (e.g.: customs, police)",
    descriptionEn: "Stop at checkpoint (e.g.: customs, police)",
    descriptionTh: "Stop at checkpoint (e.g.: customs, police)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Thailand_road_sign_%E0%B8%9A-31.svg/250px-Thailand_road_sign_%E0%B8%9A-31.svg.png",
  },
  {
    id: "prohibition-33",
    category: "prohibition",
    vehicles: ["all"],
    nameEn:
      "Stop at checkpoint (e.g.: customs, police) (Thai and\n                        English languages)",
    nameTh:
      "Stop at checkpoint (e.g.: customs, police) (Thai and\n                        English languages)",
    descriptionEn:
      "Stop at checkpoint (e.g.: customs, police) (Thai and\n                        English languages)",
    descriptionTh:
      "Stop at checkpoint (e.g.: customs, police) (Thai and\n                        English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Thailand_road_sign_%E0%B8%9A-31-1.svg/250px-Thailand_road_sign_%E0%B8%9A-31-1.svg.png",
  },
  {
    id: "prohibition-34",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (10 km/h)",
    nameTh: "Speed limit (10 km/h)",
    descriptionEn: "Speed limit (10 km/h)",
    descriptionTh: "Speed limit (10 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Thailand_road_sign_%E0%B8%9A-32-10.svg/250px-Thailand_road_sign_%E0%B8%9A-32-10.svg.png",
  },
  {
    id: "prohibition-35",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (20 km/h)",
    nameTh: "Speed limit (20 km/h)",
    descriptionEn: "Speed limit (20 km/h)",
    descriptionTh: "Speed limit (20 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Thailand_road_sign_%E0%B8%9A-32-20.svg/250px-Thailand_road_sign_%E0%B8%9A-32-20.svg.png",
  },
  {
    id: "prohibition-36",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (30 km/h)",
    nameTh: "Speed limit (30 km/h)",
    descriptionEn: "Speed limit (30 km/h)",
    descriptionTh: "Speed limit (30 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Thailand_road_sign_%E0%B8%9A-32-30.svg/250px-Thailand_road_sign_%E0%B8%9A-32-30.svg.png",
  },
  {
    id: "prohibition-37",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (40 km/h)",
    nameTh: "Speed limit (40 km/h)",
    descriptionEn: "Speed limit (40 km/h)",
    descriptionTh: "Speed limit (40 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Thailand_road_sign_%E0%B8%9A-32-40.svg/250px-Thailand_road_sign_%E0%B8%9A-32-40.svg.png",
  },
  {
    id: "prohibition-38",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (50 km/h)",
    nameTh: "Speed limit (50 km/h)",
    descriptionEn: "Speed limit (50 km/h)",
    descriptionTh: "Speed limit (50 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Thailand_road_sign_%E0%B8%9A-32-50.svg/250px-Thailand_road_sign_%E0%B8%9A-32-50.svg.png",
  },
  {
    id: "prohibition-39",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (60 km/h)",
    nameTh: "Speed limit (60 km/h)",
    descriptionEn: "Speed limit (60 km/h)",
    descriptionTh: "Speed limit (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Thailand_road_sign_%E0%B8%9A-32-60.svg/250px-Thailand_road_sign_%E0%B8%9A-32-60.svg.png",
  },
  {
    id: "prohibition-40",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (70 km/h)",
    nameTh: "Speed limit (70 km/h)",
    descriptionEn: "Speed limit (70 km/h)",
    descriptionTh: "Speed limit (70 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Thailand_road_sign_%E0%B8%9A-32-70.svg/250px-Thailand_road_sign_%E0%B8%9A-32-70.svg.png",
  },
  {
    id: "prohibition-41",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (80 km/h)",
    nameTh: "Speed limit (80 km/h)",
    descriptionEn: "Speed limit (80 km/h)",
    descriptionTh: "Speed limit (80 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Thailand_road_sign_%E0%B8%9A-32-80.svg/250px-Thailand_road_sign_%E0%B8%9A-32-80.svg.png",
  },
  {
    id: "prohibition-42",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (90 km/h)",
    nameTh: "Speed limit (90 km/h)",
    descriptionEn: "Speed limit (90 km/h)",
    descriptionTh: "Speed limit (90 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Thailand_road_sign_%E0%B8%9A-32-90.svg/250px-Thailand_road_sign_%E0%B8%9A-32-90.svg.png",
  },
  {
    id: "prohibition-43",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (100 km/h)",
    nameTh: "Speed limit (100 km/h)",
    descriptionEn: "Speed limit (100 km/h)",
    descriptionTh: "Speed limit (100 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Thailand_road_sign_%E0%B8%9A-32-100.svg/250px-Thailand_road_sign_%E0%B8%9A-32-100.svg.png",
  },
  {
    id: "prohibition-44",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (110 km/h)",
    nameTh: "Speed limit (110 km/h)",
    descriptionEn: "Speed limit (110 km/h)",
    descriptionTh: "Speed limit (110 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Thailand_road_sign_%E0%B8%9A-32-110.svg/250px-Thailand_road_sign_%E0%B8%9A-32-110.svg.png",
  },
  {
    id: "prohibition-45",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Speed limit (120 km/h)",
    nameTh: "Speed limit (120 km/h)",
    descriptionEn: "Speed limit (120 km/h)",
    descriptionTh: "Speed limit (120 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Thailand_road_sign_%E0%B8%9A-32-120.svg/250px-Thailand_road_sign_%E0%B8%9A-32-120.svg.png",
  },
  {
    id: "prohibition-46",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Weight limit",
    nameTh: "Weight limit",
    descriptionEn: "Weight limit",
    descriptionTh: "Weight limit",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Thailand_road_sign_%E0%B8%9A-33.svg/250px-Thailand_road_sign_%E0%B8%9A-33.svg.png",
  },
  {
    id: "prohibition-47",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Weight limit (Thai and English languages)",
    nameTh: "Weight limit (Thai and English languages)",
    descriptionEn: "Weight limit (Thai and English languages)",
    descriptionTh: "Weight limit (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Thailand_road_sign_%E0%B8%9A-33-1.svg/250px-Thailand_road_sign_%E0%B8%9A-33-1.svg.png",
  },
  {
    id: "prohibition-48",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Maximum width",
    nameTh: "Maximum width",
    descriptionEn: "Maximum width",
    descriptionTh: "Maximum width",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Thailand_road_sign_%E0%B8%9A-34.svg/250px-Thailand_road_sign_%E0%B8%9A-34.svg.png",
  },
  {
    id: "prohibition-49",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Maximum width (Thai and English languages)",
    nameTh: "Maximum width (Thai and English languages)",
    descriptionEn: "Maximum width (Thai and English languages)",
    descriptionTh: "Maximum width (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Thailand_road_sign_%E0%B8%9A-34-1.svg/250px-Thailand_road_sign_%E0%B8%9A-34-1.svg.png",
  },
  {
    id: "prohibition-50",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Maximum height",
    nameTh: "Maximum height",
    descriptionEn: "Maximum height",
    descriptionTh: "Maximum height",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Thailand_road_sign_%E0%B8%9A-35.svg/250px-Thailand_road_sign_%E0%B8%9A-35.svg.png",
  },
  {
    id: "prohibition-51",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Maximum height (Thai and English languages)",
    nameTh: "Maximum height (Thai and English languages)",
    descriptionEn: "Maximum height (Thai and English languages)",
    descriptionTh: "Maximum height (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Thailand_road_sign_%E0%B8%9A-35-1.svg/250px-Thailand_road_sign_%E0%B8%9A-35-1.svg.png",
  },
  {
    id: "prohibition-52",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Maximum vehicle length (Thai language)",
    nameTh: "Maximum vehicle length (Thai language)",
    descriptionEn: "Maximum vehicle length (Thai language)",
    descriptionTh: "Maximum vehicle length (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Thailand_road_sign_%E0%B8%9A-36.svg/250px-Thailand_road_sign_%E0%B8%9A-36.svg.png",
  },
  {
    id: "prohibition-53",
    category: "prohibition",
    vehicles: ["all"],
    nameEn: "Maximum vehicle length (Thai and English languages)",
    nameTh: "Maximum vehicle length (Thai and English languages)",
    descriptionEn: "Maximum vehicle length (Thai and English languages)",
    descriptionTh: "Maximum vehicle length (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Thailand_road_sign_%E0%B8%9A-36-1.svg/250px-Thailand_road_sign_%E0%B8%9A-36-1.svg.png",
  },
  {
    id: "mandatory-54",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Go straight",
    nameTh: "Go straight",
    descriptionEn: "Go straight",
    descriptionTh: "Go straight",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Thailand_road_sign_%E0%B8%9A-37.svg/250px-Thailand_road_sign_%E0%B8%9A-37.svg.png",
  },
  {
    id: "mandatory-55",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Turn left",
    nameTh: "Turn left",
    descriptionEn: "Turn left",
    descriptionTh: "Turn left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Thailand_road_sign_%E0%B8%9A-38.svg/250px-Thailand_road_sign_%E0%B8%9A-38.svg.png",
  },
  {
    id: "mandatory-56",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Turn right",
    nameTh: "Turn right",
    descriptionEn: "Turn right",
    descriptionTh: "Turn right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Thailand_road_sign_%E0%B8%9A-39.svg/250px-Thailand_road_sign_%E0%B8%9A-39.svg.png",
  },
  {
    id: "mandatory-57",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Keep left",
    nameTh: "Keep left",
    descriptionEn: "Keep left",
    descriptionTh: "Keep left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Thailand_road_sign_%E0%B8%9A-40.svg/250px-Thailand_road_sign_%E0%B8%9A-40.svg.png",
  },
  {
    id: "mandatory-58",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Keep right",
    nameTh: "Keep right",
    descriptionEn: "Keep right",
    descriptionTh: "Keep right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Thailand_road_sign_%E0%B8%9A-41.svg/250px-Thailand_road_sign_%E0%B8%9A-41.svg.png",
  },
  {
    id: "mandatory-59",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Pass on either side",
    nameTh: "Pass on either side",
    descriptionEn: "Pass on either side",
    descriptionTh: "Pass on either side",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Thailand_road_sign_%E0%B8%9A-42.svg/250px-Thailand_road_sign_%E0%B8%9A-42.svg.png",
  },
  {
    id: "mandatory-60",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Turn left",
    nameTh: "Turn left",
    descriptionEn: "Turn left",
    descriptionTh: "Turn left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Thailand_road_sign_%E0%B8%9A-43.svg/250px-Thailand_road_sign_%E0%B8%9A-43.svg.png",
  },
  {
    id: "mandatory-61",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Turn right",
    nameTh: "Turn right",
    descriptionEn: "Turn right",
    descriptionTh: "Turn right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Thailand_road_sign_%E0%B8%9A-44.svg/250px-Thailand_road_sign_%E0%B8%9A-44.svg.png",
  },
  {
    id: "mandatory-62",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Turn left or right",
    nameTh: "Turn left or right",
    descriptionEn: "Turn left or right",
    descriptionTh: "Turn left or right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Thailand_road_sign_%E0%B8%9A-45.svg/250px-Thailand_road_sign_%E0%B8%9A-45.svg.png",
  },
  {
    id: "mandatory-63",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Go straight or turn left",
    nameTh: "Go straight or turn left",
    descriptionEn: "Go straight or turn left",
    descriptionTh: "Go straight or turn left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Thailand_road_sign_%E0%B8%9A-46.svg/250px-Thailand_road_sign_%E0%B8%9A-46.svg.png",
  },
  {
    id: "mandatory-64",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Go straight or turn right",
    nameTh: "Go straight or turn right",
    descriptionEn: "Go straight or turn right",
    descriptionTh: "Go straight or turn right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Thailand_road_sign_%E0%B8%9A-47.svg/250px-Thailand_road_sign_%E0%B8%9A-47.svg.png",
  },
  {
    id: "mandatory-65",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Roundabout",
    nameTh: "Roundabout",
    descriptionEn: "Roundabout",
    descriptionTh: "Roundabout",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Thailand_road_sign_%E0%B8%9A-48.svg/250px-Thailand_road_sign_%E0%B8%9A-48.svg.png",
  },
  {
    id: "mandatory-66",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Buses only",
    nameTh: "Buses only",
    descriptionEn: "Buses only",
    descriptionTh: "Buses only",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Thailand_road_sign_%E0%B8%9A-49.svg/250px-Thailand_road_sign_%E0%B8%9A-49.svg.png",
  },
  {
    id: "mandatory-67",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "High occupancy vehicles only",
    nameTh: "High occupancy vehicles only",
    descriptionEn: "High occupancy vehicles only",
    descriptionTh: "High occupancy vehicles only",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Thailand_road_sign_%E0%B8%9A-50.svg/250px-Thailand_road_sign_%E0%B8%9A-50.svg.png",
  },
  {
    id: "mandatory-68",
    category: "mandatory",
    vehicles: ["motorcycle"],
    nameEn: "Motorcycles only",
    nameTh: "Motorcycles only",
    descriptionEn: "Motorcycles only",
    descriptionTh: "Motorcycles only",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Thailand_road_sign_%E0%B8%9A-51.svg/250px-Thailand_road_sign_%E0%B8%9A-51.svg.png",
  },
  {
    id: "mandatory-69",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Bicycles only",
    nameTh: "Bicycles only",
    descriptionEn: "Bicycles only",
    descriptionTh: "Bicycles only",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Thailand_road_sign_%E0%B8%9A-52.svg/250px-Thailand_road_sign_%E0%B8%9A-52.svg.png",
  },
  {
    id: "mandatory-70",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Pedestrians only",
    nameTh: "Pedestrians only",
    descriptionEn: "Pedestrians only",
    descriptionTh: "Pedestrians only",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Thailand_road_sign_%E0%B8%9A-53.svg/250px-Thailand_road_sign_%E0%B8%9A-53.svg.png",
  },
  {
    id: "mandatory-71",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Minimum speed limit (30 km/h)",
    nameTh: "Minimum speed limit (30 km/h)",
    descriptionEn: "Minimum speed limit (30 km/h)",
    descriptionTh: "Minimum speed limit (30 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Thailand_road_sign_%E0%B8%9A-54-30.svg/250px-Thailand_road_sign_%E0%B8%9A-54-30.svg.png",
  },
  {
    id: "mandatory-72",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Minimum speed limit (40 km/h)",
    nameTh: "Minimum speed limit (40 km/h)",
    descriptionEn: "Minimum speed limit (40 km/h)",
    descriptionTh: "Minimum speed limit (40 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Thailand_road_sign_%E0%B8%9A-54-40.svg/250px-Thailand_road_sign_%E0%B8%9A-54-40.svg.png",
  },
  {
    id: "mandatory-73",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Minimum speed limit (50 km/h)",
    nameTh: "Minimum speed limit (50 km/h)",
    descriptionEn: "Minimum speed limit (50 km/h)",
    descriptionTh: "Minimum speed limit (50 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Thailand_road_sign_%E0%B8%9A-54-50.svg/250px-Thailand_road_sign_%E0%B8%9A-54-50.svg.png",
  },
  {
    id: "mandatory-74",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Minimum speed limit (60 km/h)",
    nameTh: "Minimum speed limit (60 km/h)",
    descriptionEn: "Minimum speed limit (60 km/h)",
    descriptionTh: "Minimum speed limit (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Thailand_road_sign_%E0%B8%9A-54-60.svg/250px-Thailand_road_sign_%E0%B8%9A-54-60.svg.png",
  },
  {
    id: "mandatory-75",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Minimum speed limit (70 km/h)",
    nameTh: "Minimum speed limit (70 km/h)",
    descriptionEn: "Minimum speed limit (70 km/h)",
    descriptionTh: "Minimum speed limit (70 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Thailand_road_sign_%E0%B8%9A-54-70.svg/250px-Thailand_road_sign_%E0%B8%9A-54-70.svg.png",
  },
  {
    id: "mandatory-76",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Minimum speed limit (80 km/h)",
    nameTh: "Minimum speed limit (80 km/h)",
    descriptionEn: "Minimum speed limit (80 km/h)",
    descriptionTh: "Minimum speed limit (80 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thailand_road_sign_%E0%B8%9A-54-80.svg/250px-Thailand_road_sign_%E0%B8%9A-54-80.svg.png",
  },
  {
    id: "mandatory-77",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Minimum speed limit (90 km/h)",
    nameTh: "Minimum speed limit (90 km/h)",
    descriptionEn: "Minimum speed limit (90 km/h)",
    descriptionTh: "Minimum speed limit (90 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Thailand_road_sign_%E0%B8%9A-54-90.svg/250px-Thailand_road_sign_%E0%B8%9A-54-90.svg.png",
  },
  {
    id: "information-78",
    category: "information",
    vehicles: ["all"],
    nameEn: "Speed limit zone ends",
    nameTh: "Speed limit zone ends",
    descriptionEn: "Speed limit zone ends",
    descriptionTh: "Speed limit zone ends",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Thailand_road_sign_%E0%B8%9A-55.svg/250px-Thailand_road_sign_%E0%B8%9A-55.svg.png",
  },
  {
    id: "information-79",
    category: "information",
    vehicles: ["all"],
    nameEn: "Slow down",
    nameTh: "Slow down",
    descriptionEn: "Slow down",
    descriptionTh: "Slow down",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Thailand_road_sign_%E0%B8%9A-%E0%B8%82%E0%B8%B1%E0%B8%9A%E0%B8%8A%E0%B9%89%E0%B8%B2_%E0%B9%86.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%82%E0%B8%B1%E0%B8%9A%E0%B8%8A%E0%B9%89%E0%B8%B2_%E0%B9%86.svg.png",
  },
  {
    id: "information-80",
    category: "information",
    vehicles: ["all"],
    nameEn: "Speed limit sign (in Bangkok area)",
    nameTh: "Speed limit sign (in Bangkok area)",
    descriptionEn: "Speed limit sign (in Bangkok area)",
    descriptionTh: "Speed limit sign (in Bangkok area)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/BMA_road_sign_Speed_limit.svg/250px-BMA_road_sign_Speed_limit.svg.png",
  },
  {
    id: "information-81",
    category: "information",
    vehicles: ["all"],
    nameEn:
      "Speed limit (In city – Bangkok, Pattaya and cities\n                        inbound)",
    nameTh:
      "Speed limit (In city – Bangkok, Pattaya and cities\n                        inbound)",
    descriptionEn:
      "Speed limit (In city – Bangkok, Pattaya and cities\n                        inbound)",
    descriptionTh:
      "Speed limit (In city – Bangkok, Pattaya and cities\n                        inbound)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Thailand_road_sign_Speed_limit-1.svg/250px-Thailand_road_sign_Speed_limit-1.svg.png",
  },
  {
    id: "information-82",
    category: "information",
    vehicles: ["all"],
    nameEn:
      "Speed limit (Countryside – Bangkok, Pattaya and cities\n                        outbound)",
    nameTh:
      "Speed limit (Countryside – Bangkok, Pattaya and cities\n                        outbound)",
    descriptionEn:
      "Speed limit (Countryside – Bangkok, Pattaya and cities\n                        outbound)",
    descriptionTh:
      "Speed limit (Countryside – Bangkok, Pattaya and cities\n                        outbound)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Thailand_road_sign_Speed_limit-2.svg/250px-Thailand_road_sign_Speed_limit-2.svg.png",
  },
  {
    id: "information-83",
    category: "information",
    vehicles: ["all"],
    nameEn: "Car speed rating",
    nameTh: "Car speed rating",
    descriptionEn: "Car speed rating",
    descriptionTh: "Car speed rating",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Thailand_road_sign_%E0%B8%9A-%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7%E0%B8%A3%E0%B8%96.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7%E0%B8%A3%E0%B8%96.svg.png",
  },
  {
    id: "information-84",
    category: "information",
    vehicles: ["all"],
    nameEn:
      "Car speed rating According to ministerial regulations,\n                        the speed of vehicles on designated national highways or\n                        rural roads is specified 2021",
    nameTh:
      "Car speed rating According to ministerial regulations,\n                        the speed of vehicles on designated national highways or\n                        rural roads is specified 2021",
    descriptionEn:
      "Car speed rating According to ministerial regulations,\n                        the speed of vehicles on designated national highways or\n                        rural roads is specified 2021",
    descriptionTh:
      "Car speed rating According to ministerial regulations,\n                        the speed of vehicles on designated national highways or\n                        rural roads is specified 2021",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Thailand_road_sign_Speed_limit_%28B.E._2564%29.svg/250px-Thailand_road_sign_Speed_limit_%28B.E._2564%29.svg.png",
  },
  {
    id: "information-85",
    category: "information",
    vehicles: ["all"],
    nameEn:
      "Speed control zone According to ministerial regulations,\n                        the speed of vehicles on designated national highways or\n                        rural roads is specified 2021",
    nameTh:
      "Speed control zone According to ministerial regulations,\n                        the speed of vehicles on designated national highways or\n                        rural roads is specified 2021",
    descriptionEn:
      "Speed control zone According to ministerial regulations,\n                        the speed of vehicles on designated national highways or\n                        rural roads is specified 2021",
    descriptionTh:
      "Speed control zone According to ministerial regulations,\n                        the speed of vehicles on designated national highways or\n                        rural roads is specified 2021",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%84%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%A1%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7_%28B.E._2564%29.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%84%E0%B8%A7%E0%B8%9A%E0%B8%84%E0%B8%B8%E0%B8%A1%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7_%28B.E._2564%29.svg.png",
  },
  {
    id: "information-86",
    category: "information",
    vehicles: ["all"],
    nameEn: "Vehicles are prohibited from using the expressway.",
    nameTh: "Vehicles are prohibited from using the expressway.",
    descriptionEn: "Vehicles are prohibited from using the expressway.",
    descriptionTh: "Vehicles are prohibited from using the expressway.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Thailand_road_sign_%E0%B8%9A-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%87%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99.svg/120px-Thailand_road_sign_%E0%B8%9A-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%87%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99.svg.png",
  },
  {
    id: "information-87",
    category: "information",
    vehicles: ["all"],
    nameEn: "Prohibited on Expressways",
    nameTh: "Prohibited on Expressways",
    descriptionEn: "Prohibited on Expressways",
    descriptionTh: "Prohibited on Expressways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9.svg.png",
  },
  {
    id: "information-88",
    category: "information",
    vehicles: ["all"],
    nameEn: "Prohibited on Expressways",
    nameTh: "Prohibited on Expressways",
    descriptionEn: "Prohibited on Expressways",
    descriptionTh: "Prohibited on Expressways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9.svg.png",
  },
  {
    id: "information-89",
    category: "information",
    vehicles: ["all"],
    nameEn:
      "Prohibiting vehicles from using the special highway that\n                        is temporarily open (only 4-wheel vehicles, installed onMotorway 6)",
    nameTh:
      "Prohibiting vehicles from using the special highway that\n                        is temporarily open (only 4-wheel vehicles, installed onMotorway 6)",
    descriptionEn:
      "Prohibiting vehicles from using the special highway that\n                        is temporarily open (only 4-wheel vehicles, installed onMotorway 6)",
    descriptionTh:
      "Prohibiting vehicles from using the special highway that\n                        is temporarily open (only 4-wheel vehicles, installed onMotorway 6)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A7.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%A7.svg.png",
  },
  {
    id: "information-90",
    category: "information",
    vehicles: ["all"],
    nameEn: "Slow traffic keep left",
    nameTh: "Slow traffic keep left",
    descriptionEn: "Slow traffic keep left",
    descriptionTh: "Slow traffic keep left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Thailand_road_sign_%E0%B8%9A-%E0%B8%A3%E0%B8%96%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%94%E0%B8%8B%E0%B9%89%E0%B8%B2%E0%B8%A2.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%A3%E0%B8%96%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%94%E0%B8%8B%E0%B9%89%E0%B8%B2%E0%B8%A2.svg.png",
  },
  {
    id: "information-91",
    category: "information",
    vehicles: ["all"],
    nameEn: "Right lane passing only",
    nameTh: "Right lane passing only",
    descriptionEn: "Right lane passing only",
    descriptionTh: "Right lane passing only",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Thailand_road_sign_Right_lane_passing_only.svg/250px-Thailand_road_sign_Right_lane_passing_only.svg.png",
  },
  {
    id: "information-92",
    category: "information",
    vehicles: ["all"],
    nameEn: "All cars use low gears",
    nameTh: "All cars use low gears",
    descriptionEn: "All cars use low gears",
    descriptionTh: "All cars use low gears",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Thailand_road_sign_%E0%B8%9A-%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%84%E0%B8%B1%E0%B8%99%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%88%E0%B8%B3.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%84%E0%B8%B1%E0%B8%99%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%88%E0%B8%B3.svg.png",
  },
  {
    id: "information-93",
    category: "information",
    vehicles: ["all"],
    nameEn: "Limited visibility, no overtaking",
    nameTh: "Limited visibility, no overtaking",
    descriptionEn: "Limited visibility, no overtaking",
    descriptionTh: "Limited visibility, no overtaking",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Thailand_road_sign_%E0%B8%9A-%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B0%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%81%E0%B8%8B%E0%B8%87.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B0%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%81%E0%B8%8B%E0%B8%87.svg.png",
  },
  {
    id: "information-94",
    category: "information",
    vehicles: ["all"],
    nameEn: "Wrong Way",
    nameTh: "Wrong Way",
    descriptionEn: "Wrong Way",
    descriptionTh: "Wrong Way",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87.svg.png",
  },
  {
    id: "information-95",
    category: "information",
    vehicles: ["all"],
    nameEn: "Right lane only for U-turn",
    nameTh: "Right lane only for U-turn",
    descriptionEn: "Right lane only for U-turn",
    descriptionTh: "Right lane only for U-turn",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Thailand_road_sign_%E0%B8%9A-%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%A7%E0%B8%B2%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%89%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%81%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%96.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%A7%E0%B8%B2%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%89%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%81%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%96.svg.png",
  },
  {
    id: "information-96",
    category: "information",
    vehicles: ["all"],
    nameEn: "Left lane, turn left",
    nameTh: "Left lane, turn left",
    descriptionEn: "Left lane, turn left",
    descriptionTh: "Left lane, turn left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Thailand_road_sign_%E0%B8%9A-%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%8B%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7%E0%B8%8B%E0%B9%89%E0%B8%B2%E0%B8%A2.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%8B%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7%E0%B8%8B%E0%B9%89%E0%B8%B2%E0%B8%A2.svg.png",
  },
  {
    id: "information-97",
    category: "information",
    vehicles: ["all"],
    nameEn: "Stop and wait for the signal here",
    nameTh: "Stop and wait for the signal here",
    descriptionEn: "Stop and wait for the signal here",
    descriptionTh: "Stop and wait for the signal here",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%AD%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B5%E0%B9%88.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%AD%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B5%E0%B9%88.svg.png",
  },
  {
    id: "information-98",
    category: "information",
    vehicles: ["truck"],
    nameEn: "Truck weight for rural roads",
    nameTh: "Truck weight for rural roads",
    descriptionEn: "Truck weight for rural roads",
    descriptionTh: "Truck weight for rural roads",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Thailand_road_sign_%E0%B8%9A-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%8A%E0%B8%99%E0%B8%9A%E0%B8%97.svg/120px-Thailand_road_sign_%E0%B8%9A-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%8A%E0%B8%99%E0%B8%9A%E0%B8%97.svg.png",
  },
  {
    id: "information-99",
    category: "information",
    vehicles: ["truck"],
    nameEn: "Truck weight for local highways",
    nameTh: "Truck weight for local highways",
    descriptionEn: "Truck weight for local highways",
    descriptionTh: "Truck weight for local highways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Thailand_road_sign_%E0%B8%9A-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%96%E0%B8%B4%E0%B9%88%E0%B8%99.svg/120px-Thailand_road_sign_%E0%B8%9A-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%96%E0%B8%B4%E0%B9%88%E0%B8%99.svg.png",
  },
  {
    id: "information-100",
    category: "information",
    vehicles: ["truck"],
    nameEn: "Determining truck weight for expressways",
    nameTh: "Determining truck weight for expressways",
    descriptionEn: "Determining truck weight for expressways",
    descriptionTh: "Determining truck weight for expressways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Thailand_road_sign_%E0%B8%9A-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9.svg.png",
  },
  {
    id: "information-101",
    category: "information",
    vehicles: ["all"],
    nameEn: "Do not burn garbage and other materials on highways.",
    nameTh: "Do not burn garbage and other materials on highways.",
    descriptionEn: "Do not burn garbage and other materials on highways.",
    descriptionTh: "Do not burn garbage and other materials on highways.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9C%E0%B8%B2%E0%B8%82%E0%B8%A2%E0%B8%B0%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B8%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%86%E0%B9%83%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9C%E0%B8%B2%E0%B8%82%E0%B8%A2%E0%B8%B0%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B8%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%86%E0%B9%83%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87.svg.png",
  },
  {
    id: "information-102",
    category: "information",
    vehicles: ["all"],
    nameEn:
      "Do not drive and park on the shoulder of the road.\n                        (installed on expressway)",
    nameTh:
      "Do not drive and park on the shoulder of the road.\n                        (installed on expressway)",
    descriptionEn:
      "Do not drive and park on the shoulder of the road.\n                        (installed on expressway)",
    descriptionTh:
      "Do not drive and park on the shoulder of the road.\n                        (installed on expressway)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%B1%E0%B8%9A%E0%B8%82%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%97%E0%B8%B2%E0%B8%87.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%B1%E0%B8%9A%E0%B8%82%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%99%E0%B9%84%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%97%E0%B8%B2%E0%B8%87.svg.png",
  },
  {
    id: "information-103",
    category: "information",
    vehicles: ["all"],
    nameEn: "Underpass prohibitions",
    nameTh: "Underpass prohibitions",
    descriptionEn: "Underpass prohibitions",
    descriptionTh: "Underpass prohibitions",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%AD%E0%B8%94.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%AD%E0%B8%94.svg.png",
  },
  {
    id: "information-104",
    category: "information",
    vehicles: ["all"],
    nameEn: "Do not stopping in underpass any time",
    nameTh: "Do not stopping in underpass any time",
    descriptionEn: "Do not stopping in underpass any time",
    descriptionTh: "Do not stopping in underpass any time",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%96%E0%B9%83%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%96%E0%B9%83%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2.svg.png",
  },
  {
    id: "information-105",
    category: "information",
    vehicles: ["all"],
    nameEn: "Entering a no lane change zone",
    nameTh: "Entering a no lane change zone",
    descriptionEn: "Entering a no lane change zone",
    descriptionTh: "Entering a no lane change zone",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%A3.svg/120px-Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%A3.svg.png",
  },
  {
    id: "mandatory-106",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Stop the car for the bicycle path.",
    nameTh: "Stop the car for the bicycle path.",
    descriptionEn: "Stop the car for the bicycle path.",
    descriptionTh: "Stop the car for the bicycle path.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Thailand_road_sign_%E0%B8%9A-1-1_%28For_bicycle_lane%29.svg/250px-Thailand_road_sign_%E0%B8%9A-1-1_%28For_bicycle_lane%29.svg.png",
  },
  {
    id: "mandatory-107",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Starting point of the bicycle path",
    nameTh: "Starting point of the bicycle path",
    descriptionEn: "Starting point of the bicycle path",
    descriptionTh: "Starting point of the bicycle path",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Thailand_road_sign_%E0%B8%9A%E0%B8%AA-1.svg/250px-Thailand_road_sign_%E0%B8%9A%E0%B8%AA-1.svg.png",
  },
  {
    id: "mandatory-108",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "End of the bike path",
    nameTh: "End of the bike path",
    descriptionEn: "End of the bike path",
    descriptionTh: "End of the bike path",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thailand_road_sign_%E0%B8%9A%E0%B8%AA-1-1.svg/250px-Thailand_road_sign_%E0%B8%9A%E0%B8%AA-1-1.svg.png",
  },
  {
    id: "mandatory-109",
    category: "mandatory",
    vehicles: ["all"],
    nameEn: "Bicycle stays to the left",
    nameTh: "Bicycle stays to the left",
    descriptionEn: "Bicycle stays to the left",
    descriptionTh: "Bicycle stays to the left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Thailand_road_sign_%E0%B8%9A%E0%B8%AA-2.svg/250px-Thailand_road_sign_%E0%B8%9A%E0%B8%AA-2.svg.png",
  },
  {
    id: "information-110",
    category: "information",
    vehicles: ["all"],
    nameEn: "Let the car on the right go first.",
    nameTh: "Let the car on the right go first.",
    descriptionEn: "Let the car on the right go first.",
    descriptionTh: "Let the car on the right go first.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Thailand_road_sign_%E0%B8%9A-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A3%E0%B8%96%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%A7%E0%B8%B2%E0%B9%84%E0%B8%9B%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A3%E0%B8%96%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%A7%E0%B8%B2%E0%B9%84%E0%B8%9B%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99.svg.png",
  },
  {
    id: "information-111",
    category: "information",
    vehicles: ["all"],
    nameEn: "Let the cars in the roundabout go first.",
    nameTh: "Let the cars in the roundabout go first.",
    descriptionEn: "Let the cars in the roundabout go first.",
    descriptionTh: "Let the cars in the roundabout go first.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Thailand_road_sign_%E0%B8%9A-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A3%E0%B8%96%E0%B9%83%E0%B8%99%E0%B8%A7%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%84%E0%B8%9B%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%A3%E0%B8%96%E0%B9%83%E0%B8%99%E0%B8%A7%E0%B8%87%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%84%E0%B8%9B%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%99.svg.png",
  },
  {
    id: "information-112",
    category: "information",
    vehicles: ["truck"],
    nameEn: "Only trucks with 6 wheels or more.",
    nameTh: "Only trucks with 6 wheels or more.",
    descriptionEn: "Only trucks with 6 wheels or more.",
    descriptionTh: "Only trucks with 6 wheels or more.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%89%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%97%E0%B8%B8%E0%B8%81.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%89%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%A3%E0%B8%96%E0%B8%9A%E0%B8%A3%E0%B8%A3%E0%B8%97%E0%B8%B8%E0%B8%81.svg.png",
  },
  {
    id: "information-113",
    category: "information",
    vehicles: ["all"],
    nameEn: "Sign for additional mandatory hours for bus lanes.",
    nameTh: "Sign for additional mandatory hours for bus lanes.",
    descriptionEn: "Sign for additional mandatory hours for bus lanes.",
    descriptionTh: "Sign for additional mandatory hours for bus lanes.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Thailand_road_sign_%E0%B8%9A-%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%97%E0%B8%B2%E0%B8%87.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%97%E0%B8%B2%E0%B8%87.svg.png",
  },
  {
    id: "information-114",
    category: "information",
    vehicles: ["all"],
    nameEn: "Signs for additional times and required directions.",
    nameTh: "Signs for additional times and required directions.",
    descriptionEn: "Signs for additional times and required directions.",
    descriptionTh: "Signs for additional times and required directions.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%96_%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-%E0%B8%A8%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B9%8C.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%96_%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-%E0%B8%A8%E0%B8%B8%E0%B8%81%E0%B8%A3%E0%B9%8C.svg.png",
  },
  {
    id: "information-115",
    category: "information",
    vehicles: ["all"],
    nameEn: "except buses",
    nameTh: "except buses",
    descriptionEn: "except buses",
    descriptionTh: "except buses",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Thailand_road_sign_%E0%B8%9A-Except_Bus.svg/250px-Thailand_road_sign_%E0%B8%9A-Except_Bus.svg.png",
  },
  {
    id: "information-116",
    category: "information",
    vehicles: ["all"],
    nameEn: "Starting point of the public bus lane",
    nameTh: "Starting point of the public bus lane",
    descriptionEn: "Starting point of the public bus lane",
    descriptionTh: "Starting point of the public bus lane",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Thailand_road_sign_%E0%B8%9A-HOV_Lane_Ahead.svg/250px-Thailand_road_sign_%E0%B8%9A-HOV_Lane_Ahead.svg.png",
  },
  {
    id: "information-117",
    category: "information",
    vehicles: ["all"],
    nameEn: "The end of the mass transit lane",
    nameTh: "The end of the mass transit lane",
    descriptionEn: "The end of the mass transit lane",
    descriptionTh: "The end of the mass transit lane",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Thailand_road_sign_%E0%B8%9A-HOV_Lane_Ends.svg/250px-Thailand_road_sign_%E0%B8%9A-HOV_Lane_Ends.svg.png",
  },
  {
    id: "information-118",
    category: "information",
    vehicles: ["motorcycle"],
    nameEn: "Starting point of the motorcycle lane",
    nameTh: "Starting point of the motorcycle lane",
    descriptionEn: "Starting point of the motorcycle lane",
    descriptionTh: "Starting point of the motorcycle lane",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Thailand_road_sign_%E0%B8%9A-Motorcycle_Lane_Ahead.svg/250px-Thailand_road_sign_%E0%B8%9A-Motorcycle_Lane_Ahead.svg.png",
  },
  {
    id: "information-119",
    category: "information",
    vehicles: ["motorcycle"],
    nameEn: "End of the motorcycle lane",
    nameTh: "End of the motorcycle lane",
    descriptionEn: "End of the motorcycle lane",
    descriptionTh: "End of the motorcycle lane",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Thailand_road_sign_%E0%B8%9A-Motorcycle_Lane_Ends.svg/250px-Thailand_road_sign_%E0%B8%9A-Motorcycle_Lane_Ends.svg.png",
  },
  {
    id: "information-120",
    category: "information",
    vehicles: ["all"],
    nameEn: "Always turn left",
    nameTh: "Always turn left",
    descriptionEn: "Always turn left",
    descriptionTh: "Always turn left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Thailand_road_sign_%E0%B8%9A%E0%B8%AA-%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7%E0%B8%8B%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94.svg/250px-Thailand_road_sign_%E0%B8%9A%E0%B8%AA-%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7%E0%B8%8B%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94.svg.png",
  },
  {
    id: "information-121",
    category: "information",
    vehicles: ["all"],
    nameEn: "Always turn right",
    nameTh: "Always turn right",
    descriptionEn: "Always turn right",
    descriptionTh: "Always turn right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Thailand_road_sign_%E0%B8%9A%E0%B8%AA-%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7%E0%B8%82%E0%B8%A7%E0%B8%B2%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94.svg/250px-Thailand_road_sign_%E0%B8%9A%E0%B8%AA-%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%A7%E0%B8%82%E0%B8%A7%E0%B8%B2%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94.svg.png",
  },
  {
    id: "information-122",
    category: "information",
    vehicles: ["all"],
    nameEn: "One way traffic",
    nameTh: "One way traffic",
    descriptionEn: "One way traffic",
    descriptionTh: "One way traffic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thailand_road_sign_%E0%B8%9A%E0%B8%AA-%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%96%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A7.svg/250px-Thailand_road_sign_%E0%B8%9A%E0%B8%AA-%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%96%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A7.svg.png",
  },
  {
    id: "information-123",
    category: "information",
    vehicles: ["all"],
    nameEn: "Stop and wait for the traffic light",
    nameTh: "Stop and wait for the traffic light",
    descriptionEn: "Stop and wait for the traffic light",
    descriptionTh: "Stop and wait for the traffic light",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Thailand_road_sign_%E0%B8%9A%E0%B8%AA-%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%AD%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B9%84%E0%B8%9F.svg/250px-Thailand_road_sign_%E0%B8%9A%E0%B8%AA-%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%AD%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B9%84%E0%B8%9F.svg.png",
  },
  {
    id: "warning-124",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Curve to left",
    nameTh: "Curve to left",
    descriptionEn: "Curve to left",
    descriptionTh: "Curve to left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Thailand_road_sign_%E0%B8%95-1.svg/250px-Thailand_road_sign_%E0%B8%95-1.svg.png",
  },
  {
    id: "warning-125",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Curve to right",
    nameTh: "Curve to right",
    descriptionEn: "Curve to right",
    descriptionTh: "Curve to right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Thailand_road_sign_%E0%B8%95-2.svg/250px-Thailand_road_sign_%E0%B8%95-2.svg.png",
  },
  {
    id: "warning-126",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Sharp curve to left",
    nameTh: "Sharp curve to left",
    descriptionEn: "Sharp curve to left",
    descriptionTh: "Sharp curve to left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Thailand_road_sign_%E0%B8%95-3.svg/250px-Thailand_road_sign_%E0%B8%95-3.svg.png",
  },
  {
    id: "warning-127",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Sharp curve to right",
    nameTh: "Sharp curve to right",
    descriptionEn: "Sharp curve to right",
    descriptionTh: "Sharp curve to right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Thailand_road_sign_%E0%B8%95-4.svg/250px-Thailand_road_sign_%E0%B8%95-4.svg.png",
  },
  {
    id: "warning-128",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Double curve, first to left",
    nameTh: "Double curve, first to left",
    descriptionEn: "Double curve, first to left",
    descriptionTh: "Double curve, first to left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Thailand_road_sign_%E0%B8%95-5.svg/250px-Thailand_road_sign_%E0%B8%95-5.svg.png",
  },
  {
    id: "warning-129",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Double curve, first to right",
    nameTh: "Double curve, first to right",
    descriptionEn: "Double curve, first to right",
    descriptionTh: "Double curve, first to right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Thailand_road_sign_%E0%B8%95-6.svg/250px-Thailand_road_sign_%E0%B8%95-6.svg.png",
  },
  {
    id: "warning-130",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Sharp double curve, first to left",
    nameTh: "Sharp double curve, first to left",
    descriptionEn: "Sharp double curve, first to left",
    descriptionTh: "Sharp double curve, first to left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Thailand_road_sign_%E0%B8%95-7.svg/250px-Thailand_road_sign_%E0%B8%95-7.svg.png",
  },
  {
    id: "warning-131",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Sharp double curve, first to right",
    nameTh: "Sharp double curve, first to right",
    descriptionEn: "Sharp double curve, first to right",
    descriptionTh: "Sharp double curve, first to right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Thailand_road_sign_%E0%B8%95-8.svg/250px-Thailand_road_sign_%E0%B8%95-8.svg.png",
  },
  {
    id: "warning-132",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Winding road, first bend to left",
    nameTh: "Winding road, first bend to left",
    descriptionEn: "Winding road, first bend to left",
    descriptionTh: "Winding road, first bend to left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Thailand_road_sign_%E0%B8%95-9.svg/250px-Thailand_road_sign_%E0%B8%95-9.svg.png",
  },
  {
    id: "warning-133",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Winding road, first bend to right",
    nameTh: "Winding road, first bend to right",
    descriptionEn: "Winding road, first bend to right",
    descriptionTh: "Winding road, first bend to right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Thailand_road_sign_%E0%B8%95-10.svg/250px-Thailand_road_sign_%E0%B8%95-10.svg.png",
  },
  {
    id: "warning-134",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Crossroads",
    nameTh: "Crossroads",
    descriptionEn: "Crossroads",
    descriptionTh: "Crossroads",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Thailand_road_sign_%E0%B8%95-11.svg/250px-Thailand_road_sign_%E0%B8%95-11.svg.png",
  },
  {
    id: "warning-135",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Y-junction",
    nameTh: "Y-junction",
    descriptionEn: "Y-junction",
    descriptionTh: "Y-junction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Thailand_road_sign_%E0%B8%95-12.svg/250px-Thailand_road_sign_%E0%B8%95-12.svg.png",
  },
  {
    id: "warning-136",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Side road junction on left",
    nameTh: "Side road junction on left",
    descriptionEn: "Side road junction on left",
    descriptionTh: "Side road junction on left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Thailand_road_sign_%E0%B8%95-13.svg/250px-Thailand_road_sign_%E0%B8%95-13.svg.png",
  },
  {
    id: "warning-137",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Side road junction on right",
    nameTh: "Side road junction on right",
    descriptionEn: "Side road junction on right",
    descriptionTh: "Side road junction on right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Thailand_road_sign_%E0%B8%95-14.svg/250px-Thailand_road_sign_%E0%B8%95-14.svg.png",
  },
  {
    id: "warning-138",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Offset road junction, left and right",
    nameTh: "Offset road junction, left and right",
    descriptionEn: "Offset road junction, left and right",
    descriptionTh: "Offset road junction, left and right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Thailand_road_sign_%E0%B8%95-15.svg/250px-Thailand_road_sign_%E0%B8%95-15.svg.png",
  },
  {
    id: "warning-139",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Offset road junction, left and right",
    nameTh: "Offset road junction, left and right",
    descriptionEn: "Offset road junction, left and right",
    descriptionTh: "Offset road junction, left and right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Thailand_road_sign_%E0%B8%95-16.svg/250px-Thailand_road_sign_%E0%B8%95-16.svg.png",
  },
  {
    id: "warning-140",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Skewed side road junction on left",
    nameTh: "Skewed side road junction on left",
    descriptionEn: "Skewed side road junction on left",
    descriptionTh: "Skewed side road junction on left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Thailand_road_sign_%E0%B8%95-17.svg/250px-Thailand_road_sign_%E0%B8%95-17.svg.png",
  },
  {
    id: "warning-141",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Skewed side road junction on right",
    nameTh: "Skewed side road junction on right",
    descriptionEn: "Skewed side road junction on right",
    descriptionTh: "Skewed side road junction on right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Thailand_road_sign_%E0%B8%95-18.svg/250px-Thailand_road_sign_%E0%B8%95-18.svg.png",
  },
  {
    id: "warning-142",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Skewed side road junction on left",
    nameTh: "Skewed side road junction on left",
    descriptionEn: "Skewed side road junction on left",
    descriptionTh: "Skewed side road junction on left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Thailand_road_sign_%E0%B8%95-19.svg/250px-Thailand_road_sign_%E0%B8%95-19.svg.png",
  },
  {
    id: "warning-143",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Skewed side road junction on right",
    nameTh: "Skewed side road junction on right",
    descriptionEn: "Skewed side road junction on right",
    descriptionTh: "Skewed side road junction on right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Thailand_road_sign_%E0%B8%95-20.svg/250px-Thailand_road_sign_%E0%B8%95-20.svg.png",
  },
  {
    id: "warning-144",
    category: "warning",
    vehicles: ["all"],
    nameEn: "T-junction",
    nameTh: "T-junction",
    descriptionEn: "T-junction",
    descriptionTh: "T-junction",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Thailand_road_sign_%E0%B8%95-75.svg/250px-Thailand_road_sign_%E0%B8%95-75.svg.png",
  },
  {
    id: "warning-145",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Roundabout",
    nameTh: "Roundabout",
    descriptionEn: "Roundabout",
    descriptionTh: "Roundabout",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Thailand_road_sign_%E0%B8%95-21.svg/250px-Thailand_road_sign_%E0%B8%95-21.svg.png",
  },
  {
    id: "warning-146",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Road narrows on both sides",
    nameTh: "Road narrows on both sides",
    descriptionEn: "Road narrows on both sides",
    descriptionTh: "Road narrows on both sides",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Thailand_road_sign_%E0%B8%95-22.svg/250px-Thailand_road_sign_%E0%B8%95-22.svg.png",
  },
  {
    id: "warning-147",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Road narrows on left side",
    nameTh: "Road narrows on left side",
    descriptionEn: "Road narrows on left side",
    descriptionTh: "Road narrows on left side",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Thailand_road_sign_%E0%B8%95-23.svg/250px-Thailand_road_sign_%E0%B8%95-23.svg.png",
  },
  {
    id: "warning-148",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Road narrows on right side",
    nameTh: "Road narrows on right side",
    descriptionEn: "Road narrows on right side",
    descriptionTh: "Road narrows on right side",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Thailand_road_sign_%E0%B8%95-24.svg/250px-Thailand_road_sign_%E0%B8%95-24.svg.png",
  },
  {
    id: "warning-149",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Narrow bridge",
    nameTh: "Narrow bridge",
    descriptionEn: "Narrow bridge",
    descriptionTh: "Narrow bridge",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Thailand_road_sign_%E0%B8%95-25.svg/250px-Thailand_road_sign_%E0%B8%95-25.svg.png",
  },
  {
    id: "warning-150",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Left lane ends",
    nameTh: "Left lane ends",
    descriptionEn: "Left lane ends",
    descriptionTh: "Left lane ends",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Thailand_road_sign_%E0%B8%95-26.svg/250px-Thailand_road_sign_%E0%B8%95-26.svg.png",
  },
  {
    id: "warning-151",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Right lane ends",
    nameTh: "Right lane ends",
    descriptionEn: "Right lane ends",
    descriptionTh: "Right lane ends",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Thailand_road_sign_%E0%B8%95-27.svg/250px-Thailand_road_sign_%E0%B8%95-27.svg.png",
  },
  {
    id: "warning-152",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Railway crossing ahead that is not protected by\n                        automatic gates",
    nameTh:
      "Railway crossing ahead that is not protected by\n                        automatic gates",
    descriptionEn:
      "Railway crossing ahead that is not protected by\n                        automatic gates",
    descriptionTh:
      "Railway crossing ahead that is not protected by\n                        automatic gates",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Thailand_road_sign_%E0%B8%95-28.svg/250px-Thailand_road_sign_%E0%B8%95-28.svg.png",
  },
  {
    id: "warning-153",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Railway crossing ahead that is protected by automatic\n                        gates",
    nameTh:
      "Railway crossing ahead that is protected by automatic\n                        gates",
    descriptionEn:
      "Railway crossing ahead that is protected by automatic\n                        gates",
    descriptionTh:
      "Railway crossing ahead that is protected by automatic\n                        gates",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Thailand_road_sign_%E0%B8%95-29.svg/250px-Thailand_road_sign_%E0%B8%95-29.svg.png",
  },
  {
    id: "warning-154",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Railway crossing on next side road ahead",
    nameTh: "Railway crossing on next side road ahead",
    descriptionEn: "Railway crossing on next side road ahead",
    descriptionTh: "Railway crossing on next side road ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Thailand_road_sign_%E0%B8%95-30.svg/250px-Thailand_road_sign_%E0%B8%95-30.svg.png",
  },
  {
    id: "warning-155",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Railway crossing (Crossbuck)",
    nameTh: "Railway crossing (Crossbuck)",
    descriptionEn: "Railway crossing (Crossbuck)",
    descriptionTh: "Railway crossing (Crossbuck)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Thai_Railroad_Crossing_Sign.svg/250px-Thai_Railroad_Crossing_Sign.svg.png",
  },
  {
    id: "warning-156",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Width restriction ahead (Thai language)",
    nameTh: "Width restriction ahead (Thai language)",
    descriptionEn: "Width restriction ahead (Thai language)",
    descriptionTh: "Width restriction ahead (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Thailand_road_sign_%E0%B8%95-31.svg/250px-Thailand_road_sign_%E0%B8%95-31.svg.png",
  },
  {
    id: "warning-157",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Width restriction ahead (Thai and English languages)",
    nameTh: "Width restriction ahead (Thai and English languages)",
    descriptionEn: "Width restriction ahead (Thai and English languages)",
    descriptionTh: "Width restriction ahead (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Thailand_road_sign_%E0%B8%95-31-1.svg/250px-Thailand_road_sign_%E0%B8%95-31-1.svg.png",
  },
  {
    id: "warning-158",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Height restriction ahead (Thai language)",
    nameTh: "Height restriction ahead (Thai language)",
    descriptionEn: "Height restriction ahead (Thai language)",
    descriptionTh: "Height restriction ahead (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Thailand_road_sign_%E0%B8%95-32.svg/250px-Thailand_road_sign_%E0%B8%95-32.svg.png",
  },
  {
    id: "warning-159",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Height restriction ahead (Thai and English languages)",
    nameTh: "Height restriction ahead (Thai and English languages)",
    descriptionEn: "Height restriction ahead (Thai and English languages)",
    descriptionTh: "Height restriction ahead (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Thailand_road_sign_%E0%B8%95-32-1.svg/250px-Thailand_road_sign_%E0%B8%95-32-1.svg.png",
  },
  {
    id: "warning-160",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Steep climb",
    nameTh: "Steep climb",
    descriptionEn: "Steep climb",
    descriptionTh: "Steep climb",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Thailand_road_sign_%E0%B8%95-33.svg/250px-Thailand_road_sign_%E0%B8%95-33.svg.png",
  },
  {
    id: "warning-161",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Steep descent",
    nameTh: "Steep descent",
    descriptionEn: "Steep descent",
    descriptionTh: "Steep descent",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Thailand_road_sign_%E0%B8%95-34.svg/250px-Thailand_road_sign_%E0%B8%95-34.svg.png",
  },
  {
    id: "warning-162",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Bump",
    nameTh: "Bump",
    descriptionEn: "Bump",
    descriptionTh: "Bump",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Thailand_road_sign_%E0%B8%95-35.svg/250px-Thailand_road_sign_%E0%B8%95-35.svg.png",
  },
  {
    id: "warning-163",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Bumpy road",
    nameTh: "Bumpy road",
    descriptionEn: "Bumpy road",
    descriptionTh: "Bumpy road",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Thailand_road_sign_%E0%B8%95-36.svg/250px-Thailand_road_sign_%E0%B8%95-36.svg.png",
  },
  {
    id: "warning-164",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Dip",
    nameTh: "Dip",
    descriptionEn: "Dip",
    descriptionTh: "Dip",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Thailand_road_sign_%E0%B8%95-37.svg/250px-Thailand_road_sign_%E0%B8%95-37.svg.png",
  },
  {
    id: "warning-165",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Slippery road",
    nameTh: "Slippery road",
    descriptionEn: "Slippery road",
    descriptionTh: "Slippery road",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thailand_road_sign_%E0%B8%95-38.svg/250px-Thailand_road_sign_%E0%B8%95-38.svg.png",
  },
  {
    id: "warning-166",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Loose road surface",
    nameTh: "Loose road surface",
    descriptionEn: "Loose road surface",
    descriptionTh: "Loose road surface",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Thailand_road_sign_%E0%B8%95-39.svg/250px-Thailand_road_sign_%E0%B8%95-39.svg.png",
  },
  {
    id: "warning-167",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Falling stone",
    nameTh: "Falling stone",
    descriptionEn: "Falling stone",
    descriptionTh: "Falling stone",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Thailand_road_sign_%E0%B8%95-40.svg/250px-Thailand_road_sign_%E0%B8%95-40.svg.png",
  },
  {
    id: "warning-168",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Opening bridge",
    nameTh: "Opening bridge",
    descriptionEn: "Opening bridge",
    descriptionTh: "Opening bridge",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Thailand_road_sign_%E0%B8%95-41.svg/250px-Thailand_road_sign_%E0%B8%95-41.svg.png",
  },
  {
    id: "warning-169",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Shift to left carriageway",
    nameTh: "Shift to left carriageway",
    descriptionEn: "Shift to left carriageway",
    descriptionTh: "Shift to left carriageway",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Thailand_road_sign_%E0%B8%95-42.svg/250px-Thailand_road_sign_%E0%B8%95-42.svg.png",
  },
  {
    id: "warning-170",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Shift to right carriageway",
    nameTh: "Shift to right carriageway",
    descriptionEn: "Shift to right carriageway",
    descriptionTh: "Shift to right carriageway",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Thailand_road_sign_%E0%B8%95-43.svg/250px-Thailand_road_sign_%E0%B8%95-43.svg.png",
  },
  {
    id: "warning-171",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Added lane ahead",
    nameTh: "Added lane ahead",
    descriptionEn: "Added lane ahead",
    descriptionTh: "Added lane ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Thailand_road_sign_%E0%B8%95-44.svg/250px-Thailand_road_sign_%E0%B8%95-44.svg.png",
  },
  {
    id: "warning-172",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Added lane ahead",
    nameTh: "Added lane ahead",
    descriptionEn: "Added lane ahead",
    descriptionTh: "Added lane ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Thailand_road_sign_%E0%B8%95-45.svg/250px-Thailand_road_sign_%E0%B8%95-45.svg.png",
  },
  {
    id: "warning-173",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Left merging traffic",
    nameTh: "Left merging traffic",
    descriptionEn: "Left merging traffic",
    descriptionTh: "Left merging traffic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Thailand_road_sign_%E0%B8%95-46.svg/250px-Thailand_road_sign_%E0%B8%95-46.svg.png",
  },
  {
    id: "warning-174",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Right merging traffic",
    nameTh: "Right merging traffic",
    descriptionEn: "Right merging traffic",
    descriptionTh: "Right merging traffic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Thailand_road_sign_%E0%B8%95-47.svg/250px-Thailand_road_sign_%E0%B8%95-47.svg.png",
  },
  {
    id: "warning-175",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Divided road beginning",
    nameTh: "Divided road beginning",
    descriptionEn: "Divided road beginning",
    descriptionTh: "Divided road beginning",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Thailand_road_sign_%E0%B8%95-48.svg/250px-Thailand_road_sign_%E0%B8%95-48.svg.png",
  },
  {
    id: "warning-176",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Divided road end",
    nameTh: "Divided road end",
    descriptionEn: "Divided road end",
    descriptionTh: "Divided road end",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Thailand_road_sign_%E0%B8%95-49.svg/250px-Thailand_road_sign_%E0%B8%95-49.svg.png",
  },
  {
    id: "warning-177",
    category: "warning",
    vehicles: ["all"],
    nameEn: "U turn ahead Right",
    nameTh: "U turn ahead Right",
    descriptionEn: "U turn ahead Right",
    descriptionTh: "U turn ahead Right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Thailand_road_sign_%E0%B8%95-50.svg/250px-Thailand_road_sign_%E0%B8%95-50.svg.png",
  },
  {
    id: "warning-178",
    category: "warning",
    vehicles: ["all"],
    nameEn: "U turn ahead Left",
    nameTh: "U turn ahead Left",
    descriptionEn: "U turn ahead Left",
    descriptionTh: "U turn ahead Left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Thailand_road_sign_%E0%B8%95-51.svg/250px-Thailand_road_sign_%E0%B8%95-51.svg.png",
  },
  {
    id: "warning-179",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Two-way traffic",
    nameTh: "Two-way traffic",
    descriptionEn: "Two-way traffic",
    descriptionTh: "Two-way traffic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Thailand_road_sign_%E0%B8%95-52.svg/250px-Thailand_road_sign_%E0%B8%95-52.svg.png",
  },
  {
    id: "warning-180",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Traffic signals ahead",
    nameTh: "Traffic signals ahead",
    descriptionEn: "Traffic signals ahead",
    descriptionTh: "Traffic signals ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Thailand_road_sign_%E0%B8%95-53.svg/250px-Thailand_road_sign_%E0%B8%95-53.svg.png",
  },
  {
    id: "warning-181",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Stop ahead (Thai language)",
    nameTh: "Stop ahead (Thai language)",
    descriptionEn: "Stop ahead (Thai language)",
    descriptionTh: "Stop ahead (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thailand_road_sign_%E0%B8%95-54.svg/250px-Thailand_road_sign_%E0%B8%95-54.svg.png",
  },
  {
    id: "warning-182",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Stop ahead (Thai and English languages)",
    nameTh: "Stop ahead (Thai and English languages)",
    descriptionEn: "Stop ahead (Thai and English languages)",
    descriptionTh: "Stop ahead (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Thailand_road_sign_%E0%B8%95-54-1.svg/250px-Thailand_road_sign_%E0%B8%95-54-1.svg.png",
  },
  {
    id: "warning-183",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Give way ahead (Thai language)",
    nameTh: "Give way ahead (Thai language)",
    descriptionEn: "Give way ahead (Thai language)",
    descriptionTh: "Give way ahead (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Thailand_road_sign_%E0%B8%95-55.svg/250px-Thailand_road_sign_%E0%B8%95-55.svg.png",
  },
  {
    id: "warning-184",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Give way ahead (Thai and English languages)",
    nameTh: "Give way ahead (Thai and English languages)",
    descriptionEn: "Give way ahead (Thai and English languages)",
    descriptionTh: "Give way ahead (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Thailand_road_sign_%E0%B8%95-55-1.svg/250px-Thailand_road_sign_%E0%B8%95-55-1.svg.png",
  },
  {
    id: "warning-185",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Pedestrian crossing",
    nameTh: "Pedestrian crossing",
    descriptionEn: "Pedestrian crossing",
    descriptionTh: "Pedestrian crossing",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Thailand_road_sign_%E0%B8%95-56.svg/250px-Thailand_road_sign_%E0%B8%95-56.svg.png",
  },
  {
    id: "warning-186",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Children",
    nameTh: "Children",
    descriptionEn: "Children",
    descriptionTh: "Children",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Thailand_road_sign_%E0%B8%95-57.svg/250px-Thailand_road_sign_%E0%B8%95-57.svg.png",
  },
  {
    id: "warning-187",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Cattle Crossing",
    nameTh: "Cattle Crossing",
    descriptionEn: "Cattle Crossing",
    descriptionTh: "Cattle Crossing",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Thailand_road_sign_%E0%B8%95-58.svg/250px-Thailand_road_sign_%E0%B8%95-58.svg.png",
  },
  {
    id: "warning-188",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Low-flying aircraft",
    nameTh: "Low-flying aircraft",
    descriptionEn: "Low-flying aircraft",
    descriptionTh: "Low-flying aircraft",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Thailand_road_sign_%E0%B8%95-59.svg/250px-Thailand_road_sign_%E0%B8%95-59.svg.png",
  },
  {
    id: "warning-189",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Other danger (Thai language)",
    nameTh: "Other danger (Thai language)",
    descriptionEn: "Other danger (Thai language)",
    descriptionTh: "Other danger (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Thailand_road_sign_%E0%B8%95-60.svg/250px-Thailand_road_sign_%E0%B8%95-60.svg.png",
  },
  {
    id: "warning-190",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Other danger (Thai and English languages)",
    nameTh: "Other danger (Thai and English languages)",
    descriptionEn: "Other danger (Thai and English languages)",
    descriptionTh: "Other danger (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thailand_road_sign_%E0%B8%95-60-1.svg/250px-Thailand_road_sign_%E0%B8%95-60-1.svg.png",
  },
  {
    id: "warning-191",
    category: "warning",
    vehicles: ["all"],
    nameEn: "No overtaking zone",
    nameTh: "No overtaking zone",
    descriptionEn: "No overtaking zone",
    descriptionTh: "No overtaking zone",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Thailand_road_sign_%E0%B8%95-61.svg/250px-Thailand_road_sign_%E0%B8%95-61.svg.png",
  },
  {
    id: "warning-192",
    category: "warning",
    vehicles: ["all"],
    nameEn: "No overtaking zone (Thai and English languages)",
    nameTh: "No overtaking zone (Thai and English languages)",
    descriptionEn: "No overtaking zone (Thai and English languages)",
    descriptionTh: "No overtaking zone (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Thailand_road_sign_%E0%B8%95-61-1.svg/250px-Thailand_road_sign_%E0%B8%95-61-1.svg.png",
  },
  {
    id: "warning-193",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Diverge highway",
    nameTh: "Diverge highway",
    descriptionEn: "Diverge highway",
    descriptionTh: "Diverge highway",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thailand_road_sign_%E0%B8%95-62.svg/250px-Thailand_road_sign_%E0%B8%95-62.svg.png",
  },
  {
    id: "warning-194",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Zipper merge (Thai language)",
    nameTh: "Zipper merge (Thai language)",
    descriptionEn: "Zipper merge (Thai language)",
    descriptionTh: "Zipper merge (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Thailand_road_sign_%E0%B8%95-74.svg/250px-Thailand_road_sign_%E0%B8%95-74.svg.png",
  },
  {
    id: "warning-195",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Zipper merge (Thai and English languages)",
    nameTh: "Zipper merge (Thai and English languages)",
    descriptionEn: "Zipper merge (Thai and English languages)",
    descriptionTh: "Zipper merge (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Thailand_road_sign_%E0%B8%95-74-1.svg/250px-Thailand_road_sign_%E0%B8%95-74-1.svg.png",
  },
  {
    id: "warning-196",
    category: "warning",
    vehicles: ["all"],
    nameEn: "City limit reduce speed (Thai language)",
    nameTh: "City limit reduce speed (Thai language)",
    descriptionEn: "City limit reduce speed (Thai language)",
    descriptionTh: "City limit reduce speed (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Thailand_road_sign_%E0%B8%95-77.svg/250px-Thailand_road_sign_%E0%B8%95-77.svg.png",
  },
  {
    id: "warning-197",
    category: "warning",
    vehicles: ["all"],
    nameEn: "City limit reduce speed (Thai and English languages)",
    nameTh: "City limit reduce speed (Thai and English languages)",
    descriptionEn: "City limit reduce speed (Thai and English languages)",
    descriptionTh: "City limit reduce speed (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Thailand_road_sign_%E0%B8%95-77-1.svg/250px-Thailand_road_sign_%E0%B8%95-77-1.svg.png",
  },
  {
    id: "warning-198",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Winding road for next --- km",
    nameTh: "Winding road for next --- km",
    descriptionEn: "Winding road for next --- km",
    descriptionTh: "Winding road for next --- km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Thailand_road_sign_%E0%B8%95%E0%B8%AA-1.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-1.svg.png",
  },
  {
    id: "warning-199",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Steep climb for next --- km",
    nameTh: "Steep climb for next --- km",
    descriptionEn: "Steep climb for next --- km",
    descriptionTh: "Steep climb for next --- km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Thailand_road_sign_%E0%B8%95%E0%B8%AA-2.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-2.svg.png",
  },
  {
    id: "warning-200",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Steep descent for next --- km",
    nameTh: "Steep descent for next --- km",
    descriptionEn: "Steep descent for next --- km",
    descriptionTh: "Steep descent for next --- km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Thailand_road_sign_%E0%B8%95%E0%B8%AA-3.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-3.svg.png",
  },
  {
    id: "warning-201",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Use low gear (Thai language)",
    nameTh: "Use low gear (Thai language)",
    descriptionEn: "Use low gear (Thai language)",
    descriptionTh: "Use low gear (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Thailand_road_sign_%E0%B8%95%E0%B8%AA-4.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-4.svg.png",
  },
  {
    id: "warning-202",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Use low gear (Thai and English languages)",
    nameTh: "Use low gear (Thai and English languages)",
    descriptionEn: "Use low gear (Thai and English languages)",
    descriptionTh: "Use low gear (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Thailand_road_sign_%E0%B8%95%E0%B8%AA-4-1.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-4-1.svg.png",
  },
  {
    id: "warning-203",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Speed hump",
    nameTh: "Speed hump",
    descriptionEn: "Speed hump",
    descriptionTh: "Speed hump",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Thailand_road_sign_%E0%B8%95%E0%B8%AA-5.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-5.svg.png",
  },
  {
    id: "warning-204",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Rough road for next--- km.",
    nameTh: "Rough road for next--- km.",
    descriptionEn: "Rough road for next--- km.",
    descriptionTh: "Rough road for next--- km.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Thailand_road_sign_%E0%B8%95%E0%B8%AA-6.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-6.svg.png",
  },
  {
    id: "warning-205",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Slippery road",
    nameTh: "Slippery road",
    descriptionEn: "Slippery road",
    descriptionTh: "Slippery road",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Thailand_road_sign_%E0%B8%95%E0%B8%AA-7.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-7.svg.png",
  },
  {
    id: "warning-206",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Rain Slippery road",
    nameTh: "Rain Slippery road",
    descriptionEn: "Rain Slippery road",
    descriptionTh: "Rain Slippery road",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Thailand_road_sign_%E0%B8%95%E0%B8%AA-7_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-7_%28old%29.svg.png",
  },
  {
    id: "warning-207",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Rain Slippery road (Thai and English languages)",
    nameTh: "Rain Slippery road (Thai and English languages)",
    descriptionEn: "Rain Slippery road (Thai and English languages)",
    descriptionTh: "Rain Slippery road (Thai and English languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%9D%E0%B8%99%E0%B8%95%E0%B8%81%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%99.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%9D%E0%B8%99%E0%B8%95%E0%B8%81%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%99.svg.png",
  },
  {
    id: "warning-208",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Watch for cars from the left",
    nameTh: "Watch for cars from the left",
    descriptionEn: "Watch for cars from the left",
    descriptionTh: "Watch for cars from the left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Thailand_road_sign_%E0%B8%95%E0%B8%AA-8.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-8.svg.png",
  },
  {
    id: "warning-209",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Watch for cars from the right",
    nameTh: "Watch for cars from the right",
    descriptionEn: "Watch for cars from the right",
    descriptionTh: "Watch for cars from the right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Thailand_road_sign_%E0%B8%95%E0%B8%AA-9.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-9.svg.png",
  },
  {
    id: "warning-210",
    category: "warning",
    vehicles: ["all"],
    nameEn: "--- m.",
    nameTh: "--- m.",
    descriptionEn: "--- m.",
    descriptionTh: "--- m.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Thailand_road_sign_%E0%B8%95%E0%B8%AA-10.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-10.svg.png",
  },
  {
    id: "warning-211",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Ahead --- m.",
    nameTh: "Ahead --- m.",
    descriptionEn: "Ahead --- m.",
    descriptionTh: "Ahead --- m.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Thailand_road_sign_%E0%B8%95%E0%B8%AA-10-1.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-10-1.svg.png",
  },
  {
    id: "warning-212",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Two-way traffic",
    nameTh: "Two-way traffic",
    descriptionEn: "Two-way traffic",
    descriptionTh: "Two-way traffic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Thailand_road_sign_%E0%B8%95%E0%B8%AA-11.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-11.svg.png",
  },
  {
    id: "warning-213",
    category: "warning",
    vehicles: ["all"],
    nameEn: "front light",
    nameTh: "front light",
    descriptionEn: "front light",
    descriptionTh: "front light",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Thailand_road_sign_%E0%B8%95%E0%B8%AA-12.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-12.svg.png",
  },
  {
    id: "warning-214",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Light signal --- m.",
    nameTh: "Light signal --- m.",
    descriptionEn: "Light signal --- m.",
    descriptionTh: "Light signal --- m.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Thailand_road_sign_%E0%B8%95%E0%B8%AA-13.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-13.svg.png",
  },
  {
    id: "warning-215",
    category: "warning",
    vehicles: ["all"],
    nameEn: "School",
    nameTh: "School",
    descriptionEn: "School",
    descriptionTh: "School",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thailand_road_sign_%E0%B8%95%E0%B8%AA-14.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-14.svg.png",
  },
  {
    id: "warning-216",
    category: "warning",
    vehicles: ["all"],
    nameEn: "School zone beware children",
    nameTh: "School zone beware children",
    descriptionEn: "School zone beware children",
    descriptionTh: "School zone beware children",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81.svg.png",
  },
  {
    id: "warning-217",
    category: "warning",
    vehicles: ["all"],
    nameEn: "School --- m.",
    nameTh: "School --- m.",
    descriptionEn: "School --- m.",
    descriptionTh: "School --- m.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Thailand_road_sign_%E0%B8%95%E0%B8%AA-14_%28B.E._2559%29.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-14_%28B.E._2559%29.svg.png",
  },
  {
    id: "warning-218",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Advisory speed (Thai language) (60 km/h)",
    nameTh: "Advisory speed (Thai language) (60 km/h)",
    descriptionEn: "Advisory speed (Thai language) (60 km/h)",
    descriptionTh: "Advisory speed (Thai language) (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Thailand_road_sign_%E0%B8%95%E0%B8%AA-15-60.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-15-60.svg.png",
  },
  {
    id: "warning-219",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Advisory speed (Thai and English languages)\n                        (60 km/h)",
    nameTh:
      "Advisory speed (Thai and English languages)\n                        (60 km/h)",
    descriptionEn:
      "Advisory speed (Thai and English languages)\n                        (60 km/h)",
    descriptionTh:
      "Advisory speed (Thai and English languages)\n                        (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Thailand_road_sign_%E0%B8%95%E0%B8%AA-15-1-60.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-15-1-60.svg.png",
  },
  {
    id: "warning-220",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Advisory speed (Thai language) (60 km/h)",
    nameTh: "Advisory speed (Thai language) (60 km/h)",
    descriptionEn: "Advisory speed (Thai language) (60 km/h)",
    descriptionTh: "Advisory speed (Thai language) (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Thailand_road_sign_%E0%B8%95%E0%B8%AA-16-60.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-16-60.svg.png",
  },
  {
    id: "warning-221",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Advisory speed (Thai and English languages)\n                        (60 km/h)",
    nameTh:
      "Advisory speed (Thai and English languages)\n                        (60 km/h)",
    descriptionEn:
      "Advisory speed (Thai and English languages)\n                        (60 km/h)",
    descriptionTh:
      "Advisory speed (Thai and English languages)\n                        (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Thailand_road_sign_%E0%B8%95%E0%B8%AA-16-1-60.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-16-1-60.svg.png",
  },
  {
    id: "warning-222",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Slippery road when wet",
    nameTh: "Slippery road when wet",
    descriptionEn: "Slippery road when wet",
    descriptionTh: "Slippery road when wet",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Thailand_road_sign_Slippery_when_wet.svg/120px-Thailand_road_sign_Slippery_when_wet.svg.png",
  },
  {
    id: "warning-223",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Drowsy drivers warning",
    nameTh: "Drowsy drivers warning",
    descriptionEn: "Drowsy drivers warning",
    descriptionTh: "Drowsy drivers warning",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%87%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9E%E0%B8%B1%E0%B8%81.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%87%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%9E%E0%B8%B1%E0%B8%81.svg.png",
  },
  {
    id: "warning-224",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Crossroad Intersection-1",
    nameTh: "Crossroad Intersection-1",
    descriptionEn: "Crossroad Intersection-1",
    descriptionTh: "Crossroad Intersection-1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-1.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-1.svg.png",
  },
  {
    id: "warning-225",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Traffic signal Ahead ntersection-2",
    nameTh: "Traffic signal Ahead ntersection-2",
    descriptionEn: "Traffic signal Ahead ntersection-2",
    descriptionTh: "Traffic signal Ahead ntersection-2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-2.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-2.svg.png",
  },
  {
    id: "warning-226",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Traffic signal Ahead Intersection-3",
    nameTh: "Traffic signal Ahead Intersection-3",
    descriptionEn: "Traffic signal Ahead Intersection-3",
    descriptionTh: "Traffic signal Ahead Intersection-3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-3.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-3.svg.png",
  },
  {
    id: "warning-227",
    category: "warning",
    vehicles: ["all"],
    nameEn: "School Zone",
    nameTh: "School Zone",
    descriptionEn: "School Zone",
    descriptionTh: "School Zone",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Thailand_road_sign_%E0%B8%95-%E0%B9%80%E0%B8%82%E0%B8%95%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B9%80%E0%B8%82%E0%B8%95%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99.svg.png",
  },
  {
    id: "warning-228",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Sharp Curve",
    nameTh: "Sharp Curve",
    descriptionEn: "Sharp Curve",
    descriptionTh: "Sharp Curve",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thailand_road_sign_%E0%B8%95-%E0%B9%82%E0%B8%84%E0%B9%89%E0%B8%87%E0%B8%AD%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%A2.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B9%82%E0%B8%84%E0%B9%89%E0%B8%87%E0%B8%AD%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%A2.svg.png",
  },
  {
    id: "warning-229",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Railway ahead-1",
    nameTh: "Railway ahead-1",
    descriptionEn: "Railway ahead-1",
    descriptionTh: "Railway ahead-1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-1.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-1.svg.png",
  },
  {
    id: "warning-230",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Railway ahead-2",
    nameTh: "Railway ahead-2",
    descriptionEn: "Railway ahead-2",
    descriptionTh: "Railway ahead-2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-2.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-2.svg.png",
  },
  {
    id: "warning-231",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Reduce speed",
    nameTh: "Reduce speed",
    descriptionEn: "Reduce speed",
    descriptionTh: "Reduce speed",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%A5%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%A5%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%A7.svg.png",
  },
  {
    id: "warning-232",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Use honking",
    nameTh: "Use honking",
    descriptionEn: "Use honking",
    descriptionTh: "Use honking",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%B5%E0%B8%9A%E0%B9%81%E0%B8%95%E0%B8%A3.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%B5%E0%B8%9A%E0%B9%81%E0%B8%95%E0%B8%A3.svg.png",
  },
  {
    id: "warning-233",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Road name",
    nameTh: "Road name",
    descriptionEn: "Road name",
    descriptionTh: "Road name",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%96%E0%B8%99%E0%B8%99.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%96%E0%B8%99%E0%B8%99.svg.png",
  },
  {
    id: "warning-234",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Straight arrow",
    nameTh: "Straight arrow",
    descriptionEn: "Straight arrow",
    descriptionTh: "Straight arrow",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B8%95%E0%B8%A3%E0%B8%87.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B8%95%E0%B8%A3%E0%B8%87.svg.png",
  },
  {
    id: "warning-235",
    category: "warning",
    vehicles: ["all"],
    nameEn: "The arrow broke the scene",
    nameTh: "The arrow broke the scene",
    descriptionEn: "The arrow broke the scene",
    descriptionTh: "The arrow broke the scene",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%81%E0%B8%89%E0%B8%B2%E0%B8%81.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%81%E0%B8%89%E0%B8%B2%E0%B8%81.svg.png",
  },
  {
    id: "warning-236",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Downward slanting arrow",
    nameTh: "Downward slanting arrow",
    descriptionEn: "Downward slanting arrow",
    descriptionTh: "Downward slanting arrow",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B9%80%E0%B8%89%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A5%E0%B8%87.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B9%80%E0%B8%89%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A5%E0%B8%87.svg.png",
  },
  {
    id: "warning-237",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Speed camera zone (60 km/h)",
    nameTh: "Speed camera zone (60 km/h)",
    descriptionEn: "Speed camera zone (60 km/h)",
    descriptionTh: "Speed camera zone (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Thailand_road_sign_Speed_Camera_Zone-60.svg/120px-Thailand_road_sign_Speed_Camera_Zone-60.svg.png",
  },
  {
    id: "warning-238",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Speed camera zone (80 km/h)",
    nameTh: "Speed camera zone (80 km/h)",
    descriptionEn: "Speed camera zone (80 km/h)",
    descriptionTh: "Speed camera zone (80 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Thailand_road_sign_Speed_Camera_Zone-80.svg/120px-Thailand_road_sign_Speed_Camera_Zone-80.svg.png",
  },
  {
    id: "warning-239",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Speed camera zone (90 km/h)",
    nameTh: "Speed camera zone (90 km/h)",
    descriptionEn: "Speed camera zone (90 km/h)",
    descriptionTh: "Speed camera zone (90 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Thailand_road_sign_Speed_Camera_Zone-90.svg/120px-Thailand_road_sign_Speed_Camera_Zone-90.svg.png",
  },
  {
    id: "warning-240",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Speed camera zone (100 km/h)",
    nameTh: "Speed camera zone (100 km/h)",
    descriptionEn: "Speed camera zone (100 km/h)",
    descriptionTh: "Speed camera zone (100 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Thailand_road_sign_Speed_Camera_Zone-100.svg/120px-Thailand_road_sign_Speed_Camera_Zone-100.svg.png",
  },
  {
    id: "warning-241",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Speed camera zone (110 km/h)",
    nameTh: "Speed camera zone (110 km/h)",
    descriptionEn: "Speed camera zone (110 km/h)",
    descriptionTh: "Speed camera zone (110 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Thailand_road_sign_Speed_Camera_Zone-110.svg/120px-Thailand_road_sign_Speed_Camera_Zone-110.svg.png",
  },
  {
    id: "warning-242",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Speed camera zone (120 km/h)",
    nameTh: "Speed camera zone (120 km/h)",
    descriptionEn: "Speed camera zone (120 km/h)",
    descriptionTh: "Speed camera zone (120 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Thailand_road_sign_Speed_Camera_Zone-120.svg/120px-Thailand_road_sign_Speed_Camera_Zone-120.svg.png",
  },
  {
    id: "warning-243",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Advance emergency stop warning sign at a distance of 2\n                        km.",
    nameTh:
      "Advance emergency stop warning sign at a distance of 2\n                        km.",
    descriptionEn:
      "Advance emergency stop warning sign at a distance of 2\n                        km.",
    descriptionTh:
      "Advance emergency stop warning sign at a distance of 2\n                        km.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Thailand_road_sign_Emergency_Escape_Ramp_2_Km.svg/250px-Thailand_road_sign_Emergency_Escape_Ramp_2_Km.svg.png",
  },
  {
    id: "warning-244",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Advance emergency stop warning sign at a distance of 1\n                        km.",
    nameTh:
      "Advance emergency stop warning sign at a distance of 1\n                        km.",
    descriptionEn:
      "Advance emergency stop warning sign at a distance of 1\n                        km.",
    descriptionTh:
      "Advance emergency stop warning sign at a distance of 1\n                        km.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Thailand_road_sign_Emergency_Escape_Ramp_1_Km.svg/250px-Thailand_road_sign_Emergency_Escape_Ramp_1_Km.svg.png",
  },
  {
    id: "warning-245",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Warning sign for emergency stop lanes in advance at a\n                        distance of 500 m.",
    nameTh:
      "Warning sign for emergency stop lanes in advance at a\n                        distance of 500 m.",
    descriptionEn:
      "Warning sign for emergency stop lanes in advance at a\n                        distance of 500 m.",
    descriptionTh:
      "Warning sign for emergency stop lanes in advance at a\n                        distance of 500 m.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Thailand_road_sign_Emergency_Escape_Ramp_500_m.svg/250px-Thailand_road_sign_Emergency_Escape_Ramp_500_m.svg.png",
  },
  {
    id: "warning-246",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Warning sign for emergency stop lane ahead.",
    nameTh: "Warning sign for emergency stop lane ahead.",
    descriptionEn: "Warning sign for emergency stop lane ahead.",
    descriptionTh: "Warning sign for emergency stop lane ahead.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Thailand_road_sign_Emergency_Escape_Ramp_Ahead.svg/250px-Thailand_road_sign_Emergency_Escape_Ramp_Ahead.svg.png",
  },
  {
    id: "warning-247",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Slope climbing lane warning sign in advance at a\n                        distance of 2 km.",
    nameTh:
      "Slope climbing lane warning sign in advance at a\n                        distance of 2 km.",
    descriptionEn:
      "Slope climbing lane warning sign in advance at a\n                        distance of 2 km.",
    descriptionTh:
      "Slope climbing lane warning sign in advance at a\n                        distance of 2 km.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Thailand_road_sign_Climbing_Lane_2_Km.svg/250px-Thailand_road_sign_Climbing_Lane_2_Km.svg.png",
  },
  {
    id: "warning-248",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Slope climbing lane warning sign in advance at a\n                        distance of 1 km.",
    nameTh:
      "Slope climbing lane warning sign in advance at a\n                        distance of 1 km.",
    descriptionEn:
      "Slope climbing lane warning sign in advance at a\n                        distance of 1 km.",
    descriptionTh:
      "Slope climbing lane warning sign in advance at a\n                        distance of 1 km.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Thailand_road_sign_Climbing_Lane_1_Km.svg/250px-Thailand_road_sign_Climbing_Lane_1_Km.svg.png",
  },
  {
    id: "warning-249",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Slope climbing lane warning sign in advance at a\n                        distance of 500 m.",
    nameTh:
      "Slope climbing lane warning sign in advance at a\n                        distance of 500 m.",
    descriptionEn:
      "Slope climbing lane warning sign in advance at a\n                        distance of 500 m.",
    descriptionTh:
      "Slope climbing lane warning sign in advance at a\n                        distance of 500 m.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Thailand_road_sign_Climbing_Lane_500_m.svg/250px-Thailand_road_sign_Climbing_Lane_500_m.svg.png",
  },
  {
    id: "warning-250",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Warning sign of a steep climb lane ahead.",
    nameTh: "Warning sign of a steep climb lane ahead.",
    descriptionEn: "Warning sign of a steep climb lane ahead.",
    descriptionTh: "Warning sign of a steep climb lane ahead.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Thailand_road_sign_Climbing_Lane_Ahead.svg/250px-Thailand_road_sign_Climbing_Lane_Ahead.svg.png",
  },
  {
    id: "warning-251",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Warning sign at the end of a steep climb lane.",
    nameTh: "Warning sign at the end of a steep climb lane.",
    descriptionEn: "Warning sign at the end of a steep climb lane.",
    descriptionTh: "Warning sign at the end of a steep climb lane.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Thailand_road_sign_Climbing_Lane_End.svg/250px-Thailand_road_sign_Climbing_Lane_End.svg.png",
  },
  {
    id: "warning-252",
    category: "warning",
    vehicles: ["all"],
    nameEn: "School Zone",
    nameTh: "School Zone",
    descriptionEn: "School Zone",
    descriptionTh: "School Zone",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Thailand_road_sign_%E0%B8%95-%E0%B9%80%E0%B8%82%E0%B8%95%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99_%28Mast_arm%29.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B9%80%E0%B8%82%E0%B8%95%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99_%28Mast_arm%29.svg.png",
  },
  {
    id: "warning-253",
    category: "warning",
    vehicles: ["all"],
    nameEn: "City limit",
    nameTh: "City limit",
    descriptionEn: "City limit",
    descriptionTh: "City limit",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Thailand_road_sign_%E0%B8%95-%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%8A%E0%B8%99_%28Mast_arm%29.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%8A%E0%B8%99_%28Mast_arm%29.svg.png",
  },
  {
    id: "warning-254",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Railway crossing",
    nameTh: "Railway crossing",
    descriptionEn: "Railway crossing",
    descriptionTh: "Railway crossing",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F_%28Mast_arm%29.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F_%28Mast_arm%29.svg.png",
  },
  {
    id: "warning-255",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Intersections",
    nameTh: "Intersections",
    descriptionEn: "Intersections",
    descriptionTh: "Intersections",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81_%28Mast_arm%29.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81_%28Mast_arm%29.svg.png",
  },
  {
    id: "warning-256",
    category: "warning",
    vehicles: ["all"],
    nameEn: "U turn/curve",
    nameTh: "U turn/curve",
    descriptionEn: "U turn/curve",
    descriptionTh: "U turn/curve",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Thailand_road_sign_%E0%B8%95-%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%81%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%96_%28Mast_arm%29.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%81%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%96_%28Mast_arm%29.svg.png",
  },
  {
    id: "warning-257",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Road closed when flooded (Thai and english languages)",
    nameTh: "Road closed when flooded (Thai and english languages)",
    descriptionEn: "Road closed when flooded (Thai and english languages)",
    descriptionTh: "Road closed when flooded (Thai and english languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A5%E0%B9%89%E0%B8%99%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A5%E0%B9%89%E0%B8%99%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99.svg.png",
  },
  {
    id: "warning-258",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Warning sign on lower level road (Thai and english\n                        languages)",
    nameTh:
      "Warning sign on lower level road (Thai and english\n                        languages)",
    descriptionEn:
      "Warning sign on lower level road (Thai and english\n                        languages)",
    descriptionTh:
      "Warning sign on lower level road (Thai and english\n                        languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%94%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%94%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A.svg.png",
  },
  {
    id: "warning-259",
    category: "warning",
    vehicles: ["all"],
    nameEn: "An intersection sign has traffic when the lights flash.",
    nameTh: "An intersection sign has traffic when the lights flash.",
    descriptionEn: "An intersection sign has traffic when the lights flash.",
    descriptionTh: "An intersection sign has traffic when the lights flash.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%A1%E0%B8%B5%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2_%28B.E._2563%29.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%A1%E0%B8%B5%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2_%28B.E._2563%29.svg.png",
  },
  {
    id: "warning-260",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Railway warning sign at a distance of 100 meters",
    nameTh: "Railway warning sign at a distance of 100 meters",
    descriptionEn: "Railway warning sign at a distance of 100 meters",
    descriptionTh: "Railway warning sign at a distance of 100 meters",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_100_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_100_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F.svg.png",
  },
  {
    id: "warning-261",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Railway warning sign at a distance of 300 meters",
    nameTh: "Railway warning sign at a distance of 300 meters",
    descriptionEn: "Railway warning sign at a distance of 300 meters",
    descriptionTh: "Railway warning sign at a distance of 300 meters",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_300_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_300_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F.svg.png",
  },
  {
    id: "warning-262",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Railway warning sign at a distance of 500 meters",
    nameTh: "Railway warning sign at a distance of 500 meters",
    descriptionEn: "Railway warning sign at a distance of 500 meters",
    descriptionTh: "Railway warning sign at a distance of 500 meters",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_500_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_500_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F.svg.png",
  },
  {
    id: "warning-263",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Winding road for next --- km, first bend to left",
    nameTh: "Winding road for next --- km, first bend to left",
    descriptionEn: "Winding road for next --- km, first bend to left",
    descriptionTh: "Winding road for next --- km, first bend to left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Thailand_road_sign_%E0%B8%95-9_%2B_%E0%B8%95%E0%B8%AA-1.svg/250px-Thailand_road_sign_%E0%B8%95-9_%2B_%E0%B8%95%E0%B8%AA-1.svg.png",
  },
  {
    id: "warning-264",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Winding road for next --- km, first bend to right",
    nameTh: "Winding road for next --- km, first bend to right",
    descriptionEn: "Winding road for next --- km, first bend to right",
    descriptionTh: "Winding road for next --- km, first bend to right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Thailand_road_sign_%E0%B8%95-10_%2B_%E0%B8%95%E0%B8%AA-1.svg/250px-Thailand_road_sign_%E0%B8%95-10_%2B_%E0%B8%95%E0%B8%AA-1.svg.png",
  },
  {
    id: "warning-265",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Narrow bridge - give way to oncoming vehicles (used at\n                        traffic bottleneck points)",
    nameTh:
      "Narrow bridge - give way to oncoming vehicles (used at\n                        traffic bottleneck points)",
    descriptionEn:
      "Narrow bridge - give way to oncoming vehicles (used at\n                        traffic bottleneck points)",
    descriptionTh:
      "Narrow bridge - give way to oncoming vehicles (used at\n                        traffic bottleneck points)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Thailand_road_sign_%E0%B8%95-25_%2B_%E0%B8%9A-3.svg/250px-Thailand_road_sign_%E0%B8%95-25_%2B_%E0%B8%9A-3.svg.png",
  },
  {
    id: "warning-266",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Steep climb for next --- km",
    nameTh: "Steep climb for next --- km",
    descriptionEn: "Steep climb for next --- km",
    descriptionTh: "Steep climb for next --- km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Thailand_road_sign_%E0%B8%95-33_%2B_%E0%B8%95%E0%B8%AA-2.svg/250px-Thailand_road_sign_%E0%B8%95-33_%2B_%E0%B8%95%E0%B8%AA-2.svg.png",
  },
  {
    id: "warning-267",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Steep descent for next --- km",
    nameTh: "Steep descent for next --- km",
    descriptionEn: "Steep descent for next --- km",
    descriptionTh: "Steep descent for next --- km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Thailand_road_sign_%E0%B8%95-34_%2B_%E0%B8%95%E0%B8%AA-3.svg/250px-Thailand_road_sign_%E0%B8%95-34_%2B_%E0%B8%95%E0%B8%AA-3.svg.png",
  },
  {
    id: "warning-268",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Steep descent – use low gear (Thai language)",
    nameTh: "Steep descent – use low gear (Thai language)",
    descriptionEn: "Steep descent – use low gear (Thai language)",
    descriptionTh: "Steep descent – use low gear (Thai language)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Thailand_road_sign_%E0%B8%95-34_%2B_%E0%B8%95%E0%B8%AA-4.svg/250px-Thailand_road_sign_%E0%B8%95-34_%2B_%E0%B8%95%E0%B8%AA-4.svg.png",
  },
  {
    id: "warning-269",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Steep descent – use low gear (Thai and English\n                        languages)",
    nameTh:
      "Steep descent – use low gear (Thai and English\n                        languages)",
    descriptionEn:
      "Steep descent – use low gear (Thai and English\n                        languages)",
    descriptionTh:
      "Steep descent – use low gear (Thai and English\n                        languages)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Thailand_road_sign_%E0%B8%95-34_%2B_%E0%B8%95%E0%B8%AA-4-1.svg/250px-Thailand_road_sign_%E0%B8%95-34_%2B_%E0%B8%95%E0%B8%AA-4-1.svg.png",
  },
  {
    id: "warning-270",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Speed bump",
    nameTh: "Speed bump",
    descriptionEn: "Speed bump",
    descriptionTh: "Speed bump",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Thailand_road_sign_%E0%B8%95-35_%2B_%E0%B8%95%E0%B8%AA-5.svg/250px-Thailand_road_sign_%E0%B8%95-35_%2B_%E0%B8%95%E0%B8%AA-5.svg.png",
  },
  {
    id: "warning-271",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Speed bumpy",
    nameTh: "Speed bumpy",
    descriptionEn: "Speed bumpy",
    descriptionTh: "Speed bumpy",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Thailand_road_sign_%E0%B8%95-36_%2B_%E0%B8%95%E0%B8%AA-6.svg/250px-Thailand_road_sign_%E0%B8%95-36_%2B_%E0%B8%95%E0%B8%AA-6.svg.png",
  },
  {
    id: "warning-272",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Slippery road",
    nameTh: "Slippery road",
    descriptionEn: "Slippery road",
    descriptionTh: "Slippery road",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Thailand_road_sign_%E0%B8%95-38_%2B_%E0%B8%95%E0%B8%AA-7.svg/250px-Thailand_road_sign_%E0%B8%95-38_%2B_%E0%B8%95%E0%B8%AA-7.svg.png",
  },
  {
    id: "warning-273",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Merging traffic - beware cars from the left",
    nameTh: "Merging traffic - beware cars from the left",
    descriptionEn: "Merging traffic - beware cars from the left",
    descriptionTh: "Merging traffic - beware cars from the left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Thailand_road_sign_%E0%B8%95-46_%2B_%E0%B8%95%E0%B8%AA-8.svg/250px-Thailand_road_sign_%E0%B8%95-46_%2B_%E0%B8%95%E0%B8%AA-8.svg.png",
  },
  {
    id: "warning-274",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Merging traffic - beware cars from the right",
    nameTh: "Merging traffic - beware cars from the right",
    descriptionEn: "Merging traffic - beware cars from the right",
    descriptionTh: "Merging traffic - beware cars from the right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Thailand_road_sign_%E0%B8%95-47_%2B_%E0%B8%95%E0%B8%AA-9.svg/250px-Thailand_road_sign_%E0%B8%95-47_%2B_%E0%B8%95%E0%B8%AA-9.svg.png",
  },
  {
    id: "warning-275",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Two-way traffic",
    nameTh: "Two-way traffic",
    descriptionEn: "Two-way traffic",
    descriptionTh: "Two-way traffic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Thailand_road_sign_%E0%B8%95-52_%2B_%E0%B8%95%E0%B8%AA-11.svg/250px-Thailand_road_sign_%E0%B8%95-52_%2B_%E0%B8%95%E0%B8%AA-11.svg.png",
  },
  {
    id: "warning-276",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Traffic signals ahead and front light",
    nameTh: "Traffic signals ahead and front light",
    descriptionEn: "Traffic signals ahead and front light",
    descriptionTh: "Traffic signals ahead and front light",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Thailand_road_sign_%E0%B8%95-53_%2B_%E0%B8%95%E0%B8%AA-12.svg/250px-Thailand_road_sign_%E0%B8%95-53_%2B_%E0%B8%95%E0%B8%AA-12.svg.png",
  },
  {
    id: "warning-277",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Traffic signals ahead and Light signal --- m.",
    nameTh: "Traffic signals ahead and Light signal --- m.",
    descriptionEn: "Traffic signals ahead and Light signal --- m.",
    descriptionTh: "Traffic signals ahead and Light signal --- m.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Thailand_road_sign_%E0%B8%95-53_%2B_%E0%B8%95%E0%B8%AA-13.svg/250px-Thailand_road_sign_%E0%B8%95-53_%2B_%E0%B8%95%E0%B8%AA-13.svg.png",
  },
  {
    id: "warning-278",
    category: "warning",
    vehicles: ["all"],
    nameEn: "School zone",
    nameTh: "School zone",
    descriptionEn: "School zone",
    descriptionTh: "School zone",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Thailand_road_sign_%E0%B8%95-57_%2B_%E0%B8%95%E0%B8%AA-14.svg/250px-Thailand_road_sign_%E0%B8%95-57_%2B_%E0%B8%95%E0%B8%AA-14.svg.png",
  },
  {
    id: "warning-279",
    category: "warning",
    vehicles: ["all"],
    nameEn: "School 200 m.",
    nameTh: "School 200 m.",
    descriptionEn: "School 200 m.",
    descriptionTh: "School 200 m.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Thailand_road_sign_%E0%B8%95-57_%2B_%E0%B8%95%E0%B8%AA-14_%28B.E._2559%29.svg/250px-Thailand_road_sign_%E0%B8%95-57_%2B_%E0%B8%95%E0%B8%AA-14_%28B.E._2559%29.svg.png",
  },
  {
    id: "warning-280",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Curve marker right with advisory speed (Thai language)\n                        (60 km/h)",
    nameTh:
      "Curve marker right with advisory speed (Thai language)\n                        (60 km/h)",
    descriptionEn:
      "Curve marker right with advisory speed (Thai language)\n                        (60 km/h)",
    descriptionTh:
      "Curve marker right with advisory speed (Thai language)\n                        (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Thailand_road_sign_%E0%B8%95-65_%2B_%E0%B8%95%E0%B8%AA-15-60.svg/250px-Thailand_road_sign_%E0%B8%95-65_%2B_%E0%B8%95%E0%B8%AA-15-60.svg.png",
  },
  {
    id: "warning-281",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Curve marker right with advisory speed (Thai and English\n                        languages) (60 km/h)",
    nameTh:
      "Curve marker right with advisory speed (Thai and English\n                        languages) (60 km/h)",
    descriptionEn:
      "Curve marker right with advisory speed (Thai and English\n                        languages) (60 km/h)",
    descriptionTh:
      "Curve marker right with advisory speed (Thai and English\n                        languages) (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Thailand_road_sign_%E0%B8%95-65_%2B_%E0%B8%95%E0%B8%AA-15-1-60.svg/250px-Thailand_road_sign_%E0%B8%95-65_%2B_%E0%B8%95%E0%B8%AA-15-1-60.svg.png",
  },
  {
    id: "warning-282",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Curve marker left with advisory speed (Thai language)\n                        (60 km/h)",
    nameTh:
      "Curve marker left with advisory speed (Thai language)\n                        (60 km/h)",
    descriptionEn:
      "Curve marker left with advisory speed (Thai language)\n                        (60 km/h)",
    descriptionTh:
      "Curve marker left with advisory speed (Thai language)\n                        (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Thailand_road_sign_%E0%B8%95-68_%2B_%E0%B8%95%E0%B8%AA-15-60.svg/250px-Thailand_road_sign_%E0%B8%95-68_%2B_%E0%B8%95%E0%B8%AA-15-60.svg.png",
  },
  {
    id: "warning-283",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Curve marker left with advisory speed (Thai and English\n                        languages) (60 km/h)",
    nameTh:
      "Curve marker left with advisory speed (Thai and English\n                        languages) (60 km/h)",
    descriptionEn:
      "Curve marker left with advisory speed (Thai and English\n                        languages) (60 km/h)",
    descriptionTh:
      "Curve marker left with advisory speed (Thai and English\n                        languages) (60 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Thailand_road_sign_%E0%B8%95-68_%2B_%E0%B8%95%E0%B8%AA-15-1-60.svg/250px-Thailand_road_sign_%E0%B8%95-68_%2B_%E0%B8%95%E0%B8%AA-15-1-60.svg.png",
  },
  {
    id: "warning-284",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Railway warning sign at a distance of 100 meters and\n                        10.km",
    nameTh:
      "Railway warning sign at a distance of 100 meters and\n                        10.km",
    descriptionEn:
      "Railway warning sign at a distance of 100 meters and\n                        10.km",
    descriptionTh:
      "Railway warning sign at a distance of 100 meters and\n                        10.km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_100_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F_%2B_%E0%B8%95%E0%B8%AA-16.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_100_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F_%2B_%E0%B8%95%E0%B8%AA-16.svg.png",
  },
  {
    id: "warning-285",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Railway warning sign at a distance of 300 meters and\n                        30.km",
    nameTh:
      "Railway warning sign at a distance of 300 meters and\n                        30.km",
    descriptionEn:
      "Railway warning sign at a distance of 300 meters and\n                        30.km",
    descriptionTh:
      "Railway warning sign at a distance of 300 meters and\n                        30.km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_300_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F_%2B_%E0%B8%95%E0%B8%AA-16.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_300_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F_%2B_%E0%B8%95%E0%B8%AA-16.svg.png",
  },
  {
    id: "warning-286",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Railway warning sign at a distance of 500 meters and\n                        50.km",
    nameTh:
      "Railway warning sign at a distance of 500 meters and\n                        50.km",
    descriptionEn:
      "Railway warning sign at a distance of 500 meters and\n                        50.km",
    descriptionTh:
      "Railway warning sign at a distance of 500 meters and\n                        50.km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_500_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F_%2B_%E0%B8%95%E0%B8%AA-16.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87_500_%E0%B9%80%E0%B8%A1%E0%B8%95%E0%B8%A3_%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F_%2B_%E0%B8%95%E0%B8%AA-16.svg.png",
  },
  {
    id: "warning-287",
    category: "warning",
    vehicles: ["all"],
    nameEn: "No vehicles conveying dangerous goods",
    nameTh: "No vehicles conveying dangerous goods",
    descriptionEn: "No vehicles conveying dangerous goods",
    descriptionTh: "No vehicles conveying dangerous goods",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/TH_road_sign_No_vehicles_conveying_dangerous_goods.svg/250px-TH_road_sign_No_vehicles_conveying_dangerous_goods.svg.png",
  },
  {
    id: "warning-288",
    category: "warning",
    vehicles: ["all"],
    nameEn: "No buses",
    nameTh: "No buses",
    descriptionEn: "No buses",
    descriptionTh: "No buses",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%97%E0%B8%B2%E0%B8%87.svg/250px-Thailand_road_sign_%E0%B8%9A-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%96%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%97%E0%B8%B2%E0%B8%87.svg.png",
  },
  {
    id: "warning-289",
    category: "warning",
    vehicles: ["all"],
    nameEn: "School zone (In Bangkok local highway zone)",
    nameTh: "School zone (In Bangkok local highway zone)",
    descriptionEn: "School zone (In Bangkok local highway zone)",
    descriptionTh: "School zone (In Bangkok local highway zone)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Thailand_road_sign_%E0%B8%95-57-1.svg/250px-Thailand_road_sign_%E0%B8%95-57-1.svg.png",
  },
  {
    id: "warning-290",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "school zone warning sign (Standard form of the\n                        Department of Rural Roads)",
    nameTh:
      "school zone warning sign (Standard form of the\n                        Department of Rural Roads)",
    descriptionEn:
      "school zone warning sign (Standard form of the\n                        Department of Rural Roads)",
    descriptionTh:
      "school zone warning sign (Standard form of the\n                        Department of Rural Roads)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Thailand_road_sign_%E0%B8%95-57-1_%2B_%E0%B9%80%E0%B8%82%E0%B8%95%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99.svg/250px-Thailand_road_sign_%E0%B8%95-57-1_%2B_%E0%B9%80%E0%B8%82%E0%B8%95%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99.svg.png",
  },
  {
    id: "warning-291",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "crossing warning sign (Standard form of the Department\n                        of Rural Roads)",
    nameTh:
      "crossing warning sign (Standard form of the Department\n                        of Rural Roads)",
    descriptionEn:
      "crossing warning sign (Standard form of the Department\n                        of Rural Roads)",
    descriptionTh:
      "crossing warning sign (Standard form of the Department\n                        of Rural Roads)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Thailand_road_sign_%E0%B8%95-57-1_%2B_%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A1.svg/250px-Thailand_road_sign_%E0%B8%95-57-1_%2B_%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A1.svg.png",
  },
  {
    id: "warning-292",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Railway crossing (Crossbuck)",
    nameTh: "Railway crossing (Crossbuck)",
    descriptionEn: "Railway crossing (Crossbuck)",
    descriptionTh: "Railway crossing (Crossbuck)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Thai_Railroad_Crossing_Sign.svg/250px-Thai_Railroad_Crossing_Sign.svg.png",
  },
  {
    id: "warning-293",
    category: "warning",
    vehicles: ["all"],
    nameEn: "Elephant crossing",
    nameTh: "Elephant crossing",
    descriptionEn: "Elephant crossing",
    descriptionTh: "Elephant crossing",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%9B%E0%B9%88%E0%B8%B2.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%9B%E0%B9%88%E0%B8%B2.svg.png",
  },
  {
    id: "warning-294",
    category: "warning",
    vehicles: ["all"],
    nameEn: "No u turn",
    nameTh: "No u turn",
    descriptionEn: "No u turn",
    descriptionTh: "No u turn",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Thailand_road_sign_%E0%B8%95-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%96%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2.svg/250px-Thailand_road_sign_%E0%B8%95-%E0%B8%AB%E0%B9%89%E0%B8%B2%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%96%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2.svg.png",
  },
  {
    id: "warning-295",
    category: "warning",
    vehicles: ["all"],
    nameEn:
      "Warning signs detect traffic light violations with CCTV\n                        cameras 24 hours a day.",
    nameTh:
      "Warning signs detect traffic light violations with CCTV\n                        cameras 24 hours a day.",
    descriptionEn:
      "Warning signs detect traffic light violations with CCTV\n                        cameras 24 hours a day.",
    descriptionTh:
      "Warning signs detect traffic light violations with CCTV\n                        cameras 24 hours a day.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Thailand_road_sign_%E0%B8%95-%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B9%84%E0%B8%9F%E0%B9%81%E0%B8%94%E0%B8%87.svg/120px-Thailand_road_sign_%E0%B8%95-%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%88%E0%B8%B1%E0%B8%9A%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B9%84%E0%B8%9F%E0%B9%81%E0%B8%94%E0%B8%87.svg.png",
  },
  {
    id: "temporary-296",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Survey",
    nameTh: "Survey",
    descriptionEn: "Survey",
    descriptionTh: "Survey",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Thailand_road_sign_%E0%B8%95%E0%B8%81-1.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-1.svg.png",
  },
  {
    id: "temporary-297",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Construction ahead",
    nameTh: "Construction ahead",
    descriptionEn: "Construction ahead",
    descriptionTh: "Construction ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Thailand_road_sign_%E0%B8%95%E0%B8%81-2.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-2.svg.png",
  },
  {
    id: "temporary-298",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Workers ahead",
    nameTh: "Workers ahead",
    descriptionEn: "Workers ahead",
    descriptionTh: "Workers ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Thailand_road_sign_%E0%B8%95%E0%B8%81-3.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-3.svg.png",
  },
  {
    id: "temporary-299",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Construction vehicles ahead",
    nameTh: "Construction vehicles ahead",
    descriptionEn: "Construction vehicles ahead",
    descriptionTh: "Construction vehicles ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Thailand_road_sign_%E0%B8%95%E0%B8%81-4.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-4.svg.png",
  },
  {
    id: "temporary-300",
    category: "temporary",
    vehicles: ["all"],
    nameEn:
      "Bridge out ahead with a temporary bridge on a detour on\n                        left",
    nameTh:
      "Bridge out ahead with a temporary bridge on a detour on\n                        left",
    descriptionEn:
      "Bridge out ahead with a temporary bridge on a detour on\n                        left",
    descriptionTh:
      "Bridge out ahead with a temporary bridge on a detour on\n                        left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Thailand_road_sign_%E0%B8%95%E0%B8%81-5.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-5.svg.png",
  },
  {
    id: "temporary-301",
    category: "temporary",
    vehicles: ["all"],
    nameEn:
      "Bridge out ahead with a temporary bridge on a detour on\n                        right",
    nameTh:
      "Bridge out ahead with a temporary bridge on a detour on\n                        right",
    descriptionEn:
      "Bridge out ahead with a temporary bridge on a detour on\n                        right",
    descriptionTh:
      "Bridge out ahead with a temporary bridge on a detour on\n                        right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Thailand_road_sign_%E0%B8%95%E0%B8%81-6.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-6.svg.png",
  },
  {
    id: "temporary-302",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic to left",
    nameTh: "Diverted traffic to left",
    descriptionEn: "Diverted traffic to left",
    descriptionTh: "Diverted traffic to left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Thailand_road_sign_%E0%B8%95%E0%B8%81-7.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-7.svg.png",
  },
  {
    id: "temporary-303",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic to right",
    nameTh: "Diverted traffic to right",
    descriptionEn: "Diverted traffic to right",
    descriptionTh: "Diverted traffic to right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Thailand_road_sign_%E0%B8%95%E0%B8%81-8.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-8.svg.png",
  },
  {
    id: "temporary-304",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic to left (two lanes)",
    nameTh: "Diverted traffic to left (two lanes)",
    descriptionEn: "Diverted traffic to left (two lanes)",
    descriptionTh: "Diverted traffic to left (two lanes)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Thailand_road_sign_%E0%B8%95%E0%B8%81-9.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-9.svg.png",
  },
  {
    id: "temporary-305",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic to right (two lanes)",
    nameTh: "Diverted traffic to right (two lanes)",
    descriptionEn: "Diverted traffic to right (two lanes)",
    descriptionTh: "Diverted traffic to right (two lanes)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Thailand_road_sign_%E0%B8%95%E0%B8%81-10.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-10.svg.png",
  },
  {
    id: "temporary-306",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic (one lane on left)",
    nameTh: "Diverted traffic (one lane on left)",
    descriptionEn: "Diverted traffic (one lane on left)",
    descriptionTh: "Diverted traffic (one lane on left)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Thailand_road_sign_%E0%B8%95%E0%B8%81-11.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-11.svg.png",
  },
  {
    id: "temporary-307",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic (one lane on right)",
    nameTh: "Diverted traffic (one lane on right)",
    descriptionEn: "Diverted traffic (one lane on right)",
    descriptionTh: "Diverted traffic (one lane on right)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Thailand_road_sign_%E0%B8%95%E0%B8%81-12.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-12.svg.png",
  },
  {
    id: "temporary-308",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic, first to left",
    nameTh: "Diverted traffic, first to left",
    descriptionEn: "Diverted traffic, first to left",
    descriptionTh: "Diverted traffic, first to left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Thailand_road_sign_%E0%B8%95%E0%B8%81-13.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-13.svg.png",
  },
  {
    id: "temporary-309",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic, first to right",
    nameTh: "Diverted traffic, first to right",
    descriptionEn: "Diverted traffic, first to right",
    descriptionTh: "Diverted traffic, first to right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Thailand_road_sign_%E0%B8%95%E0%B8%81-14.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-14.svg.png",
  },
  {
    id: "temporary-310",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic, first to left, 2 lanes",
    nameTh: "Diverted traffic, first to left, 2 lanes",
    descriptionEn: "Diverted traffic, first to left, 2 lanes",
    descriptionTh: "Diverted traffic, first to left, 2 lanes",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Thailand_road_sign_%E0%B8%95%E0%B8%81-15.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-15.svg.png",
  },
  {
    id: "temporary-311",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic, first to right, 2 lanes",
    nameTh: "Diverted traffic, first to right, 2 lanes",
    descriptionEn: "Diverted traffic, first to right, 2 lanes",
    descriptionTh: "Diverted traffic, first to right, 2 lanes",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Thailand_road_sign_%E0%B8%95%E0%B8%81-16.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-16.svg.png",
  },
  {
    id: "temporary-312",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic, first to left, 3 lanes",
    nameTh: "Diverted traffic, first to left, 3 lanes",
    descriptionEn: "Diverted traffic, first to left, 3 lanes",
    descriptionTh: "Diverted traffic, first to left, 3 lanes",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Thailand_road_sign_%E0%B8%95%E0%B8%81-17.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-17.svg.png",
  },
  {
    id: "temporary-313",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Diverted traffic, first to right, 3 lanes",
    nameTh: "Diverted traffic, first to right, 3 lanes",
    descriptionEn: "Diverted traffic, first to right, 3 lanes",
    descriptionTh: "Diverted traffic, first to right, 3 lanes",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Thailand_road_sign_%E0%B8%95%E0%B8%81-18.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-18.svg.png",
  },
  {
    id: "temporary-314",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "End of left lane (form 1 lane)",
    nameTh: "End of left lane (form 1 lane)",
    descriptionEn: "End of left lane (form 1 lane)",
    descriptionTh: "End of left lane (form 1 lane)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Thailand_road_sign_%E0%B8%95%E0%B8%81-19.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-19.svg.png",
  },
  {
    id: "temporary-315",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "End of right lane (form 1 lane)",
    nameTh: "End of right lane (form 1 lane)",
    descriptionEn: "End of right lane (form 1 lane)",
    descriptionTh: "End of right lane (form 1 lane)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Thailand_road_sign_%E0%B8%95%E0%B8%81-20.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-20.svg.png",
  },
  {
    id: "temporary-316",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "End of left lane (form 2 lanes)",
    nameTh: "End of left lane (form 2 lanes)",
    descriptionEn: "End of left lane (form 2 lanes)",
    descriptionTh: "End of left lane (form 2 lanes)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Thailand_road_sign_%E0%B8%95%E0%B8%81-21.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-21.svg.png",
  },
  {
    id: "temporary-317",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "End of right lane (form 2 lanes)",
    nameTh: "End of right lane (form 2 lanes)",
    descriptionEn: "End of right lane (form 2 lanes)",
    descriptionTh: "End of right lane (form 2 lanes)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Thailand_road_sign_%E0%B8%95%E0%B8%81-22.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-22.svg.png",
  },
  {
    id: "temporary-318",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "End of left lanes (form 1 lane)",
    nameTh: "End of left lanes (form 1 lane)",
    descriptionEn: "End of left lanes (form 1 lane)",
    descriptionTh: "End of left lanes (form 1 lane)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Thailand_road_sign_%E0%B8%95%E0%B8%81-23.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-23.svg.png",
  },
  {
    id: "temporary-319",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "End of right lanes (form 1 lane)",
    nameTh: "End of right lanes (form 1 lane)",
    descriptionEn: "End of right lanes (form 1 lane)",
    descriptionTh: "End of right lanes (form 1 lane)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Thailand_road_sign_%E0%B8%95%E0%B8%81-24.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-24.svg.png",
  },
  {
    id: "temporary-320",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Curve marker",
    nameTh: "Curve marker",
    descriptionEn: "Curve marker",
    descriptionTh: "Curve marker",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Thailand_road_sign_%E0%B8%95%E0%B8%81-25.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-25.svg.png",
  },
  {
    id: "temporary-321",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Curve marker",
    nameTh: "Curve marker",
    descriptionEn: "Curve marker",
    descriptionTh: "Curve marker",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Thailand_road_sign_%E0%B8%95%E0%B8%81-26.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-26.svg.png",
  },
  {
    id: "temporary-322",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Flagman ahead",
    nameTh: "Flagman ahead",
    descriptionEn: "Flagman ahead",
    descriptionTh: "Flagman ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Thailand_road_sign_%E0%B8%95%E0%B8%81-31.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%81-31.svg.png",
  },
  {
    id: "temporary-323",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road construction zone",
    nameTh: "Road construction zone",
    descriptionEn: "Road construction zone",
    descriptionTh: "Road construction zone",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Thailand_road_sign_%E0%B8%95%E0%B8%84-1.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-1.svg.png",
  },
  {
    id: "temporary-324",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "New road under construction and temporarily opened",
    nameTh: "New road under construction and temporarily opened",
    descriptionEn: "New road under construction and temporarily opened",
    descriptionTh: "New road under construction and temporarily opened",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Thailand_road_sign_%E0%B8%95%E0%B8%84-2.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-2.svg.png",
  },
  {
    id: "temporary-325",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "New road temporarily opened",
    nameTh: "New road temporarily opened",
    descriptionEn: "New road temporarily opened",
    descriptionTh: "New road temporarily opened",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Thailand_road_sign_%E0%B8%95%E0%B8%84-3.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-3.svg.png",
  },
  {
    id: "temporary-326",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road construction ahead",
    nameTh: "Road construction ahead",
    descriptionEn: "Road construction ahead",
    descriptionTh: "Road construction ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Thailand_road_sign_%E0%B8%95%E0%B8%84-4.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-4.svg.png",
  },
  {
    id: "temporary-327",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Bridge construction ahead",
    nameTh: "Bridge construction ahead",
    descriptionEn: "Bridge construction ahead",
    descriptionTh: "Bridge construction ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Thailand_road_sign_%E0%B8%95%E0%B8%84-5.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-5.svg.png",
  },
  {
    id: "temporary-328",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road closed ahead",
    nameTh: "Road closed ahead",
    descriptionEn: "Road closed ahead",
    descriptionTh: "Road closed ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Thailand_road_sign_%E0%B8%95%E0%B8%84-6.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-6.svg.png",
  },
  {
    id: "temporary-329",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Reduce speed",
    nameTh: "Reduce speed",
    descriptionEn: "Reduce speed",
    descriptionTh: "Reduce speed",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Thailand_road_sign_%E0%B8%95%E0%B8%84-7.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-7.svg.png",
  },
  {
    id: "temporary-330",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Detour left",
    nameTh: "Detour left",
    descriptionEn: "Detour left",
    descriptionTh: "Detour left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Thailand_road_sign_%E0%B8%95%E0%B8%84-8.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-8.svg.png",
  },
  {
    id: "temporary-331",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Detour right",
    nameTh: "Detour right",
    descriptionEn: "Detour right",
    descriptionTh: "Detour right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Thailand_road_sign_%E0%B8%95%E0%B8%84-9.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-9.svg.png",
  },
  {
    id: "temporary-332",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Distance to work zone",
    nameTh: "Distance to work zone",
    descriptionEn: "Distance to work zone",
    descriptionTh: "Distance to work zone",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Thailand_road_sign_%E0%B8%95%E0%B8%84-10.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-10.svg.png",
  },
  {
    id: "temporary-333",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road work ahead",
    nameTh: "Road work ahead",
    descriptionEn: "Road work ahead",
    descriptionTh: "Road work ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Thailand_road_sign_%E0%B8%95%E0%B8%84-11.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-11.svg.png",
  },
  {
    id: "temporary-334",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Shoulder work ahead",
    nameTh: "Shoulder work ahead",
    descriptionEn: "Shoulder work ahead",
    descriptionTh: "Shoulder work ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Thailand_road_sign_%E0%B8%95%E0%B8%84-12.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-12.svg.png",
  },
  {
    id: "temporary-335",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Construction materials on shoulder",
    nameTh: "Construction materials on shoulder",
    descriptionEn: "Construction materials on shoulder",
    descriptionTh: "Construction materials on shoulder",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Thailand_road_sign_%E0%B8%95%E0%B8%84-13.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-13.svg.png",
  },
  {
    id: "temporary-336",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road impassable ahead",
    nameTh: "Road impassable ahead",
    descriptionEn: "Road impassable ahead",
    descriptionTh: "Road impassable ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Thailand_road_sign_%E0%B8%95%E0%B8%84-14.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-14.svg.png",
  },
  {
    id: "temporary-337",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road flooded ahead",
    nameTh: "Road flooded ahead",
    descriptionEn: "Road flooded ahead",
    descriptionTh: "Road flooded ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Thailand_road_sign_%E0%B8%95%E0%B8%84-15.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-15.svg.png",
  },
  {
    id: "temporary-338",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Accident ahead",
    nameTh: "Accident ahead",
    descriptionEn: "Accident ahead",
    descriptionTh: "Accident ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Thailand_road_sign_%E0%B8%95%E0%B8%84-16.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-16.svg.png",
  },
  {
    id: "temporary-339",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Curve marker",
    nameTh: "Curve marker",
    descriptionEn: "Curve marker",
    descriptionTh: "Curve marker",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Thailand_road_sign_%E0%B8%95%E0%B8%84-17.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-17.svg.png",
  },
  {
    id: "temporary-340",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Curve marker",
    nameTh: "Curve marker",
    descriptionEn: "Curve marker",
    descriptionTh: "Curve marker",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Thailand_road_sign_%E0%B8%95%E0%B8%84-18.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-18.svg.png",
  },
  {
    id: "temporary-341",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Curve marker",
    nameTh: "Curve marker",
    descriptionEn: "Curve marker",
    descriptionTh: "Curve marker",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Thailand_road_sign_%E0%B8%95%E0%B8%84-19.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-19.svg.png",
  },
  {
    id: "temporary-342",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road closed --- km",
    nameTh: "Road closed --- km",
    descriptionEn: "Road closed --- km",
    descriptionTh: "Road closed --- km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Thailand_road_sign_%E0%B8%95%E0%B8%84-20.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-20.svg.png",
  },
  {
    id: "temporary-343",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road impassable --- km",
    nameTh: "Road impassable --- km",
    descriptionEn: "Road impassable --- km",
    descriptionTh: "Road impassable --- km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Thailand_road_sign_%E0%B8%95%E0%B8%84-21.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-21.svg.png",
  },
  {
    id: "temporary-344",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Detour route",
    nameTh: "Detour route",
    descriptionEn: "Detour route",
    descriptionTh: "Detour route",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Thailand_road_sign_%E0%B8%95%E0%B8%84-22.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-22.svg.png",
  },
  {
    id: "temporary-345",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Detour",
    nameTh: "Detour",
    descriptionEn: "Detour",
    descriptionTh: "Detour",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Thailand_road_sign_%E0%B8%95%E0%B8%84-23.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-23.svg.png",
  },
  {
    id: "temporary-346",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Detour",
    nameTh: "Detour",
    descriptionEn: "Detour",
    descriptionTh: "Detour",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Thailand_road_sign_%E0%B8%95%E0%B8%84-24.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-24.svg.png",
  },
  {
    id: "temporary-347",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road work, next --- km",
    nameTh: "Road work, next --- km",
    descriptionEn: "Road work, next --- km",
    descriptionTh: "Road work, next --- km",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Thailand_road_sign_%E0%B8%95%E0%B8%84-25.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-25.svg.png",
  },
  {
    id: "temporary-348",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "End road work",
    nameTh: "End road work",
    descriptionEn: "End road work",
    descriptionTh: "End road work",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Thailand_road_sign_%E0%B8%95%E0%B8%84-26.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-26.svg.png",
  },
  {
    id: "temporary-349",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road closed",
    nameTh: "Road closed",
    descriptionEn: "Road closed",
    descriptionTh: "Road closed",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Thailand_road_sign_%E0%B8%95%E0%B8%84-27.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-27.svg.png",
  },
  {
    id: "temporary-350",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road closed to through traffic",
    nameTh: "Road closed to through traffic",
    descriptionEn: "Road closed to through traffic",
    descriptionTh: "Road closed to through traffic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Thailand_road_sign_%E0%B8%95%E0%B8%84-28.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-28.svg.png",
  },
  {
    id: "temporary-351",
    category: "temporary",
    vehicles: ["all"],
    nameEn: "Road impassable, no through traffic",
    nameTh: "Road impassable, no through traffic",
    descriptionEn: "Road impassable, no through traffic",
    descriptionTh: "Road impassable, no through traffic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Thailand_road_sign_%E0%B8%95%E0%B8%84-29.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-29.svg.png",
  },
  {
    id: "information-352",
    category: "information",
    vehicles: ["all"],
    nameEn: "recommend in advance",
    nameTh: "recommend in advance",
    descriptionEn: "recommend in advance",
    descriptionTh: "recommend in advance",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Thailand_road_sign_%E0%B8%99-1.svg/250px-Thailand_road_sign_%E0%B8%99-1.svg.png",
  },
  {
    id: "information-353",
    category: "information",
    vehicles: ["all"],
    nameEn: "Destination",
    nameTh: "Destination",
    descriptionEn: "Destination",
    descriptionTh: "Destination",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Thailand_road_sign_%E0%B8%99-2.svg/250px-Thailand_road_sign_%E0%B8%99-2.svg.png",
  },
  {
    id: "information-354",
    category: "information",
    vehicles: ["all"],
    nameEn: "Destination",
    nameTh: "Destination",
    descriptionEn: "Destination",
    descriptionTh: "Destination",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Thailand_road_sign_%E0%B8%99-2_%28Thai_language_only%29.svg/250px-Thailand_road_sign_%E0%B8%99-2_%28Thai_language_only%29.svg.png",
  },
  {
    id: "information-355",
    category: "information",
    vehicles: ["all"],
    nameEn: "Destination (direction)",
    nameTh: "Destination (direction)",
    descriptionEn: "Destination (direction)",
    descriptionTh: "Destination (direction)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Thailand_road_sign_%E0%B8%99-3.svg/250px-Thailand_road_sign_%E0%B8%99-3.svg.png",
  },
  {
    id: "information-356",
    category: "information",
    vehicles: ["all"],
    nameEn: "Distance sign",
    nameTh: "Distance sign",
    descriptionEn: "Distance sign",
    descriptionTh: "Distance sign",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Thailand_road_sign_%E0%B8%99-4.svg/250px-Thailand_road_sign_%E0%B8%99-4.svg.png",
  },
  {
    id: "information-357",
    category: "information",
    vehicles: ["all"],
    nameEn: "Distance sign (For non-toll expressways)",
    nameTh: "Distance sign (For non-toll expressways)",
    descriptionEn: "Distance sign (For non-toll expressways)",
    descriptionTh: "Distance sign (For non-toll expressways)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Thailand_road_sign_%E0%B8%99-4-2.svg/250px-Thailand_road_sign_%E0%B8%99-4-2.svg.png",
  },
  {
    id: "information-358",
    category: "information",
    vehicles: ["all"],
    nameEn: "Distance sign (For toll expressways)",
    nameTh: "Distance sign (For toll expressways)",
    descriptionEn: "Distance sign (For toll expressways)",
    descriptionTh: "Distance sign (For toll expressways)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Thailand_road_sign_%E0%B8%99-4-3.svg/250px-Thailand_road_sign_%E0%B8%99-4-3.svg.png",
  },
  {
    id: "information-359",
    category: "information",
    vehicles: ["all"],
    nameEn: "Distance sign",
    nameTh: "Distance sign",
    descriptionEn: "Distance sign",
    descriptionTh: "Distance sign",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Thailand_road_sign_%E0%B8%99-4_%28Thai_language_only%29.svg/250px-Thailand_road_sign_%E0%B8%99-4_%28Thai_language_only%29.svg.png",
  },
  {
    id: "information-360",
    category: "information",
    vehicles: ["all"],
    nameEn: "River sign",
    nameTh: "River sign",
    descriptionEn: "River sign",
    descriptionTh: "River sign",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Thailand_road_sign_%E0%B8%99-5-1.svg/250px-Thailand_road_sign_%E0%B8%99-5-1.svg.png",
  },
  {
    id: "information-361",
    category: "information",
    vehicles: ["all"],
    nameEn: "Province border signs",
    nameTh: "Province border signs",
    descriptionEn: "Province border signs",
    descriptionTh: "Province border signs",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Thailand_road_sign_%E0%B8%99-5-2_%28Province%29.svg/250px-Thailand_road_sign_%E0%B8%99-5-2_%28Province%29.svg.png",
  },
  {
    id: "information-362",
    category: "information",
    vehicles: ["all"],
    nameEn: "District border signs",
    nameTh: "District border signs",
    descriptionEn: "District border signs",
    descriptionTh: "District border signs",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Thailand_road_sign_%E0%B8%99-5-2_%28District%29.svg/250px-Thailand_road_sign_%E0%B8%99-5-2_%28District%29.svg.png",
  },
  {
    id: "information-363",
    category: "information",
    vehicles: ["all"],
    nameEn: "Canal name onBMARoads",
    nameTh: "Canal name onBMARoads",
    descriptionEn: "Canal name onBMARoads",
    descriptionTh: "Canal name onBMARoads",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/BMA_road_sign_%E0%B8%99-%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87.svg/250px-BMA_road_sign_%E0%B8%99-%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87.svg.png",
  },
  {
    id: "information-364",
    category: "information",
    vehicles: ["all"],
    nameEn: "Intersection name on Highways",
    nameTh: "Intersection name on Highways",
    descriptionEn: "Intersection name on Highways",
    descriptionTh: "Intersection name on Highways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Thailand_road_sign_%E0%B8%99-5-4.svg/250px-Thailand_road_sign_%E0%B8%99-5-4.svg.png",
  },
  {
    id: "information-365",
    category: "information",
    vehicles: ["all"],
    nameEn: "Intersection name on Rural Roads name on Highways",
    nameTh: "Intersection name on Rural Roads name on Highways",
    descriptionEn: "Intersection name on Rural Roads name on Highways",
    descriptionTh: "Intersection name on Rural Roads name on Highways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Thailand_road_sign_%E0%B8%99-5-5.svg/250px-Thailand_road_sign_%E0%B8%99-5-5.svg.png",
  },
  {
    id: "information-366",
    category: "information",
    vehicles: ["all"],
    nameEn: "Interchange name on Highways",
    nameTh: "Interchange name on Highways",
    descriptionEn: "Interchange name on Highways",
    descriptionTh: "Interchange name on Highways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Thailand_road_sign_%E0%B8%99-%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%A5%E0%B8%B8%E0%B8%94.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%A5%E0%B8%B8%E0%B8%94.svg.png",
  },
  {
    id: "information-367",
    category: "information",
    vehicles: ["all"],
    nameEn: "Intersection name onBMARoads",
    nameTh: "Intersection name onBMARoads",
    descriptionEn: "Intersection name onBMARoads",
    descriptionTh: "Intersection name onBMARoads",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/BMA_road_sign_%E0%B8%99-%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B9%8C.svg/250px-BMA_road_sign_%E0%B8%99-%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B9%8C.svg.png",
  },
  {
    id: "information-368",
    category: "information",
    vehicles: ["all"],
    nameEn: "Pedestrian crossing",
    nameTh: "Pedestrian crossing",
    descriptionEn: "Pedestrian crossing",
    descriptionTh: "Pedestrian crossing",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Thailand_road_sign_%E0%B8%99-6.svg/250px-Thailand_road_sign_%E0%B8%99-6.svg.png",
  },
  {
    id: "information-369",
    category: "information",
    vehicles: ["all"],
    nameEn: "Hospital",
    nameTh: "Hospital",
    descriptionEn: "Hospital",
    descriptionTh: "Hospital",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Thailand_road_sign_%E0%B8%99-7.svg/250px-Thailand_road_sign_%E0%B8%99-7.svg.png",
  },
  {
    id: "information-370",
    category: "information",
    vehicles: ["all"],
    nameEn: "Hospital",
    nameTh: "Hospital",
    descriptionEn: "Hospital",
    descriptionTh: "Hospital",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Thailand_road_sign_%E0%B8%99-7-2.svg/250px-Thailand_road_sign_%E0%B8%99-7-2.svg.png",
  },
  {
    id: "information-371",
    category: "information",
    vehicles: ["all"],
    nameEn: "Hospital",
    nameTh: "Hospital",
    descriptionEn: "Hospital",
    descriptionTh: "Hospital",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Thailand_road_sign_%E0%B8%99-7-3.svg/250px-Thailand_road_sign_%E0%B8%99-7-3.svg.png",
  },
  {
    id: "information-372",
    category: "information",
    vehicles: ["all"],
    nameEn: "Hospital",
    nameTh: "Hospital",
    descriptionEn: "Hospital",
    descriptionTh: "Hospital",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Thailand_road_sign_%E0%B8%99-7-4.svg/250px-Thailand_road_sign_%E0%B8%99-7-4.svg.png",
  },
  {
    id: "information-373",
    category: "information",
    vehicles: ["all"],
    nameEn: "Hospital",
    nameTh: "Hospital",
    descriptionEn: "Hospital",
    descriptionTh: "Hospital",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Thailand_road_sign_%E0%B8%99-7-5.svg/120px-Thailand_road_sign_%E0%B8%99-7-5.svg.png",
  },
  {
    id: "information-374",
    category: "information",
    vehicles: ["all"],
    nameEn: "One-way street (left)",
    nameTh: "One-way street (left)",
    descriptionEn: "One-way street (left)",
    descriptionTh: "One-way street (left)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thailand_road_sign_%E0%B8%99-8-1.svg/250px-Thailand_road_sign_%E0%B8%99-8-1.svg.png",
  },
  {
    id: "information-375",
    category: "information",
    vehicles: ["all"],
    nameEn: "One-way street (right)",
    nameTh: "One-way street (right)",
    descriptionEn: "One-way street (right)",
    descriptionTh: "One-way street (right)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Thailand_road_sign_%E0%B8%99-8-2.svg/250px-Thailand_road_sign_%E0%B8%99-8-2.svg.png",
  },
  {
    id: "information-376",
    category: "information",
    vehicles: ["all"],
    nameEn: "Dead end",
    nameTh: "Dead end",
    descriptionEn: "Dead end",
    descriptionTh: "Dead end",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Thailand_road_sign_%E0%B8%99-9.svg/250px-Thailand_road_sign_%E0%B8%99-9.svg.png",
  },
  {
    id: "information-377",
    category: "information",
    vehicles: ["all"],
    nameEn: "U-turn Right",
    nameTh: "U-turn Right",
    descriptionEn: "U-turn Right",
    descriptionTh: "U-turn Right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Thailand_road_sign_%E0%B8%99-11.svg/250px-Thailand_road_sign_%E0%B8%99-11.svg.png",
  },
  {
    id: "information-378",
    category: "information",
    vehicles: ["all"],
    nameEn: "U-turn Left",
    nameTh: "U-turn Left",
    descriptionEn: "U-turn Left",
    descriptionTh: "U-turn Left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Thailand_Road_Sign_%E0%B8%99-11-1.svg/250px-Thailand_Road_Sign_%E0%B8%99-11-1.svg.png",
  },
  {
    id: "information-379",
    category: "information",
    vehicles: ["all"],
    nameEn: "Expressway begins",
    nameTh: "Expressway begins",
    descriptionEn: "Expressway begins",
    descriptionTh: "Expressway begins",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Thailand_road_sign_%E0%B8%99-12.svg/250px-Thailand_road_sign_%E0%B8%99-12.svg.png",
  },
  {
    id: "information-380",
    category: "information",
    vehicles: ["all"],
    nameEn: "Expressway ends",
    nameTh: "Expressway ends",
    descriptionEn: "Expressway ends",
    descriptionTh: "Expressway ends",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Thailand_road_sign_%E0%B8%99-13.svg/250px-Thailand_road_sign_%E0%B8%99-13.svg.png",
  },
  {
    id: "information-381",
    category: "information",
    vehicles: ["all"],
    nameEn: "Bus lane begins",
    nameTh: "Bus lane begins",
    descriptionEn: "Bus lane begins",
    descriptionTh: "Bus lane begins",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Thailand_road_sign_%E0%B8%99-14.svg/250px-Thailand_road_sign_%E0%B8%99-14.svg.png",
  },
  {
    id: "information-382",
    category: "information",
    vehicles: ["all"],
    nameEn: "Bus lane",
    nameTh: "Bus lane",
    descriptionEn: "Bus lane",
    descriptionTh: "Bus lane",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Thailand_road_sign_%E0%B8%99-15.svg/250px-Thailand_road_sign_%E0%B8%99-15.svg.png",
  },
  {
    id: "information-383",
    category: "information",
    vehicles: ["all"],
    nameEn: "Disabled persons",
    nameTh: "Disabled persons",
    descriptionEn: "Disabled persons",
    descriptionTh: "Disabled persons",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Thailand_road_sign_%E0%B8%99-16.svg/250px-Thailand_road_sign_%E0%B8%99-16.svg.png",
  },
  {
    id: "information-384",
    category: "information",
    vehicles: ["all"],
    nameEn: "Bus lane ends",
    nameTh: "Bus lane ends",
    descriptionEn: "Bus lane ends",
    descriptionTh: "Bus lane ends",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Thailand_road_sign_%E0%B8%99-17.svg/250px-Thailand_road_sign_%E0%B8%99-17.svg.png",
  },
  {
    id: "information-385",
    category: "information",
    vehicles: ["all"],
    nameEn: "High-occupancy vehicle (HOV) lane",
    nameTh: "High-occupancy vehicle (HOV) lane",
    descriptionEn: "High-occupancy vehicle (HOV) lane",
    descriptionTh: "High-occupancy vehicle (HOV) lane",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Thailand_road_sign_%E0%B8%99-18.svg/250px-Thailand_road_sign_%E0%B8%99-18.svg.png",
  },
  {
    id: "information-386",
    category: "information",
    vehicles: ["all"],
    nameEn: "Weigh station",
    nameTh: "Weigh station",
    descriptionEn: "Weigh station",
    descriptionTh: "Weigh station",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Thailand_road_sign_%E0%B8%99-25-1.svg/250px-Thailand_road_sign_%E0%B8%99-25-1.svg.png",
  },
  {
    id: "information-387",
    category: "information",
    vehicles: ["all"],
    nameEn: "Weigh station",
    nameTh: "Weigh station",
    descriptionEn: "Weigh station",
    descriptionTh: "Weigh station",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Thailand_road_sign_%E0%B8%99-25-2.svg/250px-Thailand_road_sign_%E0%B8%99-25-2.svg.png",
  },
  {
    id: "information-388",
    category: "information",
    vehicles: ["all"],
    nameEn: "Weigh station",
    nameTh: "Weigh station",
    descriptionEn: "Weigh station",
    descriptionTh: "Weigh station",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Thailand_road_sign_%E0%B8%99-25-3.svg/250px-Thailand_road_sign_%E0%B8%99-25-3.svg.png",
  },
  {
    id: "information-389",
    category: "information",
    vehicles: ["all"],
    nameEn: "Weigh station",
    nameTh: "Weigh station",
    descriptionEn: "Weigh station",
    descriptionTh: "Weigh station",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Thailand_road_sign_%E0%B8%99-25-4.svg/250px-Thailand_road_sign_%E0%B8%99-25-4.svg.png",
  },
  {
    id: "information-390",
    category: "information",
    vehicles: ["all"],
    nameEn: "Weigh station",
    nameTh: "Weigh station",
    descriptionEn: "Weigh station",
    descriptionTh: "Weigh station",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Thailand_road_sign_%E0%B8%99-25-5.svg/250px-Thailand_road_sign_%E0%B8%99-25-5.svg.png",
  },
  {
    id: "information-391",
    category: "information",
    vehicles: ["all"],
    nameEn: "Weigh station",
    nameTh: "Weigh station",
    descriptionEn: "Weigh station",
    descriptionTh: "Weigh station",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Thailand_road_sign_%E0%B8%99-25-6.svg/250px-Thailand_road_sign_%E0%B8%99-25-6.svg.png",
  },
  {
    id: "information-392",
    category: "information",
    vehicles: ["all"],
    nameEn: "Rest area",
    nameTh: "Rest area",
    descriptionEn: "Rest area",
    descriptionTh: "Rest area",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Thailand_road_sign_%E0%B8%99-26-1.svg/250px-Thailand_road_sign_%E0%B8%99-26-1.svg.png",
  },
  {
    id: "information-393",
    category: "information",
    vehicles: ["all"],
    nameEn: "Rest area",
    nameTh: "Rest area",
    descriptionEn: "Rest area",
    descriptionTh: "Rest area",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Thailand_road_sign_%E0%B8%99-26-2.svg/250px-Thailand_road_sign_%E0%B8%99-26-2.svg.png",
  },
  {
    id: "information-394",
    category: "information",
    vehicles: ["all"],
    nameEn: "Restaurant",
    nameTh: "Restaurant",
    descriptionEn: "Restaurant",
    descriptionTh: "Restaurant",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Thailand_road_sign_%E0%B8%99-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3.svg.png",
  },
  {
    id: "information-395",
    category: "information",
    vehicles: ["all"],
    nameEn: "Restaurant shop",
    nameTh: "Restaurant shop",
    descriptionEn: "Restaurant shop",
    descriptionTh: "Restaurant shop",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Thailand_road_sign_%E0%B8%99-%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3.svg.png",
  },
  {
    id: "information-396",
    category: "information",
    vehicles: ["all"],
    nameEn: "Refreshment shop",
    nameTh: "Refreshment shop",
    descriptionEn: "Refreshment shop",
    descriptionTh: "Refreshment shop",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Thailand_road_sign_%E0%B8%99-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1.svg.png",
  },
  {
    id: "information-397",
    category: "information",
    vehicles: ["all"],
    nameEn: "Accommodation",
    nameTh: "Accommodation",
    descriptionEn: "Accommodation",
    descriptionTh: "Accommodation",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Thailand_road_sign_%E0%B8%99-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1.svg.png",
  },
  {
    id: "information-398",
    category: "information",
    vehicles: ["all"],
    nameEn: "Wi-Fi and Internet",
    nameTh: "Wi-Fi and Internet",
    descriptionEn: "Wi-Fi and Internet",
    descriptionTh: "Wi-Fi and Internet",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Thailand_road_sign_%E0%B8%99-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3_Wi-Fi_%E0%B9%81%E0%B8%A5%E0%B8%B0_Internet.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3_Wi-Fi_%E0%B9%81%E0%B8%A5%E0%B8%B0_Internet.svg.png",
  },
  {
    id: "information-399",
    category: "information",
    vehicles: ["all"],
    nameEn: "Advance scenic area distance",
    nameTh: "Advance scenic area distance",
    descriptionEn: "Advance scenic area distance",
    descriptionTh: "Advance scenic area distance",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Thailand_road_sign_%E0%B8%99-27-1.svg/250px-Thailand_road_sign_%E0%B8%99-27-1.svg.png",
  },
  {
    id: "information-400",
    category: "information",
    vehicles: ["all"],
    nameEn: "Scenic area exit direction (left)",
    nameTh: "Scenic area exit direction (left)",
    descriptionEn: "Scenic area exit direction (left)",
    descriptionTh: "Scenic area exit direction (left)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Thailand_road_sign_%E0%B8%99-27-2.svg/250px-Thailand_road_sign_%E0%B8%99-27-2.svg.png",
  },
  {
    id: "information-401",
    category: "information",
    vehicles: ["all"],
    nameEn: "Scenic area exit direction (right)",
    nameTh: "Scenic area exit direction (right)",
    descriptionEn: "Scenic area exit direction (right)",
    descriptionTh: "Scenic area exit direction (right)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Thailand_road_sign_%E0%B8%99-27-3.svg/250px-Thailand_road_sign_%E0%B8%99-27-3.svg.png",
  },
  {
    id: "information-402",
    category: "information",
    vehicles: ["all"],
    nameEn: "Road name",
    nameTh: "Road name",
    descriptionEn: "Road name",
    descriptionTh: "Road name",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Thailand_Road_Sign_%E0%B8%99-29.svg/250px-Thailand_Road_Sign_%E0%B8%99-29.svg.png",
  },
  {
    id: "information-403",
    category: "information",
    vehicles: ["all"],
    nameEn: "Bicycles lane",
    nameTh: "Bicycles lane",
    descriptionEn: "Bicycles lane",
    descriptionTh: "Bicycles lane",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Thailand_road_sign_%E0%B8%99-30.svg/250px-Thailand_road_sign_%E0%B8%99-30.svg.png",
  },
  {
    id: "information-404",
    category: "information",
    vehicles: ["motorcycle"],
    nameEn: "Bicycles and motorcycles keep left",
    nameTh: "Bicycles and motorcycles keep left",
    descriptionEn: "Bicycles and motorcycles keep left",
    descriptionTh: "Bicycles and motorcycles keep left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Thailand_road_sign_%E0%B8%99-31.svg/250px-Thailand_road_sign_%E0%B8%99-31.svg.png",
  },
  {
    id: "information-405",
    category: "information",
    vehicles: ["all"],
    nameEn: "Expressway (EXAT)",
    nameTh: "Expressway (EXAT)",
    descriptionEn: "Expressway (EXAT)",
    descriptionTh: "Expressway (EXAT)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Thailand_road_sign_Expressway.svg/250px-Thailand_road_sign_Expressway.svg.png",
  },
  {
    id: "information-406",
    category: "information",
    vehicles: ["all"],
    nameEn: "Airport (Access road from Highways)",
    nameTh: "Airport (Access road from Highways)",
    descriptionEn: "Airport (Access road from Highways)",
    descriptionTh: "Airport (Access road from Highways)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thailand_road_sign_Airport.svg/250px-Thailand_road_sign_Airport.svg.png",
  },
  {
    id: "information-407",
    category: "information",
    vehicles: ["all"],
    nameEn: "Airport (Access road from Motorways/Major Roads)",
    nameTh: "Airport (Access road from Motorways/Major Roads)",
    descriptionEn: "Airport (Access road from Motorways/Major Roads)",
    descriptionTh: "Airport (Access road from Motorways/Major Roads)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Thailand_road_sign_Airport_%28green%29.svg/250px-Thailand_road_sign_Airport_%28green%29.svg.png",
  },
  {
    id: "information-408",
    category: "information",
    vehicles: ["all"],
    nameEn: "Airport (Access road from Toll Motorways/Expressways)",
    nameTh: "Airport (Access road from Toll Motorways/Expressways)",
    descriptionEn: "Airport (Access road from Toll Motorways/Expressways)",
    descriptionTh: "Airport (Access road from Toll Motorways/Expressways)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Thailand_road_sign_Airport_%28blue%29.svg/250px-Thailand_road_sign_Airport_%28blue%29.svg.png",
  },
  {
    id: "information-409",
    category: "information",
    vehicles: ["all"],
    nameEn:
      "Airport (Access road from Toll Motorways/Expressways)\n                        with a Name",
    nameTh:
      "Airport (Access road from Toll Motorways/Expressways)\n                        with a Name",
    descriptionEn:
      "Airport (Access road from Toll Motorways/Expressways)\n                        with a Name",
    descriptionTh:
      "Airport (Access road from Toll Motorways/Expressways)\n                        with a Name",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Thailand_road_sign_Airport_%28blue%29_%2B_%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88.svg/250px-Thailand_road_sign_Airport_%28blue%29_%2B_%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88.svg.png",
  },
  {
    id: "information-410",
    category: "information",
    vehicles: ["all"],
    nameEn: "Bus terminal",
    nameTh: "Bus terminal",
    descriptionEn: "Bus terminal",
    descriptionTh: "Bus terminal",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Thailand_road_sign_Bus_Terminal.svg/250px-Thailand_road_sign_Bus_Terminal.svg.png",
  },
  {
    id: "information-411",
    category: "information",
    vehicles: ["all"],
    nameEn: "Ferry pier",
    nameTh: "Ferry pier",
    descriptionEn: "Ferry pier",
    descriptionTh: "Ferry pier",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Thailand_road_sign_Ferry_Pier.svg/250px-Thailand_road_sign_Ferry_Pier.svg.png",
  },
  {
    id: "information-412",
    category: "information",
    vehicles: ["all"],
    nameEn: "Ferry port",
    nameTh: "Ferry port",
    descriptionEn: "Ferry port",
    descriptionTh: "Ferry port",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Thailand_road_sign_Ferry_Port.svg/250px-Thailand_road_sign_Ferry_Port.svg.png",
  },
  {
    id: "information-413",
    category: "information",
    vehicles: ["all"],
    nameEn: "Railway station",
    nameTh: "Railway station",
    descriptionEn: "Railway station",
    descriptionTh: "Railway station",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Thailand_road_sign_Railway_Station.svg/250px-Thailand_road_sign_Railway_Station.svg.png",
  },
  {
    id: "information-414",
    category: "information",
    vehicles: ["all"],
    nameEn: "Toilet gender",
    nameTh: "Toilet gender",
    descriptionEn: "Toilet gender",
    descriptionTh: "Toilet gender",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Thailand_road_sign_%E0%B8%99-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B2.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B2.svg.png",
  },
  {
    id: "information-415",
    category: "information",
    vehicles: ["all"],
    nameEn: "Parking lot",
    nameTh: "Parking lot",
    descriptionEn: "Parking lot",
    descriptionTh: "Parking lot",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Thailand_road_sign_%E0%B8%99-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%96.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%96.svg.png",
  },
  {
    id: "information-416",
    category: "information",
    vehicles: ["all"],
    nameEn: "Gasoline",
    nameTh: "Gasoline",
    descriptionEn: "Gasoline",
    descriptionTh: "Gasoline",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99.svg.png",
  },
  {
    id: "information-417",
    category: "information",
    vehicles: ["all"],
    nameEn: "NGV Gasoline",
    nameTh: "NGV Gasoline",
    descriptionEn: "NGV Gasoline",
    descriptionTh: "NGV Gasoline",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B9%8A%E0%B8%B2%E0%B8%8B_NGV.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B9%8A%E0%B8%B2%E0%B8%8B_NGV.svg.png",
  },
  {
    id: "information-418",
    category: "information",
    vehicles: ["all"],
    nameEn: "LPG Gasoline",
    nameTh: "LPG Gasoline",
    descriptionEn: "LPG Gasoline",
    descriptionTh: "LPG Gasoline",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B9%8A%E0%B8%B2%E0%B8%8B_LPG.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B9%8A%E0%B8%B2%E0%B8%8B_LPG.svg.png",
  },
  {
    id: "information-419",
    category: "information",
    vehicles: ["all"],
    nameEn: "EV electric Station",
    nameTh: "EV electric Station",
    descriptionEn: "EV electric Station",
    descriptionTh: "EV electric Station",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%AD%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B8%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%AD%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B8%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2.svg.png",
  },
  {
    id: "information-420",
    category: "information",
    vehicles: ["all"],
    nameEn: "E85 Gasoline",
    nameTh: "E85 Gasoline",
    descriptionEn: "E85 Gasoline",
    descriptionTh: "E85 Gasoline",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%8A%E0%B8%AA%E0%B9%82%E0%B8%8B%E0%B8%AE%E0%B8%AD%E0%B8%A5%E0%B9%8C_E85.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%8A%E0%B8%AA%E0%B9%82%E0%B8%8B%E0%B8%AE%E0%B8%AD%E0%B8%A5%E0%B9%8C_E85.svg.png",
  },
  {
    id: "information-421",
    category: "information",
    vehicles: ["all"],
    nameEn: "B20 Gasoline",
    nameTh: "B20 Gasoline",
    descriptionEn: "B20 Gasoline",
    descriptionTh: "B20 Gasoline",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%9A%E0%B9%82%E0%B8%AD%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%8B%E0%B8%A5_B20.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%9A%E0%B9%82%E0%B8%AD%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%8B%E0%B8%A5_B20.svg.png",
  },
  {
    id: "information-422",
    category: "information",
    vehicles: ["all"],
    nameEn: "General information (Rural roads)",
    nameTh: "General information (Rural roads)",
    descriptionEn: "General information (Rural roads)",
    descriptionTh: "General information (Rural roads)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Thailand_road_sign_%E0%B8%82-1.svg/250px-Thailand_road_sign_%E0%B8%82-1.svg.png",
  },
  {
    id: "information-423",
    category: "information",
    vehicles: ["all"],
    nameEn: "General information (Rural roads)",
    nameTh: "General information (Rural roads)",
    descriptionEn: "General information (Rural roads)",
    descriptionTh: "General information (Rural roads)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Thailand_road_sign_%E0%B8%82-2.svg/250px-Thailand_road_sign_%E0%B8%82-2.svg.png",
  },
  {
    id: "information-424",
    category: "information",
    vehicles: ["all"],
    nameEn: "Clinic",
    nameTh: "Clinic",
    descriptionEn: "Clinic",
    descriptionTh: "Clinic",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Thailand_road_sign_%E0%B8%99-%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C.svg/250px-Thailand_road_sign_%E0%B8%99-%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C.svg.png",
  },
  {
    id: "information-425",
    category: "information",
    vehicles: ["all"],
    nameEn: "Directional guide signs on Highways (to the left lane)",
    nameTh: "Directional guide signs on Highways (to the left lane)",
    descriptionEn: "Directional guide signs on Highways (to the left lane)",
    descriptionTh: "Directional guide signs on Highways (to the left lane)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Thailand_road_sign_Trang.svg/250px-Thailand_road_sign_Trang.svg.png",
  },
  {
    id: "information-426",
    category: "information",
    vehicles: ["all"],
    nameEn: "Directional guide signs on Highways (through lanes)",
    nameTh: "Directional guide signs on Highways (through lanes)",
    descriptionEn: "Directional guide signs on Highways (through lanes)",
    descriptionTh: "Directional guide signs on Highways (through lanes)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Thailand_road_sign_Guide_Signs_on_Highways_%28through_lanes%29.svg/250px-Thailand_road_sign_Guide_Signs_on_Highways_%28through_lanes%29.svg.png",
  },
  {
    id: "information-427",
    category: "information",
    vehicles: ["all"],
    nameEn:
      "1 kilometer exit warning (high-hanging type) for special\n                        highways",
    nameTh:
      "1 kilometer exit warning (high-hanging type) for special\n                        highways",
    descriptionEn:
      "1 kilometer exit warning (high-hanging type) for special\n                        highways",
    descriptionTh:
      "1 kilometer exit warning (high-hanging type) for special\n                        highways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Thailand_road_sign_Bang_Khun_Tian_Interchange_%28To_Bang_Na%29.svg/250px-Thailand_road_sign_Bang_Khun_Tian_Interchange_%28To_Bang_Na%29.svg.png",
  },
  {
    id: "information-428",
    category: "information",
    vehicles: ["all"],
    nameEn:
      "Directional guide signs on Toll Motorways (to the right\n                        lane)",
    nameTh:
      "Directional guide signs on Toll Motorways (to the right\n                        lane)",
    descriptionEn:
      "Directional guide signs on Toll Motorways (to the right\n                        lane)",
    descriptionTh:
      "Directional guide signs on Toll Motorways (to the right\n                        lane)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Thailand_Motorway_Interchange_Directional_Sign_1.svg/250px-Thailand_Motorway_Interchange_Directional_Sign_1.svg.png",
  },
  {
    id: "information-429",
    category: "information",
    vehicles: ["all"],
    nameEn: "Directional guide signs on Freeway (through lanes)",
    nameTh: "Directional guide signs on Freeway (through lanes)",
    descriptionEn: "Directional guide signs on Freeway (through lanes)",
    descriptionTh: "Directional guide signs on Freeway (through lanes)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Thailand_road_sign_Guide_Signs_on_Freeway.svg/250px-Thailand_road_sign_Guide_Signs_on_Freeway.svg.png",
  },
  {
    id: "information-430",
    category: "information",
    vehicles: ["all"],
    nameEn: "Directional guide signs on Rural Roads (right turn lane)",
    nameTh: "Directional guide signs on Rural Roads (right turn lane)",
    descriptionEn: "Directional guide signs on Rural Roads (right turn lane)",
    descriptionTh: "Directional guide signs on Rural Roads (right turn lane)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Thailand_Interchange_Exit_Direction_Sign_2.svg/250px-Thailand_Interchange_Exit_Direction_Sign_2.svg.png",
  },
  {
    id: "information-431",
    category: "information",
    vehicles: ["all"],
    nameEn: "Kilometer sign on Highways [Type A]",
    nameTh: "Kilometer sign on Highways [Type A]",
    descriptionEn: "Kilometer sign on Highways [Type A]",
    descriptionTh: "Kilometer sign on Highways [Type A]",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Thailand_Kilometer_Sign_Highway-31.svg/120px-Thailand_Kilometer_Sign_Highway-31.svg.png",
  },
  {
    id: "information-432",
    category: "information",
    vehicles: ["all"],
    nameEn: "Kilometer sign on Motorways [Type A]",
    nameTh: "Kilometer sign on Motorways [Type A]",
    descriptionEn: "Kilometer sign on Motorways [Type A]",
    descriptionTh: "Kilometer sign on Motorways [Type A]",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Thailand_Kilometer_Sign_Motorway-f9.svg/120px-Thailand_Kilometer_Sign_Motorway-f9.svg.png",
  },
  {
    id: "information-433",
    category: "information",
    vehicles: ["all"],
    nameEn: "Kilometer sign on Motorways (Toll Roads) [Type A]",
    nameTh: "Kilometer sign on Motorways (Toll Roads) [Type A]",
    descriptionEn: "Kilometer sign on Motorways (Toll Roads) [Type A]",
    descriptionTh: "Kilometer sign on Motorways (Toll Roads) [Type A]",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Thailand_Kilometer_Sign_Motorway-t7.svg/120px-Thailand_Kilometer_Sign_Motorway-t7.svg.png",
  },
  {
    id: "information-434",
    category: "information",
    vehicles: ["all"],
    nameEn: "Kilometer sign on Highways [Type B]",
    nameTh: "Kilometer sign on Highways [Type B]",
    descriptionEn: "Kilometer sign on Highways [Type B]",
    descriptionTh: "Kilometer sign on Highways [Type B]",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Thailand_Kilometer_Sign_%28Type_B%29.svg/120px-Thailand_Kilometer_Sign_%28Type_B%29.svg.png",
  },
  {
    id: "information-435",
    category: "information",
    vehicles: ["all"],
    nameEn: "Kilometer sign on Rural Roads",
    nameTh: "Kilometer sign on Rural Roads",
    descriptionEn: "Kilometer sign on Rural Roads",
    descriptionTh: "Kilometer sign on Rural Roads",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Thailand_Kilometer_Sign_Rural_Road-%E0%B8%8A%E0%B8%A13035.svg/120px-Thailand_Kilometer_Sign_Rural_Road-%E0%B8%8A%E0%B8%A13035.svg.png",
  },
  {
    id: "information-436",
    category: "information",
    vehicles: ["all"],
    nameEn: "Kilometer sign on Rural Roads [Type B]",
    nameTh: "Kilometer sign on Rural Roads [Type B]",
    descriptionEn: "Kilometer sign on Rural Roads [Type B]",
    descriptionTh: "Kilometer sign on Rural Roads [Type B]",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Thailand_Kilometer_Sign_Rural_Road_%28Type_B%29.svg/120px-Thailand_Kilometer_Sign_Rural_Road_%28Type_B%29.svg.png",
  },
  {
    id: "information-437",
    category: "information",
    vehicles: ["all"],
    nameEn: "Kilometer sign on Expressways",
    nameTh: "Kilometer sign on Expressways",
    descriptionEn: "Kilometer sign on Expressways",
    descriptionTh: "Kilometer sign on Expressways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Thailand_Kilometer_Sign_Expressway-%E0%B9%80%E0%B8%89%E0%B8%A5%E0%B8%B4%E0%B8%A1%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3.svg/250px-Thailand_Kilometer_Sign_Expressway-%E0%B9%80%E0%B8%89%E0%B8%A5%E0%B8%B4%E0%B8%A1%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3.svg.png",
  },
  {
    id: "information-438",
    category: "information",
    vehicles: ["all"],
    nameEn: "100 Meter sign on Highway",
    nameTh: "100 Meter sign on Highway",
    descriptionEn: "100 Meter sign on Highway",
    descriptionTh: "100 Meter sign on Highway",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Thailand_100_Meter_Sign.svg/60px-Thailand_100_Meter_Sign.svg.png",
  },
  {
    id: "information-439",
    category: "information",
    vehicles: ["all"],
    nameEn: "100 Meter sign on Motorways",
    nameTh: "100 Meter sign on Motorways",
    descriptionEn: "100 Meter sign on Motorways",
    descriptionTh: "100 Meter sign on Motorways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Thailand_100_Meter_Sign_Motorway.svg/250px-Thailand_100_Meter_Sign_Motorway.svg.png",
  },
  {
    id: "information-440",
    category: "information",
    vehicles: ["all"],
    nameEn: "Exit number plaques on Highways / Motorways",
    nameTh: "Exit number plaques on Highways / Motorways",
    descriptionEn: "Exit number plaques on Highways / Motorways",
    descriptionTh: "Exit number plaques on Highways / Motorways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Thailand_road_sign_Exit_Number_Plaques-Highways.svg/500px-Thailand_road_sign_Exit_Number_Plaques-Highways.svg.png",
  },
  {
    id: "information-441",
    category: "information",
    vehicles: ["all"],
    nameEn: "Exit number plaques on Toll Motorways",
    nameTh: "Exit number plaques on Toll Motorways",
    descriptionEn: "Exit number plaques on Toll Motorways",
    descriptionTh: "Exit number plaques on Toll Motorways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Thailand_road_sign_Exit_Number_Plaques-Toll_Motorways.svg/500px-Thailand_road_sign_Exit_Number_Plaques-Toll_Motorways.svg.png",
  },
  {
    id: "information-442",
    category: "information",
    vehicles: ["all"],
    nameEn: "exit number sign (for expressway)",
    nameTh: "exit number sign (for expressway)",
    descriptionEn: "exit number sign (for expressway)",
    descriptionTh: "exit number sign (for expressway)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Thailand_road_sign_Exit_Number_Plaques-Expressways.svg/250px-Thailand_road_sign_Exit_Number_Plaques-Expressways.svg.png",
  },
  {
    id: "information-443",
    category: "information",
    vehicles: ["all"],
    nameEn: "exit number sign (For the Si Rat Expressway)",
    nameTh: "exit number sign (For the Si Rat Expressway)",
    descriptionEn: "exit number sign (For the Si Rat Expressway)",
    descriptionTh: "exit number sign (For the Si Rat Expressway)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Thailand_road_sign_Exit_Number_Plaques-Si_Rat_Expressway.svg/250px-Thailand_road_sign_Exit_Number_Plaques-Si_Rat_Expressway.svg.png",
  },
  {
    id: "information-444",
    category: "information",
    vehicles: ["all"],
    nameEn: "Stop",
    nameTh: "Stop",
    descriptionEn: "Stop",
    descriptionTh: "Stop",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Thailand_road_sign_%E0%B8%9A-1_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-1_%28old%29.svg.png",
  },
  {
    id: "information-445",
    category: "information",
    vehicles: ["all"],
    nameEn: "No entry",
    nameTh: "No entry",
    descriptionEn: "No entry",
    descriptionTh: "No entry",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Thailand_road_sign_%E0%B8%9A-5_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-5_%28old%29.svg.png",
  },
  {
    id: "information-446",
    category: "information",
    vehicles: ["truck"],
    nameEn: "No tractors",
    nameTh: "No tractors",
    descriptionEn: "No tractors",
    descriptionTh: "No tractors",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/TH_road_sign_%E0%B8%9A-22_%28old%29.svg/250px-TH_road_sign_%E0%B8%9A-22_%28old%29.svg.png",
  },
  {
    id: "information-447",
    category: "information",
    vehicles: ["all"],
    nameEn: "Stop at checkpoint (e.g.: customs, police)",
    nameTh: "Stop at checkpoint (e.g.: customs, police)",
    descriptionEn: "Stop at checkpoint (e.g.: customs, police)",
    descriptionTh: "Stop at checkpoint (e.g.: customs, police)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/TH_road_sign_%E0%B8%9A-31_%28old%29.svg/250px-TH_road_sign_%E0%B8%9A-31_%28old%29.svg.png",
  },
  {
    id: "information-448",
    category: "information",
    vehicles: ["all"],
    nameEn: "Speed limit (50 km/h)",
    nameTh: "Speed limit (50 km/h)",
    descriptionEn: "Speed limit (50 km/h)",
    descriptionTh: "Speed limit (50 km/h)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/TH_road_sign_%E0%B8%9A-32-50_%28old%29.svg/250px-TH_road_sign_%E0%B8%9A-32-50_%28old%29.svg.png",
  },
  {
    id: "information-449",
    category: "information",
    vehicles: ["all"],
    nameEn: "Go straight",
    nameTh: "Go straight",
    descriptionEn: "Go straight",
    descriptionTh: "Go straight",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Thailand_road_sign_%E0%B8%9A-37_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-37_%28old%29.svg.png",
  },
  {
    id: "information-450",
    category: "information",
    vehicles: ["all"],
    nameEn: "Turn left",
    nameTh: "Turn left",
    descriptionEn: "Turn left",
    descriptionTh: "Turn left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Thailand_road_sign_%E0%B8%9A-38_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-38_%28old%29.svg.png",
  },
  {
    id: "information-451",
    category: "information",
    vehicles: ["all"],
    nameEn: "Turn right",
    nameTh: "Turn right",
    descriptionEn: "Turn right",
    descriptionTh: "Turn right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Thailand_road_sign_%E0%B8%9A-39_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-39_%28old%29.svg.png",
  },
  {
    id: "information-452",
    category: "information",
    vehicles: ["all"],
    nameEn: "Keep left",
    nameTh: "Keep left",
    descriptionEn: "Keep left",
    descriptionTh: "Keep left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Thailand_road_sign_%E0%B8%9A-40_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-40_%28old%29.svg.png",
  },
  {
    id: "information-453",
    category: "information",
    vehicles: ["all"],
    nameEn: "Keep right",
    nameTh: "Keep right",
    descriptionEn: "Keep right",
    descriptionTh: "Keep right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Thailand_road_sign_%E0%B8%9A-41_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-41_%28old%29.svg.png",
  },
  {
    id: "information-454",
    category: "information",
    vehicles: ["all"],
    nameEn: "Pass on either side",
    nameTh: "Pass on either side",
    descriptionEn: "Pass on either side",
    descriptionTh: "Pass on either side",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Thailand_road_sign_%E0%B8%9A-42_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-42_%28old%29.svg.png",
  },
  {
    id: "information-455",
    category: "information",
    vehicles: ["all"],
    nameEn: "Turn left",
    nameTh: "Turn left",
    descriptionEn: "Turn left",
    descriptionTh: "Turn left",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Thailand_road_sign_%E0%B8%9A-43_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-43_%28old%29.svg.png",
  },
  {
    id: "information-456",
    category: "information",
    vehicles: ["all"],
    nameEn: "Turn right",
    nameTh: "Turn right",
    descriptionEn: "Turn right",
    descriptionTh: "Turn right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Thailand_road_sign_%E0%B8%9A-44_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-44_%28old%29.svg.png",
  },
  {
    id: "information-457",
    category: "information",
    vehicles: ["all"],
    nameEn: "Turn left or right",
    nameTh: "Turn left or right",
    descriptionEn: "Turn left or right",
    descriptionTh: "Turn left or right",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Thailand_road_sign_%E0%B8%9A-45_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-45_%28old%29.svg.png",
  },
  {
    id: "information-458",
    category: "information",
    vehicles: ["all"],
    nameEn: "Roundabout",
    nameTh: "Roundabout",
    descriptionEn: "Roundabout",
    descriptionTh: "Roundabout",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Thailand_road_sign_%E0%B8%9A-48_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%9A-48_%28old%29.svg.png",
  },
  {
    id: "information-459",
    category: "information",
    vehicles: ["all"],
    nameEn: "End of speed limit",
    nameTh: "End of speed limit",
    descriptionEn: "End of speed limit",
    descriptionTh: "End of speed limit",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Thailand_road_sign_%E0%B8%9A-55_%28old-1%29.svg/250px-Thailand_road_sign_%E0%B8%9A-55_%28old-1%29.svg.png",
  },
  {
    id: "information-460",
    category: "information",
    vehicles: ["all"],
    nameEn: "End of overtaking prohibition",
    nameTh: "End of overtaking prohibition",
    descriptionEn: "End of overtaking prohibition",
    descriptionTh: "End of overtaking prohibition",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Thailand_road_sign_%E0%B8%9A-55_%28old-2%29.svg/250px-Thailand_road_sign_%E0%B8%9A-55_%28old-2%29.svg.png",
  },
  {
    id: "information-461",
    category: "information",
    vehicles: ["all"],
    nameEn: "Road narrows on both sides",
    nameTh: "Road narrows on both sides",
    descriptionEn: "Road narrows on both sides",
    descriptionTh: "Road narrows on both sides",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Thailand_road_sign_%E0%B8%95-22_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95-22_%28old%29.svg.png",
  },
  {
    id: "information-462",
    category: "information",
    vehicles: ["all"],
    nameEn: "U turn Ahead",
    nameTh: "U turn Ahead",
    descriptionEn: "U turn Ahead",
    descriptionTh: "U turn Ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Thailand_road_sign_%E0%B8%95-50_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95-50_%28old%29.svg.png",
  },
  {
    id: "information-463",
    category: "information",
    vehicles: ["all"],
    nameEn: "U turn Ahead",
    nameTh: "U turn Ahead",
    descriptionEn: "U turn Ahead",
    descriptionTh: "U turn Ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Thailand_road_sign_%E0%B8%95-51_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95-51_%28old%29.svg.png",
  },
  {
    id: "information-464",
    category: "information",
    vehicles: ["all"],
    nameEn: "Stop ahead",
    nameTh: "Stop ahead",
    descriptionEn: "Stop ahead",
    descriptionTh: "Stop ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Thailand_road_sign_%E0%B8%95-54_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95-54_%28old%29.svg.png",
  },
  {
    id: "information-465",
    category: "information",
    vehicles: ["all"],
    nameEn: "School children",
    nameTh: "School children",
    descriptionEn: "School children",
    descriptionTh: "School children",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Thailand_road_sign_%E0%B8%95-57_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95-57_%28old%29.svg.png",
  },
  {
    id: "information-466",
    category: "information",
    vehicles: ["all"],
    nameEn: "No overtaking zone",
    nameTh: "No overtaking zone",
    descriptionEn: "No overtaking zone",
    descriptionTh: "No overtaking zone",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Thailand_road_sign_%E0%B8%95-61_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95-61_%28old%29.svg.png",
  },
  {
    id: "information-467",
    category: "information",
    vehicles: ["all"],
    nameEn: "Advisory speed",
    nameTh: "Advisory speed",
    descriptionEn: "Advisory speed",
    descriptionTh: "Advisory speed",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Thailand_road_sign_%E0%B8%95%E0%B8%AA-15-60_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-15-60_%28old%29.svg.png",
  },
  {
    id: "information-468",
    category: "information",
    vehicles: ["all"],
    nameEn: "Advisory speed",
    nameTh: "Advisory speed",
    descriptionEn: "Advisory speed",
    descriptionTh: "Advisory speed",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Thailand_road_sign_%E0%B8%95%E0%B8%AA-16-60_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-16-60_%28old%29.svg.png",
  },
  {
    id: "information-469",
    category: "information",
    vehicles: ["all"],
    nameEn: "Crossroad Intersection-1",
    nameTh: "Crossroad Intersection-1",
    descriptionEn: "Crossroad Intersection-1",
    descriptionTh: "Crossroad Intersection-1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-1_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-1_%28old%29.svg.png",
  },
  {
    id: "information-470",
    category: "information",
    vehicles: ["all"],
    nameEn: "Traffic signal Ahead Intersection-2",
    nameTh: "Traffic signal Ahead Intersection-2",
    descriptionEn: "Traffic signal Ahead Intersection-2",
    descriptionTh: "Traffic signal Ahead Intersection-2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-2_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%AA-%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-2_%28old%29.svg.png",
  },
  {
    id: "information-471",
    category: "information",
    vehicles: ["all"],
    nameEn: "Accident ahead",
    nameTh: "Accident ahead",
    descriptionEn: "Accident ahead",
    descriptionTh: "Accident ahead",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Thailand_road_sign_%E0%B8%95%E0%B8%84-16_%28old%29.svg/250px-Thailand_road_sign_%E0%B8%95%E0%B8%84-16_%28old%29.svg.png",
  },
  {
    id: "information-472",
    category: "information",
    vehicles: ["all"],
    nameEn: "100 Meter sign on Motorways",
    nameTh: "100 Meter sign on Motorways",
    descriptionEn: "100 Meter sign on Motorways",
    descriptionTh: "100 Meter sign on Motorways",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Thailand_100_Meter_Sign_Motorway_%28Old_Sign%29.svg/250px-Thailand_100_Meter_Sign_Motorway_%28Old_Sign%29.svg.png",
  },
];

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
