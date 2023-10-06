import { useBackToMenu } from '@/hooks/use-back-menu'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { ContactButton } from './contact/contact-button'
import { ContactForm } from './contact/contact-form'
import { ContactSocials } from './contact/contact-socials'
import { OptionStates } from './main-menu'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { ContentShell } from './shells/content-shell'
import { Header } from './ui/header'

type ContactStates = 'socials' | 'send-email'

interface ContactMeProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const ContactMe = ({ setOptionState }: ContactMeProps) => {
  const [contatState, setContactState] = useState<ContactStates>('socials')
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])

  useBackToMenu(backToMenu)

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      {contatState === 'socials' && (
        <Header onClick={backToMenu}>Socials</Header>
      )}
      {contatState === 'send-email' && (
        <Header onClick={backToMenu}>Send Email</Header>
      )}

      <div className="mx-3 mb-6 flex gap-4 md:mx-12">
        {contatState === 'send-email' && (
          <ContactButton onClick={() => setContactState('socials')}>
            Socials
          </ContactButton>
        )}

        {contatState === 'socials' && (
          <ContactButton onClick={() => setContactState('send-email')}>
            Send Email
          </ContactButton>
        )}
      </div>

      {contatState === 'send-email' && (
        <ContentShell className="flex gap-6 md:max-h-[45vh]">
          <NierLine />

          <ContactForm />
        </ContentShell>
      )}

      {contatState === 'socials' && (
        <ContentShell className="gap-6 md:flex md:h-full md:max-h-[45vh] xl:max-h-[55vh] 2xl:max-h-[60vh]">
          <NierLine />

          <ContactSocials />
        </ContentShell>
      )}

      <NierSuggestions onClick={backToMenu}>Send me a message</NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}

export { ContactMe }
