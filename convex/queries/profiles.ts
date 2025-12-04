import { query } from '../_generated/server'
import { v } from 'convex/values'
import { Profiles } from '../_generated/dataModel'

export const getProfileByUserId = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const profile = (await ctx.db
      .query('profiles')
      .filter((q) => q.eq(q.field('userId'), args.userId))
      .first()) as Profiles | null
    return profile
  }
})

export const getProfileDisplayName = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const profile = (await ctx.db
      .query('profiles')
      .filter((q) => q.eq(q.field('userId'), args.userId))
      .first()) as Profiles | null
    return profile?.displayName || null
  }
})
