'use client'

import { ConvexProvider, ConvexReactClient } from 'convex/react'
import { PropsWithChildren, useMemo } from 'react'

export function ConvexClientProvider({ children }: PropsWithChildren) {
  const convex = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_CONVEX_URL
    if (!url) {
      // Return a dummy client if Convex isn't set up yet
      // This allows the app to render without errors
      return new ConvexReactClient('https://placeholder.convex.cloud')
    }
    return new ConvexReactClient(url)
  }, [])

  return <ConvexProvider client={convex}>{children}</ConvexProvider>
}
