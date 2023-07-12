import { Dispatch, SetStateAction } from 'react'
import { OptionStates } from './main-menu'

interface AboutMeProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

const AboutMe = ({ setOptionState }: AboutMeProps) => {
  return (
    <div
      className="h-full w-full bg-nier-100 text-nier-900"
      onClick={() => setOptionState('')}
    >
      AboutMe
    </div>
  )
}

export { AboutMe }
