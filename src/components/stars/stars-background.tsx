import { arrayMaker, getCurrentDimension } from '@/lib/utils'
import { memo, useEffect, useState } from 'react'
import { OptionStates } from '../main-menu'
import { AnimatedShell } from '../shells/animated-shell'
import { StarsBig } from './stars-big'
import { StarsMedium } from './stars-medium'
import { StarsSmall } from './stars-small'

type StarsProps = { optionState: OptionStates }

const Stars = ({ optionState }: StarsProps) => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension())

  const { width } = screenSize

  const Stars = {
    small: arrayMaker(Math.floor(width / 64)),
    medium: arrayMaker(Math.floor(width / 38)),
    big: arrayMaker(Math.floor(width / 64)),
  }

  useEffect(() => {
    const updateDimension = () => setScreenSize(getCurrentDimension())

    window.addEventListener('resize', updateDimension)
    return () => {
      window.removeEventListener('resize', updateDimension)
    }
  }, [])

  return (
    <AnimatedShell exit={{ opacity: 0, transition: { duration: 2 } }}>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 h-full w-full">
        <div className="fixed bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden">
          {optionState === '' &&
            Stars.small.map((_, index) => {
              return (
                <StarsSmall
                  key={`B${index}`}
                  index={index}
                  screenSize={screenSize}
                />
              )
            })}

          {optionState === '' &&
            Stars.medium.map((_, index) => {
              return (
                <StarsMedium
                  key={`B${index}`}
                  index={index}
                  screenSize={screenSize}
                />
              )
            })}

          {optionState === '' &&
            Stars.big.map((_, index) => {
              return (
                <StarsBig
                  key={`C${index}`}
                  index={index}
                  screenSize={screenSize}
                />
              )
            })}
        </div>

        <div className="absolute bottom-0 z-10 h-[30px] w-full backdrop-blur-[3px] md:h-[100px]" />
      </div>
    </AnimatedShell>
  )
}

export const StarsBackground = memo(Stars)
