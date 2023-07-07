import { ArrayMaker } from '@/lib/utils'
import { memo, useEffect, useState } from 'react'
import { Star } from './ui/star'

const StarsStyles = ['h-[1px] w-[1px]', 'h-[2px] w-[2px]', 'h-[3px] w-[3px]']
const StarsOpacityAnimation = [0, 0, 1, 1, 1, 1, 0, 0]

const StarAnimations = [
  {
    // animationType: 'RightUpFast',
    x: [0, 40],
    y: [0, -40],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'RightUpFast',
    x: [0, 80],
    y: [0, -80],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'RightDownFast',
    x: [0, 40],
    y: [0, 40],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'RightDownFast',
    x: [0, 80],
    y: [0, 80],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'RightUpSlow',
    x: [0, 100],
    y: [0, -20],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'RightUpSlow',
    x: [0, 120],
    y: [0, -20],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'RightDownSlow',
    x: [0, 100],
    y: [0, 20],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'RightDownSlow',
    x: [0, 120],
    y: [0, 20],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'LeftUpFast',
    x: [0, -40],
    y: [0, -40],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'LeftUpFast',
    x: [0, -80],
    y: [0, -80],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'LeftDownFast',
    x: [0, -40],
    y: [0, 40],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'LeftDownFast',
    x: [0, -80],
    y: [0, 80],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'LeftUpSlow',
    x: [0, -100],
    y: [0, -20],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'LeftUpSlow',
    x: [0, -120],
    y: [0, -20],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'LeftDownSlow',
    x: [0, -100],
    y: [0, 20],
    opacity: StarsOpacityAnimation,
  },
  {
    // animationType: 'LeftDownSlow',
    x: [0, -120],
    y: [0, 20],
    opacity: StarsOpacityAnimation,
  },
]

const Stars = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension())
  const Array1000 = ArrayMaker(400)
  const width = screenSize.width
  const height = screenSize.height

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension)

    return () => {
      window.removeEventListener('resize', updateDimension)
    }
  }, [screenSize])

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 h-full w-full">
      <div className="starBackground fixed bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden ">
        {Array1000.map((_, index) => {
          const randomStar = Math.floor(Math.random() * StarsStyles.length)
          const AnimationDuration = Math.floor(Math.random() * 15)

          return (
            <Star
              key={index}
              className={`Star fixed bg-nier-50 shadow-[0px_0px_10px_0px_rgba(255,255,255,1)] ${StarsStyles[randomStar]}`}
              style={{
                top: Math.floor(Math.random() * height),
                left: Math.floor(Math.random() * width),
              }}
              animate={
                StarAnimations[
                  Math.floor(Math.random() * StarAnimations.length - 1)
                ]
              }
              transition={{
                repeat: Infinity,
                delay: Math.floor(Math.random() * 5),
                repeatDelay: Math.floor(Math.random() * 5),
                duration: AnimationDuration <= 3 ? 3 : AnimationDuration,
              }}
            />
          )
        })}
      </div>
      <div className="absolute top-0 z-10 h-[45px] w-full backdrop-blur-[5px]" />
      <div className="absolute bottom-0 z-10 h-[45px] w-full backdrop-blur-[5px]" />
    </div>
  )
}

export const StarsBackground = memo(Stars)
