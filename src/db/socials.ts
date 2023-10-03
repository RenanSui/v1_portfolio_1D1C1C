import { Linkedin, Mail, Users2 } from 'lucide-react'

export const socialItems = [
  {
    id: 0,
    social: 'Email',
    contact: 'renanddtao@gmail.com',
    contactLink: 'mailto: renanddtao@gmail.com',
    icon: Mail,
  },
  {
    id: 1,
    social: 'Linkedin',
    contact: 'in/renansui',
    contactLink: 'https://www.linkedin.com/in/renansui/',
    icon: Linkedin,
  },
  {
    id: 2,
    social: 'Whatsapp',
    contact: '+55 71 9 8503 5606',
    contactLink:
      'https://api.whatsapp.com/send?phone=+5571985035606&text=Hello',
    icon: Users2,
  },
]

export type SocialItems = (typeof socialItems)[0]
