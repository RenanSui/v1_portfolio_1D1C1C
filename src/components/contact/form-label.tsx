import { LabelHTMLAttributes } from 'react'

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  fieldWatched: string
  maxLength?: number
}

export const FormLabel = ({
  htmlFor,
  children,
  fieldWatched,
  maxLength = 50,
}: FormLabelProps) => {
  return (
    <label className="text-black" htmlFor={htmlFor}>
      {children}
      <span className="inline-block max-w-[590px] px-3 text-black md:hidden">
        — {fieldWatched ? fieldWatched.length : 0}/{maxLength}
      </span>
    </label>
    // <label className="absolute -top-8 text-black" htmlFor={htmlFor}>
    //   {children}
    //   <span className="inline-block max-w-[590px] px-3 text-black md:hidden">
    //     — {fieldWatched ? fieldWatched.length : 0}/{maxLength}
    //   </span>
    // </label>
  )
}
