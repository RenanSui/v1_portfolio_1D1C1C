import { NierLoadingText, NierSquare } from '@/features/nier'
import { cn } from '@/lib/utils'
import { AnchorHTMLAttributes, HTMLAttributes } from 'react'

const Card = ({ className, children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'relative flex flex-col bg-nier-600 pb-3 shadow-lg md:max-w-[700px]',
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
      <NierLoadingText>{children}</NierLoadingText>
    </h1>
  )
}

const CardContent = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('m-4', className)}>{children}</div>
}

const CardImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      // role="button"
      className={cn(
        'projectImage relative block aspect-video w-full bg-nier-700 bg-cover',
        className,
      )}
      {...props}
    />
  )
}

const CardImageLink = ({
  className,
  href,
  children,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      className={cn(
        'projectImage relative block aspect-video cursor-pointer bg-nier-700 bg-cover',
        className,
      )}
      target="_blank"
    >
      {children}
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
      <NierLoadingText>{children}</NierLoadingText>
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
      <NierLoadingText>{children}</NierLoadingText>
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
      <NierLoadingText>{children}</NierLoadingText>
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
