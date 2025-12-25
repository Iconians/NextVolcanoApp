'use client'

import { useState, FormEvent } from 'react'
import { useAuthActionsHook } from '@/lib/auth'
import toast from 'react-hot-toast'

export default function CreateAccountForm({ onAccountCreated }: { onAccountCreated: () => void }) {
  const [formError, setFormError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signUp } = useAuthActionsHook()

  const handleCreateAccount = async (e: FormEvent) => {
    e.preventDefault()
    setFormError('')
    setIsLoading(true)

    if (!email || !displayName || !password) {
      setFormError('Email, username, and password are required')
      setIsLoading(false)
      return
    }

    try {
      await signUp('password', { email, password, displayName })
      toast.success('Account created successfully!')
      setIsLoading(false)
      onAccountCreated()
    } catch (error: unknown) {
      let errorMessage = 'Error creating account'

      if (error instanceof Error) {
        const message = error.message

        // Handle specific Supabase auth errors
        if (
          message.includes('User already registered') ||
          message.includes('already exists') ||
          message.includes('already registered')
        ) {
          errorMessage = 'An account with this email already exists. Please sign in instead.'
        } else if (message.includes('Invalid email') || message.includes('invalid email')) {
          errorMessage = 'Please enter a valid email address.'
        } else if (
          message.includes('Password') ||
          message.includes('password') ||
          message.includes('at least 8 characters')
        ) {
          errorMessage = 'Password must be at least 8 characters long.'
        } else if (message.length > 0) {
          errorMessage = message || 'Error creating account. Please try again.'
        }
      }

      setFormError(errorMessage)
      toast.error(errorMessage)
      setIsLoading(false)
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
          <button className="btn-modern mt-2" type="submit" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create Account'}
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
