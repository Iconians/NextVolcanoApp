interface Score {
  correct: number
  incorrect: number
  timeStamp: string | null | undefined
}

interface ScoreHistoryProps {
  userScore: Score[]
}

export default function ScoreHistory({ userScore }: ScoreHistoryProps) {
  return (
    <div className="mb-8">
      <div className="text-3xl font-bold mb-6 bg-volcano-gradient bg-clip-text text-transparent">
        Score History
      </div>
      <div>
        <div className="h-[500px] overflow-y-auto scroll max-w-full flex flex-wrap gap-4 justify-center md:justify-start">
          {userScore.length > 0 ? (
            userScore.map((score, index) => (
              <div
                key={`score-${index}-${score.correct}-${score.incorrect}`}
                className="modern-card p-5 min-w-[280px] max-w-[320px] flex flex-col"
              >
                {score.timeStamp !== undefined && (
                  <div className="mb-3 text-sm text-gray-400 font-medium">{score.timeStamp}</div>
                )}
                <div className="space-y-2">
                  <div className="text-lg">
                    <span className="text-volcano-amber font-semibold">Correct:</span>{' '}
                    <span className="text-white">{score.correct}</span>
                  </div>
                  <div className="text-lg">
                    <span className="text-volcano-red font-semibold">Incorrect:</span>{' '}
                    <span className="text-white">{score.incorrect}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="modern-card p-8 text-center text-gray-400">
              <p className="text-lg">No scores to show. Go play a few rounds to see results!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
