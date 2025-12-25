'use client'

import { useState, FormEvent, useEffect } from 'react'
import { useAuthActionsHook, useCurrentUser } from '@/lib/auth'
import { useProfileByUserId } from '@/lib/supabase-queries'
import { ensureProfile } from '@/lib/supabase-mutations'
import toast from 'react-hot-toast'

export default function SignInForm({ onSignedIn }: { onSignedIn: () => void }) {
  const [formError, setFormError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuthActionsHook()
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

      if (auth?.userId && profile === null && !isLoading && isMounted) {
        profileCreationAttempted = true

        // User is authenticated but has no profile - create one
        try {
          // Check for pending display name from localStorage (set during account creation)
          const pendingDisplayName =
            typeof window !== 'undefined' ? localStorage.getItem('pendingDisplayName') : null
          const displayNameToUse = pendingDisplayName
            ? pendingDisplayName.substring(0, 3).toUpperCase()
            : email
              ? email.split('@')[0].substring(0, 3).toUpperCase()
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
  }, [auth?.userId, profile, profileLoading, email, isLoading])

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    setFormError('')
    setIsLoading(true)

    if (!email || !password) {
      setFormError('Email and password are required')
      setIsLoading(false)
      return
    }

    try {
      await signIn('password', { email, password, flow: 'signIn' })
      toast.success('Signed in successfully')
      onSignedIn()
    } catch (error: unknown) {
      let errorMessage = 'Error signing in'

      if (error instanceof Error) {
        const message = error.message

        // Handle configuration errors
        if (message.includes('JWT_PRIVATE_KEY') || message.includes('environment variable')) {
          errorMessage =
            'Authentication is not properly configured. Please contact support if this issue persists.'
        }
        // Handle specific Supabase auth errors
        else if (
          message.includes('Invalid login credentials') ||
          message.includes('Invalid credentials') ||
          message.includes('Invalid email or password')
        ) {
          errorMessage = 'Invalid email or password. Please check your credentials and try again.'
        } else if (message.includes('User not found') || message.includes('No account found')) {
          errorMessage = 'No account found with this email. Please create an account first.'
        } else if (message.includes('Email not confirmed')) {
          errorMessage = 'Please verify your email before signing in.'
        } else if (message.length > 0) {
          errorMessage = message || 'Error signing in. Please try again.'
        }
      }

      setPassword('')
      setFormError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="text-wrapper modern-card p-8 md:p-12 max-w-md w-full mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold bg-volcano-gradient bg-clip-text text-transparent mb-2">
        Volcano Quiz
      </h1>
      <p className="text-lg md:text-xl font-light text-gray-300 mb-6">
        Sign in to see if you are smart enough to be a Volcanologist?
      </p>
      <div>
        <form onSubmit={handleSignIn} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              className="input-modern"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="btn-modern mt-2" type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        {formError && (
          <div className="mt-4 p-3 rounded-lg bg-volcano-red/20 border border-volcano-red/50 text-volcano-red text-sm">
            {formError}
          </div>
        )}
      </div>
    </div>
  )
}
