import { v } from "convex/values"

const convexSpec = v.union(
    //Death Knight
    v.literal("Blood"),
    v.literal("Frost"),
    v.literal("Unholy"),
    //Druid
    v.literal("Balance"),
    v.literal("Feral"),
    v.literal("Guardian"),
    v.literal("Restoration"),
    //Hunter
    v.literal("BeastMastery"),
    v.literal("Marksmanship"),
    v.literal("Survival"),
    //Mage
    v.literal("Arcane"),
    v.literal("Fire"),
    //Frost, shares with death knight
    //Paladin
    v.literal("Holy"),
    v.literal("Protection"),
    v.literal("Retribution"),
    //Priest
    v.literal("Discipline"),
    v.literal("Shadow"),
    //Holy, shares with paladin
    //Rogue
    v.literal("Assassination"),
    v.literal("Combat"),
    v.literal("Subtlety"),
    //Shaman
    v.literal("Elemental"),
    v.literal("Enhancement"),
    //Restoration, shares with druid
    //Warlock
    v.literal("Affliction"),
    v.literal("Demonology"),
    v.literal("Destruction"),
    //Warrior
    v.literal("Arms"),
    v.literal("Fury"),
    //Protection, shares with paladin
)

export default convexSpec