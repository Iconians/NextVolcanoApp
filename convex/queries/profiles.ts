import { query } from '../_generated/server'
import { Doc, Id } from '../_generated/dataModel'
import { getAuthUserId } from '@convex-dev/auth/server'

export const getProfileByUserId = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)

    // #region agent log
    console.log('[SERVER] getProfileByUserId called:', {
      userId,
      userIdType: typeof userId
    })
    // #endregion

    if (userId === null) {
      // #region agent log
      console.log('[SERVER] getProfileByUserId: userId is null, returning null')
      // #endregion
      return null
    }

    try {
      const profile = (await ctx.db
        .query('profiles')
        .filter((q) => q.eq(q.field('userId'), userId))
        .first()) as Doc<'profiles'> | null

      // #region agent log
      console.log('[SERVER] getProfileByUserId: profile query result:', {
        profileFound: !!profile,
        profileId: profile?._id,
        profileUserId: profile?.userId,
        profileScores: profile?.scores?.length || 0
      })
      // #endregion

      // Get user's name from users table (userId is the _id of the user document)
      const user = await ctx.db.get(userId as Id<'users'>)

      // #region agent log
      console.log('[SERVER] getProfileByUserId: user query result:', {
        userFound: !!user,
        userName: user?.name,
        userEmail: user?.email
      })
      // #endregion

      const displayName = user?.name || null

      // Note: We don't auto-create here because queries can't have side effects
      // Profile will be auto-created in mutations that need it (updateUserScore)
      // Client should call ensureProfile mutation if profile is null

      // Return profile with displayName included (for backward compatibility)
      // displayName now comes from users.name, not profiles.displayName
      if (profile) {
        const result = {
          ...profile,
          displayName: displayName || 'USR' // Default to 'USR' if name not set
        }

        // #region agent log
        console.log('[SERVER] getProfileByUserId: returning profile with displayName:', {
          displayName: result.displayName,
          hasDisplayName: !!result.displayName
        })
        // #endregion

        return result
      }

      // #region agent log
      console.log('[SERVER] getProfileByUserId: profile is null, returning null')
      // #endregion

      return null
    } catch (error) {
      // #region agent log
      console.error('[SERVER] getProfileByUserId error:', error)
      console.error(
        '[SERVER] getProfileByUserId error details:',
        JSON.stringify(error, Object.getOwnPropertyNames(error))
      )
      // #endregion
      throw error
    }
  }
})

export const getProfileDisplayName = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      return null
    }

    // Get name from users table (userId is the _id of the user document)
    // In Convex Auth, the userId is the _id of the user in the users table
    const user = await ctx.db.get(userId as Id<'users'>)
    return user?.name || null
  }
})
