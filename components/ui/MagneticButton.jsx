import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const MagneticButton = ({ children, className = '', strength = 0.35, ...props }) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * strength, y: middleY * strength })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 12, mass: 0.5 }}
      className={className}
      style={{ display: 'inline-block' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default MagneticButton
