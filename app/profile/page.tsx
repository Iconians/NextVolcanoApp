'use client'

import { useState, useEffect, useRef } from 'react'
import { ConvexClientProvider } from '@/components/ConvexClientProvider'
import UpdatePasswordComp from '@/components/UpdatePasswordComp'
import ScoreHistory from '@/components/ScoreHistory'
import UserPageButtons from '@/components/UserPageButtons'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useAuth } from '@/lib/auth'

function ProfileContent() {
  const [userName, setUserName] = useState('')
  const [userScore, setUserScore] = useState<any[]>([])
  const backgroundMusicRef = useRef<HTMLAudioElement>(null)
  const auth = useAuth()
  const userId = auth?.userId

  console.log('userId', userId)
  console.log('auth', auth)

  // @ts-ignore - FilterApi type inference issue, queries exist at runtime
  const profile = useQuery(api.queries.profiles.getProfileByUserId, userId ? { userId } : 'skip')

  console.log('profile', profile)

  useEffect(() => {
    // Handle audio autoplay - browsers require user interaction first
    const playAudio = async () => {
      if (backgroundMusicRef.current) {
        try {
          await backgroundMusicRef.current.play()
        } catch (error) {
          // Autoplay was prevented - this is expected behavior
          // Audio will play after user interaction
          console.log('Audio autoplay prevented (requires user interaction)')
        }
      }
    }
    playAudio()
  }, [])

  useEffect(() => {
    if (profile) {
      setUserName(profile.displayName)
      if (profile.scores) {
        const parsedScores = profile.scores
          .map((score: any) => {
            if (typeof score === 'string') {
              try {
                return JSON.parse(score)
              } catch {
                return score
              }
            }
            return score
          })
          .filter(Boolean)
        setUserScore(parsedScores.slice().reverse())
      }
    }
  }, [profile])

  const updateUsername = (newUserName: string) => {
    setUserName(newUserName)
  }

  return (
    <section className="relative min-h-screen w-full text-center text-white bg-activeVolcano bg-cover bg-center overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="relative z-10 min-h-screen p-4 md:p-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-volcano-gradient bg-clip-text text-transparent">
              {userName}'s Profile
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-start mb-8">
            <div className="flex-1 w-full">
              <ScoreHistory userScore={userScore} />
            </div>
            <div className="w-full lg:w-auto">
              <UpdatePasswordComp onUpdateUsername={updateUsername} />
            </div>
          </div>
          <UserPageButtons />
        </div>
      </div>
      <audio ref={backgroundMusicRef} src="/lava-loop-3.wav" autoPlay loop />
    </section>
  )
}

export default function ProfilePage() {
  return (
    <ConvexClientProvider>
      <ProfileContent />
    </ConvexClientProvider>
  )
}
