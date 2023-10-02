import { useSelectMouse } from '@/hooks/use-select-mouse'
import { useTextHackerEffect } from '@/hooks/use-text-hacker-effect'
import { useTypingText } from '@/hooks/useTypingText'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode, memo, useRef } from 'react'
import { GlitchText } from '../ui/glitch'
import { MenuDot } from './menu-dot'
import { MenuLine } from './menu-line'

interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  textHidden: string
  showLine?: boolean
}

const MenuItemComponent: FC<MenuItemProps> = ({
  children,
  textHidden,
  className,
  showLine,
  onClick,
  ...props
}) => {
  const { word, start } = useTypingText(children as string, 30)
  const MenuOptionRef = useRef<HTMLDivElement>(null)

  useTextHackerEffect(MenuOptionRef)
  useSelectMouse(MenuOptionRef)

  setTimeout(() => start(), 625)

  return (
    <div
      className={cn(
        'MenuOption group flex w-full max-w-[350px] flex-col items-center',
        className,
      )}
      ref={MenuOptionRef}
      onClick={onClick}
      {...props}
    >
      <GlitchText
        className="pointer-events-none select-none text-lg text-nier-100 [text-shadow:_2px_2px_1px_rgba(48,42,36,0.5)] md:text-xl"
        index={0}
        data-value={children as string}
        data-hidden={textHidden}
      >
        {word}
      </GlitchText>
      <div className="MenuLine group pointer-events-none flex items-center justify-center gap-1">
        <MenuDot showLine={showLine} />
        <MenuLine showLine={showLine} />
        <MenuDot showLine={showLine} />
      </div>
    </div>
  )
}

export const MenuItem = memo(MenuItemComponent)
