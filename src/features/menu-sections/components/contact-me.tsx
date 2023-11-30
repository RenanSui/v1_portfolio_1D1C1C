import { optionStateAtom } from '@/atoms/global'
import {
  NierButton,
  NierLine,
  NierPattern,
  NierSuggestions,
} from '@/features/nier'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { ContactForm } from './sections/contact/contact-form'
import { ContactSocials } from './sections/contact/contact-socials'
import { SectionHeading } from './ui/section-heading'

type ContactStates = 'socials' | 'send-email'

const ContactMe = () => {
  const [, setOptionState] = useAtom(optionStateAtom)

  const [contatState, setContactState] = useState<ContactStates>('socials')
  const backToMenu = () => setOptionState('')

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-500 text-nier-900">
      <NierPattern variant="block" />

      {contatState === 'socials' ? (
        <div className="flex flex-1 flex-col pb-2">
          <SectionHeading onClick={backToMenu}>Socials</SectionHeading>

          <NierButton
            className="mx-3 my-4 flex self-start md:mx-12"
            onClick={() => setContactState('send-email')}
          >
            Send Email
          </NierButton>

          <div className="mx-3 flex h-full flex-wrap gap-6 pb-8 md:mx-12 md:max-h-[800px] md:flex-row-reverse">
            <ContactSocials />

            <NierLine className="hidden md:flex" />
          </div>
        </div>
      ) : null}

      {contatState === 'send-email' ? (
        <div className="flex flex-1 flex-col pb-2">
          <SectionHeading onClick={backToMenu}>Send Email</SectionHeading>

          <NierButton
            className="mx-3 my-4 flex self-start md:mx-12"
            onClick={() => setContactState('socials')}
          >
            Socials
          </NierButton>

          <div className="mx-3 flex h-full max-h-[600px] gap-6 py-8 md:mx-12">
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
