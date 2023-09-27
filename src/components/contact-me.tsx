import { CapitalizeWords } from '@/lib/utils'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { z } from 'zod'
import { Icons } from './icons'
import { OptionStates } from './main-menu'
import { LinePattern } from './ui/line-pattern'

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
  const backToMenu = () => setOptionState('')

  useEffect(() => {
    const onKeyPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOptionState('')
    }

    window.addEventListener('keydown', onKeyPressed, true)
    return () => window.removeEventListener('keydown', onKeyPressed, true)
  }, [setOptionState])

  return (
    <div className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <LinePattern variant={'top'} />

      <div className="mb-7 mt-14 flex cursor-default items-center gap-2 pl-7 md:mt-20">
        <Icons.chevronLeft
          className="h-8 w-8 cursor-pointer"
          onClick={backToMenu}
        />
        <h1 className="text-4xl font-semibold tracking-[0.2em] text-nier-700 [text-shadow:_6px_6px_0px_rgba(166,161,136,1)] md:text-5xl">
          CONTACT ME
        </h1>
      </div>

      <LinePattern variant={'bottom'} />
    </div>
  )
}

export { ContactMe }
