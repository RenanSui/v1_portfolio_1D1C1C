import { ProjectButton } from '../projects/project-button'
import { AnimatedShell } from '../shells/animated-shell'

export const Skills = () => {
  return (
    <AnimatedShell
      className="flex flex-col items-center justify-center gap-4"
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <p className="text-3xl text-nier-900 md:text-5xl">Web Development</p>
      <div className="flex flex-wrap justify-center gap-6 text-black">
        <ProjectButton>HTML & CSS</ProjectButton>
        <ProjectButton>Git</ProjectButton>
        <ProjectButton>JavaScript</ProjectButton>
        <ProjectButton>TypeScript</ProjectButton>
        <ProjectButton>React JS</ProjectButton>
        <ProjectButton>Next JS</ProjectButton>
        <ProjectButton>Tailwind CSS</ProjectButton>
        <ProjectButton>Figma</ProjectButton>
      </div>
    </AnimatedShell>
  )
}
