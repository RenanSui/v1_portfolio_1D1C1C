import { motion } from 'framer-motion'
import { FC, HTMLAttributes } from 'react'

interface TextGlitchProps extends HTMLAttributes<HTMLDivElement> {
  // Change HTMLDivElement
  children: string
}

const TextGlitch: FC<TextGlitchProps> = ({
  children,
  className,
  // size,
  // variant,
  ...props
}) => {
  return (
    <p // Change html tag
      {...props}
      className={`glitch relative text-transparent ${className}`}
      // className={`glitch ${className}`}
    >
      <motion.span
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
        animate={{
          x: [-4, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 7,
            // repeatDelay:
            //   ((2 * Math.floor(Math.random() * 10)) / children.length) * 8,
          },
        }}
        className="absolute left-0 top-0 text-nier-100"
      >
        {children}
      </motion.span>
      {children}
      <motion.span
        initial={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
        animate={{
          x: [-4, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 4.5,
            // repeatDelay:
            //   ((2 * Math.floor(Math.random() * 10)) / children.length) * 8,
          },
        }}
        className="absolute left-0 top-0 text-nier-100"
      >
        {children}
      </motion.span>
    </p>
  )
}

export { TextGlitch }
