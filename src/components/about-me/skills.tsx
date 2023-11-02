import { skillItems } from '@/db/skills'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useSelectKeyboard } from '@/hooks/use-select-keyboard'
import { useEffect, useRef } from 'react'
import { SkillCard } from './skill-card'
import { SkillItem } from './skill-item'

export const Skills = () => {
  const [skillId, setSkillId] = useLocalStorage('skillId', '0')
  const skillsRef = useRef<HTMLDivElement>(null)

  const changeSkill = () => {
    const localStorageValue = localStorage.getItem('skillId')

    setSkillId(
      localStorageValue ? (JSON.parse(localStorageValue) as string) : '0',
    )
  }

  useSelectKeyboard(skillsRef)

  const skillItem = skillItems[Number(skillId)]

  useEffect(() => {
    setTimeout(() => null)
  }, [skillId])

  return (
    <>
      {/* tablet and above */}
      <div className="hidden flex-1 flex-col gap-4 bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex">
        <div className="mx-3 mt-2 h-[1px] bg-nier-700 opacity-70" />

        <section
          className="projects flex cursor-default flex-col gap-2 overflow-y-scroll"
          ref={skillsRef}
          data-elementtype="skillShell"
        >
          {skillItems.map((skill) => (
            <SkillItem
              key={skill.id}
              id={String(skill.id)}
              onClick={changeSkill}
            >
              {skill.name}
            </SkillItem>
          ))}
        </section>
      </div>

      {/* table and above contact card */}
      {skillItem && (
        <SkillCard
          className="hidden flex-1 md:flex"
          key={skillItem.id} // change Card
          skillItem={skillItem}
        />
      )}

      {/* Mobile only contact card */}
      <div className="flex flex-col gap-8 md:hidden">
        {skillItems.map((skill) => (
          <SkillCard key={skill.id} skillItem={skill} />
        ))}
      </div>
    </>
  )
}
