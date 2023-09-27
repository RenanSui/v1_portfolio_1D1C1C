import { MessageData } from '@/components/contact-me'
import emailjs from '@emailjs/browser'

export const SendEmail = (data: MessageData) => {
  const { fullName, email, message } = data

  const serviceID = 'service_b6fdcqg'
  const templateID = 'template_g24nnoh'
  const publicKey = 'mRgUP38HcWu9AM0rY'
  const templateParams = {
    name: fullName,
    email,
    message,
  }

  emailjs.send(serviceID, templateID, templateParams, publicKey)
}
