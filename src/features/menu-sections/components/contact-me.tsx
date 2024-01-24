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

type ContactStates = 'socials' | 'send-email'

const ContactMe = () => {
  const [contatState, setContactState] = useState<ContactStates>('socials')
  const [, setOption] = useAtom(optionStateAtom)
  const [, setMenu] = useAtom(menuStateAtom)

  const backToMenu = () => {
    setOption('')
    setMenu('menu')
  }

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-light-100 text-nier-light-800">
      <NierPattern variant="block" />

      <NierVignette variant={'light'} />

      {contatState === 'socials' ? (
        <div className="mx-3 flex flex-1 flex-col pb-2 md:mx-12">
          <SectionHeading onClick={backToMenu}>Socials</SectionHeading>

          <NierButton
            className=" my-4 flex self-start "
            onClick={() => setContactState('send-email')}
          >
            Send Email
          </NierButton>

          <div className="flex h-full flex-wrap gap-6 pb-8 md:max-h-[800px] md:flex-row-reverse">
            <ContactSocials />

            <NierLine className="hidden md:flex" />
          </div>
        </div>
      ) : null}

      {contatState === 'send-email' ? (
        <div className="mx-3 flex flex-1 flex-col pb-2 md:mx-12">
          <SectionHeading onClick={backToMenu}>Send Email</SectionHeading>

          <NierButton
            className="my-4 flex self-start"
            onClick={() => setContactState('socials')}
          >
            Socials
          </NierButton>

          <div className="flex h-full max-h-[600px] gap-6 py-8">
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
