import { cn } from '@/lib/utils'
import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react'
import { Icons } from './icons'

interface ProjectShellProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export const ProjectShell = forwardRef<HTMLDivElement, ProjectShellProps>(
  ({ children }, ref) => {
    return (
      <section
        ref={ref}
        className="group relative flex w-full flex-col md:flex-row-reverse md:justify-end md:gap-6 md:pl-6"
      >
        {children}
      </section>
    )
  },
)
ProjectShell.displayName = 'ProjectShell'

export const ProjectBox = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${cn(
        'absolute left-1 top-1/2 z-50 hidden h-4 w-4 -translate-y-1/2 rotate-45 bg-nier-700 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 md:block',
        className,
      )}`}
    />
  )
}

export const ProjectImage = ({
  className,
  href,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${cn(
        'projectImage aspect-video h-auto w-full border-2 border-nier-700 bg-cover md:max-w-[260px]',
        className,
      )}`}
    />
  )
}

export const ProjectTitle = ({
  className,
  children,
  href,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <div className="flex w-full items-center justify-between bg-nier-400 text-nier-900 transition-all group-hover:animate-pulse group-hover:bg-nier-700 group-hover:text-nier-500 group-hover:shadow-[_3px_3px_0px_0px_rgba(0,0,0,0.3)] group-data-[active=true]:animate-pulse group-data-[active=true]:bg-nier-700 group-data-[active=true]:text-nier-500 group-data-[active=true]:shadow-[_3px_3px_0px_0px_rgba(0,0,0,0.3)] md:max-w-full">
      <ProjectSquare />
      <h1
        className={`${cn(
          'flex h-[50px] w-full cursor-default items-center justify-between text-xl md:max-w-full',
          className,
        )}`}
      >
        {children}
      </h1>
      <a href={href} target="_blank" rel="noreferrer">
        <Icons.github className="mr-2 h-8 w-8 cursor-pointer md:hidden" />
      </a>
    </div>
  )
}

export const ProjectHeader = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className="flex w-full flex-col justify-between">{children}</div>
}

const ProjectSquare = () => {
  return (
    <div className="ml-1 flex h-[50px] w-[50px] items-center justify-center bg-nier-400 transition-all group-hover:bg-nier-700 group-data-[active=true]:bg-nier-700">
      <div className="h-[25px] w-[25px] bg-nier-700 transition-all group-hover:bg-nier-500 group-data-[active=true]:bg-nier-500" />
    </div>
  )
}

export const ProjectDescription = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${cn(
        'hidden cursor-default grid-cols-1 text-xl md:block',
        className,
      )}`}
    >
      {children}
    </div>
  )
}

export const ProjectButton = ({
  children,
  className,
  href,
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
    >
      {children}
    </a>
  )
}
