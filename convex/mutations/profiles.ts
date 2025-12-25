import { mutation } from '../_generated/server'
import { v } from 'convex/values'
import { Doc, Id } from '../_generated/dataModel'
import { getAuthUserId } from '@convex-dev/auth/server'

export const updateUserScore = mutation({
  args: {
    correctAnswers: v.number(),
    wrongAnswers: v.number(),
    timeStamp: v.string()
  },
  handler: async (ctx, args) => {
    // #region agent log
    console.log('[SERVER] updateUserScore mutation called:', {
      correctAnswers: args.correctAnswers,
      wrongAnswers: args.wrongAnswers,
      timeStamp: args.timeStamp,
      timestamp: new Date().toISOString()
    })
    // #endregion

    const userId = await getAuthUserId(ctx)

    // #region agent log
    console.log('[SERVER] updateUserScore: getAuthUserId result:', {
      userId,
      userIdType: typeof userId,
      hasUserId: !!userId
    })
    // #endregion

    if (!userId) {
      // #region agent log
      console.error('[SERVER] updateUserScore: Not authenticated - getAuthUserId returned null')
      // #endregion
      throw new Error('Not authenticated. Please sign in to save your score.')
    }

    let profile = (await ctx.db
      .query('profiles')
      .filter((q) => q.eq(q.field('userId'), userId))
      .first()) as Doc<'profiles'> | null

    // Auto-create profile if it doesn't exist (fallback for users who somehow don't have one)
    if (!profile) {
      console.log(`Auto-creating profile for userId: ${userId}`)
      // Create profile with just scores array (name is stored in users.name)
      const profileId = await ctx.db.insert('profiles', {
        userId,
        scores: []
      })
      profile = (await ctx.db.get(profileId)) as Doc<'profiles'>
    }

    const newScore = {
      correct: args.correctAnswers,
      incorrect: args.wrongAnswers,
      timeStamp: args.timeStamp
    }

    await ctx.db.patch(profile._id, {
      scores: [...profile.scores, newScore]
    })
  }
})

// Helper function to ensure profile exists
// Note: displayName is now stored in users.name, not profiles
async function ensureProfileExists(ctx: any, userId: string): Promise<string> {
  // Check if profile already exists
  const existingProfile = await ctx.db
    .query('profiles')
    .filter((q) => q.eq(q.field('userId'), userId))
    .first()

  if (existingProfile) {
    return existingProfile._id
  }

  // Create profile with just scores array (name is stored in users.name)
  const profileId = await ctx.db.insert('profiles', {
    userId,
    scores: []
  })

  console.log(`Profile created for userId: ${userId} (name stored in users.name)`)

  return profileId
}

export const createProfile = mutation({
  args: {
    displayName: v.string()
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    // #region agent log
    // Log to server console (will be visible in Convex dashboard)
    console.log('[SERVER] createProfile mutation called:', {
      hasUserId: !!userId,
      userId: userId,
      displayName: args.displayName,
      timestamp: new Date().toISOString()
    })
    // #endregion
    if (!userId) {
      throw new Error('Not authenticated. Please sign in to create a profile.')
    }

    // Validate display name
    if (!args.displayName || args.displayName.trim().length === 0) {
      throw new Error('Display name is required')
    }

    if (args.displayName.length > 3) {
      throw new Error('Display name must be 3 characters or less')
    }

    // Update users.name instead of profiles.displayName
    // In Convex Auth, the userId is the _id of the user in the users table
    const displayNameToUse = args.displayName.trim().substring(0, 3).toUpperCase()
    await ctx.db.patch(userId as Id<'users'>, {
      name: displayNameToUse
    })

    // Ensure profile exists (for scores)
    return await ensureProfileExists(ctx, userId)
  }
})

// Mutation to ensure profile exists
// Note: displayName is now stored in users.name, not profiles
export const ensureProfile = mutation({
  args: {
    displayName: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) {
      throw new Error('Not authenticated. Please sign in to ensure profile exists.')
    }

    // If displayName provided, update users.name
    if (args.displayName) {
      const displayNameToUse = args.displayName.trim().substring(0, 3).toUpperCase()
      await ctx.db.patch(userId as Id<'users'>, {
        name: displayNameToUse
      })
    }

    // Ensure profile exists (for scores)
    return await ensureProfileExists(ctx, userId)
  }
})

export const updateDisplayName = mutation({
  args: {
    displayName: v.string()
  },
  handler: async (ctx, args) => {
    // #region agent log
    console.log('[SERVER] updateDisplayName mutation called:', {
      displayName: args.displayName,
      timestamp: new Date().toISOString()
    })
    // #endregion

    const userId = await getAuthUserId(ctx)

    // #region agent log
    console.log('[SERVER] updateDisplayName: getAuthUserId result:', {
      userId,
      userIdType: typeof userId,
      hasUserId: !!userId
    })
    // #endregion

    if (!userId) {
      // #region agent log
      console.error('[SERVER] updateDisplayName: Not authenticated - getAuthUserId returned null')
      // #endregion
      throw new Error('Not authenticated. Please sign in to update your profile.')
    }

    // Validate display name
    if (!args.displayName || args.displayName.trim().length === 0) {
      throw new Error('Display name is required')
    }

    if (args.displayName.length > 3) {
      throw new Error('Display name must be 3 characters or less')
    }

    // Update users.name instead of profiles.displayName
    // In Convex Auth, the userId is the _id of the user in the users table
    const displayNameToUse = args.displayName.trim().substring(0, 3).toUpperCase()
    await ctx.db.patch(userId as Id<'users'>, {
      name: displayNameToUse
    })
  }
})
