import { v } from "convex/values";
import { internalMutation } from "../_generated/server";

export const replaceAccessToken = internalMutation({
    args: {
        id: v.id("accessTokens"),
        name: v.string(),
        accessToken: v.string(),
        expiresIn: v.number(),
    },
    handler: async (ctx, args) => {
        await ctx.db.replace(args.id, { 
            name: args.name,
            accessToken: args.accessToken,
            expiresIn: args.expiresIn
        })
    }
})