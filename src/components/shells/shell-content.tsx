import { HTMLAttributes } from 'react'

export const ShellContent = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="projects mx-3 flex max-h-[80vh] w-full gap-6 overflow-y-scroll pb-24 md:mx-12 md:max-h-[60vh]">
      {children}
    </div>
  )
}
