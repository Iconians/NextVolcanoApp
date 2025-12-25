'use client'

import { useState, useEffect, useRef } from 'react'
import SignInForm from './SignInForm'
import CreateAccountForm from './CreateAccountForm'
import StartComponent from './StartComponent'
import ResetPasswordForm from './ResetPasswordForm'
import ForgotPasswordSplashComponent from './ForgotPasswordSplashComponent'
import { useCurrentUser } from '@/lib/auth'
import { useSupabase } from '@/components/SupabaseProvider'
import LoadingComponent from './LoadingComponent'
import { useProfileByUserId } from '@/lib/supabase-queries'
import { ensureProfile, updateDisplayName } from '@/lib/supabase-mutations'

export default function StartPage() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [forgotPassword, setForgotPassword] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [resetPasswordFilledOut, setResetPasswordFilledOut] = useState(false)
  const volcanoBackgroundRef = useRef<HTMLAudioElement>(null)
  const auth = useCurrentUser()
  const { loading: authLoading } = useSupabase()
  const { profile, loading: profileLoading } = useProfileByUserId(auth?.userId || null)

  // Auto-create profile after signup when auth becomes available
  useEffect(() => {
    let isMounted = true
    let profileCreationAttempted = false

    const ensureProfileExists = async () => {
      // Prevent multiple attempts
      if (profileCreationAttempted) return

      // Wait for profile query to complete
      if (profileLoading) return

      // Check for pending display name from localStorage (set during account creation)
      const storedDisplayName =
        typeof window !== 'undefined' ? localStorage.getItem('pendingDisplayName') : null

      const currentUserId = auth?.userId

      // If we have a profile and it has the default display name, update it
      if (
        currentUserId &&
        profile &&
        profile.display_name === 'USR' &&
        storedDisplayName &&
        isMounted
      ) {
        profileCreationAttempted = true

        try {
          const displayNameToUse = storedDisplayName.substring(0, 3).toUpperCase()
          await updateDisplayName(currentUserId, displayNameToUse)
          console.log('✅ Profile display name updated to:', displayNameToUse)
          if (isMounted && typeof window !== 'undefined') {
            localStorage.removeItem('pendingDisplayName')
          }
        } catch (error) {
          if (!isMounted) return
          console.error('Error updating profile display name:', error)
        }
      }

      // Fallback: If profile doesn't exist, create one
      if (currentUserId && profile === null && storedDisplayName && isMounted) {
        profileCreationAttempted = true

        try {
          const displayNameToUse = storedDisplayName.substring(0, 3).toUpperCase()
          await ensureProfile(currentUserId, displayNameToUse)
          console.log('✅ Profile created via StartPage with displayName:', displayNameToUse)
          if (isMounted && typeof window !== 'undefined') {
            localStorage.removeItem('pendingDisplayName')
          }
        } catch (error) {
          if (!isMounted) return
          console.error('Error creating profile in StartPage:', error)
        }
      }
    }

    // Check after a brief delay to avoid race conditions
    const timer = setTimeout(() => {
      if (isMounted) {
        ensureProfileExists()
      }
    }, 1500)

    // Also check immediately
    ensureProfileExists()

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [auth?.userId, profile, profileLoading])

  useEffect(() => {
    // Set loading based on auth state
    setLoading(authLoading)

    // Sync auth state
    if (auth) {
      setIsSignedIn(true)
      if (isCreatingAccount) {
        setIsCreatingAccount(false)
      }
    } else if (!isCreatingAccount && !authLoading) {
      setIsSignedIn(false)
    }
  }, [auth, isCreatingAccount, authLoading])

  const handleAccountCreated = () => {
    setIsCreatingAccount(false)
    setIsSignedIn(true)
  }

  const handleSignIn = () => {
    setIsSignedIn(true)
    setIsCreatingAccount(false)
    setForgotPassword(false)
  }

  const handleForgotFunction = () => {
    setForgotPassword(false)
    setIsSignedIn(true)
    setIsCreatingAccount(false)
  }

  const handleClientForgotPassword = () => {
    setForgotPassword(true)
    setIsSignedIn(false)
    setIsCreatingAccount(false)
  }

  const handleSubmittedForgotPasswordForm = () => {
    setResetPasswordFilledOut(true)
  }

  const switchForms = () => {
    setIsCreatingAccount(!isCreatingAccount)
    if (forgotPassword) {
      setIsCreatingAccount(false)
      setForgotPassword(false)
    }
  }

  const toggleVolcanoBackgroundMusic = () => {
    if (!volcanoBackgroundRef.current) return

    if (isPlaying) {
      volcanoBackgroundRef.current.pause()
    } else {
      volcanoBackgroundRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  if (loading) {
    return <LoadingComponent />
  }

  return (
    <section className="relative min-h-screen w-full text-center overflow-y-auto bg-volcanoGif bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8 py-12">
        {!isCreatingAccount && !isSignedIn && !forgotPassword && !resetPasswordFilledOut && (
          <SignInForm onSignedIn={handleSignIn} />
        )}
        {isCreatingAccount && !resetPasswordFilledOut && (
          <CreateAccountForm onAccountCreated={handleAccountCreated} />
        )}
        {isSignedIn && !resetPasswordFilledOut && (
          <StartComponent playing={isPlaying} onToggleAudio={toggleVolcanoBackgroundMusic} />
        )}
        {forgotPassword && !isCreatingAccount && !isSignedIn && !resetPasswordFilledOut && (
          <ResetPasswordForm onSubmitted={handleSubmittedForgotPasswordForm} />
        )}
        {resetPasswordFilledOut && <ForgotPasswordSplashComponent />}
        <div className="mt-6 space-y-3">
          {!isSignedIn && !resetPasswordFilledOut && (
            <button
              onClick={switchForms}
              className="link-modern text-lg md:text-xl font-semibold py-2 px-4"
            >
              {isCreatingAccount ? 'Sign In' : 'Create Account'}
            </button>
          )}
          {forgotPassword && !resetPasswordFilledOut && (
            <button
              onClick={switchForms}
              className="link-modern text-lg md:text-xl font-semibold py-2 px-4"
            >
              Sign In
            </button>
          )}
          {!isSignedIn && !forgotPassword && !resetPasswordFilledOut && (
            <button
              onClick={handleClientForgotPassword}
              className="link-modern text-lg md:text-xl font-semibold py-2 px-4 block mx-auto"
            >
              Forgot Password
            </button>
          )}
        </div>
      </div>
      <audio ref={volcanoBackgroundRef} src="/mount-yasur-tanna-island.wav" loop />
    </section>
  )
}
