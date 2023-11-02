export type SkillItems = {
  id: number
  name: string
  organization: string
  pdfLink?: string
  imageLink: string
  bgImage: string
}

export const skillItems: SkillItems[] = [
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

// bg-[url(/images/pokedex.png)]
// bg-[url(/images/certificados/certificado_de_ingles_basico_e_informatica_basica.jpg)]
