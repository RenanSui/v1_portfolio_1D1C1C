import { NierLoadingText } from '@/features/nier'
import { SendEmail } from '@/lib/emailjs'
import { CapitalizeWords } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardHeading } from '../../ui/card'
import { FormError } from './form-error'
import { FormField } from './form-field'
import { FormInput } from './form-input'
import { FormLabel } from './form-label'

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

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<MessageData>({ resolver: zodResolver(messageSchema) })

  const handleSendEmail = (data: MessageData) => {
    SendEmail(data)

    toast.custom(() => (
      <Card className="z-10">
        <CardHeader>
          <CardHeading className="tracking-[0.4em]">SYSTEM MESSAGE</CardHeading>
        </CardHeader>
        <CardContent className="h-[240px] w-[500px]">
          <CardDescription className="text-base">Message sended.</CardDescription>
        </CardContent>
      </Card>
    ))

    reset({ fullName: '', email: '', message: '' })
  }

  const watchFullName = watch('fullName')
  const watchEmail = watch('email')
  const watchMessage = watch('message')

  return (
    <form
      className="projects z-10 flex w-full flex-col gap-4 overflow-y-scroll pb-4"
      onSubmit={handleSubmit(handleSendEmail)}
    >
      <FormField className="flex flex-col">
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
          User Email
        </FormLabel>

        <FormInput id="email" {...register('email')} disabled={isSubmitting} fieldWatched={watchEmail} />

        <FormError errorMessage={errors.email?.message} />
      </FormField>

      <FormField>
        <FormLabel htmlFor="message" fieldWatched={watchMessage} maxLength={300}>
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
        className="mr-auto bg-nier-light-trans-500 px-6 py-2 text-lg text-black hover:bg-nier-light-800 hover:text-nier-light-100 hover:shadow-[_5px_5px_0px_0px_rgba(132,129,114,1)]"
        type="submit"
      >
        <NierLoadingText>Send Message</NierLoadingText>
      </button>
    </form>
  )
}
