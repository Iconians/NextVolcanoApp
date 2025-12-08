'use client'

import { useState, useEffect, useRef } from 'react'
import { ConvexClientProvider } from '@/components/ConvexClientProvider'
import GodModeMainQuestionSection from '@/components/GodModeMainQuestionSection'
import LostScreen from '@/components/LostScreen'
import WinScreen from '@/components/WinScreen'
import LoadingComponent from '@/components/LoadingComponent'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useGameUtils } from '@/lib/gameUtils'
import toast from 'react-hot-toast'

function GodModeGamePageContent() {
  const [questionsArray, setQuestionsArray] = useState<any[]>([])
  const [answerArray, setAnswerArray] = useState<any[]>([])
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [loading, setLoading] = useState(true)
  const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false)
  const backgroundMusicRef = useRef<HTMLAudioElement>(null)
  const correctSoundRef = useRef<HTMLAudioElement>(null)
  const incorrectSoundRef = useRef<HTMLAudioElement>(null)

  const allQuestions = useQuery(api.queries.questions.getRandomQuestions, { count: 1000 })
  const { postScore, updateHighScore, sortQuestions, displayName, userId } = useGameUtils()

  useEffect(() => {
    if (allQuestions) {
      // Get 100 unique questions
      const uniqueQuestions: any[] = []
      const questionTexts = new Set<string>()

      for (const question of allQuestions) {
        if (!questionTexts.has(question.question) && uniqueQuestions.length < 100) {
          questionTexts.add(question.question)
          uniqueQuestions.push(question)
        }
      }

      setQuestionsArray(uniqueQuestions)
    }
  }, [allQuestions])

  const playBackgroundMusic = () => {
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.play()
    }
  }

  useEffect(() => {
    playBackgroundMusic()
  }, [])

  const answerClass = answerSubmitted ? (lastAnswerCorrect ? 'correct' : 'incorrect') : ''

  const handlePostScore = async () => {
    if (questionsArray.length === 0 || wrongAnswers === 10) {
      if (userId) {
        await postScore(correctAnswers, wrongAnswers)
      }
    }
    if (correctAnswers >= 50 && userId && displayName) {
      await updateHighScore(displayName, correctAnswers)
    }
  }

  const findAnswer = (correctAnswer: any[], answer: string) => {
    const getAnswer = correctAnswer[0].correctAnswer
    if (answer === getAnswer) {
      setCorrectAnswers((prev) => prev + 1)
      setAnswerSubmitted(true)
      setLastAnswerCorrect(true)
      if (correctSoundRef.current) {
        correctSoundRef.current.play()
      }
    } else {
      setWrongAnswers((prev) => prev + 1)
      setAnswerSubmitted(true)
      setLastAnswerCorrect(false)
      if (incorrectSoundRef.current) {
        incorrectSoundRef.current.play()
      }
    }
  }

  const checkAnswer = async (answer: string) => {
    const correctAnswer = answerArray.filter((a) => a.questionId === questionsArray[0]?._id)

    if (correctAnswer.length > 0) {
      findAnswer(correctAnswer, answer)
    }

    if (wrongAnswers === 10) {
      await handlePostScore()
      return
    }

    if (questionsArray.length > 0) {
      const newQuestions = [...questionsArray]
      const newAnswers = [...answerArray]
      sortQuestions(newQuestions, newAnswers)
      setQuestionsArray(newQuestions)
      setAnswerArray(newAnswers)
    }

    if (correctAnswers + wrongAnswers === 100 && wrongAnswers < 10) {
      await handlePostScore()
    }

    setTimeout(() => {
      setAnswerSubmitted(false)
    }, 800)
  }

  // Fetch answers when questions are loaded
  const questionIds = questionsArray.length > 0 ? questionsArray.map((q) => q._id) : []
  const answers = useQuery(
    api.queries.answers.getAnswersForQuestions,
    questionIds.length > 0 ? { questionIds } : 'skip'
  )

  useEffect(() => {
    if (answers && questionsArray.length > 0) {
      const shuffledAnswers = [...answers]
      // Shuffle answers for first question
      const firstQuestionAnswers = shuffledAnswers.filter(
        (a) => a.questionId === questionsArray[0]._id
      )
      if (firstQuestionAnswers.length > 0) {
        firstQuestionAnswers[0].answers.sort(() => Math.random() - 0.5)
      }
      setAnswerArray(shuffledAnswers)
      setLoading(false)
    } else if (questionsArray.length === 0 && allQuestions) {
      setLoading(false)
    }
  }, [answers, questionsArray, allQuestions])

  if (loading) {
    return <LoadingComponent />
  }

  if (questionsArray.length > 0 && wrongAnswers < 10 && !loading) {
    return (
      <>
        <GodModeMainQuestionSection
          questionsArray={questionsArray}
          answerArray={answerArray}
          wrongAnswers={wrongAnswers}
          correctAnswers={correctAnswers}
          answerClass={answerClass}
          onSubmit={checkAnswer}
        />
        <audio ref={backgroundMusicRef} src="/lava-loop-3.wav" autoPlay loop />
        <audio ref={correctSoundRef} src="/correct.mp3" />
        <audio ref={incorrectSoundRef} src="/wronganswer.mp3" />
      </>
    )
  }

  if (wrongAnswers === 10 && !loading) {
    return <LostScreen correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
  }

  if (!loading) {
    return <WinScreen correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} />
  }

  return null
}

export default function GodModeGamePage() {
  return (
    <ConvexClientProvider>
      <GodModeGamePageContent />
    </ConvexClientProvider>
  )
}
