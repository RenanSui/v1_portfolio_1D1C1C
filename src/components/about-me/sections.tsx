import { sectionItems } from '@/db/sections'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useSelectKeyboard } from '@/hooks/use-select-keyboard'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { OptionStates } from '../main-menu'
import { SectionCard } from './section-card'
import { SectionItem } from './section-item'

interface SectionsProps {
  setOptionState: Dispatch<SetStateAction<OptionStates>>
}

export const Sections = ({ setOptionState }: SectionsProps) => {
  const [sectionId, setSectionId] = useLocalStorage('sectionId', '0')
  const sectionsRef = useRef<HTMLDivElement>(null)

  const changeSection = () => {
    const localStorageValue = localStorage.getItem('sectionId')

    setSectionId(
      localStorageValue ? (JSON.parse(localStorageValue) as string) : '0',
    )
  }

  useSelectKeyboard(sectionsRef)

  const sectionItem = sectionItems[Number(sectionId)]

  useEffect(() => {
    setTimeout(() => null)
  }, [sectionId])

  return (
    <>
      {/* tablet and above */}
      <div className="hidden flex-1 flex-col gap-4 bg-nier-600 shadow-[_5px_5px_0px_0px_rgba(166,160,136,1)] md:flex">
        <div className="mx-3 mt-2 h-[1px] bg-nier-700 opacity-70" />
        <section
          className="projects flex cursor-default flex-col gap-2 overflow-y-scroll"
          ref={sectionsRef}
          data-elementtype="sectionShell"
        >
          {sectionItems.map((item) => (
            <SectionItem
              key={item.id}
              id={String(item.id)}
              onClick={changeSection}
            >
              {item.section}
            </SectionItem>
          ))}
        </section>
      </div>

      {/* table and above contact card */}
      {sectionItem && (
        <SectionCard
          className="hidden flex-1 md:flex"
          key={sectionItem.id} // change Card
          sectionItem={sectionItem}
          setOptionState={setOptionState}
        />
      )}

      {/* Mobile only contact card */}
      <div className="flex flex-col gap-8 md:hidden">
        {sectionItems.map((section) => (
          <SectionCard
            key={section.id}
            sectionItem={section}
            setOptionState={setOptionState}
          />
        ))}
      </div>
    </>
  )
}

// <AnimatedShell
//   className="mt-8 flex flex-col gap-6"
//   animate={{ opacity: 1, transition: { duration: 1 } }}
// >
//   <div className="flex flex-col items-start justify-start gap-4">
//     <h2 className="text-3xl text-black md:text-5xl md:text-nier-900">
//       Preview a project
//     </h2>
//     <ContactButton
//       className="mx-1 w-full max-w-[210px]"
//       onClick={() => setOptionState('projects')}
//     >
//       Project
//     </ContactButton>
//   </div>

//   <div className="flex flex-col items-start justify-start gap-4">
//     <h2 className="text-3xl text-black md:text-5xl md:text-nier-900">
//       Adjust website settings
//     </h2>
//     <ContactButton
//       className="mx-1 w-full max-w-[210px]"
//       onClick={() => setOptionState('settings')}
//     >
//       Settings
//     </ContactButton>
//   </div>

//   <div className="flex flex-col items-start justify-start gap-4">
//     <h2 className="text-3xl text-black md:text-5xl md:text-nier-900">
//       Send me a message
//     </h2>
//     <ContactButton
//       className="mx-1 w-full max-w-[210px]"
//       onClick={() => setOptionState('contact')}
//     >
//       Contact
//     </ContactButton>
//   </div>

//   <div className="flex flex-col items-start justify-start gap-4">
//     <h2 className="text-3xl text-black md:text-5xl md:text-nier-900">
//       Back to desktop
//     </h2>
//     <ContactButton
//       className="mx-1 w-full max-w-[210px]"
//       onClick={() => setOptionState('exit-game')}
//     >
//       Exit Game
//     </ContactButton>
//   </div>
// </AnimatedShell>
