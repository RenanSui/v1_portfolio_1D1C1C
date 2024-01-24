import { AnimatedShell } from '@/components/shells/animated-shell'
import { arrayMaker, getCurrentDimension } from '@/lib/utils'
import { memo, useEffect, useState } from 'react'
import { StarsBig } from './stars-big'
import { StarsMedium } from './stars-medium'
import { StarsSmall } from './stars-small'

const Stars = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension())

  const Stars = {
    small: arrayMaker(Math.floor(screenSize.width / 64)),
    medium: arrayMaker(Math.floor(screenSize.width / 38)),
    big: arrayMaker(Math.floor(screenSize.width / 64)),
  }

  useEffect(() => {
    const updateDimension = () => setScreenSize(getCurrentDimension())

    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  }, [])

  return (
    <AnimatedShell exit={{ opacity: 0, transition: { duration: 2 } }}>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-[10000] h-full w-full">
        <div className="fixed bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden">
          {Stars.small.map((_, index) => (
            <StarsSmall key={`B${index}`} index={index} size={screenSize} />
          ))}

          {Stars.medium.map((_, index) => (
            <StarsMedium key={`B${index}`} index={index} size={screenSize} />
          ))}

          {Stars.big.map((_, index) => (
            <StarsBig key={`C${index}`} index={index} size={screenSize} />
          ))}
        </div>

        <div className="absolute bottom-0 z-10 h-[30px] w-full backdrop-blur-[3px] md:h-[100px]" />
      </div>
    </AnimatedShell>
  )
}

export const StarsOrbiting = memo(Stars)
