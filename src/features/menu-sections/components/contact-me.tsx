import { menuStateAtom, optionStateAtom } from '@/atoms/global'
import {
  NierButton,
  NierLine,
  NierPattern,
  NierSuggestions,
  NierVignette,
} from '@/features/nier'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { ContactForm } from './sections/contact/contact-form'
import { ContactSocials } from './sections/contact/contact-socials'
import { SectionHeading } from './ui/section-heading'

type Menus = 'socials' | 'send email'

const menus: Menus[] = ['socials', 'send email']

const ContactMe = () => {
  const [, setOption] = useAtom(optionStateAtom)
  const [, setMenu] = useAtom(menuStateAtom)
  const [sectionView, setSectionView] = useState<Menus>('socials')

  const changeSectionView = (section: Menus) => {
    if (menus.includes(section)) setSectionView(section)
  }

  const backToMenu = () => {
    setOption('')
    setMenu('menu')
  }

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-light-100 text-nier-light-800">
      <div className="mx-3 my-4 hidden h-full max-h-[40px] gap-6 md:mx-12 lg:flex">
        <NierLine className="absolute h-[40px]" />
        <div className="flex h-[40px] w-full max-w-full gap-[56px] overflow-hidden pl-16">
          {menus.map((item) => (
            <NierButton
              key={item}
              className="tracking-widest"
              active={item === sectionView}
              onMouseOver={() => changeSectionView(item)}
            >
              {item.toLocaleUpperCase()}
            </NierButton>
          ))}
        </div>
      </div>

      <NierVignette variant={'light'} />

      <NierPattern variant="block" className="lg:py-0" />

      {sectionView === 'socials' ? (
        <div className="mx-3 flex flex-1 flex-col pb-2 md:mx-12">
          <SectionHeading onClick={backToMenu}>Socials</SectionHeading>

          <NierButton
            className="my-4 flex self-start lg:hidden"
            onClick={() => changeSectionView('send email')}
          >
            Send Email
          </NierButton>

          <div className="flex h-full flex-wrap gap-6 pb-8 md:max-h-[800px] md:flex-row-reverse lg:my-4">
            <ContactSocials />

            <NierLine className="hidden md:flex" />
          </div>
        </div>
      ) : null}

      {sectionView === 'send email' ? (
        <div className="mx-3 flex flex-1 flex-col pb-2 md:mx-12">
          <SectionHeading onClick={backToMenu}>Send Email</SectionHeading>

          <NierButton
            className="my-4 flex self-start lg:hidden"
            onClick={() => changeSectionView('socials')}
          >
            Socials
          </NierButton>

          <div className="flex h-full max-h-[600px] gap-6 py-8 lg:my-4">
            <NierLine />

            <ContactForm />
          </div>
        </div>
      ) : null}

      <NierSuggestions onClick={backToMenu}>Send me a message</NierSuggestions>

      <NierPattern variant="block" />
    </section>
  )
}

export { ContactMe }
