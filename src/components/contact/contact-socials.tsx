import { socialItems } from '@/db/socials'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useEffect, useRef } from 'react'
import { ContactCard } from './contact-card'
import { ContactItem } from './contact-item'
import { useSelectKeyboard } from '@/hooks/use-select-keyboard'

export const ContactSocials = () => {
  const [contactId, setContactId] = useLocalStorage('contactId', '0')
  const contactsRef = useRef<HTMLDivElement>(null)

  const changeContact = () => {
    const localStorageValue = localStorage.getItem('contactId')

    setContactId(
      localStorageValue ? (JSON.parse(localStorageValue) as string) : '0',
    )
  }

  useSelectKeyboard(contactsRef)

  const socialItem = socialItems[Number(contactId)]

  useEffect(() => {
    setTimeout(() => null)
  }, [contactId])

  return (
    <>
      {/* tablet and above */}
      <div className="hidden flex-1 flex-col gap-4 bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex">
        <div className="mx-3 mt-2 h-[1px] bg-nier-700 opacity-70" />
        <section
          className="projects flex cursor-default flex-col gap-2 overflow-y-scroll"
          ref={contactsRef}
          data-elementtype="contactShell"
        >
          {socialItems.map((item) => (
            <ContactItem
              key={item.id}
              id={String(item.id)}
              onClick={changeContact}
            >
              {item.social}
            </ContactItem>
          ))}
        </section>
      </div>

      {/* table and above contact card */}
      {socialItem && (
        <ContactCard
          className="hidden flex-1 md:flex"
          key={socialItem.id} // change Card
          socialItem={socialItem}
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
