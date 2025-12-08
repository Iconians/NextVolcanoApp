'use client'

import { useEffect, useRef } from 'react'

interface AnimatedVolcanoBackgroundProps {
  variant?: 'flowing-lava' | 'side-flowing-lava' | 'calm-volcano'
  intensity?: 'subtle' | 'moderate' | 'intense'
}

export default function AnimatedVolcanoBackground({
  variant = 'flowing-lava',
  intensity = 'moderate'
}: AnimatedVolcanoBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationId: number
    let time = 0

    const speed = {
      subtle: 0.3,
      moderate: 0.5,
      intense: 0.8
    }

    // Particle class for explosions/embers
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      life: number
      maxLife: number
      color: { r: number; g: number; b: number }

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 2
        this.vy = -Math.random() * 3 - 1
        this.size = Math.random() * 3 + 1
        this.maxLife = Math.random() * 60 + 40
        this.life = this.maxLife
        this.color = {
          r: 255,
          g: Math.random() * 100 + 100,
          b: Math.random() * 50
        }
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.vy += 0.05 // gravity
        this.life--
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life / this.maxLife
        ctx.globalAlpha = alpha
        ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }

      isDead() {
        return this.life <= 0
      }
    }

    // Lava flow particle
    class LavaParticle {
      x: number
      y: number
      speed: number
      waveOffset: number
      size: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.speed = Math.random() * 2 + 1
        this.waveOffset = Math.random() * Math.PI * 2
        this.size = Math.random() * 4 + 2
      }

      update(time: number, canvas: HTMLCanvasElement) {
        this.y += this.speed * speed[intensity]
        // Wave motion
        this.x += Math.sin(time * 0.02 + this.waveOffset) * 0.5
        // Reset if off screen
        if (this.y > canvas.height + 50) {
          this.y = -50
          this.x = Math.random() * canvas.width
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2)
        gradient.addColorStop(
          0,
          `rgba(255, ${150 + Math.random() * 50}, ${50 + Math.random() * 50}, 0.8)`
        )
        gradient.addColorStop(1, 'rgba(196, 30, 58, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    let particles: Particle[] = []
    let lavaParticles: LavaParticle[] = []

    // Initialize particles based on variant
    if (variant === 'flowing-lava') {
      // Create particles for explosions
      for (let i = 0; i < 100; i++) {
        particles.push(
          new Particle(Math.random() * canvas.width, canvas.height * 0.7 + Math.random() * 100)
        )
      }
      // Create flowing lava particles
      for (let i = 0; i < 80; i++) {
        lavaParticles.push(
          new LavaParticle(Math.random() * canvas.width, Math.random() * canvas.height)
        )
      }
    } else if (variant === 'side-flowing-lava') {
      // Side view - particles flow horizontally from left
      for (let i = 0; i < 150; i++) {
        const y = canvas.height * 0.7 + (Math.random() - 0.5) * canvas.height * 0.3
        const particle = new LavaParticle(-50 + Math.random() * 100, y)
        particle.speed = Math.random() * 3 + 2
        lavaParticles.push(particle)
      }
    } else if (variant === 'calm-volcano') {
      // Calm - just gentle particles
      for (let i = 0; i < 20; i++) {
        particles.push(
          new Particle(Math.random() * canvas.width, canvas.height * 0.6 + Math.random() * 50)
        )
      }
    }

    const draw = () => {
      time += 1

      // Clear canvas
      ctx.fillStyle = '#0F0F0F'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (variant === 'flowing-lava') {
        // Dark base
        const baseGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        baseGradient.addColorStop(0, '#0F0F0F')
        baseGradient.addColorStop(0.5, '#1A1A1A')
        baseGradient.addColorStop(0.7, '#2A1A1A')
        baseGradient.addColorStop(1, '#0F0F0F')
        ctx.fillStyle = baseGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Flowing lava streams (vertical)
        for (let i = 0; i < 5; i++) {
          const x = (canvas.width / 6) * (i + 1)
          const wave = Math.sin(time * 0.02 + i) * 30
          const gradient = ctx.createLinearGradient(x + wave, 0, x + wave, canvas.height)
          gradient.addColorStop(0, 'rgba(26, 26, 26, 0)')
          gradient.addColorStop(0.6, `rgba(255, ${100 + i * 30}, ${50 + i * 20}, 0.3)`)
          gradient.addColorStop(0.7, `rgba(255, ${120 + i * 30}, ${60 + i * 20}, 0.6)`)
          gradient.addColorStop(0.8, `rgba(196, 30, 58, 0.4)`)
          gradient.addColorStop(1, 'rgba(139, 21, 56, 0)')

          ctx.fillStyle = gradient
          ctx.fillRect(x + wave - 40, 0, 80, canvas.height)
        }

        // Draw flowing lava particles
        lavaParticles.forEach((particle) => {
          particle.update(time, canvas)
          particle.draw(ctx)
        })

        // Draw explosion particles
        particles.forEach((particle) => {
          particle.update()
          particle.draw(ctx)
          if (particle.isDead()) {
            particle.x = Math.random() * canvas.width
            particle.y = canvas.height * 0.7 + Math.random() * 100
            particle.life = particle.maxLife
            particle.vx = (Math.random() - 0.5) * 2
            particle.vy = -Math.random() * 3 - 1
          }
        })

        // Add occasional explosion bursts
        if (Math.random() < 0.02) {
          const explosionX = Math.random() * canvas.width
          const explosionY = canvas.height * 0.7
          for (let i = 0; i < 15; i++) {
            const p = new Particle(explosionX, explosionY)
            p.vx = (Math.random() - 0.5) * 4
            p.vy = -Math.random() * 5 - 2
            particles.push(p)
          }
        }
      } else if (variant === 'side-flowing-lava') {
        // Side view perspective
        // Dark background
        ctx.fillStyle = '#0F0F0F'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Ground/rock layer at bottom
        const groundGradient = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height)
        groundGradient.addColorStop(0, 'rgba(26, 26, 26, 0.8)')
        groundGradient.addColorStop(1, '#1A1A1A')
        ctx.fillStyle = groundGradient
        ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3)

        // Sky gradient
        const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.7)
        skyGradient.addColorStop(0, '#0F0F0F')
        skyGradient.addColorStop(0.5, '#1A0F0F')
        skyGradient.addColorStop(1, '#2A1A1A')
        ctx.fillStyle = skyGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height * 0.7)

        // Lava flow streams (horizontal, from left to right)
        const flowY = canvas.height * 0.7
        for (let i = 0; i < 3; i++) {
          const y = flowY + (i - 1) * 30
          const progress = (time * speed[intensity] * 0.5) % (canvas.width + 200)

          const gradient = ctx.createLinearGradient(progress - 100, y, progress + 100, y)
          gradient.addColorStop(0, 'rgba(255, 107, 53, 0)')
          gradient.addColorStop(0.2, 'rgba(255, 140, 66, 0.6)')
          gradient.addColorStop(0.5, 'rgba(255, 179, 71, 0.8)')
          gradient.addColorStop(0.8, 'rgba(255, 107, 53, 0.6)')
          gradient.addColorStop(1, 'rgba(196, 30, 58, 0)')

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.moveTo(progress - 100, y - 15)
          ctx.quadraticCurveTo(progress, y - 20, progress + 100, y - 15)
          ctx.quadraticCurveTo(progress + 50, y, progress + 100, y + 15)
          ctx.quadraticCurveTo(progress, y + 20, progress - 100, y + 15)
          ctx.closePath()
          ctx.fill()
        }

        // Draw horizontal flowing particles
        lavaParticles.forEach((particle) => {
          particle.update(time, canvas)
          particle.draw(ctx)
          if (particle.x > canvas.width + 50) {
            particle.x = -50
            particle.y = canvas.height * 0.7 + (Math.random() - 0.5) * 60
          }
        })

        // Add glow effect
        const glowGradient = ctx.createRadialGradient(
          canvas.width * 0.3,
          flowY,
          0,
          canvas.width * 0.3,
          flowY,
          200
        )
        glowGradient.addColorStop(0, 'rgba(255, 107, 53, 0.2)')
        glowGradient.addColorStop(1, 'rgba(255, 107, 53, 0)')
        ctx.fillStyle = glowGradient
        ctx.fillRect(0, flowY - 100, canvas.width, 200)
      } else if (variant === 'calm-volcano') {
        // Calm, peaceful volcano
        // Dark night sky
        const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        skyGradient.addColorStop(0, '#0F0F0F')
        skyGradient.addColorStop(0.4, '#1A0F0F')
        skyGradient.addColorStop(0.7, '#1A1A1A')
        skyGradient.addColorStop(1, '#2A1A1A')
        ctx.fillStyle = skyGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Gentle volcano glow (bottom center)
        const volcanoX = canvas.width / 2
        const volcanoY = canvas.height * 0.8
        const glowGradient = ctx.createRadialGradient(
          volcanoX,
          volcanoY,
          0,
          volcanoX,
          volcanoY,
          canvas.height * 0.4
        )
        glowGradient.addColorStop(0, 'rgba(255, 107, 53, 0.15)')
        glowGradient.addColorStop(0.5, 'rgba(196, 30, 58, 0.1)')
        glowGradient.addColorStop(1, 'rgba(139, 21, 56, 0)')
        ctx.fillStyle = glowGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Very gentle particles (like distant stars/embers)
        particles.forEach((particle) => {
          particle.update()
          particle.vy *= 0.98 // Much slower
          particle.vx *= 0.98
          particle.draw(ctx)
          if (particle.isDead() || particle.y < 0) {
            particle.x = Math.random() * canvas.width
            particle.y = canvas.height * 0.7 + Math.random() * 50
            particle.life = particle.maxLife * 2 // Longer life
            particle.vx = (Math.random() - 0.5) * 0.3
            particle.vy = -Math.random() * 0.5 - 0.2
            particle.size = Math.random() * 2 + 1
          }
        })

        // Subtle pulsing glow
        const pulseAlpha = 0.05 + Math.sin(time * 0.02) * 0.02
        const pulseGradient = ctx.createRadialGradient(
          volcanoX,
          volcanoY,
          0,
          volcanoX,
          volcanoY,
          canvas.height * 0.3
        )
        pulseGradient.addColorStop(0, `rgba(255, 179, 71, ${pulseAlpha})`)
        pulseGradient.addColorStop(1, 'rgba(255, 107, 53, 0)')
        ctx.fillStyle = pulseGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [variant, intensity])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: '#0F0F0F' }}
    />
  )
}
