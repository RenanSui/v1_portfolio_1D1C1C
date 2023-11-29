import { menuStateAtom, optionStateAtom, screenStateAtom } from '@/atoms/global'
import { useAtom } from 'jotai'
import { HTMLAttributes } from 'react'
import { LoadingText } from './loading/loading-text'
import { NierSelector } from './nier/nier-selector'
import { NierSquare } from './nier/nier-square'

export const ExitGame = () => {
  const [, setScreen] = useAtom(screenStateAtom)
  const [, setMenu] = useAtom(menuStateAtom)
  const [, setOption] = useAtom(optionStateAtom)

  const goToDevices = () => {
    setScreen('devices')
    setMenu('press-any')
    setOption('')
  }

  return (
    <>
      <section className="absolute left-1/2 top-1/2 z-20 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 cursor-default bg-nier-500 text-nier-700">
        <h1 className="flex items-center gap-3 bg-nier-700 p-3 py-2 tracking-[0.4em] text-nier-600 md:text-xl">
          <NierSquare className="h-[20px] w-[20px] cursor-default bg-nier-600" />
          <LoadingText>SYSTEM MESSAGE</LoadingText>
        </h1>
        <p className="mx-8 mt-4 text-lg text-black">Exit the game?</p>
        <div className="mx-3 mt-40 h-[1px] bg-nier-700 opacity-70" />
        <div className="my-6 flex justify-around">
          <ExitButton onClick={goToDevices}>Yes</ExitButton>
          <ExitButton onClick={() => setOption('')}>No</ExitButton>
        </div>
      </section>
      <div
        className="absolute z-10 h-full w-full bg-black opacity-50"
        onClick={() => setOption('')}
      />
    </>
  )
}

const ExitButton = ({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => (
  <button
    className="transitin-all group relative flex cursor-default items-center gap-4 bg-nier-400 p-2 pl-3 pr-16 text-xl text-black duration-300 hover:bg-nier-700 hover:text-nier-600 hover:shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)]"
    {...props}
  >
    <NierSelector className="-left-12 group-hover:opacity-100" />
    <NierSquare className="h-[20px] w-[20px] cursor-default bg-nier-900 group-hover:bg-nier-600" />
    {children}
  </button>
)
