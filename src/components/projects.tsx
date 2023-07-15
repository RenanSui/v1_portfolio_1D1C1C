import { Dispatch, SetStateAction, useEffect } from 'react'
import { OptionStates } from './main-menu'
import { LinePattern } from './ui/line-pattern'
import { ProjectItem } from './ui/project-item'

const projectsDB = [
  {
    id: 1,
    name: 'Weather App',
    date: '11/21/2022',
    description: 'Weather App with search option calling an external rest-API.',
    githubLink: 'https://github.com/RenanSui/weather-app',
    liveDemoLink: 'https://ren-weatherapp.vercel.app',
    imagePreview: 'bg-[url(/images/weather.png)]',
    techs: ['React', 'TailwindCSS', 'NextJS', 'TypeScript'],
  },
  {
    id: 2,
    name: 'Pokédex',
    date: '02/28/2023',
    description:
      "Pokédex where users can infinite scroll down the page or search for a Pokémon name or it's number and access their information.",
    githubLink: 'https://github.com/RenanSui/pokedex',
    liveDemoLink: 'https://ren-pokedex.vercel.app',
    imagePreview: 'bg-[url(/images/pokedex.png)]',
    techs: ['React', 'TailwindCSS', 'NextJS', 'TypeScript'],
  },
  {
    id: 3,
    name: 'Expense Tracker',
    date: '10/23/2022',
    description: 'Expense Tracker with CRUD-functionality.',
    githubLink: 'https://github.com/RenanSui/expense-tracker',
    liveDemoLink: 'https://renansui.github.io/expense-tracker/',
    imagePreview: 'bg-[url(/images/tracker.png)]',
    techs: ['JavaScript', 'Sass', 'TypeScript', ''],
  },
  // {
  //   id: 4,
  //   name: 'Todo App',
  //   date: '11/25/2022',
  //   description: 'A Todolist app with basic CRUD-functionality.',
  //   githubLink: 'https://github.com/RenanSui/todoList',
  //   liveDemoLink: 'https://ren-todolist.vercel.app',
  //   imagePreview: 'bg-[url(/images/todo.png)]',
  //   techs: ['React', 'TailwindCSS', 'NextJS', 'TypeScript'],
  // },
]

export type ProjectDB = (typeof projectsDB)[0]

interface ProjectsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const Projects = ({ setOptionState }: ProjectsProps) => {
  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOptionState('')
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [setOptionState])

  return (
    <section
      className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900"
      onClick={() => setOptionState('')}
    >
      <LinePattern variant={'top'} />

      <h1 className="mx-12 mb-12 mt-20 cursor-default text-5xl font-semibold tracking-[0.2em] text-nier-700 [text-shadow:_6px_6px_0px_rgba(166,161,136,1)]">
        PROJECTS
      </h1>

      <div className="mx-12 flex h-fit gap-8">
        <div className="flex gap-2">
          <div className="h-full w-[15px] bg-nier-400" />
          <div className="h-full w-[5px] bg-nier-400" />
        </div>

        <div className="projects flex max-h-[62vh] flex-col gap-16 overflow-y-scroll">
          {projectsDB.map((project) => {
            return <ProjectItem key={project.id} project={project} />
          })}
        </div>
      </div>

      <div className="mx-12 mt-16 flex h-[80px] w-[95%] cursor-default bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)]">
        <div className="flex gap-2">
          <div className="h-full w-[15px] bg-nier-700" />
          <div className="h-full w-[5px] bg-nier-700" />
        </div>
        <div className="mx-8 flex h-full w-full items-center justify-between">
          <p className="text-xl tracking-[0.2em]">
            Select a Project to preview{' '}
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
            <div className="flex items-center gap-1">
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
