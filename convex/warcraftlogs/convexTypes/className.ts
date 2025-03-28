import { v } from "convex/values";

const convexClass = v.union(
    v.literal("DeathKnight"), 
    v.literal("Druid"), 
    v.literal("Hunter"), 
    v.literal("Mage"), 
    v.literal("Paladin"), 
    v.literal("Priest"), 
    v.literal("Rogue"), 
    v.literal("Shaman"), 
    v.literal("Warlock"), 
    v.literal("Warrior")
);

export default convexClass