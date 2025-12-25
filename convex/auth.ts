import { Password } from '@convex-dev/auth/providers/Password'
import { convexAuth } from '@convex-dev/auth/server'
import { query, MutationCtx } from './_generated/server'
import { getAuthUserId } from '@convex-dev/auth/server'

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password({
      profile: (params) => {
        // Extract email and displayName from params
        // The name field will be stored in users.name (which is now in the users table schema)
        // Note: password is handled separately by Convex Auth and should not be in the profile object
        // params is a Record<string, undefined | Value> containing the form data fields

        // #region agent log
        console.log('[SERVER] Password profile function called with params:', {
          paramsType: typeof params,
          paramsKeys: params ? Object.keys(params) : 'null',
          paramsValue: JSON.stringify(params, null, 2),
          hasEmail: !!(params as any)?.email,
          hasDisplayName: !!(params as any)?.displayName,
          emailValue: (params as any)?.email,
          displayNameValue: (params as any)?.displayName
        })
        // #endregion

        // Access params as a plain object (Record<string, undefined | Value>)
        const email = (params as any)?.email as string | undefined
        const displayName = (params as any)?.displayName as string | undefined
        const nameValue = displayName ? displayName.trim().substring(0, 3).toUpperCase() : undefined

        // #region agent log
        console.log('[SERVER] Password profile function returning:', {
          email,
          displayName,
          nameValue,
          willSetName: !!nameValue
        })
        // #endregion

        // Return profile object for users table
        // name field will be stored in users.name
        return {
          email,
          name: nameValue
        }
      }
    })
  ],
  callbacks: {
    async afterUserCreatedOrUpdated(ctx: MutationCtx, { userId, profile }) {
      // Automatically create a profile when a user is created
      // This runs server-side immediately after user creation, so we have access to userId
      // Note: The user's name is now stored in users.name (set via profile function)
      // The profiles table only stores scores (array of objects)
      console.log(`[SERVER] afterUserCreatedOrUpdated callback called for userId: ${userId}`)
      console.log(`[SERVER] Profile data:`, JSON.stringify(profile, null, 2))

      try {
        // Get the user document to check/update name
        const user = await ctx.db.get(userId as any)

        // #region agent log
        console.log('[SERVER] afterUserCreatedOrUpdated: user document:', {
          userFound: !!user,
          userName: user?.name,
          userEmail: user?.email
        })
        // #endregion

        // Check if profile already exists (in case this is an update, not a create)
        const existingProfile = await ctx.db
          .query('profiles')
          .withIndex('by_userId', (q) => q.eq('userId', userId))
          .first()

        console.log(`[SERVER] Existing profile check: ${existingProfile ? 'found' : 'not found'}`)

        if (!existingProfile) {
          // Create profile with just scores array (name is stored in users.name)
          const profileId = await ctx.db.insert('profiles', {
            userId,
            scores: []
          })
          console.log(
            `[SERVER] Profile auto-created for userId: ${userId}, profileId: ${profileId} (name stored in users.name)`
          )
        } else {
          console.log(`[SERVER] Profile already exists for userId: ${userId}, skipping creation`)
        }
      } catch (error) {
        // Log error but don't throw - profile creation will be handled by client-side fallbacks
        console.error('[SERVER] Error creating profile in afterUserCreatedOrUpdated:', error)
        console.error(
          '[SERVER] Error details:',
          JSON.stringify(error, Object.getOwnPropertyNames(error))
        )
      }
    }
  }
})

// Query to get the current authenticated user ID
export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    return await getAuthUserId(ctx)
  }
})
