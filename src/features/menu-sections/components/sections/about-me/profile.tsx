import { optionStateAtom } from '@/atoms/global'
import { activateAndClick } from '@/lib/utils'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardButton,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardSeparator,
} from '../../ui/card'
import { CardMenu, CardMenuHeading, CardMenuItem } from '../../ui/card-menu'

export const Profile = () => {
  const [, setOption] = useAtom(optionStateAtom)

  const router = useRouter()

  const backToPage = () => router.push('/resume')

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="ml-6 hidden flex-1 md:block">
        <CardMenuItem onMouseOver={(e) => activateAndClick(e.currentTarget)} data-active={true}>
          <CardMenuHeading>Renan Sui</CardMenuHeading>
        </CardMenuItem>
      </CardMenu>

      {/* table and above contact card */}
      <Card className="hidden flex-1 md:flex">
        <CardHeader>
          <CardHeading>Renan Sui Profile</CardHeading>
        </CardHeader>
        <CardContent>
          <CardDescription className="lg:text-2xl">Web Developer</CardDescription>
          <CardSeparator />
          <p className="my-2 font-sans font-normal text-nier-light-900 [text-wrap:balance] md:text-lg lg:text-xl">
            Profissional de TI com +4 anos de experiência especializado em desenvolvimento web. Posso implementar tanto
            o Frontend quanto o Backend e também estratégias de otimização dos mecanismos de busca (SEO). Excelente
            capacidade de resolução de problemas, adaptável/gosta de mudanças (depende do trabalho específico) e atenção
            aos detalhes.
          </p>
          <CardSeparator />
        </CardContent>
        <CardFooter className="flex gap-4">
          <CardButton onClick={() => setOption('projects')}>Projects</CardButton>
          <CardButton onClick={backToPage}>Resume</CardButton>
          <CardButton onClick={() => setOption('contact')}>Contact</CardButton>
        </CardFooter>
      </Card>

      {/* Mobile only contact card */}
      <div className="flex w-full flex-col gap-8 md:hidden">
        <Card className="flex-1">
          <CardHeader>
            <CardHeading>Renan Sui Profile</CardHeading>
          </CardHeader>
          <CardContent>
            <CardDescription className="lg:text-2xl">Web Developer</CardDescription>
            <CardSeparator />
            <p className="my-2 font-sans font-normal text-nier-light-900 [text-wrap:balance] md:text-lg lg:text-xl">
              Profissional de TI com +4 anos de experiência especializado em desenvolvimento web. Posso implementar
              tanto o Frontend quanto o Backend e também estratégias de otimização dos mecanismos de busca (SEO).
              Excelente capacidade de resolução de problemas, adaptável/gosta de mudanças (depende do trabalho
              específico) e atenção aos detalhes.
            </p>
            <CardSeparator />
          </CardContent>
          <CardFooter className="flex flex-wrap gap-4">
            <CardButton onClick={() => setOption('projects')}>Projects</CardButton>
            <CardButton onClick={backToPage}>Resume</CardButton>
            <CardButton onClick={() => setOption('contact')}>Contact</CardButton>
          </CardFooter>
        </Card>
      </div>
    </>
    // <AnimatedShell
    //   className="flex flex-col items-center justify-center gap-4"
    //   animate={{ opacity: 1, transition: { duration: 1 } }}
    // >
    //   <div
    //     className="projectImage h-[300px] w-[300px] rounded-full bg-[url(/images/sections/about-me/profile-pic.jpg)] bg-[length:900px] bg-center"
    //     title="Photo by Ben Sweet on Unsplash"
    //   />
    //   <h2 className="text-5xl text-black md:text-5xl">Renan Sui</h2>
    //   <h2 className="text-xl text-nier-light-900">Web Developer</h2>
    //   <p className="mx-1 w-full max-w-[1024px] text-center text-lg font-normal leading-9 tracking-widest text-black [text-wrap:balance]">
    //     Profissional de TI com +4 anos de experiência especializado em
    //     desenvolvimento web. Posso implementar tanto o Frontend quanto o Backend
    //     e também estratégias de otimização dos mecanismos de busca (SEO).
    //     Excelente capacidade de resolução de problemas, adaptável/gosta de
    //     mudanças (depende do trabalho específico) e atenção aos detalhes.
    //   </p>
    //   <div className="flex flex-wrap gap-3 md:gap-16">
    //     <NierButton onClick={() => setOption('projects')}>Projects</NierButton>

    //     <NierButton onClick={backToPage}>Resume</NierButton>

    //     <NierButton onClick={() => setOption('contact')}>Contact</NierButton>
    //   </div>
    // </AnimatedShell>
  )
}
