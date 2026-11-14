"use client"

import { FC, useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useSpring } from "framer-motion"

interface Position {
  x: number
  y: number
}

export interface SmoothCursorProps {
  cursor?: React.ReactNode
  springConfig?: {
    damping: number
    stiffness: number
    mass: number
    restDelta: number
  }
}

const DESKTOP_POINTER_QUERY = "(any-hover: hover) and (any-pointer: fine)"
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary'

function isTrackablePointer(pointerType: string) {
  return pointerType !== "touch"
}

const DefaultCursorSVG: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="3.6" fill="var(--mark)" />
  </svg>
)

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 55,
    stiffness: 230,
    mass: 1,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const lastMousePos = useRef<Position>({ x: 0, y: 0 })
  const velocity = useRef<Position>({ x: 0, y: 0 })
  const lastUpdateTime = useRef(Date.now())
  const shouldReduceMotion = useReducedMotion()
  const [isEnabled, setIsEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)
  const scale = useSpring(1, {
    ...springConfig,
    stiffness: 260,
    damping: 45,
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY)

    const updateEnabled = () => {
      const nextIsEnabled = mediaQuery.matches && !shouldReduceMotion
      setIsEnabled(nextIsEnabled)

      if (!nextIsEnabled) {
        setIsVisible(false)
      }
    }

    updateEnabled()
    mediaQuery.addEventListener("change", updateEnabled)

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled)
    }
  }, [shouldReduceMotion])

  useEffect(() => {
    if (!isEnabled) {
      return
    }

    let timeout: ReturnType<typeof setTimeout> | null = null

    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastUpdateTime.current

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        }
      }

      lastUpdateTime.current = currentTime
      lastMousePos.current = currentPos
    }

    const smoothPointerMove = (e: PointerEvent) => {
      if (!isTrackablePointer(e.pointerType)) {
        return
      }

      setIsVisible(true)

      const currentPos = { x: e.clientX, y: e.clientY }
      updateVelocity(currentPos)

      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2)
      )

      cursorX.set(currentPos.x)
      cursorY.set(currentPos.y)

      const target = e.target instanceof Element ? e.target : null
      const overInteractive = Boolean(target?.closest(INTERACTIVE))
      const base = overInteractive ? 2.1 : 1

      scale.set(speed > 0.1 ? base * 0.82 : base)

      if (timeout !== null) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        scale.set(base)
      }, 160)
    }

    let rafId = 0
    const throttledPointerMove = (e: PointerEvent) => {
      if (!isTrackablePointer(e.pointerType)) {
        return
      }

      if (rafId) return

      rafId = requestAnimationFrame(() => {
        smoothPointerMove(e)
        rafId = 0
      })
    }

    document.body.style.cursor = "none"
    window.addEventListener("pointermove", throttledPointerMove, {
      passive: true,
    })

    return () => {
      window.removeEventListener("pointermove", throttledPointerMove)
      document.body.style.cursor = "auto"
      if (rafId) cancelAnimationFrame(rafId)
      if (timeout !== null) {
        clearTimeout(timeout)
      }
    }
  }, [cursorX, cursorY, scale, isEnabled])

  if (!isEnabled) {
    return null
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        left: cursorX,
        top: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        scale: scale,
        zIndex: 999,
        pointerEvents: "none",
        willChange: "transform",
        opacity: isVisible ? 1 : 0,
        filter: "drop-shadow(0 0 6px rgba(127, 201, 232, 0.6))",
      }}
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      {cursor}
    </motion.div>
  )
}
