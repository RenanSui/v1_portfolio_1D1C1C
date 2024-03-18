import { menuStateAtom, optionStateAtom } from '@/atoms/global'
import {
  NierLine,
  NierPattern,
  NierSuggestions,
  NierVignette,
} from '@/features/nier'
import { activateAndClick } from '@/lib/utils'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { urlForImage } from '../../../../sanity/lib/image'
import { ProjectItem } from '../types'
import {
  Card,
  CardButtonLink,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardImageLink,
  CardSeparator,
} from './ui/card'
import { CardMenu, CardMenuHeading, CardMenuItem } from './ui/card-menu'
import { SectionHeading } from './ui/section-heading'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useItemByMouse<Item>(items: any) {
  const [id, setId] = useState('')

  const item = items.filter((item: { id: string }) => item.id === id) as Item[]

  const changeItem = (id: string) => setId(id)

  const itemCallback: Item = item[0] ?? items[0]

  return { item: itemCallback, changeItem }
}

const Projects = ({ projects }: { projects: ProjectItem[] }) => {
  const [, setOption] = useAtom(optionStateAtom)
  const [, setMenuState] = useAtom(menuStateAtom)

  const backToMenu = () => {
    setOption('')
    setMenuState('menu')
  }

  const { item, changeItem } = useItemByMouse<ProjectItem>(projects)

  // const loadFirstProject = changeItem(projects[0]?.id || '')
  // useEffect(() => {
  //   loadFirstProject()
  // }, [])

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-light-100 text-nier-light-800">
      <NierPattern variant="block" />

      <NierVignette variant={'light'} />

      <div className="mx-3 flex flex-1 flex-col pb-2 md:mx-12">
        <SectionHeading onClick={backToMenu}>PROJECTS</SectionHeading>

        <div className="flex h-full flex-row-reverse gap-6 py-8 md:max-h-[800px]">
          {/* tablet and above */}
          <CardMenu className="ml-6 hidden flex-1 md:block">
            {projects?.map((item, index) => (
              <CardMenuItem
                key={`project-${item.id}`}
                onClick={() => changeItem(item.id)}
                onMouseOver={(e) => activateAndClick(e.currentTarget)}
                data-active={index === 0 ? 'true' : 'false'}
              >
                <CardMenuHeading>{item.title}</CardMenuHeading>
              </CardMenuItem>
            ))}
          </CardMenu>

          {/* table and above project card */}
          {item && projects && (
            <Card key={`item-${item.id}`} className="hidden flex-1 md:flex">
              <CardHeader>
                <CardHeading>{item.title}</CardHeading>
              </CardHeader>
              <CardContent>
                <CardImageLink
                  style={{
                    backgroundImage: `url(${urlForImage(item.titleImage)})`,
                  }}
                  href={item.liveDemoLink}
                />
                <CardSeparator className="mt-4" />
                <CardDescription>{item.description}</CardDescription>
                <CardSeparator />
              </CardContent>
              <CardFooter className="flex gap-4">
                <CardButtonLink href={item.liveDemoLink}>
                  Live demo
                </CardButtonLink>
                <CardButtonLink href={item.githubLink}>Github</CardButtonLink>
              </CardFooter>
            </Card>
          )}

          {/* mobile only project card */}
          <div className="flex w-full flex-col gap-8 md:hidden">
            {projects &&
              projects.map((project) => {
                return (
                  <Card key={`item-${project.id}`} className="flex-1">
                    <CardHeader>
                      <CardHeading>{project.title}</CardHeading>
                    </CardHeader>
                    <CardContent>
                      <CardImageLink
                        style={{
                          backgroundImage: `url(${urlForImage(project.titleImage)})`,
                        }}
                        href={project.liveDemoLink}
                      />
                      <CardSeparator className="mt-4" />
                      <CardDescription>{project.description}</CardDescription>
                      <CardSeparator />
                    </CardContent>
                    <CardFooter className="flex gap-4">
                      <CardButtonLink href={project.liveDemoLink}>
                        Live demo
                      </CardButtonLink>
                      <CardButtonLink href={project.githubLink}>
                        Github
                      </CardButtonLink>
                    </CardFooter>
                  </Card>
                )
              })}
          </div>

          <NierLine className="hidden md:flex" />
        </div>
      </div>

      <NierSuggestions onClick={backToMenu}>Preview a project</NierSuggestions>

      <NierPattern variant="block" />
    </section>
  )
}

export { Projects }
