import { Icons } from '@/components/ui/icons'
import { socialItems } from '@/features/menu-sections/config'
import { SocialItem } from '@/features/menu-sections/types'
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

export const ContactSocials = () => {
  const { item, changeItem } = useItemByMouse<SocialItem>(socialItems)

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="ml-6 hidden flex-1 md:block">
        {socialItems.map((item) => (
          <CardMenuItem
            key={`contact-${item.id}`}
            onClick={() => changeItem(item.id)}
            onMouseOver={(e) => activateAndClick(e.currentTarget)}
            data-active={item.id === 0 ? 'true' : 'false'}
          >
            <CardMenuHeading>{item.social}</CardMenuHeading>
          </CardMenuItem>
        ))}
      </CardMenu>

      {/* table and above contact card */}
      {item && (
        <Card key={`item-${item.id}`} className="hidden flex-1 md:flex">
          <CardHeader>
            <CardHeading>{item.social}</CardHeading>
          </CardHeader>
          <CardContent>
            <CardImageLink className="relative" href={item.contactLink}>
              <item.icon className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nier-500 py-8" />
            </CardImageLink>
            <CardSeparator className="mt-4" />
            <div
              className="flex cursor-pointer items-center gap-2"
              onClick={() => navigator.clipboard.writeText(item.contact)}
            >
              <Icons.copy className="h-6 w-6" />
              <CardDescription>{item.contact}</CardDescription>
            </div>
            <CardSeparator />
          </CardContent>
          <CardFooter className="flex gap-4">
            <CardButtonLink href={item.contactLink}>Contact me</CardButtonLink>
          </CardFooter>
        </Card>
      )}

      {/* Mobile only contact card */}
      <div className="flex w-full flex-col gap-8 md:hidden">
        {socialItems.map((social) => {
          return (
            <Card key={`item-${social.id}`} className="flex-1">
              <CardHeader>
                <CardHeading>{social.social}</CardHeading>
              </CardHeader>
              <CardContent>
                <CardImageLink className="relative" href={social.contactLink}>
                  <item.icon className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nier-500 py-8" />
                </CardImageLink>
                <CardSeparator className="mt-4" />
                <CardDescription>{social.contact}</CardDescription>
                <CardSeparator />
              </CardContent>
              <CardFooter className="flex gap-4">
                <CardButtonLink href={social.contactLink}>
                  Contact me
                </CardButtonLink>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}
