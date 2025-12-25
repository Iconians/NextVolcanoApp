'use client'

import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { resetPasswordAction, type AuthResult } from '@/lib/auth-actions'
import toast from 'react-hot-toast'

function SubmitButton({ isPending: externalPending }: { isPending: boolean }) {
  const { pending } = useFormStatus()
  const isPending = pending || externalPending

  return (
    <button className="btn-modern mt-2" type="submit" disabled={isPending}>
      {isPending ? 'Sending...' : 'Reset Password'}
    </button>
  )
}

export default function ResetPasswordForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [state, formAction, isPending] = useActionState<AuthResult | null, FormData>(
    resetPasswordAction,
    null
  )

  // Handle successful password reset
  useEffect(() => {
    if (state?.success) {
      toast.success('Password reset email sent successfully')
      onSubmitted()
    } else if (state?.error) {
      toast.error(state.error)
    }
  }, [state, onSubmitted])

  return (
    <div className="text-wrapper modern-card p-8 md:p-12 max-w-md w-full mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold bg-volcano-gradient bg-clip-text text-transparent mb-2">
        Volcano Quiz
      </h1>
      <p className="text-lg md:text-xl font-light text-gray-300 mb-6">
        Please enter your Email to reset your Password
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
