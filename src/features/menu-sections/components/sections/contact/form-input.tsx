import { InputHTMLAttributes, forwardRef } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldWatched: string
  as?: React.ElementType
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ fieldWatched, as: Shell = 'input', maxLength = 50, ...props }, ref) => {
    return (
      <div className="flex w-full items-center">
        <Shell
          className="h-[50px] w-full max-w-[590px] bg-nier-light-trans-500 px-4 text-xl text-black shadow-[_5px_5px_0px_0px_rgba(132,129,114,1)] outline-none md:text-3xl"
          type="tel"
          autocomplete="off"
          maxLength={maxLength}
          ref={ref}
          {...props}
        />
        <p className="hidden max-w-[590px] px-3 py-1 text-black md:block">
          {fieldWatched ? fieldWatched.length : 0}/{maxLength}
        </p>
      </div>
    )
  },
)
FormInput.displayName = 'FormInput'
