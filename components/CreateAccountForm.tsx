'use client'

import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { signUpAction, type AuthResult } from '@/lib/auth-actions'
import toast from 'react-hot-toast'

function SubmitButton({ isPending: externalPending }: { isPending: boolean }) {
  const { pending } = useFormStatus()
  const isPending = pending || externalPending

  return (
    <button className="btn-modern mt-2" type="submit" disabled={isPending}>
      {isPending ? 'Creating account...' : 'Create Account'}
    </button>
  )
}

export default function CreateAccountForm({ onAccountCreated }: { onAccountCreated: () => void }) {
  const [state, formAction, isPending] = useActionState<AuthResult | null, FormData>(
    signUpAction,
    null
  )

  // Handle successful account creation
  useEffect(() => {
    if (state?.success && state.userId) {
      toast.success('Account created successfully!')
      // Store display name for profile creation
      if (typeof window !== 'undefined') {
        const formData = new FormData()
        // We'll need to get displayName from the form - let's use a ref or handle it differently
        // For now, we'll store it when the form is submitted
      }
      onAccountCreated()
    } else if (state?.error) {
      toast.error(state.error)
    }
  }, [state, onAccountCreated])

  return (
    <div className="text-wrapper modern-card p-8 md:p-12 max-w-md w-full mx-auto mb-5">
      <h1 className="text-4xl md:text-5xl font-bold bg-volcano-gradient bg-clip-text text-transparent mb-2">
        Volcano Quiz
      </h1>
      <p className="text-lg md:text-xl font-light text-gray-300 mb-6">
        Create an account to see if you are smart enough to be a volcanologist?
      </p>
      <div>
        <form
          action={(formData: FormData) => {
            // Store displayName in localStorage before submitting for profile creation
            const displayName = formData.get('displayName')?.toString()
            if (displayName && typeof window !== 'undefined') {
              localStorage.setItem('pendingDisplayName', displayName)
            }
            return formAction(formData)
          }}
          className="flex flex-col gap-5 mb-5"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="username">
              Username (max 3 characters)
            </label>
            <input
              className="input-modern"
              type="text"
              id="username"
              name="displayName"
              placeholder="Enter username"
              maxLength={3}
              required
              disabled={isPending}
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
          <div className="p-3 rounded-lg bg-volcano-red/20 border border-volcano-red/50 text-volcano-red text-sm">
            {state.error}
          </div>
        )}
      </div>
    </div>
  )
}
