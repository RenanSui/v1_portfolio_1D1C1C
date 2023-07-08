import { useMenuSelectByMouse } from '@/hooks/use-menu-select-mouse'
import { useTextHackerEffect } from '@/hooks/use-text-hacker-effect'
import { useTypingText } from '@/hooks/useTypingText'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode, memo, useRef } from 'react'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  textHidden: string
}

const MenuOptionComponent: FC<MenuOptionsProps> = ({
  children,
  textHidden,
  className,
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
        className={'select-none text-lg text-nier-100 md:text-xl'}
        data-value={word}
        data-hidden={textHidden}
      >
        {word}
      </h1>
      <div className="MenuLine flex items-center justify-center gap-1">
        <span className="dot h-[6px] w-[6px] rounded-full bg-nier-100 opacity-0 group-hover:opacity-100" />
        <span className="line h-[2px] w-0 bg-nier-100 transition-all duration-[30ms] group-hover:w-48 group-hover:md:w-72" />
        <span className="dot h-[6px] w-[6px] rounded-full bg-nier-100 opacity-0 group-hover:opacity-100" />
      </div>
    </div>
  )
}

export const MenuOption = memo(MenuOptionComponent)
