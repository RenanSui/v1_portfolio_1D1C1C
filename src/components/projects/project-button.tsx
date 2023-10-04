import { cn } from '@/lib/utils'
import { AnchorHTMLAttributes } from 'react'

export const ProjectButton = ({
  children,
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${cn(
        'cursor-pointer rounded-sm bg-nier-400 px-6 py-2 transition-all hover:bg-nier-700 hover:text-nier-500',
        className,
      )}`}
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}
