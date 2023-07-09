import { useMenuSelectByMouse } from '@/hooks/use-menu-select-mouse'
import { useTextHackerEffect } from '@/hooks/use-text-hacker-effect'
import { useTypingText } from '@/hooks/useTypingText'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode, memo, useRef } from 'react'

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
  ...props
}) => {
  const { word, start } = useTypingText(children as string, 20)
  const TextRef = useRef<HTMLHeadingElement>(null)
  const MenuOption = useRef<HTMLDivElement>(null)

  useTextHackerEffect(TextRef)
  useMenuSelectByMouse(MenuOption)

  setTimeout(() => {
    start()
  }, 625)

  return (
    <div
      ref={MenuOption}
      className={cn(
        'MenuOption group flex w-full max-w-[280px] flex-col items-center',
        className,
      )}
      {...props}
    >
      <h1
        ref={TextRef}
        className={
          'pointer-events-none select-none text-lg text-nier-100 md:text-xl'
        }
        data-value={word}
        data-hidden={textHidden}
      >
        {word}
      </h1>
      <div className="MenuLine pointer-events-none flex items-center justify-center gap-1">
        <span
          className={`dot h-[6px] w-[6px] rounded-full bg-nier-100 
          ${showLine ? 'opacity-100' : 'opacity-0'}`}
        />
        <span
          className={`line h-[2px] bg-nier-100 transition-all duration-[30ms] 
          ${showLine ? 'w-48 opacity-100 md:w-72' : 'w-0 opacity-0'}`}
        />
        <span
          className={`dot h-[6px] w-[6px] rounded-full bg-nier-100 
          ${showLine ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  )
}

export const MenuOption = memo(MenuOptionComponent)
