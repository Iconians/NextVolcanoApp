'use client'

import { useState, useEffect, useRef } from 'react'
import UpdatePasswordComp from '@/components/UpdatePasswordComp'
import ScoreHistory from '@/components/ScoreHistory'
import UserPageButtons from '@/components/UserPageButtons'
import AnimatedVolcanoBackground from '@/components/AnimatedVolcanoBackground'
import { useProfileByUserId } from '@/lib/supabase-queries'
import { createProfile, ensureProfile } from '@/lib/supabase-mutations'
import { useCurrentUser } from '@/lib/auth'

function ProfileContent() {
  const [userName, setUserName] = useState('')
  const [userScore, setUserScore] = useState<any[]>([])
  const backgroundMusicRef = useRef<HTMLAudioElement>(null)
  const auth = useCurrentUser()
  const userId = auth?.userId

  const { profile, loading: profileLoading } = useProfileByUserId(userId || null)

  // Auto-create profile if user is authenticated but profile doesn't exist
  useEffect(() => {
    let isMounted = true
    let profileCreationAttempted = false

    const ensureProfileExists = async () => {
      // Prevent multiple attempts
      if (profileCreationAttempted) return

      // Wait for profile query to complete
      if (profileLoading) return

      if (userId && profile === null && isMounted) {
        profileCreationAttempted = true

        try {
          // Create profile with default display name
          await ensureProfile(userId, 'USR')
          console.log('Profile auto-created on profile page visit')
        } catch (error) {
          console.error('Could not auto-create profile on profile page:', error)
        }
      }
    }

    // Check after a brief delay
    const timer = setTimeout(() => {
      if (isMounted) {
        ensureProfileExists()
      }
    }, 1000)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [userId, profile, profileLoading])

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
      setUserName(profile.display_name || 'USR')
      if (profile.score) {
        const parsedScores = profile.score
          .map((score: any) => {
            // Supabase stores scores as objects with time_stamp, convert to timeStamp for component
            if (typeof score === 'string') {
              try {
                const parsed = JSON.parse(score)
                return {
                  ...parsed,
                  timeStamp: parsed.time_stamp || parsed.timeStamp
                }
              } catch {
                return score
              }
            }
            // Convert time_stamp to timeStamp for component compatibility
            return {
              ...score,
              timeStamp: score.time_stamp || score.timeStamp
            }
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
    <section className="relative min-h-screen w-full text-center text-white overflow-y-auto">
      <AnimatedVolcanoBackground variant="flowing-lava" intensity="moderate" />
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
  return <ProfileContent />
}
