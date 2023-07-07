import { ArrayMaker } from '@/lib/utils'
import { memo, useEffect, useState } from 'react'
import { Star } from './ui/star'

const StarsStyles = ['h-[1px] w-[1px]', 'h-[2px] w-[2px]', 'h-[3px] w-[3px]']
const BigStarsStyles = [
  'h-[5px] w-[5px] shadow-[0px_0px_50px_15px_rgba(30,30,100,1)]',
  'h-[16px] w-[16px] rounded-full blur-md shadow-[0px_0px_80px_24px_rgba(30,30,100,1)]',
  'h-[20px] w-[20px] rounded-full blur-md shadow-[0px_0px_100px_30px_rgba(30,30,100,1)]',
]
const BigStarsNoAnimation = [
  'h-[5px] w-[5px]',
  'h-[7px] w-[7px] rounded-full blur-[4px]',
]
const StarsOpacityAnimation = [0, 0, 1, 0, 1, 1, 1, 0, 0]

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
  const Array1000 = ArrayMaker(300)
  const Array50 = ArrayMaker(50)
  const Array30 = ArrayMaker(30)
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
          const AnimationDuration = Math.floor(Math.random() * 30)

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
        {Array30.map((_, index) => {
          const randomStar = Math.floor(Math.random() * BigStarsStyles.length)
          const AnimationDuration = Math.floor(Math.random() * 100)

          return (
            <Star
              key={`B${index}`}
              // key={index * -1}
              className={`Star fixed bg-nier-50 ${BigStarsStyles[randomStar]}`}
              style={{
                top: Math.floor(Math.random() * height),
                left: Math.floor(Math.random() * width),
              }}
              animate={{
                x: width,
                y: -height,
                opacity: [0, 1, 1, 1, 1, 1, 1, 0, 0],
              }}
              transition={{
                repeat: Infinity,
                delay: Math.floor(Math.random() * 15),
                repeatDelay: Math.floor(Math.random() * 5),
                duration: AnimationDuration,
              }}
            />
          )
        })}
        {Array50.map((_, index) => {
          const randomStar = Math.floor(
            Math.random() * BigStarsNoAnimation.length,
          )
          const AnimationDuration = Math.floor(Math.random() * 30)

          return (
            <Star
              key={`C${index}`}
              className={`Star fixed bg-nier-50 shadow-[0px_0px_10px_0px_rgba(255,255,255,1)] ${BigStarsNoAnimation[randomStar]}`}
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
      {/* <div className="absolute top-0 z-10 h-[45px] w-full backdrop-blur-[5px]" /> */}
      <div className="absolute bottom-0 z-10 h-[100px] w-full backdrop-blur-[3px]" />
    </div>
  )
}

export const StarsBackground = memo(Stars)
