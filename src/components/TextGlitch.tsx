// import { mergeClass } from '@/utils/mergeClass'
// import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes, ReactNode } from 'react'

// const TextGlitchVariants = cva('transition-all duration-300', {
//   variants: {
//     variant: { default: '', primary: '' },
//     size: { default: '', sm: '' },
//   },
//   defaultVariants: {
//     variant: 'default',
//     size: 'default',
//   },
// })

interface TextGlitchProps extends HTMLAttributes<HTMLDivElement> {
  // Change HTMLDivElement
  children?: ReactNode
}

const TextGlitch: FC<TextGlitchProps> = ({
  children,
  className,
  // size,
  // variant,
  ...props
}) => {
  // const beforeAfterStyles = `before:absolute before:left-0 before:top-0 before:content-[attr(data-text)] after:absolute after:left-0 after:top-0 after:content-[attr(data-text)]`

  return (
    <p // Change html tag
      {...props}
      className={`glitch ${className}`}
    >
      {children}
    </p>
  )
}

export { TextGlitch }
