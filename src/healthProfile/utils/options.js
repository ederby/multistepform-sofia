export const meatOptions = [
  { value: "beef", label: "Nöt" },
  { value: "pork", label: "Gris" },
  { value: "poultry", label: "Fågel" },
  { value: "game", label: "Vilt" },
  { value: "lamb", label: "Lamm" },
  { value: "charcuterie", label: "Chark" },
];

export const seafoodOptions = [
  { value: "salmon", label: "Lax" },
  { value: "whiteFish", label: "Vit fisk (torsk/sej/kolja)" },
  { value: "oilyFish", label: "Fet fisk (makrill/sardiner/sill)" },
  { value: "tuna", label: "Tonfisk" },
  { value: "otherFish", label: "Annan fisk" },
  { value: "shrimp", label: "Räkor" },
  { value: "mussels", label: "Musslor" },
  { value: "crustaceans", label: "Kräftdjur (kräftor/hummer)" },
  { value: "otherSeafood", label: "Annat skaldjur" },
];

export const frequencyOptions = [
  { value: "daily", label: "Dagligen" },
  { value: "weekly", label: "Några gånger i veckan" },
  { value: "monthly", label: "Någon gång i månaden" },
  { value: "seldom", label: "Mer sällan" },
  { value: "false", label: "Aldrig" },
];

