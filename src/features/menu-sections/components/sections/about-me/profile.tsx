import { optionStateAtom } from '@/atoms/global'
import { AnimatedShell } from '@/components/shells/animated-shell'
import { NierButton } from '@/features/nier'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'

export const Profile = () => {
  const [, setOption] = useAtom(optionStateAtom)

  const router = useRouter()

  const backToPage = () => router.push('/resume')

  return (
    <AnimatedShell
      className="flex flex-col items-center justify-center gap-4"
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div
        className="projectImage h-[300px] w-[300px] rounded-full bg-[url(/images/sections/about-me/profile-pic.jpg)] bg-[length:900px] bg-center"
        title="Photo by Ben Sweet on Unsplash"
      />
      <h2 className="text-5xl text-black md:text-5xl">Renan Sui</h2>
      <h2 className="text-xl text-nier-light-900">Web Developer</h2>
      <p className="mx-1 text-center text-base font-normal text-black [text-wrap:pretty] md:mx-8 md:w-[500px] lg:w-[800px]">
        Profissional de TI com +4 anos de experiência especializado em
        desenvolvimento web. Posso implementar tanto o Frontend quanto o Backend
        e também estratégias de otimização dos mecanismos de busca (SEO).
        Excelente capacidade de resolução de problemas, adaptável/gosta de
        mudanças (depende do trabalho específico) e atenção aos detalhes.
      </p>
      <div className="flex flex-wrap gap-3 md:gap-16">
        <NierButton onClick={() => setOption('projects')}>Projects</NierButton>

        <NierButton onClick={backToPage}>Resume</NierButton>

        <NierButton onClick={() => setOption('contact')}>Contact</NierButton>
      </div>
    </AnimatedShell>
  )
}
