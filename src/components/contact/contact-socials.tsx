import { socialItems } from '@/config/menu'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
import { SocialItem } from '@/types'
import { CardMenuItemShell } from '../card-menu-item-shell'
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
} from '../ui/card'
import { CardMenu } from '../ui/card-menu'

export const ContactSocials = () => {
  const { item, changeItem } = useItemByMouse<SocialItem>(
    'contact-id',
    socialItems,
  )

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="hidden flex-1 md:block">
        {socialItems.map((item) => (
          <CardMenuItemShell
            key={`contact-${item.id}`}
            id={String(item.id)}
            onClick={changeItem}
            data-elementtype="contact-id"
          >
            {item.social}
          </CardMenuItemShell>
        ))}
      </CardMenu>

      {/* table and above contact card */}
      {item && (
        <Card key={`item-${item.id}`} className="hidden flex-1 md:flex">
          <CardHeader>
            <CardHeading>{item.social}</CardHeading>
          </CardHeader>
          <CardContent>
            <CardImageLink href={item.contactLink} Icon={item.icon} />
            <CardSeparator className="mt-4" />
            <CardDescription>{item.contact}</CardDescription>
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
                <CardImageLink href={social.contactLink} Icon={social.icon} />
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
