"use client"

import { useEffect, useRef } from "react"

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star properties
    const stars: {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
      alpha: number
      alphaDirection: number
      rotationSpeed?: number
      angle?: number
    }[] = []

    // Create stars
    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 1500) // More stars

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 3 + 0.5 // Larger stars

        // Create varied movement patterns
        const speed = Math.random() * 0.5 + 0.1
        const angle = Math.random() * Math.PI * 2 // Random direction
        const vx = Math.cos(angle) * speed
        const vy = Math.sin(angle) * speed

        // Create a bright color for the star
        const hue = Math.random() * 360 // Full color spectrum
        const saturation = Math.random() * 20 + 80 // High saturation
        const lightness = Math.random() * 20 + 80 // High lightness
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`

        const alpha = Math.random() * 0.5 + 0.5
        const alphaDirection = Math.random() > 0.5 ? 0.01 : -0.01

        // Some stars will rotate
        const rotationSpeed = Math.random() > 0.7 ? Math.random() * 0.02 : 0
        const angle2 = Math.random() * Math.PI * 2

        stars.push({
          x,
          y,
          radius,
          color,
          vx,
          vy,
          alpha,
          alphaDirection,
          rotationSpeed: rotationSpeed,
          angle: angle2,
        })
      }
    }

    createStars()

    // Create shooting stars occasionally
    let lastShootingStarTime = 0
    const shootingStars: {
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      decay: number
    }[] = []

    const createShootingStar = () => {
      const now = Date.now()
      if (now - lastShootingStarTime > 2000 && Math.random() > 0.95) {
        lastShootingStarTime = now

        const x = Math.random() * canvas.width
        const y = Math.random() * (canvas.height / 3) // Start in top third
        const length = Math.random() * 80 + 50
        const angle = Math.PI / 4 + (Math.random() * Math.PI) / 2 // Angle between 45 and 135 degrees
        const speed = Math.random() * 5 + 10

        shootingStars.push({
          x,
          y,
          length,
          speed,
          angle,
          opacity: 1,
          decay: 0.01 + Math.random() * 0.02,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0f172a") // Dark blue
      gradient.addColorStop(1, "#1e293b") // Slightly lighter blue
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw stars
      stars.forEach((star) => {
        // Move star
        star.x += star.vx
        star.y += star.vy

        // Wrap around screen edges
        if (star.x < -10) star.x = canvas.width + 10
        if (star.x > canvas.width + 10) star.x = -10
        if (star.y < -10) star.y = canvas.height + 10
        if (star.y > canvas.height + 10) star.y = -10

        // Pulsate star
        star.alpha += star.alphaDirection
        if (star.alpha > 1) {
          star.alpha = 1
          star.alphaDirection *= -1
        } else if (star.alpha < 0.3) {
          star.alpha = 0.3
          star.alphaDirection *= -1
        }

        // Rotate star if it has rotation
        if (star.rotationSpeed && star.angle !== undefined) {
          star.angle += star.rotationSpeed
        }

        // Draw star
        ctx.save()
        if (star.angle !== undefined && star.rotationSpeed) {
          ctx.translate(star.x, star.y)
          ctx.rotate(star.angle)
          ctx.translate(-star.x, -star.y)
        }

        ctx.beginPath()

        // Draw some stars as 4-point stars instead of circles
        if (star.radius > 2) {
          const spikes = 4
          const outerRadius = star.radius
          const innerRadius = star.radius / 2

          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius
            const angle = (Math.PI * i) / spikes
            const x = star.x + radius * Math.cos(angle)
            const y = star.y + radius * Math.sin(angle)

            if (i === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }
          ctx.closePath()
        } else {
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        }

        ctx.fillStyle = star.color
        ctx.globalAlpha = star.alpha
        ctx.fill()

        // Draw glow effect
        const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 5)
        glow.addColorStop(0, `${star.color.slice(0, -1)}, ${star.alpha * 0.8})`)
        glow.addColorStop(1, `${star.color.slice(0, -1)}, 0)`)

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 5, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        ctx.restore()
      })

      // Create and update shooting stars
      createShootingStar()

      // Draw shooting stars
      shootingStars.forEach((star, index) => {
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        star.opacity -= star.decay

        if (star.opacity <= 0) {
          shootingStars.splice(index, 1)
          return
        }

        // Draw shooting star
        const tailX = star.x - Math.cos(star.angle) * star.length
        const tailY = star.y - Math.sin(star.angle) * star.length

        const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y)
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`)
        gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(star.x, star.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw head of shooting star
        ctx.beginPath()
        ctx.arc(star.x, star.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" aria-label="Animated starry background" />
    </div>
  )
}
