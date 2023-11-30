import { CardMenuItemShell } from '@/features/menu-sections/components/shells/card-menu-item-shell'
import { skillItems } from '@/features/menu-sections/config'
import { SkillItem } from '@/features/menu-sections/types'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
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
import { CardMenu } from '../../ui/card-menu'

export const Skills = () => {
  const { item, changeItem } = useItemByMouse<SkillItem>('skill-id', skillItems)

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="hidden flex-1 md:block">
        {skillItems.map((item) => (
          <CardMenuItemShell
            key={`card-menu-skill-${item.id}`}
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
            {item.pdfLink && (
              <CardButtonLink href={item.pdfLink}>PDF</CardButtonLink>
            )}
            {item.imageLink && (
              <CardButtonLink href={item.imageLink}>Image</CardButtonLink>
            )}
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
                {skill.pdfLink && (
                  <CardButtonLink href={skill.pdfLink}>PDF</CardButtonLink>
                )}
                {skill.imageLink && (
                  <CardButtonLink href={skill.imageLink}>Image</CardButtonLink>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}
