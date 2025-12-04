interface GameStatisticsProps {
  correctAnswers: number
}

export default function GameStatistics({ correctAnswers }: GameStatisticsProps) {
  return (
    <div className="h-fit mt-5 statistics z-10 modern-card p-4 rounded-xl">
      <p className="text-xl md:text-2xl font-semibold">
        <span className="text-volcano-amber">Correct:</span>{' '}
        <span className="text-white">{correctAnswers}</span>
      </p>
    </div>
  )
}
