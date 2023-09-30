import { LoadingText } from './loading/loading-text'

interface OptionTitleProps {
  children: string
}

export const OptionTitle = ({ children }: OptionTitleProps) => {
  return (
    <h1 className="text-4xl font-semibold tracking-[0.2em] text-nier-700 [text-shadow:_6px_6px_0px_rgba(166,161,136,1)] md:text-5xl">
      <LoadingText>{children}</LoadingText>
    </h1>
  )
}
