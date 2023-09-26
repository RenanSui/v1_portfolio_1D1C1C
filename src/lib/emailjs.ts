import emailjs from '@emailjs/browser'

export const SendEmail = () => {
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
