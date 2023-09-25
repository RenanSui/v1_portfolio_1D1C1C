import { Dispatch, SetStateAction, useEffect } from 'react'
import { Icons } from './icons'
import { OptionStates } from './main-menu'
import { LinePattern } from './ui/line-pattern'
import { ProjectItem } from './ui/project-item'

const projectsDB = [
  {
    id: 1,
    name: 'Weather App',
    description: 'Accurate source of weather forecasts',
    githubLink: 'https://github.com/RenanSui/weather-app',
    liveDemoLink: 'https://ren-weatherapp.vercel.app',
    imagePreview: 'bg-[url(/images/weather.png)]',
  },
  {
    id: 2,
    name: 'Pokédex',
    description: 'Detailed stats for every creature from the Pokémon games',
    githubLink: 'https://github.com/RenanSui/pokedex',
    liveDemoLink: 'https://ren-pokedex.vercel.app',
    imagePreview: 'bg-[url(/images/pokedex.png)]',
  },
  {
    id: 3,
    name: 'Expense Tracker',
    description: 'Tracking where your money is going',
    githubLink: 'https://github.com/RenanSui/expense-tracker',
    liveDemoLink: 'https://renansui.github.io/expense-tracker/',
    imagePreview: 'bg-[url(/images/tracker.png)]',
  },
]

export type ProjectDB = (typeof projectsDB)[0]

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

        <div className="projects flex max-h-[80vh] w-full flex-col gap-16 overflow-y-scroll pb-24 md:max-h-[60vh]">
          {projectsDB.map((project) => {
            return <ProjectItem key={project.id} project={project} />
          })}
        </div>
      </div>

      <div className="absolute bottom-24 left-12 right-12 mt-auto hidden h-[80px] cursor-default bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex">
        <div className="flex gap-2">
          <div className="h-full w-[15px] bg-nier-700" />
          <div className="h-full w-[5px] bg-nier-700" />
        </div>
        <div className="mx-8 flex h-full w-full items-center justify-between">
          <p className="text-xl tracking-[0.2em]">
            {/* Select a Project to preview{' '} */}
            Preview a project
          </p>
          <div className="flex gap-8 text-xl tracking-[0.2em]">
            <div className="flex items-center gap-1">
              <span className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500">
                W
              </span>
              <span className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500">
                S
              </span>
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
