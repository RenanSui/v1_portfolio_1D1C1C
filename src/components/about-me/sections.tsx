import { optionStateAtom } from '@/atoms/global'
import { sectionItems } from '@/config/menu'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
import { SectionItem } from '@/types'
import { useAtom } from 'jotai'
import { CardMenuItemShell } from '../card-menu-item-shell'
import {
  Card,
  CardButton,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardImage,
  CardSeparator,
} from '../ui/card'
import { CardMenu } from '../ui/card-menu'

export const Sections = () => {
  const [, setOption] = useAtom(optionStateAtom)

  const { item, changeItem } = useItemByMouse<SectionItem>(
    'section-id',
    sectionItems,
  )

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="hidden flex-1 md:block">
        {sectionItems.map((item) => (
          <CardMenuItemShell
            key={`section-${item.id}`}
            id={String(item.id)}
            onClick={changeItem}
            data-elementtype="section-id"
          >
            {item.section}
          </CardMenuItemShell>
        ))}
      </CardMenu>

      {/* table and above contact card */}
      {item && (
        <Card key={`item-${item.id}`} className="hidden flex-1 md:flex">
          <CardHeader>
            <CardHeading>{item.section}</CardHeading>
          </CardHeader>
          <CardContent>
            <CardImage
              className={item.imagePreview}
              onClick={() => setOption(item.sectionLink)}
            />
            <CardSeparator className="mt-4" />
            <CardDescription>{item.description}</CardDescription>
            <CardSeparator />
          </CardContent>
          <CardFooter className="flex gap-4">
            <CardButton onClick={() => setOption(item.sectionLink)}>
              {item.section}
            </CardButton>
          </CardFooter>
        </Card>
      )}

      {/* Mobile only contact card */}
      <div className="flex w-full flex-col gap-8 md:hidden">
        {sectionItems.map((section) => {
          return (
            <Card key={`item-${section.id}`} className="flex-1">
              <CardHeader>
                <CardHeading>{section.section}</CardHeading>
              </CardHeader>
              <CardContent>
                <CardImage
                  className={section.imagePreview}
                  onClick={() => setOption(section.sectionLink)}
                />
                <CardSeparator className="mt-4" />
                <CardDescription>{section.description}</CardDescription>
                <CardSeparator />
              </CardContent>
              <CardFooter className="flex gap-4">
                <CardButton onClick={() => setOption(section.sectionLink)}>
                  {section.section}
                </CardButton>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}
