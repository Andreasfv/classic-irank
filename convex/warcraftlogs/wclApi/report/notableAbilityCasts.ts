import { ClassSpecs } from "../../types/consts";

export function safeNameField(name: string) {
  return name.replaceAll("'", "").replaceAll(" ", "");
}
export const universalNotableCasts = [
  //Racials
  { name: "Berserking", id: 26297 },
  { name: "Blood Fury", id: 20572 },
  //Engineering
  { id: 82174, name: "Synapse Springs" },
  //Potions
  { name: "Golem's Blood", id: 79634 },
  { name: "Volcanic Potion", id: 79476 },
  { name: "Tol'vir Agility", id: 79633 },
  //Trinkets
  { name: "Rotting Skull", id: 107949 }, //Rotting Skull - STR Use Trinket
];

type NotableAbilityCasts = {
  [key in keyof ClassSpecs]: {
    [k in keyof ClassSpecs[key]]: { name: string; id: number }[];
  };
};

export function getAbilityNameFromID(id: string) {
  return NotableIDToName[id] ?? "Unknown";
}
interface NotableIDToName {
  [key: string]: string;
}
export const NotableIDToName: NotableIDToName = {
  //DK
  "49028": "Dancing Rune Weapon",
  "55233": "Vampiric Blood",
  "48792": "Icebound Fortitude",
  "42650": "Army of the Dead",
  "51271": "Pillar of Frost",
  "47568": "Empower Rune Weapon",
  "63560": "Dark Transformation",
  "49016": "Unholy Frenzy",
  "49206": "Summon Gargoyle",
  //Trinkets
  "107949": "Rotting Skull",
  //racials
  "26297": "Berserking",
  "20572": "Blood Fury",
  //Engineering
  "82174": "Synapse Springs",
  //Pots
  "79634": "Golem's Blood",
  "79476": "Volcanic Potion",
  "79633": "Tol'vir Agility",
};

export const classesNotableAbilityCasts: NotableAbilityCasts = {
  DeathKnight: {
    Blood: [
      { name: "Dancing Rune Weapon", id: 49028 },
      { name: "Vampiric Blood", id: 55233 },
      { name: "Icebound Fortitude", id: 48792 },
      { name: "Army of the Dead", id: 42650 },
    ],
    Frost: [
      { name: "Empower Rune Weapon", id: 47568 },
      { name: "Pillar of Frost", id: 51271 },
      { name: "Army of the Dead", id: 42650 },
    ],
    Unholy: [
      { name: "Dark Transformation", id: 63560 }, //Dark Transformation
      { name: "Army of the Dead", id: 42650 }, //Army of the Dead
      { name: "Unholy Frenzy", id: 49016 }, //Unholy Frenzy
      { name: "Summon Gargoyle", id: 49206 }, //Summon Gargoyle
      { name: "Empower Rune Weapon", id: 47568 },
    ],
  },
  Druid: { Balance: [], Feral: [], Guardian: [], Restoration: [] },
  Hunter: { BeastMastery: [], Marksmanship: [], Survival: [] },
  Mage: { Arcane: [], Fire: [], Frost: [] },
  Paladin: { Holy: [], Protection: [], Retribution: [] },
  Priest: { Discipline: [], Shadow: [] },
  Rogue: { Assassination: [], Combat: [], Subtlety: [] },
  Shaman: { Elemental: [], Enhancement: [], Restoration: [] },
  Warlock: { Affliction: [], Demonology: [], Destruction: [] },
  Warrior: { Arms: [], Fury: [], Protection: [] },
};
