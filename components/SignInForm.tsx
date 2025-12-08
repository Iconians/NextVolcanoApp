'use client'

import { useState, FormEvent } from 'react'
import { useAuthActionsHook, generateUserIdFromEmail } from '@/lib/auth'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import toast from 'react-hot-toast'

export default function SignInForm({ onSignedIn }: { onSignedIn: () => void }) {
  const [formError, setFormError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuthActionsHook()

  // Generate userId from email to check if profile exists in Convex
  const potentialUserId = email ? generateUserIdFromEmail(email) : null

  const profile = useQuery(
    api.queries.profiles.getProfileByUserId,
    potentialUserId ? { userId: potentialUserId } : 'skip'
  )

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    setFormError('')

    if (!email) {
      setFormError('Email is required')
      return
    }

    // Wait for profile check to complete
    if (profile === undefined) {
      setFormError('Checking account...')
      return
    }

    // Check if profile exists in Convex - only allow sign-in if profile exists
    if (profile === null) {
      setFormError('No account found with this email. Please create an account first.')
      toast.error('Account not found')
      setPassword('')
      return
    }

    // Profile exists, proceed with sign in
    try {
      const result = await signIn('password', { email, password })
      if (result) {
        toast.success('Signed in successfully')
        onSignedIn()
      }
    } catch (error: any) {
      setPassword('')
      setFormError(error.message || 'Error signing in')
      toast.error('Error signing in')
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
          <button
            className="btn-modern mt-2"
            type="submit"
            disabled={profile === undefined && email !== ''}
          >
            {profile === undefined && email !== '' ? 'Checking...' : 'Sign In'}
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
