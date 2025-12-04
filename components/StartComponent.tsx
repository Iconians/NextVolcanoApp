'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faVolumeXmark, faWarning } from '@fortawesome/free-solid-svg-icons'
import WarningModal from './WarningModal'

interface StartComponentProps {
  playing: boolean
  onToggleAudio: () => void
}

export default function StartComponent({ playing, onToggleAudio }: StartComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="text-wrapper modern-card p-8 md:p-12 max-w-2xl w-full mx-auto relative">
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold bg-volcano-gradient bg-clip-text text-transparent mb-3">
          Volcano Quiz
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300">
          Are you smart enough to be a volcanologist?
        </p>
      </div>
      <WarningModal isModalOpen={isModalOpen} closeModal={closeModal} />
      <div className="flex flex-col gap-4 mb-6">
        <Link
          className="link-modern text-xl md:text-2xl font-semibold py-3 px-6 modern-card hover:border-volcano-orange/40 transition-all duration-300 text-center"
          href="/game"
        >
          Normal Game
        </Link>
        <div className="flex items-center justify-center gap-3">
          <Link
            className="link-modern text-xl md:text-2xl font-semibold py-3 px-6 modern-card hover:border-volcano-orange/40 transition-all duration-300 text-center flex-1"
            href="/god-mode"
          >
            Master Game
          </Link>
          <button
            className="text-2xl text-volcano-amber cursor-pointer hover:text-volcano-orange transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-volcano-orange focus:ring-offset-2 rounded"
            onMouseEnter={openModal}
            onMouseLeave={closeModal}
            onClick={openModal}
            aria-label="Show warning about Master Game"
          >
            <FontAwesomeIcon icon={faWarning} />
          </button>
        </div>
        <Link
          className="link-modern text-xl md:text-2xl font-semibold py-3 px-6 modern-card hover:border-volcano-orange/40 transition-all duration-300 text-center"
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className="link-modern text-xl md:text-2xl font-semibold py-3 px-6 modern-card hover:border-volcano-orange/40 transition-all duration-300 text-center"
          href="/high-scores"
        >
          High Scores
        </Link>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="text-2xl text-gray-400 cursor-pointer hover:text-volcano-orange transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-volcano-orange focus:ring-offset-2 rounded p-2"
          onClick={onToggleAudio}
          aria-label={playing ? 'Unmute audio' : 'Mute audio'}
        >
          {!playing ? (
            <FontAwesomeIcon icon={faVolumeHigh} />
          ) : (
            <FontAwesomeIcon icon={faVolumeXmark} />
          )}
        </button>
      </div>
    </div>
  )
}
