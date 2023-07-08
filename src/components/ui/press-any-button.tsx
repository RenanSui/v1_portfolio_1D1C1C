import { useTypingText } from '@/hooks/useTypingText'

const PressAnyButton = () => {
  const { word, start } = useTypingText('Press Any Button', 20)

  setTimeout(() => {
    start()
  }, 625)

  return (
    <div className="flex w-full max-w-[280px] flex-col items-center">
      <h1 className={'select-none text-lg text-nier-100 md:text-xl'}>{word}</h1>
      <div className="flex items-center justify-center gap-1">
        <span className="h-[6px] w-[6px] rounded-full bg-nier-100 opacity-100" />
        <div className="h-[2px] w-48 bg-nier-100 transition-all duration-[30ms] md:w-72" />
        <span className="h-[6px] w-[6px] rounded-full bg-nier-100 opacity-100" />
      </div>
    </div>
  )
}

export { PressAnyButton }
