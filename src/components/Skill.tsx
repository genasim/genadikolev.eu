import { motion } from 'framer-motion'
import React from 'react'

interface SkillProps {
  progress?: number
  name?: string
  className?: string
}

const AnimatedProgressBar: React.FC<{progress?: number}> = ({ progress }) => (
    <div
        className="bg-white rounded-3"
        style={{ height: '0.7rem' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: progress + '%' }}
          transition={{ duration: 1 }}
          className={`bg-primary h-100 ${progress === 100 ? "rounded-3" : "rounded-start-3"}`}
        />
      </div>
)

const Skill: React.FC<SkillProps> = ({ progress, name, className }) => {
  return (
    <div className={className}>
      <div className="d-flex justify-content-between">
        <h4>{name}</h4>
        <h4>{progress}%</h4>
      </div>
      <AnimatedProgressBar progress={progress} />
    </div>
  )
}

export default Skill
