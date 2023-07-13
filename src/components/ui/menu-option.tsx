import { useMenuSelectByMouse } from '@/hooks/use-menu-select-mouse'
import { useTextHackerEffect } from '@/hooks/use-text-hacker-effect'
import { useTypingText } from '@/hooks/useTypingText'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode, memo, useRef } from 'react'
import { GlitchText } from '../glitch'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  textHidden: string
  showLine?: boolean
}

const MenuOptionComponent: FC<MenuOptionsProps> = ({
  children,
  textHidden,
  className,
  showLine,
  onClick,
  ...props
}) => {
  const { word, start } = useTypingText(children as string, 20)
  const MenuOptionRef = useRef<HTMLDivElement>(null)

  useTextHackerEffect(MenuOptionRef)
  useMenuSelectByMouse(MenuOptionRef)

  setTimeout(() => {
    start()
  }, 625)

  return (
    <div
      ref={MenuOptionRef}
      className={cn(
        'MenuOption group flex w-full max-w-[280px] flex-col items-center',
        className,
      )}
      onClick={onClick}
      {...props}
    >
      <GlitchText
        className={
          'pointer-events-none select-none text-lg text-nier-100 [text-shadow:_2px_2px_1px_rgba(48,42,36,0.5)] md:text-xl'
        }
        index={0}
        text={children as string}
        data-value={children as string}
        data-hidden={textHidden}
      >
        {word}
      </GlitchText>
      <div className="MenuLine group pointer-events-none flex items-center justify-center gap-1">
        <span
          className={`dot h-[6px] w-[6px] rounded-full bg-nier-100 
          ${
            showLine
              ? 'opacity-100'
              : 'opacity-0 group-data-[active=true]:opacity-100'
          }`}
        />
        <span
          className={`text- line h-[2px] bg-nier-100 transition-all duration-[30ms] 
          ${
            showLine
              ? 'w-48 opacity-100 md:w-72'
              : 'w-0 opacity-0 group-data-[active=true]:w-48 group-data-[active=true]:opacity-100 group-data-[active=true]:md:w-72'
          }`}
        />
        <span
          className={`dot h-[6px] w-[6px] rounded-full bg-nier-100 
          ${
            showLine
              ? 'opacity-100'
              : 'opacity-0 group-data-[active=true]:opacity-100'
          }`}
        />
      </div>
    </div>
  )
}

export const MenuOption = memo(MenuOptionComponent)
