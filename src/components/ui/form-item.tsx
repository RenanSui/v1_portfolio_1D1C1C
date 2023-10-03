import { NierSelector } from '../nier/nier-selector'

export const FormItem = () => {
  return (
    <div className="group relative">
      <NierSelector className="-left-12 top-1/2 z-50 hidden -translate-y-1/2 group-focus-within:opacity-100 md:block" />
      <label
        className="absolute -top-8 text-black md:-left-[52px]"
        htmlFor="name"
      >
        User Name
      </label>
      <input
        className="h-[50px] w-full max-w-[590px] bg-nier-400 px-4 text-xl text-black shadow-[_5px_5px_0px_0px_rgba(132,129,114,1)] outline-none md:text-3xl"
        type="text"
        id="name"
      />
    </div>
  )
}