const labelMap = {
  // boolean
  true: "Ja",
  false: "Nej",
  yes: "Ja",
  no: "Nej",

  // gender
  male: "Man",
  female: "Kvinna",

  // meal pattern
  regular: "Regelbunden",
  irregular: "Oregelbunden",
  stressEating: "Äter ofta under stress",
  calmEating: "Äter oftast i lugn och ro",
  skipsMeals: "Hoppar ofta över måltider",
  snacksOften: "Småäter ofta",

  // food type
  mostlyHomecooked: "Främst hemlagad",
  mixedHomeSemi: "Hemlagat och halvfabrikat",
  mostlyProcessed: "Ofta halvfabrikat",
  takeawayRestaurant: "Ofta hämtmat/restaurang",

  // cooking methods
  microwaved: "Micrad",
  friedDeep: "Friterad",
  boiled: "Kokt",
  panFried: "Stekt",
  ovenBaked: "Ugnsbakad",
  raw: "Rå",
  wokFried: "Wokad",
  airfryer: "Airfryer",
  grilled: "Grillad",
  steamed: "Ångkokt",

  // frequency
  daily: "Dagligen",
  weekly: "Några gånger/vecka",
  monthly: "Någon gång/månaden",
  seldom: "Mer sällan",

  // meat
  beef: "Nöt",
  pork: "Gris",
  poultry: "Fågel",
  game: "Vilt",
  lamb: "Lamm",
  charcuterie: "Chark",

  // seafood
  salmon: "Lax",
  whiteFish: "Vit fisk",
  oilyFish: "Fet fisk",
  tuna: "Tonfisk",
  otherFish: "Annan fisk",
  shrimp: "Räkor",
  mussels: "Musslor",
  crustaceans: "Kräftdjur",
  otherSeafood: "Annat skaldjur",

  // seafood methods
  fresh: "Färsk",
  can: "Burk",
  frozen: "Fryst",
  smoked: "Rökt",
  pickled: "Gravad",

  // medicines
  medicines: "Läkemedel",
  "dietary-supplements": "Kosttillskott",
  herbs: "Örter",
  "homeopathic-remedies": "Homeopatmedel",
  other: "Övrigt",

  // food reactions
  wheat: "Vete",
  dairy: "Mjölkprodukter",
  onion: "Lök",
  fattyFood: "Fet mat",
  pepper: "Paprika",
  sugar: "Socker",
  caffeine: "Koffein",
  alcohol: "Alkohol",
  egg: "Ägg",
  gluten: "Gluten",

  // sugar/fried products
  cookies: "Kakor",
  chocolate: "Choklad",
  candy: "Smågodis",
  iceCream: "Glass",
  cereal: "Flingor",
  soda: "Läsk",
  juice: "Saft",
  jam: "Marmelad/sylt",
  fruitYogurt: "Fruktyoghurt",
  chips: "Chips",
  fries: "Pommes frites",
  falafel: "Falafel",

  // alcohol
  beer: "Öl",
  cider: "Cider",
  wine: "Vin",
  spirits: "Starksprit",

  // travel
  often: "Reser ofta",
  rarely: "Reser sällan",

  // work
  good: "Trivs bra",
  neutral: "Varken bra eller dåligt",
  bad: "Trivs dåligt",
  low: "Bra nivå",
  ok: "Ok nivå",
  high: "Hög nivå",
  stimulating: "Stimulerande",
  balanced: "Balanserad",
  heavy: "Betungande",
  notApplicable: "Ej aktuellt",

  // family
  veryGood: "Mycket bra",
  familyMixed: "Blandat",
  familyStressful: "Mycket stress eller oro",

  // tobacco
  smokes: "Röker",
  snuff: "Snusar",
  nicotineGum: "Nikotintuggummi",
  vape: "Vejp/e-cigarett",

  // sleep quality
  deep: "Djup sömn",
  lightSleeper: "Lättväckt",
  wakesDuringNight: "Vaknar på natten",

  // sleep onset
  easyToSleep: "Lätt att somna",
  hardToSleep: "Svårt att somna",
  hardToWake: "Svårt att vakna",
  easyToWake: "Lätt att vakna",

  // energy
  morning: "Morgon",
  forenoon: "Förmiddag",
  lunch: "Lunch",
  afternoon: "Eftermiddag",
  evening: "Kväll",
  night: "Natt",

  // cognitive
  goodMemory: "Bra minne",
  poorMemory: "Dåligt minne",
  poorLearning: "Dålig inlärning",
  hardDecisions: "Svårt att ta beslut",
  hardFocus: "Svårt att koncentrera sig",
  brainFog: "Hjärndimma",

  // breathing
  calmBreathing: "Andas lugnt",
  fastBreathing: "Andas snabbt/ytligt",
  barelyNotice: "Känner knappt andetagen",
  fastHeartbeat: "Snabbt hjärtslag",

  // emotions
  moodSwings: "Humörsvängningar",
  evenMood: "Jämn i humöret",
  quickTemper: "Brusar lätt upp",
  grudges: "Långsint",
  anxiety: "Ångest",
  fears: "Rädslor",
  nervousness: "Nervositet",
  lowMood: "Nedstämdhet",
  anger: "Arg",
  worried: "Orolig",
  ambivalent: "Ambivalent",
  rapidEmotions: "Skiftar känslor snabbt",
  calm: "Lugn",

  // immune
  infectionProne: "Infektionskänslig",
  easyColds: "Får lätt förkylningar",
  easilyInfected: "Smittas lätt av andra",

  // digestive
  gas: "Gaser",
  diarrhea: "Diarré",
  constipation: "Förstoppning",
  itching: "Klåda i ändtarmen",
  reflux: "Sura uppstötningar",
  nausea: "Illamående",
  bloated: "Uppsvälld",
  abdominalPain: "Magont/buksmärta",
  beforeMeal: "Före måltid",
  afterMeal: "Efter måltid",
  skippedMeal: "Hoppar över måltid",
  heavyMeal: "Tunga/sena måltider",

  // stool
  normal: "Normal",
  hard: "Hård",
  soft: "Mjuk",
  loose: "Lös",
  watery: "Vattnig",
  sticky: "Kladdig",
  mucus: "Slem",
  liquid: "Flytande",

  // menstruation
  short: "Kort",
  long: "Lång",

  // pms
  tearful: "Gråtmild",
  lowSelfEsteem: "Sänkt självförtroende",
  aggressive: "Aggressiv",
  angry: "Ilsken",
  sugarCraving: "Stort sötsug",
  fragile: "Skör",
  tenderBreasts: "Ömma bröst",
  bloating: "Svullnad/vätska",
  headache: "Huvudvärk",
  fatigue: "Trötthet",

  // menopause
  hotFlashes: "Svettningar",
  flushes: "Värmevallningar",
  dryMucosa: "Sköra slemhinnor",
  osteoporosis: "Benskörhet",
  sleepProblems: "Sömnstörningar",
  palpitations: "Hjärtklappning",
  weightGain: "Viktuppgång",

  // joint/muscle
  pain: "Smärta",
  stiffness: "Stelhet",
  soreness: "Ömhet",
  weakMuscles: "Försvagade muskler",
  cramps: "Kramper",
  weakStrength: "Svag styrka",
  swelling: "Svullnad",
  clicking: "Knakande/knäppningar",
  limitedMotion: "Rörelseinskränkning",
  tension: "Spänningar",
  twitching: "Ryckningar",

  // circulation
  handsWhite: "Händer/fötter vita",
  handsCold: "Händer/fötter kalla",
  handsWarm: "Händer/fötter varma",
  numbWarm: "Domnar vid värme",
  numbCold: "Domnar vid kyla",
  swollenLegs: "Svullna ben/fötter",
  varicoseVeins: "Åderbråck",
  tingling: "Stickningar",

  // dental fillings
  plastic: "Plast",
  porcelain: "Porslin",
  amalgam: "Amalgam",
  gold: "Guld",

  // dental issues
  rootFillings: "Rotfyllningar",
  teethGrinding: "Tandgnissel",
  gumDisease: "Tandlossning",
  toothPain: "Tandvärk",
  tenseJaw: "Spännda käkar",
  bleedingGums: "Blödande tandkött",
  caries: "Hål/karies",

  // skin
  acne: "Akne",
  eczema: "Eksem",
  boils: "Bölder",
  rash: "Utslag",
  dry: "Torr",
  oily: "Fet",
  sore: "Sårig",
  easilyBruised: "Får lätt blåmärken",
  poorHealing: "Nedsatt sårläkning",
  fungal: "Svampig",
  sweatsEasily: "Svettas lätt",
  itchySkin: "Klåda",
};

export function getLabel(value) {
  if (value === null || value === undefined) return "";
  return labelMap[value] ?? value;
}
