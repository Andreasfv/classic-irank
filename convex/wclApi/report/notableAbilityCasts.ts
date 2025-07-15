import { ClassSpecs } from "../../warcraftlogs/types/consts";

export function safeNameField(name: string) {
  return name.replaceAll("'", "").replaceAll(" ", "").replaceAll("-", "");
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

export function getAbilityNameFromID(id: string) {
  return abilityIDToName[id] ?? "Unknown";
}
interface NotableIDToName {
  [key: string]: string;
}
export const abilityIDToName: NotableIDToName = {
  /*Any ability added here can be kept I believe. As Blizzard creates a new ability with the same name & new id
    if they deem it necessary.
  */
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

enum CastType {
  Defensive = "Defensive",
  Offensive = "Offensive",
  Utility = "Utility",
  Core = "Core", // This is the big ticket cds
  Racial = "Racial",
}

type NotableAbilityCasts = {
  [key in keyof ClassSpecs]: {
    [k in keyof ClassSpecs[key] | "common"]: {
      name: string;
      id: number;
      type: CastType;
    }[];
  };
};

export const classesNotableAbilityCasts: NotableAbilityCasts = {
  DeathKnight: {
    common: [
      { name: "Icebound Fortitude", id: 48792, type: CastType.Defensive },
      { name: "Outbreak", id: 77575, type: CastType.Offensive },
      { name: "Anti-Magic Shell", id: 48707, type: CastType.Defensive },
      { name: "Army of the Dead", id: 42650, type: CastType.Offensive },
      { name: "Empower Rune Weapon", id: 47568, type: CastType.Offensive },
      { name: "Raise Dead", id: 46584, type: CastType.Offensive },
      { name: "Anti-Magic Zone", id: 51052, type: CastType.Offensive },
      { name: "Lichborne", id: 49039, type: CastType.Offensive },
      { name: "Death Pact", id: 48743, type: CastType.Offensive },
    ],
    Blood: [
      { name: "Bone Shield", id: 49222, type: CastType.Defensive },
      { name: "Dancing Rune Weapon", id: 49028, type: CastType.Defensive },
      { name: "Vampiric Blood", id: 55233, type: CastType.Defensive },
    ],
    Frost: [{ name: "Pillar of Frost", id: 51271, type: CastType.Offensive }],
    Unholy: [
      { name: "Dark Transformation", id: 63560, type: CastType.Offensive },
      { name: "Unholy Frenzy", id: 49016, type: CastType.Offensive },
      { name: "Summon Gargoyle", id: 49206, type: CastType.Offensive },
      { name: "Empower Rune Weapon", id: 47568, type: CastType.Offensive },
    ],
  },
  Druid: {
    common: [
      { name: "Barkskin", id: 22812, type: CastType.Defensive },
      { name: "Frenzied Regen", id: 22842, type: CastType.Defensive },
      { name: "Might of Ursoc", id: 106922, type: CastType.Defensive },
      { name: "Heart of the Wild", id: 108288, type: CastType.Utility },
      { name: "Innervate", id: 29166, type: CastType.Utility },
      { name: "Incarnation", id: 106731, type: CastType.Core },
      { name: "Nature's Vigil", id: 124974, type: CastType.Core },
    ],
    Balance: [
      { name: "Starfall", id: 48505, type: CastType.Core },
      { name: "Tranquility", id: 44203, type: CastType.Utility },
    ],
    Feral: [
      { name: "Berserk", id: 50334, type: CastType.Offensive },
      { name: "Tiger's Fury", id: 5217, type: CastType.Offensive },
      { name: "Savage Roar", id: 52610, type: CastType.Offensive },
      { name: "Enrage", id: 5229, type: CastType.Offensive },
      { name: "Survival Instincts", id: 61336, type: CastType.Defensive },
      { name: "Frenzied Regen", id: 22842, type: CastType.Defensive },
      { name: "Tranquility", id: 44203, type: CastType.Utility },
    ],

    Guardian: [
      { name: "Berserk_Bear", id: 50334, type: CastType.Core },
      { name: "Berserk_Cat", id: 106951, type: CastType.Core },
      { name: "Berserk_Noform", id: 106952, type: CastType.Core },
      { name: "Incarnation: Son of Ursoc", id: 102558, type: CastType.Core },
      { name: "Savage Defense", id: 62606, type: CastType.Core },
      { name: "Savage Roar", id: 52610, type: CastType.Offensive },
      { name: "Enrage", id: 5229, type: CastType.Offensive },
      { name: "Survival Instincts", id: 61336, type: CastType.Defensive },
      { name: "Frenzied Regen", id: 22842, type: CastType.Defensive },
      { name: "Tranquility", id: 44203, type: CastType.Utility },
    ],
    Restoration: [
      { name: "Tree of Life", id: 33891, type: CastType.Core },
      { name: "Tranquility", id: 44203, type: CastType.Core },
    ],
  },
  Hunter: {
    common: [
      { name: "Deterrence", id: 19263, type: CastType.Defensive },
      { name: "Rapid Fire", id: 3045, type: CastType.Offensive },
    ],
    BeastMastery: [
      { name: "Beastial Wrath", id: 19574, type: CastType.Offensive },
      { name: "Focus Fire", id: 82692, type: CastType.Offensive },
      //Figure out Call of The Wild, it's cast by the pet and not the hunter (ehh who cares, fuck BM)
    ],
    Marksmanship: [{ name: "Readiness", id: 23989, type: CastType.Offensive }],
    Survival: [
      { name: "Lock and Load", id: 56453, type: CastType.Offensive },
      { name: "Black Arrow", id: 3674, type: CastType.Offensive },
    ],
  },
  Mage: {
    common: [
      { name: "Mage Ward", id: 1463, type: CastType.Defensive },
      { name: "Evocation", id: 12051, type: CastType.Utility },
      { name: "Mage Ward", id: 543, type: CastType.Utility },
      { name: "Replenish Mana", id: 5405, type: CastType.Utility },
      { name: "Mirror Image", id: 55342, type: CastType.Offensive },
      { name: "Flame Orb", id: 82731, type: CastType.Offensive },
    ],
    Arcane: [
      { name: "Arcane Power", id: 12042, type: CastType.Offensive },
      { name: "Presence of Mind", id: 12043, type: CastType.Offensive },
    ],
    Fire: [{ name: "Combustion", id: 11129, type: CastType.Offensive }],
    Frost: [
      { name: "Icy Veins", id: 12472, type: CastType.Offensive },
      { name: "Cold Snap", id: 11958, type: CastType.Utility },
      { name: "Frostfire Orb", id: 92283, type: CastType.Offensive },
      { name: "Deep Freeze", id: 71757, type: CastType.Offensive },
      { name: "Mirror Image", id: 58834, type: CastType.Offensive },
    ],
  },
  Paladin: { common: [], Holy: [], Protection: [], Retribution: [] },
  Priest: { common: [], Discipline: [], Shadow: [] },
  Rogue: { common: [], Assassination: [], Combat: [], Subtlety: [] },
  Shaman: { common: [], Elemental: [], Enhancement: [], Restoration: [] },
  Warlock: { common: [], Affliction: [], Demonology: [], Destruction: [] },
  Warrior: { common: [], Arms: [], Fury: [], Protection: [] },
};
