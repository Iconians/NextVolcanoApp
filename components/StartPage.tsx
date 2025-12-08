'use client'

import { useState, useEffect, useRef } from 'react'
import SignInForm from './SignInForm'
import CreateAccountForm from './CreateAccountForm'
import StartComponent from './StartComponent'
import ResetPasswordForm from './ResetPasswordForm'
import ForgotPasswordSplashComponent from './ForgotPasswordSplashComponent'
import { useAuth } from '@/lib/auth'
import LoadingComponent from './LoadingComponent'

export default function StartPage() {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [forgotPassword, setForgotPassword] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [resetPasswordFilledOut, setResetPasswordFilledOut] = useState(false)
  const volcanoBackgroundRef = useRef<HTMLAudioElement>(null)
  const auth = useAuth()

  useEffect(() => {
    if (auth !== undefined) {
      setIsSignedIn(!!auth)
      setLoading(false)
    }
  }, [auth])

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
