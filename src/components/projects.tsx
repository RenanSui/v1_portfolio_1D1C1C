import { projectsDB } from '@/db/projects'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Icons } from './icons'
import { OptionStates } from './main-menu'
import { LinePattern } from './ui/line-pattern'
import { ProjectOptions } from './project-options'

interface ProjectsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const Projects = ({ setOptionState }: ProjectsProps) => {
  const backToMenu = () => setOptionState('')

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOptionState('')
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [setOptionState])

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <LinePattern variant={'top'} />

      <div className="mb-7 mt-14 flex cursor-default items-center gap-2 pl-7 md:mt-20">
        <Icons.chevronLeft
          className="h-8 w-8 cursor-pointer"
          onClick={backToMenu}
        />
        <h1 className="text-4xl font-semibold tracking-[0.2em] text-nier-700 [text-shadow:_6px_6px_0px_rgba(166,161,136,1)] md:text-5xl">
          PROJECTS
        </h1>
      </div>

      <div className="mx-3 flex h-fit gap-1 md:mx-12">
        <div className="hidden gap-2 md:flex ">
          <div className="h-full w-[15px] bg-nier-400" />
          <div className="h-full w-[5px] bg-nier-400" />
        </div>

        <ProjectOptions projectData={projectsDB} />
      </div>

      <div className="absolute bottom-24 left-12 right-12 mt-auto hidden h-[80px] cursor-default bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex">
        <div className="flex gap-2">
          <div className="h-full w-[15px] bg-nier-700" />
          <div className="h-full w-[5px] bg-nier-700" />
        </div>

        <div className="mx-8 flex h-full w-full items-center justify-between">
          <p className="text-xl tracking-[0.2em]">Preview a project</p>

          <div className="flex gap-8 text-xl tracking-[0.2em]">
            <div className="flex items-center gap-1">
              <Icons.chevronUp className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500" />
              <Icons.chevronDown className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500" />
              <p>Select</p>
            </div>

            <div className="flex items-center gap-1">
              <span className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500">
                Enter
              </span>
              <p>Confirm</p>
            </div>

            <div
              className="flex cursor-pointer items-center gap-1"
              onClick={backToMenu}
            >
              <span className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500">
                Esc
              </span>

              <p>Back</p>
            </div>
          </div>
        </div>
      </div>

      <LinePattern variant={'bottom'} />
    </section>
  )
}

export { Projects }
