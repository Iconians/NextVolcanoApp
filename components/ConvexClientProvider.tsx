'use client'

import { ConvexReactClient } from 'convex/react'
import { ConvexAuthProvider } from '@convex-dev/auth/react'
import { PropsWithChildren, useEffect } from 'react'

// Create client as singleton outside component (matches Convex docs pattern)
// This ensures the same client instance is used consistently
const url = process.env.NEXT_PUBLIC_CONVEX_URL
const convex = new ConvexReactClient(url || 'https://placeholder.convex.cloud', {
  verbose: true // Enable verbose logging to debug auth token issues
})

// Use ConvexAuthProvider - uses localStorage by default for client-side only auth
// This doesn't require server-side setup (no middleware or server provider needed)
// ConvexAuthNextjsProvider requires server-side setup which was causing headers errors
export function ConvexClientProvider({ children }: PropsWithChildren) {
  // #region agent log - Check localStorage for auth tokens after provider mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkTokens = () => {
        const allKeys = Object.keys(localStorage)
        const authKeys = allKeys.filter(
          (key) =>
            key.includes('convex') ||
            key.includes('auth') ||
            key.includes('token') ||
            key.includes('jwt')
        )
        const tokenValues = authKeys.map((key) => ({
          key,
          valueLength: localStorage.getItem(key)?.length || 0,
          hasValue: !!localStorage.getItem(key)
        }))

        fetch('http://127.0.0.1:7242/ingest/8b577ad9-fd26-4c94-a2a6-d2344844799a', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            location: 'components/ConvexClientProvider.tsx:useEffect',
            message: 'ConvexClientProvider: checking localStorage for auth tokens',
            data: {
              allKeysCount: allKeys.length,
              authKeysCount: authKeys.length,
              authKeys: authKeys,
              tokenValues: tokenValues,
              convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL
            },
            timestamp: Date.now(),
            sessionId: 'debug-session',
            runId: 'run1',
            hypothesisId: 'F'
          })
        }).catch(() => {})
      }

      // Check immediately and after a delay (to catch tokens set after sign-in)
      checkTokens()
      const timer = setTimeout(checkTokens, 2000)
      return () => clearTimeout(timer)
    }
  }, [])
  // #endregion

  // ConvexAuthProvider uses localStorage automatically - no server setup needed
  // The storageNamespace defaults to client.address (the full URL), which gets escaped
  // internally by removing non-alphanumeric characters to match localStorage key format
  // Removing explicit storageNamespace to use default behavior

  // #region agent log - Log what the default storageNamespace should be
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = process.env.NEXT_PUBLIC_CONVEX_URL
      if (url) {
        const escapedNamespace = url.replace(/[^a-zA-Z0-9]/g, '')
        const localStorageKeys = Object.keys(localStorage).filter((k) => k.includes('convex'))
        fetch('http://127.0.0.1:7242/ingest/8b577ad9-fd26-4c94-a2a6-d2344844799a', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            location: 'components/ConvexClientProvider.tsx:default-storageNamespace',
            message: 'ConvexClientProvider: using default storageNamespace (client.address)',
            data: {
              convexUrl: url,
              defaultNamespace: url,
              expectedEscapedNamespace: escapedNamespace,
              expectedKeyFormat: `__convexAuthJWT_${escapedNamespace}`,
              localStorageKeys: localStorageKeys,
              hasMatchingKey: localStorageKeys.some((k) => k.includes(escapedNamespace))
            },
            timestamp: Date.now(),
            sessionId: 'debug-session',
            runId: 'run1',
            hypothesisId: 'M'
          })
        }).catch(() => {})
      }
    }
  }, [])
  // #endregion

  return <ConvexAuthProvider client={convex}>{children}</ConvexAuthProvider>
}
