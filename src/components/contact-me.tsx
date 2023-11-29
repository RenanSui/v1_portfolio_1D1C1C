import { optionStateAtom } from '@/atoms/global'
import { useBackToMenu } from '@/hooks/use-back-menu'
import { useAtom } from 'jotai'
import { useCallback, useState } from 'react'
import { ContactButton } from './contact/contact-button'
import { ContactForm } from './contact/contact-form'
import { ContactSocials } from './contact/contact-socials'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { Header } from './ui/header'

type ContactStates = 'socials' | 'send-email'

const ContactMe = () => {
  const [, setOptionState] = useAtom(optionStateAtom)

  const [contatState, setContactState] = useState<ContactStates>('socials')
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])

  useBackToMenu(backToMenu)

  return (
    <section className="z-[60] flex min-h-screen w-full flex-col bg-nier-500 text-nier-900">
      <NierPattern variant="block" />

      {contatState === 'socials' ? (
        <div className="flex flex-1 flex-col pb-2">
          <Header onClick={backToMenu}>Socials</Header>

          <ContactButton
            className="mx-12 my-4 flex self-start"
            onClick={() => setContactState('send-email')}
          >
            Send Email
          </ContactButton>

          <div className="mx-3 flex h-full max-h-[600px] flex-row-reverse gap-6 py-8 md:mx-12">
            <ContactSocials />

            <NierLine />
          </div>
        </div>
      ) : null}

      {contatState === 'send-email' ? (
        <div className="flex flex-1 flex-col pb-2">
          <Header onClick={backToMenu}>Send Email</Header>

          <ContactButton
            className="mx-12 my-4 flex self-start"
            onClick={() => setContactState('socials')}
          >
            Socials
          </ContactButton>

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
