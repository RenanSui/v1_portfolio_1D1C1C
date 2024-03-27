import { skillItems } from '@/features/menu-sections/config'
import { SkillItem } from '@/features/menu-sections/types'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
import { activateAndClick } from '@/lib/utils'
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
} from '../../ui/card'
import { CardMenu, CardMenuHeading, CardMenuItem } from '../../ui/card-menu'

export const Skills = () => {
  const { item, changeItem } = useItemByMouse<SkillItem>(skillItems)

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="ml-6 hidden flex-1 md:block">
        {skillItems.map((item) => (
          <CardMenuItem
            key={`card-menu-skill-${item.id}`}
            onClick={() => changeItem(item.id)}
            onMouseOver={(e) => activateAndClick(e.currentTarget)}
            data-active={item.id === 0 ? 'true' : 'false'}
          >
            <CardMenuHeading>{item.name}</CardMenuHeading>
          </CardMenuItem>
        ))}
      </CardMenu>

      {/* table and above contact card */}
      {item && (
        <Card key={`item-${item.id}`} className="hidden flex-1 md:flex">
          <CardHeader>
            <CardHeading>{item.organization}</CardHeading>
          </CardHeader>
          <CardContent>
            <CardImageLink className={item.bgImage} href={item.pdfLink} />
            <CardSeparator className="mt-4" />
            <CardDescription>{item.name}</CardDescription>
            <CardSeparator />
          </CardContent>
          <CardFooter className="flex gap-4">
            {item.pdfLink && <CardButtonLink href={item.pdfLink}>PDF</CardButtonLink>}
            {item.imageLink && <CardButtonLink href={item.imageLink}>Image</CardButtonLink>}
          </CardFooter>
        </Card>
      )}

      {/* Mobile only contact card */}
      <div className="flex w-full flex-col gap-8 md:hidden">
        {skillItems.map((skill) => {
          return (
            <Card key={`card-skill-${skill.id}`} className="flex-1">
              <CardHeader>
                <CardHeading>{skill.organization}</CardHeading>
              </CardHeader>
              <CardContent>
                <CardImageLink className={skill.bgImage} href={skill.pdfLink} />
                <CardSeparator className="mt-4" />
                <CardDescription>{skill.name}</CardDescription>
                <CardSeparator />
              </CardContent>
              <CardFooter className="flex gap-4">
                {skill.pdfLink && <CardButtonLink href={skill.pdfLink}>PDF</CardButtonLink>}
                {skill.imageLink && <CardButtonLink href={skill.imageLink}>Image</CardButtonLink>}
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}
