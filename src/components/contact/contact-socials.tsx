import { socialItems } from '@/config/menu'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
import { SocialItem } from '@/types'
import { CardMenuItemShell } from '../card-menu-item-shell'
import { CardMenu } from '../ui/card-menu'
import { ContactCard } from './contact-card'

export const ContactSocials = () => {
  const { item, changeItem } = useItemByMouse<SocialItem>(
    'contact-id',
    socialItems,
  )

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="flex-1">
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
        <ContactCard
          className="hidden flex-1 md:flex"
          key={item.id} // change Card
          socialItem={item}
        />
      )}

      {/* Mobile only contact card */}
      <div className="flex flex-col gap-8 md:hidden">
        {socialItems.map((social) => (
          <ContactCard key={social.id} socialItem={social} />
        ))}
      </div>
    </>
  )
}
