import { useTextHackerEffect } from '@/hooks/use-text-hacker-effect'
import { useTypingText } from '@/hooks/useTypingText'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode, memo, useRef } from 'react'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  textHidden: string
}

const PressAnyButtonComponent: FC<MenuOptionsProps> = ({
  children,
  textHidden,
  className,
  ...props
}) => {
  const { word, start } = useTypingText(children as string, 20)
  const TextRef = useRef<HTMLHeadingElement>(null)

  useTextHackerEffect(TextRef)

  setTimeout(() => {
    start()
  }, 625)

  return (
    <div
      className={cn(
        'MenuOption group flex w-full max-w-[280px] flex-col items-center',
        className,
      )}
      {...props}
    >
      <h1
        ref={TextRef}
        className={'select-none text-lg text-nier-100 md:text-xl'}
        data-value={word}
        data-hidden={textHidden}
      >
        {word}
      </h1>
      <div className="MenuLine flex items-center justify-center gap-1">
        <span className="h-[6px] w-[6px] rounded-full bg-nier-100 opacity-100" />
        <div className="h-[2px] w-48 bg-nier-100 transition-all duration-[30ms] md:w-72" />
        <span className="h-[6px] w-[6px] rounded-full bg-nier-100 opacity-100" />
      </div>
    </div>
  )
}

export const PressAnyButton = memo(PressAnyButtonComponent)
