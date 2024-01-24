import { menuStateAtom, optionStateAtom, screenStateAtom } from '@/atoms/global'
import { NierLoadingText, NierSelector, NierSquare } from '@/features/nier'
import { useAtom } from 'jotai'
import { HTMLAttributes } from 'react'

export const ExitGame = () => {
  const [, setScreen] = useAtom(screenStateAtom)
  const [, setMenu] = useAtom(menuStateAtom)
  const [, setOption] = useAtom(optionStateAtom)

  const goToDevices = () => {
    setScreen('devices')
    setMenu('press-any')
    setOption('')
  }

  const backToMenu = () => {
    setOption('')
    setMenu('menu')
  }

  return (
    <>
      <section className="absolute left-1/2 top-1/2 z-20 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 cursor-default bg-nier-light-100 text-nier-light-800">
        <h1 className="flex items-center gap-3 bg-nier-light-800 p-3 py-2 tracking-[0.4em] text-nier-light-100 md:text-xl">
          <NierSquare className="h-[20px] w-[20px] cursor-default bg-nier-light-100" />
          <NierLoadingText>SYSTEM MESSAGE</NierLoadingText>
        </h1>
        <p className="mx-8 mt-4 text-lg text-black">Exit the game?</p>
        <div className="mx-3 mt-40 h-[1px] bg-nier-light-800 opacity-70" />
        <div className="my-6 flex justify-around">
          <ExitButton onClick={goToDevices}>Yes</ExitButton>
          <ExitButton onClick={backToMenu}>No</ExitButton>
        </div>
      </section>
      <div
        className="absolute z-10 h-full w-full bg-black opacity-50"
        onClick={backToMenu}
      />
    </>
  )
}

const ExitButton = ({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => (
  <button
    className="transitin-all group relative flex cursor-default items-center gap-4 bg-nier-light-trans-500 p-2 pl-3 pr-16 text-xl text-black duration-300 hover:bg-nier-light-800 hover:text-nier-light-100 hover:shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)]"
    {...props}
  >
    <NierSelector className="pointer-events-none -left-12 group-hover:opacity-100" />
    <NierSquare className="pointer-events-none h-[20px] w-[20px] cursor-default bg-nier-light-800 group-hover:bg-nier-light-100" />
    {children}
  </button>
)
