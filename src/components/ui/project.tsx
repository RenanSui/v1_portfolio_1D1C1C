import { cn } from '@/lib/utils'
import { AnchorHTMLAttributes, HTMLAttributes } from 'react'

const ProjectShell = ({
  children,
  href,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <section className="group h-[145px] w-full text-lg">
      <a
        href={href}
        target="_blank"
        className="flex cursor-default flex-col gap-3 sm:flex-row md:gap-4"
        rel="noreferrer"
      >
        {children}
      </a>
    </section>
  )
}

const ProjectImage = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${cn(
        'relative h-[145px] w-[260px] bg-zinc-300 bg-cover bg-center group-hover:animate-pulse',
        className,
      )}`}
    >
      <div className="absolute -left-6 top-1/2 z-50 h-4 w-4 -translate-y-1/2 rotate-45 bg-nier-700 opacity-0 group-hover:opacity-100"></div>
    </div>
  )
}

const ProjectContent = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${cn(
        'flex h-[145px] w-[810px] flex-col justify-around ',
        className,
      )}`}
    >
      {children}
    </div>
  )
}

const ProjectHeader = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex w-full self-start group-hover:animate-pulse group-hover:shadow-[_3px_3px_0px_0px_rgba(0,0,0,0.3)]">
      <div className="flex h-[50px] w-[50px] items-center justify-center bg-nier-400 transition-all group-hover:bg-nier-700">
        <div className="h-[25px] w-[25px] bg-nier-700 transition-all group-hover:bg-nier-500"></div>
      </div>
      <div
        className={`${cn(
          'flex h-[50px] w-full max-w-[810px] items-center justify-between bg-nier-400 text-xl text-nier-900 transition-all group-hover:bg-nier-700 group-hover:text-nier-500',
          className,
        )}`}
      >
        {children}
      </div>
    </div>
  )
}

const ProjectDescription = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${cn('grid grid-cols-1 text-xl', className)}`}>
      {children}
    </div>
  )
}

const ProjectFooter = ({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${cn('flex gap-2', className)}`}>{children}</div>
}

const ProjectButton = ({
  children,
  className,
  href,
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${cn(
        'cursor-default rounded-sm bg-nier-400 px-6 py-2 transition-all hover:bg-nier-700 hover:text-nier-500',
        className,
      )}`}
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export {
  ProjectButton,
  ProjectContent,
  ProjectDescription,
  ProjectFooter,
  ProjectHeader,
  ProjectImage,
  ProjectShell,
}
