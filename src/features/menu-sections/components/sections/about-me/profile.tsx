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
      <p className="text-5xl text-black md:text-7xl">Renan Sui</p>
      <p className="text-2xl text-nier-900">Web Developer</p>
      <p className="mx-1 text-center text-lg [text-wrap:balance] md:mx-8 md:w-[500px] lg:w-[700px]">
        Enthusiastic and motivated self-learning about information technology.
        Focused on design and front-end web development. Now I am looking for
        more experience in my field.
      </p>
      <div className="flex flex-wrap gap-3 md:gap-16">
        <NierButton onClick={() => setOption('projects')}>Projects</NierButton>

        <NierButton onClick={backToPage}>Resume</NierButton>

        <NierButton onClick={() => setOption('contact')}>Contact</NierButton>
      </div>
    </AnimatedShell>
  )
}
