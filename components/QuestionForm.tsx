'use client'

interface Question {
  _id: string
  question: string
}

interface Answer {
  _id: string
  questionId: string
  answers: string[]
  correctAnswer: string
}

interface QuestionFormProps {
  questionsArray: Question[]
  answerArray: Answer[]
  onSubmit: (answer: string) => void
}

export default function QuestionForm({ questionsArray, answerArray, onSubmit }: QuestionFormProps) {
  if (questionsArray.length === 0) return null

  const currentQuestion = questionsArray[0]
  const currentAnswers = answerArray.filter((a) => a.questionId === currentQuestion._id)

  if (currentAnswers.length === 0) return null

  const answerObj = currentAnswers[0]

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-col justify-center items-center min-h-[450px] gap-8 py-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white mb-8 max-w-4xl leading-relaxed">
          {currentQuestion.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {answerObj.answers.map((answer, index) => (
            <button
              key={`answer-${index}`}
              className="modern-card p-6 flex flex-col items-center justify-center min-h-[140px] group hover:border-volcano-orange/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-volcano-orange focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => onSubmit(answer)}
              aria-label={`Select answer: ${answer}`}
            >
              <p className="text-lg md:text-xl font-medium text-center text-white mb-4 group-hover:text-volcano-amber transition-colors">
                {answer}
              </p>
              <div className="w-12 h-12 rounded-full bg-volcano-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-xl" aria-hidden="true">
                  ✓
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
