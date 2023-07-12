import { Dispatch, SetStateAction } from 'react'
import { OptionStates } from './main-menu'

interface ProjectsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const Projects = ({ setOptionState }: ProjectsProps) => {
  return (
    <div
      className="h-full w-full bg-nier-100 text-nier-900"
      onClick={() => setOptionState('')}
    >
      AboutMe
    </div>
  )
}

export { Projects }
