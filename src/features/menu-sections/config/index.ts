import { Linkedin, Mail, Users2 } from 'lucide-react'
import { ProjectItem, SectionItem, SkillItem, SocialItem } from '../types'

export const projectItems: ProjectItem[] = [
  {
    id: 0,
    name: 'Salvage',
    description: 'Copy files comfortably and automate your backups.',
    githubLink: 'https://github.com/RenanSui/salvage',
    liveDemoLink: 'https://github.com/RenanSui/salvage',
    imagePreview: 'bg-[url(/images/sections/projects/salvage.png)]',
  },
  {
    id: 1,
    name: 'Poképedia',
    description: 'Detailed stats for every creature from the Pokémon games.',
    githubLink: 'https://github.com/RenanSui/pokedex',
    liveDemoLink: 'https://ren-pokedex.vercel.app',
    imagePreview: 'bg-[url(/images/sections/projects/pokedex.png)]',
  },
  {
    id: 2,
    name: 'Spenso',
    description: 'Finance web application to track your spending and savings.',
    githubLink: 'https://github.com/RenanSui/spenso',
    liveDemoLink: 'https://spenso.vercel.app',
    imagePreview: 'bg-[url(/images/sections/projects/spenso.png)]',
  },
  {
    id: 3,
    name: 'Weatherium',
    description: 'Accurate source of weather forecasts.',
    githubLink: 'https://github.com/RenanSui/weather-app',
    liveDemoLink: 'https://ren-weatherapp.vercel.app',
    imagePreview: 'bg-[url(/images/sections/projects/weatherium.png)]',
  },
]

export const sectionItems: SectionItem[] = [
  {
    id: 0,
    section: 'Projects',
    description: 'Preview a project',
    sectionLink: 'projects',
    imagePreview:
      'bg-[url(/images/sections/about-me/sections/projects-min.png)]',
  },
  {
    id: 1,
    section: 'Settings',
    description: 'Adjust website settings',
    sectionLink: 'settings',
    imagePreview:
      'bg-[url(/images/sections/about-me/sections/settings-min.png)]',
  },
  {
    id: 2,
    section: 'Contact',
    description: 'Send me a message',
    sectionLink: 'contact',
    imagePreview:
      'bg-[url(/images/sections/about-me/sections/contact-min.png)]',
  },
  {
    id: 3,
    section: 'Exit Game',
    description: 'Back to desktop',
    sectionLink: 'exit-game',
    imagePreview:
      'bg-[url(/images/sections/about-me/sections/exitgame-min.png)]',
  },
]

export const skillItems: SkillItem[] = [
  {
    id: 0,
    name: 'Programação de Computadores',
    organization: 'Udemy',
    pdfLink: 'certificado_de_introducao_a_programacao_de_computadores.pdf',
    imageLink: 'certificado_de_introducao_a_programacao_de_computadores.png',
    bgImage:
      'bg-[url(/images/certificados/certificado_de_introducao_a_programacao_de_computadores.png)]',
  },
  {
    id: 1,
    name: 'Desenvolvimento Web Completo',
    organization: 'Udemy',
    pdfLink: 'certificado_de_desenvolvimento_web_completo.pdf',
    imageLink: 'certificado_de_desenvolvimento_web_completo.jpg',
    bgImage:
      'bg-[url(/images/certificados/certificado_de_desenvolvimento_web_completo.jpg)]',
  },
  {
    id: 2,
    name: 'The Complete SQL Bootcamp',
    organization: 'Udemy',
    pdfLink: 'certificado_de_the_complete_sql_bootcamp.pdf',
    imageLink: 'certificado_de_the_complete_sql_bootcamp.jpg',
    bgImage:
      'bg-[url(/images/certificados/certificado_de_the_complete_sql_bootcamp.jpg)]',
  },
  {
    id: 3,
    name: 'Aprendendo C++ básico e avançado',
    organization: 'Udemy',
    pdfLink: 'certificado_de_aprendendo_c++_basico_e_avancado.pdf',
    imageLink: 'certificado_de_aprendendo_c++_basico_e_avancado.jpg',
    bgImage:
      'bg-[url(/images/certificados/certificado_de_aprendendo_c++_basico_e_avancado.jpg)]',
  },
  {
    id: 4,
    name: 'Inglês & Informática básica',
    organization: 'Ibep formation',
    imageLink: 'certificado_de_ingles_basico_e_informatica_basica.jpg',
    bgImage:
      'bg-[url(/images/certificados/certificado_de_ingles_basico_e_informatica_basica.jpg)]',
  },
]

export const socialItems: SocialItem[] = [
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
