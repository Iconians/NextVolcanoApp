'use client'

import { useActionState, useOptimistic, useEffect, useMemo } from 'react'
import { useFormStatus } from 'react-dom'
import { useCurrentUser } from '@/lib/auth'
import { createUpdateDisplayNameAction } from '@/lib/profile-actions'
import type { ProfileActionResult } from '@/app/actions/profile'
import toast from 'react-hot-toast'

interface UpdatePasswordCompProps {
  onUpdateUsername: (newUserName: string) => void
  currentDisplayName?: string
}

function SubmitButton({ isPending: externalPending }: { isPending: boolean }) {
  const { pending } = useFormStatus()
  const isPending = pending || externalPending

  return (
    <button className="btn-modern" type="submit" disabled={isPending}>
      {isPending ? 'Updating...' : 'Change Username'}
    </button>
  )
}

export default function UpdatePasswordComp({
  onUpdateUsername,
  currentDisplayName
}: UpdatePasswordCompProps) {
  const auth = useCurrentUser()

  // Create action with bound userId
  const updateDisplayNameAction = useMemo(
    () => createUpdateDisplayNameAction(auth?.userId || null),
    [auth?.userId]
  )

  const [state, formAction, isPending] = useActionState<ProfileActionResult | null, FormData>(
    updateDisplayNameAction,
    null
  )

  // Optimistic update for display name
  const [optimisticDisplayName, setOptimisticDisplayName] = useOptimistic(
    currentDisplayName || 'USR',
    (state: string, newValue: string) => newValue
  )

  // Handle successful update
  useEffect(() => {
    if (state?.success) {
      const newName = state.data?.display_name
      if (newName) {
        setOptimisticDisplayName(newName)
        onUpdateUsername(newName)
      }
      toast.success('Username updated')
    } else if (state?.error) {
      toast.error(state.error)
    }
  }, [state, onUpdateUsername, setOptimisticDisplayName])

  if (!auth?.userId) {
    return (
      <div className="my-auto modern-card p-6 max-w-md w-full">
        <div className="mb-6 text-2xl font-semibold text-white">Update Username</div>
        <p className="text-gray-400">Please sign in to update your username</p>
      </div>
    )
  }

  return (
    <div className="my-auto modern-card p-6 max-w-md w-full">
      <div className="mb-6 text-2xl font-semibold text-white">Update Username</div>
      <form
        action={(formData: FormData) => {
          // Optimistically update UI immediately
          const newName = formData.get('displayName')?.toString()
          if (newName) {
            setOptimisticDisplayName(newName.substring(0, 3).toUpperCase())
          }
          return formAction(formData)
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300" htmlFor="username">
            Username (max 3 characters)
          </label>
          <input
            className="input-modern"
            placeholder="Change Username"
            type="text"
            id="username"
            name="displayName"
            maxLength={3}
            required
            disabled={isPending}
          />
          {optimisticDisplayName && optimisticDisplayName !== currentDisplayName && (
            <p className="text-sm text-volcano-amber">Preview: {optimisticDisplayName}</p>
          )}
        </div>
        <SubmitButton isPending={isPending} />
      </form>
      {state?.error && (
        <div className="mt-4 p-3 rounded-lg bg-volcano-red/20 border border-volcano-red/50 text-volcano-red text-sm">
          {state.error}
        </div>
      )}
    </div>
  )
}
