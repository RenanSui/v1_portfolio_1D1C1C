import { CapitalizeWords } from '@/lib/utils'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { z } from 'zod'
import { OptionStates } from './main-menu'
import { NierPattern } from './nier/nier-pattern'
import { NierLine } from './nier/nier-line'
import { NierSuggestions } from './nier/nier-suggestions'
import { ShellContent } from './shells/shell-content'
import { Header } from './ui/header'

const messageSchema = z.object({
  fullName: z
    .string()
    .nonempty('Name is required')
    .toLowerCase()
    .min(2, 'Name must contain at least 2 character(s).')
    .transform((name) => CapitalizeWords(name)),
  email: z.string().nonempty('Email is required.').email().toLowerCase(),
  message: z.string().nonempty('Message is required.'),
})

export type MessageData = z.infer<typeof messageSchema>

interface ContactMeProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const ContactMe = ({ setOptionState }: ContactMeProps) => {
  const backToMenu = useCallback(() => setOptionState(''), [setOptionState])

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') backToMenu()
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [setOptionState, backToMenu])

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header onClick={backToMenu}>CONTACT ME</Header>

      <ShellContent>
        <NierLine />
      </ShellContent>

      <NierSuggestions onClick={backToMenu}>Send me a message</NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}

export { ContactMe }
