'use client'

import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { useCurrentUser } from '@/lib/auth'
import { useProfileByUserId } from '@/lib/supabase-queries'
import { ensureProfile } from '@/lib/supabase-mutations'
import { signInAction, type AuthResult } from '@/lib/auth-actions'
import toast from 'react-hot-toast'

function SubmitButton({ isPending: externalPending }: { isPending: boolean }) {
  const { pending } = useFormStatus()
  const isPending = pending || externalPending

  return (
    <button className="btn-modern mt-2" type="submit" disabled={isPending}>
      {isPending ? 'Signing in...' : 'Sign In'}
    </button>
  )
}

export default function SignInForm({ onSignedIn }: { onSignedIn: () => void }) {
  const [state, formAction, isPending] = useActionState<AuthResult | null, FormData>(
    signInAction,
    null
  )
  const auth = useCurrentUser()
  const { profile, loading: profileLoading } = useProfileByUserId(auth?.userId || null)

  // Auto-create profile if user is signed in but profile doesn't exist
  useEffect(() => {
    let isMounted = true
    let profileCreationAttempted = false

    const ensureProfileExists = async () => {
      // Prevent multiple attempts
      if (profileCreationAttempted) return

      // Wait for profile query to complete (it might be loading initially)
      if (profileLoading) return

      if (auth?.userId && profile === null && !isPending && isMounted) {
        profileCreationAttempted = true

        // User is authenticated but has no profile - create one
        try {
          // Check for pending display name from localStorage (set during account creation)
          const pendingDisplayName =
            typeof window !== 'undefined' ? localStorage.getItem('pendingDisplayName') : null
          const displayNameToUse = pendingDisplayName
            ? pendingDisplayName.substring(0, 3).toUpperCase()
            : 'USR'

          // Clear localStorage if we found a pending display name
          if (pendingDisplayName && typeof window !== 'undefined') {
            localStorage.removeItem('pendingDisplayName')
          }

          await ensureProfile(auth.userId, displayNameToUse)
          console.log('Profile auto-created for signed-in user with displayName:', displayNameToUse)
        } catch (error) {
          // Silently fail - profile will be created when user updates score or visits profile page
          console.log('Could not auto-create profile during sign-in:', error)
        }
      }
    }

    // Only check after a brief delay to avoid race conditions with auth state
    const timer = setTimeout(() => {
      if (isMounted) {
        ensureProfileExists()
      }
    }, 1500)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [auth?.userId, profile, profileLoading, isPending])

  // Handle successful sign in
  useEffect(() => {
    if (state?.success && state.userId) {
      toast.success('Signed in successfully')
      onSignedIn()
    } else if (state?.error) {
      toast.error(state.error)
    }
  }, [state, onSignedIn])

  return (
    <div className="text-wrapper modern-card p-8 md:p-12 max-w-md w-full mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold bg-volcano-gradient bg-clip-text text-transparent mb-2">
        Volcano Quiz
      </h1>
      <p className="text-lg md:text-xl font-light text-gray-300 mb-6">
        Sign in to see if you are smart enough to be a Volcanologist?
      </p>
      <div>
        <form action={formAction} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              className="input-modern"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              disabled={isPending}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="password">
              Password
            </label>
            <input
              className="input-modern"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              disabled={isPending}
            />
          </div>
          <SubmitButton isPending={isPending} />
        </form>
        {state?.error && (
          <div className="mt-4 p-3 rounded-lg bg-volcano-red/20 border border-volcano-red/50 text-volcano-red text-sm">
            {state.error}
          </div>
        )}
      </div>
    </div>
  )
}
