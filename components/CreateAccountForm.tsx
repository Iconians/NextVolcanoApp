'use client'

import { useState, FormEvent } from 'react'
import { useAuthActionsHook, generateUserIdFromEmail } from '@/lib/auth'
import { useQuery, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import toast from 'react-hot-toast'

export default function CreateAccountForm({ onAccountCreated }: { onAccountCreated: () => void }) {
  const [formError, setFormError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signUp } = useAuthActionsHook()
  // @ts-ignore - FilterApi type inference issue, mutations exist at runtime
  const createProfile = useMutation(api.mutations.profiles.createProfile)

  // Check if account already exists
  const potentialUserId = email ? generateUserIdFromEmail(email) : null
  // @ts-ignore - FilterApi type inference issue, queries exist at runtime
  const existingProfile = useQuery(
    api.queries.profiles.getProfileByUserId,
    potentialUserId ? { userId: potentialUserId } : 'skip'
  )

  const handleCreateAccount = async (e: FormEvent) => {
    e.preventDefault()
    setFormError('')

    if (!email || !displayName) {
      setFormError('Email and username are required')
      return
    }

    // Wait for profile check to complete
    if (existingProfile === undefined) {
      setFormError('Checking if account exists...')
      return
    }

    // Check if account already exists
    if (existingProfile !== null) {
      setFormError('An account with this email already exists. Please sign in instead.')
      toast.error('Account already exists')
      return
    }

    try {
      const result = await signUp('password', { email, password })

      if (result && result.userId && displayName) {
        await createProfile({
          userId: result.userId,
          displayName: displayName.substring(0, 3).toUpperCase() // Ensure max 3 chars
        })
        toast.success('Account created successfully')
        onAccountCreated()
      } else {
        toast.error('Failed to create account')
        setFormError('Failed to create account')
      }
    } catch (error: any) {
      setFormError(error.message || 'Error creating account')
      toast.error('Error creating account')
    }
  }

  return (
    <div className="text-wrapper modern-card p-8 md:p-12 max-w-md w-full mx-auto mb-5">
      <h1 className="text-4xl md:text-5xl font-bold bg-volcano-gradient bg-clip-text text-transparent mb-2">
        Volcano Quiz
      </h1>
      <p className="text-lg md:text-xl font-light text-gray-300 mb-6">
        Create an account to see if you are smart enough to be a volcanologist?
      </p>
      <div>
        <form onSubmit={handleCreateAccount} className="flex flex-col gap-5 mb-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="username">
              Username (max 3 characters)
            </label>
            <input
              className="input-modern"
              type="text"
              id="username"
              name="userName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter username"
              maxLength={3}
              required
            />
          </div>
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
            disabled={existingProfile === undefined && email !== ''}
          >
            {existingProfile === undefined && email !== '' ? 'Checking...' : 'Create Account'}
          </button>
        </form>
        {formError && (
          <div className="p-3 rounded-lg bg-volcano-red/20 border border-volcano-red/50 text-volcano-red text-sm">
            {formError}
          </div>
        )}
      </div>
    </div>
  )
}
