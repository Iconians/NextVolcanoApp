'use client'

import { useEffect, useRef } from 'react'

export default function HighScoresClient() {
  const backgroundMusicRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.play()
    }
  }, [])

  return <audio ref={backgroundMusicRef} src="/lava-loop-3.wav" autoPlay loop />
}
