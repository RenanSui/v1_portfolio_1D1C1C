import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import { LoadingText } from '../loading/loading-text'
import { NierSquare } from '../nier/nier-square'
import { Icons } from './icons'

const Card = ({ className, children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'relative flex flex-col overflow-x-hidden bg-nier-600 pb-3 shadow-lg md:max-w-[700px]',
        className,
      )}
    >
      {children}
    </div>
  )
}

const CardHeader = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('flex items-center gap-3 bg-nier-700 px-3 py-2', className)}
    >
      <NierSquare className="h-[23px] w-[23px] cursor-default bg-nier-600" />
      {children}
    </div>
  )
}

const CardHeading = ({
  className,
  children,
}: HTMLAttributes<HTMLHeadingElement> & { children: string }) => {
  return (
    <h1
      className={cn(
        '  text-nier-600 group-hover:text-nier-600 md:text-xl',
        className,
      )}
    >
      <LoadingText>{children}</LoadingText>
    </h1>
  )
}

const CardContent = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('m-4', className)}>{children}</div>
}

const CardImage = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'projectImage relative block aspect-video cursor-pointer bg-nier-700 bg-cover',
        className,
      )}
      {...props}
    />
  )
}

const CardImageLink = ({
  className,
  href,
  Icon,
}: AnchorHTMLAttributes<HTMLAnchorElement> & { Icon?: LucideIcon }) => {
  return (
    <a
      href={href}
      className={cn(
        'projectImage relative block aspect-video cursor-pointer bg-nier-700 bg-cover',
        className,
      )}
      target="_blank"
    >
      <Icons.x className="absolute left-1/2 top-1/2 h-[200%] w-[2500%] -translate-x-1/2 -translate-y-1/2 stroke-[0.1px]" />
      {Icon && (
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nier-200">
          <Icon className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 stroke-1" />
        </div>
      )}
    </a>
  )
}

const CardSeparator = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(' h-[1px] bg-nier-700 opacity-70', className)} />
}

const CardDescription = ({
  className,
  children,
}: HTMLAttributes<HTMLHeadingElement> & { children: string }) => {
  return (
    <p
      className={cn(
        'my-2 text-black [text-wrap:balance] md:text-lg lg:text-2xl',
        className,
      )}
    >
      <LoadingText>{children}</LoadingText>
    </p>
  )
}

const CardFooter = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('mx-4', className)}>{children}</div>
}

const CardButton = ({
  className,
  children = '',
  ...props
}: HTMLAttributes<HTMLButtonElement> & { children?: string }) => {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-sm bg-nier-400 px-6 py-2 text-lg transition-all hover:bg-nier-700 hover:text-nier-500',
        className,
      )}
      {...props}
    >
      <LoadingText>{children}</LoadingText>
    </button>
  )
}

const CardButtonLink = ({
  className,
  children = '',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: string }) => {
  return (
    <a
      className={cn(
        'cursor-pointer rounded-sm bg-nier-400 px-6 py-2 text-lg transition-all hover:bg-nier-700 hover:text-nier-500',
        className,
      )}
      target="_blank"
      {...props}
    >
      <LoadingText>{children}</LoadingText>
    </a>
  )
}

export {
  Card,
  CardButton,
  CardButtonLink,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardImage,
  CardImageLink,
  CardSeparator,
}
