import { skillItems } from '@/config/menu'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
import { SkillItem } from '@/types'
import { CardMenuItemShell } from '../card-menu-item-shell'
import { CardMenu } from '../ui/card-menu'
import { SkillCard } from './skill-card'

export const Skills = () => {
  const { item, changeItem } = useItemByMouse<SkillItem>('skill-id', skillItems)

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="flex-1">
        {skillItems.map((item) => (
          <CardMenuItemShell
            key={`skill-${item.id}`}
            id={String(item.id)}
            onClick={changeItem}
            data-elementtype="skill-id"
          >
            {item.name}
          </CardMenuItemShell>
        ))}
      </CardMenu>

      {/* table and above contact card */}
      {item && (
        <SkillCard
          className="hidden flex-1 md:flex"
          key={item.id}
          skillItem={item}
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
