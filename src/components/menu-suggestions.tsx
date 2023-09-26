import { HTMLAttributes } from 'react'
import { Icons } from './icons'

interface MenuSuggestionsProps extends HTMLAttributes<HTMLDivElement> {
  backToMenu: () => void
}

const MenuSuggestions = ({ children, backToMenu }: MenuSuggestionsProps) => {
  return (
    <div className="absolute bottom-24 left-12 right-12 mt-auto hidden h-[80px] cursor-default bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex">
      <div className="flex gap-2">
        <div className="h-full w-[15px] bg-nier-700" />
        <div className="h-full w-[5px] bg-nier-700" />
      </div>

      <div className="mx-8 flex h-full w-full items-center justify-between">
        <p className="text-xl tracking-[0.2em]">{children}</p>

        <div className="flex gap-8 text-xl tracking-[0.2em]">
          <div className="flex items-center gap-1">
            <Icons.chevronUp className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500" />
            <Icons.chevronDown className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500" />
            <p>Select</p>
          </div>

          <div className="flex items-center gap-1">
            <span className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500">
              Enter
            </span>
            <p>Confirm</p>
          </div>

          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={backToMenu}
          >
            <span className="flex items-center justify-center rounded-sm bg-nier-700 px-1 py-[2px] text-sm text-nier-500">
              Esc
            </span>

            <p>Back</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuSuggestions
