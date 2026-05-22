export const meatOptions = [
  { value: "beef", label: "Nöt" },
  { value: "pork", label: "Gris" },
  { value: "poultry", label: "Fågel" },
  { value: "game", label: "Vilt" },
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

  // frequency
  daily: "Dagligen",
  weekly: "Några gånger/vecka",
  monthly: "Någon gång/månaden",

  // meat
  beef: "Nöt",
  pork: "Gris",
  poultry: "Fågel",
  game: "Vilt",

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

  // sugar/fried products
  cookies: "Kakor",
  chocolate: "Choklad",
  candy: "Smågosdis",
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
  wine: "Vin",
  spirits: "Starksprit",

  // travel
  often: "Reser ofta",
  rarely: "Reser sällan",

  // work
  good: "Trivs bra",
  bad: "Trivs dåligt",
  low: "Bra nivå",
  ok: "Ok nivå",
  high: "Hög nivå",
  stimulating: "Stimulerande",
  balanced: "Balanserad",
  heavy: "Betungande",

  // family
  veryGood: "Mycket bra",
  veryStress: "Mycket stress",
  veryAnxious: "Mycket oro",
  allGood: "Allt är bra",

  // tobacco
  smokes: "Röker",
  snuff: "Snusar",
  nicotineGum: "Nikotintuggummi",

  // sleep quality
  deep: "Djup sömn",
  lightSleeper: "Lättväckt",
  wakesDuringNight: "Vaknar på natten",

  // sleep onset
  easyToSleep: "Lätt att somna",
  hardToSleep: "Svårt att somna",
  hardToWake: "Svårt att vakna",

  // energy
  morning: "Morgon",
  forenoon: "Förmiddag",
  lunch: "Lunch",
  afternoon: "Eftermiddag",
  evening: "Kväll",

  // cognitive
  goodMemory: "Bra minne",
  poorLearning: "Dålig inlärning",
  hardDecisions: "Svårt att ta beslut",
  hardFocus: "Svårt att koncentrera sig",

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
  beforeMeal: "Före måltid",
  afterMeal: "Efter måltid",
  skippedMeal: "Hoppar över måltid",
  heavyMeal: "Tunga/sena måltider",

  // stool
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

  // menopause
  hotFlashes: "Svettningar",
  dryMucosa: "Sköra slemhinnor",
  osteoporosis: "Benskörhet",

  // joint/muscle
  pain: "Smärta",
  stiffness: "Stelhet",
  soreness: "Ömhet",
  weakMuscles: "Försvagade muskler",
  cramps: "Kramper",
  weakStrength: "Svag styrka",

  // circulation
  handsWhite: "Händer/fötter vita",
  handsCold: "Händer/fötter kalla",
  handsWarm: "Händer/fötter varma",
  numbWarm: "Domnar vid värme",
  numbCold: "Domnar vid kyla",

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
};

export function getLabel(value) {
  if (value === null || value === undefined) return "";
  return labelMap[value] ?? value;
}

export function getLabels(values) {
  if (!values) return "";
  if (Array.isArray(values)) {
    if (values.length === 0) return "";
    return values.map(getLabel).join(", ");
  }
  return getLabel(values);
}
