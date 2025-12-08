interface WarningModalProps {
  isModalOpen: boolean
  closeModal: () => void
}

export default function WarningModal({ isModalOpen, closeModal }: WarningModalProps) {
  if (!isModalOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-in]"
      onClick={closeModal}
    >
      <div
        className="modern-card p-8 max-w-md w-full mx-4 animate-[slideUp_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6">
          <h4 className="text-3xl font-bold text-volcano-orange mb-4">⚠️ Warning</h4>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-semibold text-volcano-amber">
            Play the Master Game at your own risk
          </p>
          <p className="text-base text-gray-300 leading-relaxed">
            There are 100 questions to answer. If you think you can prove you're as smart as a
            Volcanologist, give it a shot!
          </p>
        </div>
        <button className="btn-modern mt-6 w-full" onClick={closeModal}>
          Understood
        </button>
      </div>
    </div>
  )
}
