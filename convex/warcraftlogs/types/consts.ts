export enum RaidDifficulty {
    Normal = 3,
    Heroic = 4
}

export const wclApi = "https://classic.warcraftlogs.com/api/v2/client"

export enum ClassName {
    DeathKnight = "DeathKnight",
    Druid = "Druid",
    Hunter = "Hunter",
    Mage = "Mage",
    Paladin = "Paladin",
    Priest = "Priest",
    Rogue = "Rogue",
    Shaman = "Shaman",
    Warlock = "Warlock",
    Warrior = "Warrior",
}

export enum Spec {
    //DK
    Blood = "Blood",
    Frost = "Frost",
    Unholy = "Unholy",
    //DRUID
    Balance = "Balance",
    Feral = "Feral",
    Guardian = "Guardian",
    Restoration = "Restoration",
    //HUNTER
    BeastMastery = "BeastMastery",
    Marksmanship = "Marksmanship",
    Survival = "Survival",
    //MAGE
    Arcane = "Arcane",
    Fire = "Fire",
    //PALADIN
    Holy = "Holy",
    Protection = "Protection",
    Retribution = "Retribution",
    //PRIEST
    Discipline = "Discipline",
    Shadow = "Shadow",
    //ROGUE
    Assassination = "Assassination",
    Combat = "Combat",
    Subtlety = "Subtlety",
    //SHAMAN
    Elemental = "Elemental",
    Enhancement = "Enhancement",
    //Restoration, shares with druid
    //WARLOCK
    Affliction = "Affliction",
    Demonology = "Demonology",
    Destruction = "Destruction",
    //WARRIOR
    Arms = "Arms",
    Fury = "Fury",
    //Protection, shares with paladin 
}
export type ClassSpecs = typeof classSpecs;
export const classSpecs = {
    DeathKnight: {
        Blood: "Blood",
        Frost: "Frost",
        Unholy: "Unholy"
    },
    Druid: {
        Balance: "Balance",
        Feral: "Feral",
        Guardian: "Guardian",
        Restoration: "Restoration"
    },
    Hunter: {
        BeastMastery: "BeastMastery",
        Marksmanship: "Marksmanship",
        Survival: "Survival"
    },
    Mage: {
        Arcane: "Arcane",
        Fire: "Fire",
        Frost: "Frost",
    },
    Paladin: {
        Holy: "Holy",
        Protection: "Protection",
        Retribution: "Retribution"
    },
    Priest: {
        Discipline: "Discipline",
        Shadow: "Shadow"
    },
    Rogue: {
        Assassination: "Assassination",
        Combat: "Combat",
        Subtlety: "Subtlety"
    },
    Shaman: {
        Elemental: "Elemental",
        Enhancement: "Enhancement",
        Restoration: "Restoration"
    },
    Warlock: {
        Affliction: "Affliction",
        Demonology: "Demonology",
        Destruction: "Destruction"
    },
    Warrior: {
        Arms: "Arms",
        Fury: "Fury",
        Protection: "Protection"
    }
}