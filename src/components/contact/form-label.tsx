import { LabelHTMLAttributes } from 'react'
import { LoadingText } from '../loading/loading-text'

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  fieldWatched: string
  maxLength?: number
  children: string
}

export const FormLabel = ({
  htmlFor,
  children,
  fieldWatched,
  maxLength = 50,
}: FormLabelProps) => {
  return (
    <label className="text-black" htmlFor={htmlFor}>
      <LoadingText>{children}</LoadingText>
      <span className="inline-block max-w-[590px] px-3 text-black md:hidden">
        — {fieldWatched ? fieldWatched.length : 0}/{maxLength}
      </span>
    </label>
  )
}
