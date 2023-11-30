import { optionStateAtom } from '@/atoms/global'
import { projectItems } from '@/config/menu'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
import { ProjectItem } from '@/types'
import { useAtom } from 'jotai'
import { CardMenuItemShell } from './card-menu-item-shell'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { ProjectCard } from './projects/project-card'
import { CardMenu } from './ui/card-menu'
import { Header } from './ui/header'

const Projects = () => {
  const [, setOptionState] = useAtom(optionStateAtom)
  const backToMenu = () => setOptionState('')

  const { item, changeItem } = useItemByMouse<ProjectItem>(
    'project-id',
    projectItems,
  )

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-500 text-nier-900">
      <NierPattern variant="block" />

      <div className="flex flex-1 flex-col pb-2">
        <Header onClick={backToMenu}>PROJECTS</Header>

        <div className="mx-3 flex h-full flex-row-reverse gap-6 py-8 md:mx-12 md:max-h-[800px]">
          {/* tablet and above */}
          <CardMenu className="flex-1">
            {projectItems.map((item) => (
              <CardMenuItemShell
                key={`project-${item.id}`}
                id={String(item.id)}
                onClick={changeItem}
                data-elementtype="project-id"
              >
                {item.name}
              </CardMenuItemShell>
            ))}
          </CardMenu>

          {/* table and above project card */}
          {item && (
            <ProjectCard
              className="hidden flex-1 md:flex"
              key={item.id} // change Card
              projectItems={item}
            />
          )}

          {/* mobile only project card */}
          <div className="flex w-full flex-col gap-8 md:hidden">
            {projectItems.map((item) => (
              <ProjectCard key={item.id} projectItems={item} />
            ))}
          </div>

          <NierLine />
        </div>
      </div>

      <NierSuggestions onClick={backToMenu}>Preview a project</NierSuggestions>

      <NierPattern variant="block" />
    </section>
  )
}

export { Projects }
