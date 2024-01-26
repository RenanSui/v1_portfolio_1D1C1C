import { TextGlitched } from '@/components/ui/text-glitched'
import { activateAndClick, cn } from '@/lib/utils'
import { FC, HTMLAttributes, memo } from 'react'
import { MenuDot } from './menu-dot'
import { MenuLine } from './menu-line'

interface MenuItemProps extends HTMLAttributes<HTMLButtonElement> {
  children: string
  textHidden: string
  showLine?: boolean
  index?: number
}

const MenuItemComponent: FC<MenuItemProps> = ({
  children,
  textHidden,
  className,
  showLine,
  index = 1,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(
        'MenuOption clickable group relative flex w-full max-w-[350px] flex-col items-center text-xl',
        className,
      )}
      onClick={onClick}
      onMouseOver={(e) => activateAndClick(e.currentTarget, false)}
      {...props}
    >
      <div className="staticGif pointer-events-none absolute left-0 top-1/2 h-[100%] w-full -translate-y-1/2 bg-[url(/assets/wallpapers/static.gif)] bg-cover bg-top opacity-0 [clip-path:polygon(51%_25%,_100%_50%,_50%_75%,_0%_50%)] group-data-[active=true]:opacity-[0.5]" />

      <h2 className="sr-only">{children}</h2>

      <TextGlitched
        className="pointer-events-none select-none text-white [text-shadow:_2px_2px_1px_rgba(48,42,36,0.5)]"
        index={index}
        data-value={children as string}
        data-hidden={textHidden}
      >
        {children}
      </TextGlitched>
      <div className="MenuLine group pointer-events-none flex items-center justify-center gap-1">
        <MenuDot showLine={showLine} />
        <MenuLine showLine={showLine} />
        <MenuDot showLine={showLine} />
      </div>
    </button>
  )
}

export const MenuItem = memo(MenuItemComponent)
