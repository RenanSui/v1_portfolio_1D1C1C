import { useBackToMenu } from '@/hooks/use-back-menu'
import { SendEmail } from '@/lib/emailjs'
import { CapitalizeWords } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { FormError } from './contact/form-error'
import { FormField } from './contact/form-field'
import { FormInput } from './contact/form-input'
import { FormLabel } from './contact/form-label'
import { OptionStates } from './main-menu'
import { NierLine } from './nier/nier-line'
import { NierPattern } from './nier/nier-pattern'
import { NierSuggestions } from './nier/nier-suggestions'
import { ContentShell } from './shells/content-shell'
import { CustomToaster } from './ui/custom-toaster'
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

  useBackToMenu(backToMenu)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<MessageData>({ resolver: zodResolver(messageSchema) })

  const handleSendEmail = (data: MessageData) => {
    SendEmail(data)

    toast.custom(() => <CustomToaster />)

    reset({ fullName: '', email: '', message: '' })
  }

  const watchFullName = watch('fullName')
  const watchEmail = watch('email')
  const watchMessage = watch('message')

  return (
    <section className="absolute z-[60] h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header className="text-3xl" onClick={backToMenu}>
        CONTACT ME
      </Header>

      <ContentShell className="flex gap-6">
        <NierLine className="ml-auto" />

        <form
          className="projects flex w-full flex-col gap-12 overflow-y-scroll pb-4"
          onSubmit={handleSubmit(handleSendEmail)}
        >
          <FormField className="flex flex-col gap-2">
            <FormLabel htmlFor="fullName" fieldWatched={watchFullName}>
              User Name
            </FormLabel>

            <FormInput
              id="fullName"
              {...register('fullName')}
              disabled={isSubmitting}
              fieldWatched={watchFullName}
              maxLength={50}
            />

            <FormError errorMessage={errors.fullName?.message} />
          </FormField>

          <FormField>
            <FormLabel htmlFor="email" fieldWatched={watchEmail}>
              Email
            </FormLabel>

            <FormInput
              id="email"
              {...register('email')}
              disabled={isSubmitting}
              fieldWatched={watchEmail}
            />

            <FormError errorMessage={errors.email?.message} />
          </FormField>

          <FormField>
            <FormLabel
              htmlFor="message"
              fieldWatched={watchMessage}
              maxLength={300}
            >
              Message
            </FormLabel>

            <FormInput
              as={'textarea'}
              id="message"
              {...register('message')}
              disabled={isSubmitting}
              fieldWatched={watchMessage}
              maxLength={300}
            />

            <FormError errorMessage={errors.message?.message} />
          </FormField>

          <button
            className="mr-auto bg-nier-400 px-6 py-2 text-lg text-black shadow-[_5px_5px_0px_0px_rgba(132,129,114,1)]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </ContentShell>

      <NierSuggestions onClick={backToMenu}>Send me a message</NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}

export { ContactMe }
