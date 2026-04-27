import React, { useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)

  const moveCursor = useCallback((e) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
    if (!isVisible) setIsVisible(true)
  }, [cursorX, cursorY, isVisible])

  useEffect(() => {
    // Detect touch devices — don't show custom cursor on mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', () => setIsClicking(true))
    window.addEventListener('mouseup', () => setIsClicking(false))
    window.addEventListener('mouseleave', () => setIsVisible(false))
    window.addEventListener('mouseenter', () => setIsVisible(true))

    // Detect interactive elements for hover state
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
      )
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    // Run after initial render + observe DOM changes for dynamic content
    addHoverListeners()
    const observer = new MutationObserver(() => {
      addHoverListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('resize', checkMobile)
      observer.disconnect()
    }
  }, [moveCursor])

  if (isMobile) return null

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="cursor-dot"
        style={{
          left: smoothX,
          top: smoothY,
          position: 'fixed',
          zIndex: 99999,
          pointerEvents: 'none',
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          borderRadius: '50%',
          background: isHovering
            ? 'rgba(96, 165, 250, 0.15)'
            : 'rgba(96, 165, 250, 0.9)',
          border: isHovering ? '2px solid rgba(96, 165, 250, 0.6)' : 'none',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.75 : 1})`,
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease, border 0.3s ease, transform 0.15s ease',
          opacity: isVisible ? 1 : 0,
          mixBlendMode: isHovering ? 'normal' : 'normal',
          backdropFilter: isHovering ? 'blur(4px)' : 'none',
        }}
      />
      {/* Outer glow ring */}
      <motion.div
        className="cursor-glow"
        style={{
          left: smoothX,
          top: smoothY,
          position: 'fixed',
          zIndex: 99998,
          pointerEvents: 'none',
          width: isHovering ? 64 : 36,
          height: isHovering ? 64 : 36,
          borderRadius: '50%',
          border: `1px solid rgba(96, 165, 250, ${isHovering ? 0.3 : 0.15})`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.4s ease, height 0.4s ease, border-color 0.3s ease',
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(circle, rgba(96, 165, 250, ${isHovering ? 0.08 : 0.04}) 0%, transparent 70%)`,
        }}
      />
    </>
  )
}

export default CustomCursor
