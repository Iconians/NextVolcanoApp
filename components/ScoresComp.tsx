interface Score {
  userName: string
  score: number
}

interface ScoresCompProps {
  scores: Score[] | null
}

export default function ScoresComp({ scores }: ScoresCompProps) {
  if (!scores || scores.length === 0) {
    return (
      <div className="modern-card p-8 text-center text-gray-400">
        <p className="text-lg">No high scores yet. Be the first to set a record!</p>
      </div>
    )
  }

  return (
    <div className="overflow-y-auto max-h-[500px] scroll">
      <div className="space-y-3">
        {scores.map((score, index) => (
          <div
            key={`${score.userName}-${score.score}-${index}`}
            className="modern-card p-4 md:p-6 flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-volcano-gradient flex items-center justify-center text-white font-bold text-lg">
                {index + 1}
              </div>
              <div className="text-xl md:text-2xl font-semibold text-white">{score.userName}</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-volcano-amber">{score.score}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
