import { v } from "convex/values";
import { internalMutation } from "../_generated/server";

export const createAccessToken = internalMutation({
    args: {
        name: v.string(),
        accessToken: v.string(),
        expiresIn: v.number(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("accessTokens", { 
            name: args.name,
            accessToken: args.accessToken,
            expiresIn: args.expiresIn
        })
    }
})