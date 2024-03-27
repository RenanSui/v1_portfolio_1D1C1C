import { optionStateAtom } from '@/atoms/global'
import { sectionItems } from '@/features/menu-sections/config'
import { SectionItem } from '@/features/menu-sections/types'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
import { activateAndClick } from '@/lib/utils'
import { useAtom } from 'jotai'
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
} from '../../ui/card'
import { CardMenu, CardMenuHeading, CardMenuItem } from '../../ui/card-menu'

export const Sections = () => {
  const [, setOption] = useAtom(optionStateAtom)

  const { item, changeItem } = useItemByMouse<SectionItem>(sectionItems)

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="ml-6 hidden flex-1 md:block">
        {sectionItems.map((item) => (
          <CardMenuItem
            key={`section-${item.id}`}
            onClick={() => changeItem(item.id)}
            onMouseOver={(e) => activateAndClick(e.currentTarget)}
            data-active={item.id === 0 ? 'true' : 'false'}
          >
            <CardMenuHeading>{item.section}</CardMenuHeading>
          </CardMenuItem>
        ))}
      </CardMenu>

      {/* table and above contact card */}
      {item && (
        <Card key={`item-${item.id}`} className="hidden flex-1 md:flex">
          <CardHeader>
            <CardHeading>{item.section}</CardHeading>
          </CardHeader>
          <CardContent>
            <CardImage className={item.imagePreview} onClick={() => setOption(item.sectionLink)} />
            <CardSeparator className="mt-4" />
            <CardDescription>{item.description}</CardDescription>
            <CardSeparator />
          </CardContent>
          <CardFooter className="flex gap-4">
            <CardButton onClick={() => setOption(item.sectionLink)}>{item.section}</CardButton>
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
                <CardImage className={section.imagePreview} onClick={() => setOption(section.sectionLink)} />
                <CardSeparator className="mt-4" />
                <CardDescription>{section.description}</CardDescription>
                <CardSeparator />
              </CardContent>
              <CardFooter className="flex gap-4">
                <CardButton onClick={() => setOption(section.sectionLink)}>{section.section}</CardButton>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}
