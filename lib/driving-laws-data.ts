export interface LawChapter {
  id: string;
  titleEn: string;
  titleTh: string;
  icon: string;
  sections: LawSection[];
}

export interface LawSection {
  titleEn: string;
  titleTh: string;
  contentEn: string;
  contentTh: string;
  items?: LawItem[];
}

export interface LawItem {
  labelEn: string;
  labelTh: string;
  descriptionEn: string;
  descriptionTh: string;
}

export const lawChapters: LawChapter[] = [
  {
    id: "driving-license",
    titleEn: "Driving License",
    titleTh: "ใบอนุญาตขับขี่",
    icon: "license",
    sections: [
      {
        titleEn: "License Requirements",
        titleTh: "ข้อกำหนดใบอนุญาต",
        contentEn:
          "To drive legally in Thailand, you must possess a valid Thai driving license or an International Driving Permit (IDP) along with your home country license.",
        contentTh:
          "ในการขับขี่อย่างถูกกฎหมายในประเทศไทย คุณต้องมีใบอนุญาตขับขี่ไทยที่ถูกต้องหรือใบขับขี่สากล (IDP) พร้อมกับใบอนุญาตจากประเทศของคุณ",
        items: [
          {
            labelEn: "Age Requirement",
            labelTh: "ข้อกำหนดอายุ",
            descriptionEn:
              "Minimum age 18 for cars, 15 for motorcycles under 110cc. Must be at least 18 for motorcycles over 110cc.",
            descriptionTh:
              "อายุขั้นต่ำ 18 ปีสำหรับรถยนต์ 15 ปีสำหรับรถจักรยานยนต์ต่ำกว่า 110 ซีซี ต้องอายุอย่างน้อย 18 ปีสำหรับรถจักรยานยนต์เกิน 110 ซีซี",
          },
          {
            labelEn: "Medical Certificate",
            labelTh: "ใบรับรองแพทย์",
            descriptionEn:
              "A medical certificate from an authorized doctor is required, certifying physical and mental fitness to drive.",
            descriptionTh:
              "ต้องมีใบรับรองแพทย์จากแพทย์ที่ได้รับอนุญาต รับรองความพร้อมทางร่างกายและจิตใจในการขับขี่",
          },
          {
            labelEn: "Theory Test",
            labelTh: "ทดสอบภาคทฤษฎี",
            descriptionEn:
              "Must pass a written test covering traffic rules, road signs, and safe driving practices. Available in Thai and English.",
            descriptionTh:
              "ต้องผ่านการทดสอบข้อเขียนเกี่ยวกับกฎจราจร ป้ายจราจร และการขับขี่ที่ปลอดภัย มีทั้งภาษาไทยและอังกฤษ",
          },
          {
            labelEn: "Practical Test",
            labelTh: "ทดสอบภาคปฏิบัติ",
            descriptionEn:
              "Driving test demonstrating ability to operate vehicle safely, including parking, lane changing, and emergency stops.",
            descriptionTh:
              "ทดสอบการขับขี่แสดงความสามารถในการควบคุมยานพาหนะอย่างปลอดภัย รวมถึงการจอด การเปลี่ยนเลน และการหยุดฉุกเฉิน",
          },
        ],
      },
      {
        titleEn: "License Types",
        titleTh: "ประเภทใบอนุญาต",
        contentEn:
          "Thailand issues different license types for different vehicle categories.",
        contentTh:
          "ประเทศไทยออกใบอนุญาตประเภทต่างๆ สำหรับยานพาหนะประเภทต่างกัน",
        items: [
          {
            labelEn: "Temporary License",
            labelTh: "ใบขับขี่ชั่วคราว",
            descriptionEn:
              "Valid for 1 year. Issued to first-time applicants. Must be renewed and upgraded to permanent license after 1 year.",
            descriptionTh:
              "ใช้ได้ 1 ปี ออกให้กับผู้สมัครครั้งแรก ต้องต่ออายุและอัปเกรดเป็นใบอนุญาตถาวรหลังจาก 1 ปี",
          },
          {
            labelEn: "Permanent License",
            labelTh: "ใบขับขี่ถาวร",
            descriptionEn:
              "Valid for 5 years. Renewable every 5 years. Available after holding temporary license for 1 year.",
            descriptionTh:
              "ใช้ได้ 5 ปี ต่ออายุทุก 5 ปี ได้รับหลังจากถือใบอนุญาตชั่วคราวมา 1 ปี",
          },
          {
            labelEn: "International Driving Permit",
            labelTh: "ใบขับขี่สากล",
            descriptionEn:
              "Valid for 1 year. Foreigners can drive in Thailand with IDP and home country license for up to 90 days.",
            descriptionTh:
              "ใช้ได้ 1 ปี ชาวต่างชาติสามารถขับขี่ในประเทศไทยด้วย IDP และใบอนุญาตจากประเทศบ้านเกิดได้นานสูงสุด 90 วัน",
          },
        ],
      },
    ],
  },
  {
    id: "traffic-rules",
    titleEn: "Traffic Rules",
    titleTh: "กฎจราจร",
    icon: "rules",
    sections: [
      {
        titleEn: "Basic Rules",
        titleTh: "กฎพื้นฐาน",
        contentEn:
          "Essential traffic rules all drivers must follow in Thailand.",
        contentTh: "กฎจราจรพื้นฐานที่ผู้ขับขี่ทุกคนต้องปฏิบัติตามในประเทศไทย",
        items: [
          {
            labelEn: "Drive on the Left",
            labelTh: "ขับขี่ทางซ้าย",
            descriptionEn:
              "Thailand follows left-hand traffic. Keep to the left side of the road and overtake on the right.",
            descriptionTh: "ประเทศไทยใช้การจราจรทางซ้าย ชิดซ้ายและแซงทางขวา",
          },
          {
            labelEn: "Speed Limits",
            labelTh: "ขีดจำกัดความเร็ว",
            descriptionEn:
              "Urban areas: 80 km/h, Highways: 90 km/h, Expressways: 120 km/h. Adjust speed according to road and weather conditions.",
            descriptionTh:
              "พื้นที่เมือง: 80 กม./ชม. ทางหลวง: 90 กม./ชม. ทางด่วน: 120 กม./ชม. ปรับความเร็วตามสภาพถนนและสภาพอากาศ",
          },
          {
            labelEn: "Seat Belts",
            labelTh: "เข็มขัดนิรภัย",
            descriptionEn:
              "All passengers must wear seat belts. Driver is responsible for ensuring all passengers are buckled.",
            descriptionTh:
              "ผู้โดยสารทุกคนต้องคาดเข็มขัดนิรภัย ผู้ขับขี่มีความรับผิดชอบให้ผู้โดยสารทุกคนคาดเข็มขัด",
          },
          {
            labelEn: "Motorcycle Helmets",
            labelTh: "หมวกกันน็อค",
            descriptionEn:
              "Mandatory for both rider and passenger. Helmet must meet Thai Industrial Standards (TIS) 369-2539.",
            descriptionTh:
              "บังคับสำหรับผู้ขับขี่และผู้โดยสาร หมวกกันน็อคต้องเป็นไปตามมาตรฐานอุตสาหกรรมไทย (มอก.) 369-2539",
          },
          {
            labelEn: "Mobile Phone Use",
            labelTh: "การใช้โทรศัพท์มือถือ",
            descriptionEn:
              "Prohibited while driving. Use hands-free devices only. Texting while driving is strictly prohibited.",
            descriptionTh:
              "ห้ามใช้ขณะขับขี่ ใช้อุปกรณ์แฮนด์ฟรีเท่านั้น ห้ามส่งข้อความขณะขับขี่อย่างเคร่งครัด",
          },
        ],
      },
      {
        titleEn: "Right of Way",
        titleTh: "สิทธิในการขับขี่",
        contentEn: "Understanding who has priority on Thai roads.",
        contentTh: "ทำความเข้าใจว่าใครมีสิทธิก่อนบนถนนไทย",
        items: [
          {
            labelEn: "Intersections",
            labelTh: "ทางแยก",
            descriptionEn:
              "Traffic already on the roundabout has priority. At unmarked intersections, yield to vehicles approaching from the right.",
            descriptionTh:
              "รถที่อยู่บนวงเวียนมีสิทธิก่อน ที่ทางแยกไม่มีป้าย ให้ทางรถที่เข้ามาทางขวา",
          },
          {
            labelEn: "Pedestrian Crossings",
            labelTh: "ทางข้ามคนเดินเท้า",
            descriptionEn:
              "Always yield to pedestrians at marked crossings. Slow down when approaching zebra crossings.",
            descriptionTh:
              "ให้ทางคนเดินเท้าที่ทางข้ามที่มีเครื่องหมาย ลดความเร็วเมื่อเข้าใกล้ทางม้าลาย",
          },
          {
            labelEn: "Emergency Vehicles",
            labelTh: "รถฉุกเฉิน",
            descriptionEn:
              "Must give way to ambulances, fire trucks, and police vehicles with sirens and lights. Pull over safely to let them pass.",
            descriptionTh:
              "ต้องให้ทางรถพยาบาล รถดับเพลิง และรถตำรวจที่มีไซเรนและไฟกระพริบ ออกไปข้างทางอย่างปลอดภัยเพื่อให้ผ่าน",
          },
        ],
      },
    ],
  },
  {
    id: "prohibitions",
    titleEn: "Prohibitions",
    titleTh: "ข้อห้าม",
    icon: "prohibition",
    sections: [
      {
        titleEn: "Strict Prohibitions",
        titleTh: "ข้อห้ามเด็ดขาด",
        contentEn:
          "Activities that are strictly prohibited while driving in Thailand.",
        contentTh: "กิจกรรมที่ห้ามเด็ดขาดขณะขับขี่ในประเทศไทย",
        items: [
          {
            labelEn: "Drunk Driving",
            labelTh: "ขับขี่ขณะเมาสุร",
            descriptionEn:
              "Blood alcohol limit: 50 mg per 100 ml of blood. Zero tolerance for novice drivers (less than 5 years experience).",
            descriptionTh:
              "ระดับแอลกอฮอล์ในเลือด: 50 มก.ต่อเลือด 100 มล. ไม่ยอมรับเลยสำหรับผู้ขับขี่มือใหม่ (ประสบการณ์น้อยกว่า 5 ปี)",
          },
          {
            labelEn: "Drug Driving",
            labelTh: "ขับขี่ภายใต้อิทธิพลยาเสพติด",
            descriptionEn:
              "Driving under influence of any narcotic drugs is strictly prohibited. Severe penalties including imprisonment.",
            descriptionTh:
              "การขับขี่ภายใต้อิทธิพลของยาเสพติดใดๆ ห้ามเด็ดขาด มีโทษหนักรวมถึงจำคุก",
          },
          {
            labelEn: "Racing",
            labelTh: "แข่งรถ",
            descriptionEn:
              "Street racing is illegal. Includes drag racing, drifting, and any form of competitive driving on public roads.",
            descriptionTh:
              "การแข่งรถบนท้องถนนผิดกฎหมาย รวมถึงการแข่งดราก การดริฟท์ และการขับขี่แข่งขันทุกรูปแบบบนถนนสาธารณะ",
          },
          {
            labelEn: "Reckless Driving",
            labelTh: "การขับขี่ประมาท",
            descriptionEn:
              "Dangerous driving that puts others at risk. Includes aggressive lane changes, tailgating, and excessive speeding.",
            descriptionTh:
              "การขับขี่อันตรายที่ทำให้ผู้อื่นตกอยู่ในความเสี่ยง รวมถึงการเปลี่ยนเลนอย่างรุนแรง การขับตาม และความเร็วสูงเกินไป",
          },
        ],
      },
      {
        titleEn: "Vehicle Requirements",
        titleTh: "ข้อกำหนดยานพาหนะ",
        contentEn:
          "Mandatory requirements for all vehicles operating in Thailand.",
        contentTh: "ข้อกำหนดบังคับสำหรับยานพาหนะทั้งหมดที่ใช้งานในประเทศไทย",
        items: [
          {
            labelEn: "Insurance",
            labelTh: "ประกันภัย",
            descriptionEn:
              "Compulsory third-party insurance (Por Ror Bor) is mandatory. Covers injury or death of third parties.",
            descriptionTh:
              "ประกันภัยบังคับ (พรบ.) เป็นข้อบังคับ คุ้มครองการบาดเจ็บหรือเสียชีวิตของบุคคลที่สาม",
          },
          {
            labelEn: "Registration",
            labelTh: "การจดทะเบียน",
            descriptionEn:
              "All vehicles must be registered and display valid license plates. Annual tax payment required.",
            descriptionTh:
              "ยานพาหนะทั้งหมดต้องจดทะเบียนและติดป้ายทะเบียนที่ถูกต้อง ต้องชำระภาษีรายปี",
          },
          {
            labelEn: "Vehicle Condition",
            labelTh: "สภาพยานพาหนะ",
            descriptionEn:
              "Vehicles must be in roadworthy condition. Working lights, brakes, and mirrors are mandatory.",
            descriptionTh:
              "ยานพาหนะต้องอยู่ในสภาพที่พร้อมใช้งาน ไฟ เบรก และกระจกมองข้างต้องใช้งานได้",
          },
        ],
      },
    ],
  },
  {
    id: "fines-penalties",
    titleEn: "Fines & Penalties",
    titleTh: "ค่าปรับและบทลงโทษ",
    icon: "fine",
    sections: [
      {
        titleEn: "Common Traffic Violations",
        titleTh: "การฝ่าฝืนจราจรทั่วไป",
        contentEn:
          "Fines for common traffic offenses in Thailand (amounts may vary by jurisdiction).",
        contentTh:
          "ค่าปรับสำหรับความผิดจราจรทั่วไปในประเทศไทย (จำนวนเงินอาจแตกต่างกันตามเขตอำนาจ)",
        items: [
          {
            labelEn: "No Driving License",
            labelTh: "ไม่มีใบขับขี่",
            descriptionEn: "Fine: 400-1,000 THB. Vehicle may be impounded.",
            descriptionTh: "ค่าปรับ: 400-1,000 บาท รถอาจถูกยึด",
          },
          {
            labelEn: "Speeding",
            labelTh: "ขับเร็วเกินกำหนด",
            descriptionEn:
              "Fine: 400-1,000 THB depending on excess speed. Repeat offenders face higher penalties.",
            descriptionTh:
              "ค่าปรับ: 400-1,000 บาท ขึ้นอยู่กับความเร็วที่เกิน ผู้กระทำซ้ำมีโทษสูงขึ้น",
          },
          {
            labelEn: "No Helmet",
            labelTh: "ไม่สวมหมวกกันน็อค",
            descriptionEn:
              "Fine: 500 THB. Both rider and passenger must wear helmets.",
            descriptionTh: "ค่าปรับ: 500 บาท ทั้งผู้ขับและผู้โดยสารต้องสวมหมวก",
          },
          {
            labelEn: "No Seat Belt",
            labelTh: "ไม่คาดเข็มขัดนิรภัย",
            descriptionEn: "Fine: 500 THB. Applies to all passengers.",
            descriptionTh: "ค่าปรับ: 500 บาท ใช้กับผู้โดยสารทุกคน",
          },
          {
            labelEn: "Running Red Light",
            labelTh: "ฝ่าไฟแดง",
            descriptionEn:
              "Fine: 1,000 THB. Serious offense that can cause accidents.",
            descriptionTh:
              "ค่าปรับ: 1,000 บาท ความผิดร้ายแรงที่อาจทำให้เกิดอุบัติเหตุ",
          },
          {
            labelEn: "Using Mobile Phone",
            labelTh: "ใช้โทรศัพท์มือถือ",
            descriptionEn:
              "Fine: 400-1,000 THB. Includes texting and holding phone while driving.",
            descriptionTh:
              "ค่าปรับ: 400-1,000 บาท รวมถึงการส่งข้อความและถือโทรศัพท์ขณะขับขี่",
          },
          {
            labelEn: "Illegal Parking",
            labelTh: "จอดรถผิดที่",
            descriptionEn:
              "Fine: 200-500 THB. Vehicle may be towed at owner's expense.",
            descriptionTh:
              "ค่าปรับ: 200-500 บาท รถอาจถูกลากจูงโดยเจ้าของรถเป็นผู้จ่าย",
          },
        ],
      },
      {
        titleEn: "Serious Offenses",
        titleTh: "ความผิดร้ายแรง",
        contentEn: "Serious traffic violations that carry heavy penalties.",
        contentTh: "การฝ่าฝืนจราจรร้ายแรงที่มีโทษหนัก",
        items: [
          {
            labelEn: "Drunk Driving",
            labelTh: "ขับรถขณะเมาสุรา",
            descriptionEn:
              "Fine: 5,000-20,000 THB and/or up to 1 year imprisonment. License suspension up to 1 year.",
            descriptionTh:
              "ค่าปรับ: 5,000-20,000 บาท และ/หรือจำคุกสูงสุด 1 ปี พักใช้ใบขับขี่สูงสุด 1 ปี",
          },
          {
            labelEn: "Hit and Run",
            labelTh: "ชนแล้วหนี",
            descriptionEn:
              "Criminal offense. Fine up to 40,000 THB and imprisonment up to 4 years. License revocation.",
            descriptionTh:
              "ความผิดทางอาญา ปรับสูงสุด 40,000 บาท และจำคุกสูงสุด 4 ปี เพิกถอนใบขับขี่",
          },
          {
            labelEn: "Causing Death",
            labelTh: "ทำให้เกิดการเสียชีวิต",
            descriptionEn:
              "Reckless driving causing death: Imprisonment up to 10 years and fine up to 200,000 THB.",
            descriptionTh:
              "การขับขี่ประมาททำให้เสียชีวิต: จำคุกสูงสุด 10 ปี และปรับสูงสุด 200,000 บาท",
          },
        ],
      },
    ],
  },
];
