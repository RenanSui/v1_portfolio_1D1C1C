import { Dispatch, SetStateAction, useEffect } from 'react'
import { OptionStates } from './main-menu'
import {
  ProjectButton,
  ProjectContent,
  ProjectDescription,
  ProjectFooter,
  ProjectHeader,
  ProjectImage,
  ProjectShell,
} from './ui/project'

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
      <h1 className="mx-2 my-4 text-4xl font-semibold">PROJECTS</h1>

      <div className="mx-12 flex h-fit gap-8">
        <div className="flex gap-2">
          <div className="h-full w-[15px] bg-nier-400" />
          <div className="h-full w-[5px] bg-nier-400" />
        </div>

        <div className="flex flex-col gap-20">
          <div className="flex flex-col">
            <ProjectShell href="https://ren-weatherapp.vercel.app">
              <ProjectImage className="w-[300px]" />
              <ProjectContent>
                <ProjectHeader>
                  <p>Weather App</p>
                  <p className="mx-4 hidden sm:block">21/11/2022</p>
                </ProjectHeader>

                <ProjectDescription>
                  <p>JavaScript React TailwindCSS NextJS TypeScript</p>
                </ProjectDescription>

                <ProjectFooter>
                  <ProjectButton href="https://ren-weatherapp.vercel.app">
                    Live Demo
                  </ProjectButton>
                  <ProjectButton href="https://github.com/RenanSui/weather-app">
                    Github
                  </ProjectButton>
                </ProjectFooter>
              </ProjectContent>
            </ProjectShell>
          </div>

          <div className="flex flex-col">
            <ProjectShell href="https://ren-weatherapp.vercel.app">
              <ProjectImage className="w-[300px]" />
              <ProjectContent>
                <ProjectHeader>
                  <p>Weather App</p>
                  <p className="mx-4 hidden sm:block">21/11/2022</p>
                </ProjectHeader>

                <ProjectDescription>
                  <p>JavaScript React TailwindCSS NextJS TypeScript</p>
                </ProjectDescription>

                <ProjectFooter>
                  <ProjectButton href="https://ren-weatherapp.vercel.app">
                    Live Demo
                  </ProjectButton>
                  <ProjectButton href="https://github.com/RenanSui/weather-app">
                    Github
                  </ProjectButton>
                </ProjectFooter>
              </ProjectContent>
            </ProjectShell>
          </div>

          <div className="flex flex-col">
            <ProjectShell href="https://ren-weatherapp.vercel.app">
              <ProjectImage className="w-[300px]" />
              <ProjectContent>
                <ProjectHeader>
                  <p>Weather App</p>
                  <p className="mx-4 hidden sm:block">21/11/2022</p>
                </ProjectHeader>

                <ProjectDescription>
                  <p>JavaScript React TailwindCSS NextJS TypeScript</p>
                </ProjectDescription>

                <ProjectFooter>
                  <ProjectButton href="https://ren-weatherapp.vercel.app">
                    Live Demo
                  </ProjectButton>
                  <ProjectButton href="https://github.com/RenanSui/weather-app">
                    Github
                  </ProjectButton>
                </ProjectFooter>
              </ProjectContent>
            </ProjectShell>
          </div>

          <div className="flex flex-col">
            <ProjectShell href="https://ren-weatherapp.vercel.app">
              <ProjectImage className="w-[300px]" />
              <ProjectContent>
                <ProjectHeader>
                  <p>Weather App</p>
                  <p className="mx-4 hidden sm:block">21/11/2022</p>
                </ProjectHeader>

                <ProjectDescription>
                  <p>JavaScript React TailwindCSS NextJS TypeScript</p>
                </ProjectDescription>

                <ProjectFooter>
                  <ProjectButton href="https://ren-weatherapp.vercel.app">
                    Live Demo
                  </ProjectButton>
                  <ProjectButton href="https://github.com/RenanSui/weather-app">
                    Github
                  </ProjectButton>
                </ProjectFooter>
              </ProjectContent>
            </ProjectShell>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Projects }
