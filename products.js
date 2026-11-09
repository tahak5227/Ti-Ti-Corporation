// Edit this file to add/change items. Put photos in /images and set "image".
// "images": list of photos, e.g. ["images/foot-valve-1.jpg","images/foot-valve-2.jpg"]. Empty list shows a placeholder.
// "specs": table rows on the item page as [heading, value]. Each can be plain text or { en:"..", ur:".." }.
const CATEGORIES = {
  "spare-parts": {
    en: "Petrol Pump Spare Parts",
    ur: "پیٹرول پمپ اسپیئر پارٹس",
  },
  "tank-fitting": {
    en: "UPP Pipe & Tank Fitting",
    ur: "یو پی پی پائپ اور ٹینک فٹنگ",
  },
  "fuel-meter": { en: "Fuel Meter", ur: "فیول میٹر" },
  paste: { en: "Water Finding & Dip Paste", ur: "واٹر فائنڈنگ اور ڈپ پیسٹ" },
};
const PRODUCTS = [
  {
    id: "foot-valve",
    category: "tank-fitting",
    images: [],
    name: { en: "Foot Valve", ur: "فٹ والو" },
    specs: [
      ["Size", { en: "2 inch", ur: "2 انچ" }],
      ["Material", { en: "Brass", ur: "پیتل" }],
      [
        "Used in",
        {
          en: "Underground tank suction line",
          ur: "زیر زمین ٹینک کی سکشن لائن",
        },
      ],
    ],
    description: {
      en: "Sits at the bottom of the suction pipe inside the underground tank. Keeps fuel from flowing back.",
      ur: "زیر زمین ٹینک میں سکشن پائپ کے نچلے سرے پر لگتا ہے۔ ایندھن کو واپس جانے سے روکتا ہے۔",
    },
  },
  {
    id: "nozzle",
    category: "spare-parts",
    images: [],
    name: { en: "Dispensing Nozzle", ur: "ڈسپنسنگ نوزل" },
    specs: [
      ["Size", { en: "2 inch", ur: "2 انچ" }],
      ["Material", { en: "Brass", ur: "پیتل" }],
      [
        "Used in",
        {
          en: "Underground tank suction line",
          ur: "زیر زمین ٹینک کی سکشن لائن",
        },
      ],
    ],
    description: {
      en: "Hand-held nozzle for fuel dispensers. Ask us for sizes and types.",
      ur: "فیول ڈسپنسر کے لیے ہاتھ میں پکڑنے والی نوزل۔ سائز اور اقسام کے لیے رابطہ کریں۔",
    },
  },
  {
    id: "upp-pipe",
    category: "tank-fitting",
    images: [],
    name: { en: "UPP Pipe (Underground)", ur: "یو پی پی پائپ (زیر زمین)" },
    specs: [
      ["Size", { en: "3.5 mm "}],
      ["Material", { en: "Plastic"}],
      [
        "Used in",
        {
          en: "Underground from machine to tank line",
          ur: "زیر زمین ٹینک کی سکشن لائن",
        },
      ],
    ],    
    description: {
      en: "Underground pipe that carries fuel from the tank to the dispenser.",
      ur: "ٹینک سے ڈسپنسر تک ایندھن لے جانے والا زیر زمین پائپ۔",
    },
  },
  {
    id: "fuel-meter",
    category: "fuel-meter",
    images: [],
    name: { en: "Fuel Meter", ur: "فیول میٹر" },
    specs: [      
      ["Material", { en: "Glass"}],
      [
        "Used in",
        {
          en: "To measure",          
        },
      ],
    ],    
    description: {
      en: "Measures how much fuel is dispensed. Ask us about models.",
      ur: "نکلنے والے ایندھن کی مقدار ناپتا ہے۔ ماڈلز کے لیے رابطہ کریں۔",
    },
  },
  {
    id: "water-paste",
    category: "paste",
    images: [],
    name: { en: "Water Finding Paste", ur: "واٹر فائنڈنگ پیسٹ" },
    description: {
      en: "Applied on the dip rod. Changes colour when it touches water at the bottom of the tank.",
      ur: "ڈپ راڈ پر لگایا جاتا ہے۔ ٹینک کی تہہ میں پانی لگنے پر رنگ بدل دیتا ہے۔",
    },
  },
  {
    id: "dip-paste",
    category: "paste",
    images: [],
    name: { en: "Dip Paste", ur: "ڈپ پیسٹ" },
    description: {
      en: "Paste for the dip rod to read the fuel level clearly.",
      ur: "ایندھن کی سطح واضح پڑھنے کے لیے ڈپ راڈ پر لگانے والا پیسٹ۔",
    },
  },
];
const CONTACTS = [
  {
    name: { en: "Tahir Ismail Siddiqui", ur: "طاہر اسماعیل صدیقی" },
    phone: "0345-4041489",
    wa: "923454041489",
  },
  {
    name: { en: "Hamayun Ismail Siddiqui", ur: "ہمایوں اسماعیل صدیقی" },
    phone: "0333-4213108",
    wa: "923334213108",
  },
];
