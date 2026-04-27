import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const glowRef = useRef(null)
  const [isMobile, setIsMobile] = useState(true) // start hidden

  useEffect(() => {
    // Detect touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
    setIsMobile(isTouch)
    if (isTouch) return

    const dot = dotRef.current
    const glow = glowRef.current
    if (!dot || !glow) return

    let hovering = false

    // Direct style manipulation — no React re-renders, zero lag
    const onMouseMove = (e) => {
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
      dot.style.opacity = '1'
      glow.style.opacity = '1'
    }

    const onMouseDown = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(0.75)'
    }

    const onMouseUp = () => {
      dot.style.transform = hovering
        ? 'translate(-50%, -50%) scale(1)'
        : 'translate(-50%, -50%) scale(1)'
    }

    const onMouseLeave = () => {
      dot.style.opacity = '0'
      glow.style.opacity = '0'
    }

    const onMouseEnter = () => {
      dot.style.opacity = '1'
      glow.style.opacity = '1'
    }

    // Use event delegation on document instead of attaching to every element
    const onMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor-hover]')
      ) {
        if (!hovering) {
          hovering = true
          dot.style.width = '48px'
          dot.style.height = '48px'
          dot.style.background = 'rgba(96, 165, 250, 0.15)'
          dot.style.border = '2px solid rgba(96, 165, 250, 0.6)'
          dot.style.backdropFilter = 'blur(4px)'
          glow.style.width = '64px'
          glow.style.height = '64px'
        }
      } else {
        if (hovering) {
          hovering = false
          dot.style.width = '12px'
          dot.style.height = '12px'
          dot.style.background = 'rgba(96, 165, 250, 0.9)'
          dot.style.border = 'none'
          dot.style.backdropFilter = 'none'
          glow.style.width = '36px'
          glow.style.height = '36px'
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mousedown', onMouseDown, { passive: true })
    document.addEventListener('mouseup', onMouseUp, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave, { passive: true })
    document.addEventListener('mouseenter', onMouseEnter, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          zIndex: 99999,
          pointerEvents: 'none',
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: 'rgba(96, 165, 250, 0.9)',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, border 0.2s ease, transform 0.1s ease, backdrop-filter 0.2s ease',
          willChange: 'left, top',
        }}
      />
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          zIndex: 99998,
          pointerEvents: 'none',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(96, 165, 250, 0.15)',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.2s ease',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.04) 0%, transparent 70%)',
          willChange: 'left, top',
        }}
      />
    </>
  )
}

export default CustomCursor
