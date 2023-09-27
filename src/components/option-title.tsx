import { LoadingText } from './ui/loading-text'

interface OptionTitleProps {
  children: string
  onClick: () => void
}

export const OptionTitle = ({ children, onClick }: OptionTitleProps) => {
  return (
    <h1 className="text-4xl font-semibold tracking-[0.2em] text-nier-700 [text-shadow:_6px_6px_0px_rgba(166,161,136,1)] md:text-5xl">
      <LoadingText>{children}</LoadingText>
    </h1>
  )
}
