import { useTypingText } from '@/hooks/useTypingText'

export const LoadingText = ({ children }: { children: string }) => {
  const { word, start } = useTypingText(children, 30)

  setTimeout(() => {
    start()
  }, 50)

  return (
    <>
      {word}
      {/* keep first letter showing then hide */}
      {word.length === children.length ? '' : word[0]}
    </>
  )
}
