'use client'

import { supabase } from './supabase'

export type AuthResult = {
  success: boolean
  error?: string
  userId?: string
}

// Helper function to extract error messages
function extractErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  return 'An unexpected error occurred'
}

// Client-side action for sign in (wrapped for useActionState compatibility)
export async function signInAction(
  prevState: AuthResult | null,
  formData: FormData
): Promise<AuthResult> {
  const email = formData.get('email')?.toString().trim().toLowerCase()
  const password = formData.get('password')?.toString()

  if (!email || !password) {
    return { success: false, error: 'Email and password are required' }
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      let errorMessage = 'Error signing in'

      if (
        error.message.includes('Invalid login credentials') ||
        error.message.includes('Invalid credentials') ||
        error.message.includes('Invalid email or password')
      ) {
        errorMessage = 'Invalid email or password. Please check your credentials and try again.'
      } else if (
        error.message.includes('User not found') ||
        error.message.includes('No account found')
      ) {
        errorMessage = 'No account found with this email. Please create an account first.'
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage = 'Please verify your email before signing in.'
      } else if (error.message.length > 0) {
        errorMessage = error.message
      }

      return { success: false, error: errorMessage }
    }

    return { success: true, userId: data.user?.id || undefined }
  } catch (error) {
    return { success: false, error: extractErrorMessage(error) }
  }
}

export async function signUpAction(
  prevState: AuthResult | null,
  formData: FormData
): Promise<AuthResult> {
  const email = formData.get('email')?.toString().trim().toLowerCase()
  const password = formData.get('password')?.toString()
  const displayName = formData.get('displayName')?.toString()

  if (!email || !password) {
    return { success: false, error: 'Email and password are required' }
  }

  // Validate password length
  if (password.length < 8) {
    return { success: false, error: 'Password must be at least 8 characters long' }
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName?.trim().substring(0, 3).toUpperCase() || undefined
        }
      }
    })

    if (error) {
      let errorMessage = 'Error creating account'

      if (
        error.message.includes('User already registered') ||
        error.message.includes('already exists') ||
        error.message.includes('already registered')
      ) {
        errorMessage = 'An account with this email already exists. Please sign in instead.'
      } else if (
        error.message.includes('Invalid email') ||
        error.message.includes('invalid email')
      ) {
        errorMessage = 'Please enter a valid email address.'
      } else if (error.message.length > 0) {
        errorMessage = error.message
      }

      return { success: false, error: errorMessage }
    }

    return { success: true, userId: data.user?.id || undefined }
  } catch (error) {
    return { success: false, error: extractErrorMessage(error) }
  }
}

export async function resetPasswordAction(
  prevState: AuthResult | null,
  formData: FormData
): Promise<AuthResult> {
  const email = formData.get('email')?.toString().trim()

  if (!email) {
    return { success: false, error: 'Email is required' }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address' }
  }

  try {
    const redirectUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}/reset-password`
        : `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/reset-password`

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl
    })

    if (error) {
      let errorMessage = 'Error sending password reset email'
      if (error.message.includes('User not found') || error.message.includes('Account not found')) {
        errorMessage = 'No account found with this email address.'
      } else if (error.message.length > 0) {
        errorMessage = error.message
      }
      return { success: false, error: errorMessage }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: extractErrorMessage(error) }
  }
}
