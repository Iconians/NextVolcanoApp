'use client'

import { supabase } from './supabase'
import { useEffect, useState } from 'react'

// Types matching the Supabase schema
export interface Question {
  id: string
  question: string
  created_at?: string
}

export interface Answer {
  id: string
  question_foreign_key: string
  answers: string[]
  correct_answer: string
  created_at?: string
}

export interface Profile {
  id: string
  user_id: string
  display_name?: string
  score: Array<{
    correct: number
    incorrect: number
    time_stamp: string
  }>
  created_at?: string
}

export interface HighScore {
  id: string
  user_name: string
  score: number
  created_at?: string
}

// Hook to get random questions
export function useRandomQuestions(count: number = 100) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const { data, error: fetchError } = await supabase.from('questions').select('*')

        if (fetchError) throw fetchError

        // Shuffle and take count
        const shuffled = [...(data || [])].sort(() => Math.random() - 0.5)
        setQuestions(shuffled.slice(0, count))
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch questions'))
        setLoading(false)
      }
    }

    fetchQuestions()
  }, [count])

  return { questions, loading, error }
}

// Hook to get answers for questions
export function useAnswers(questionIds: string[]) {
  const [answers, setAnswers] = useState<Answer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (questionIds.length === 0) {
      setLoading(false)
      return
    }

    async function fetchAnswers() {
      const { data, error } = await supabase
        .from('answers')
        .select('*')
        .in('question_foreign_key', questionIds)

      if (error) {
        console.error('Error fetching answers:', error)
        setLoading(false)
        return
      }

      setAnswers(data || [])
      setLoading(false)
    }

    fetchAnswers()
  }, [questionIds.join(',')])

  return { answers, loading }
}

// Hook to get profile by user ID
export function useProfileByUserId(userId: string | null) {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      setProfile(null)
      setLoading(false)
      return
    }

    async function fetchProfile() {
      const { data, error } = await supabase
        .from('profile')
        .select('*')
        .eq('user_id', userId)
        .single()

      if (error) {
        // Profile doesn't exist - that's ok
        if (error.code === 'PGRST116') {
          setProfile(null)
        } else {
          console.error('Error fetching profile:', error)
        }
        setLoading(false)
        return
      }

      setProfile(data)
      setLoading(false)
    }

    fetchProfile()
  }, [userId])

  return { profile, loading }
}

// Hook to get high scores
export function useHighScores(limit: number = 10) {
  const [highScores, setHighScores] = useState<HighScore[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchHighScores() {
      const { data, error } = await supabase
        .from('high_score')
        .select('*')
        .order('score', { ascending: false })
        .limit(limit)

      if (error) {
        console.error('Error fetching high scores:', error)
        setLoading(false)
        return
      }

      setHighScores(data || [])
      setLoading(false)
    }

    fetchHighScores()
  }, [limit])

  return { highScores, loading }
}

// Hook to get display name from profile
export function useProfileDisplayName(userId: string | null) {
  const { profile } = useProfileByUserId(userId)
  return profile?.display_name || null
}
