import { optionStateAtom } from '@/atoms/global'
import { sectionItems } from '@/config/menu'
import { useItemByMouse } from '@/hooks/use-item-by-mouse'
import { SectionItem } from '@/types'
import { useAtom } from 'jotai'
import { CardMenuItemShell } from '../card-menu-item-shell'
import { CardMenu } from '../ui/card-menu'
import { SectionCard } from './section-card'

export const Sections = () => {
  const [, setOption] = useAtom(optionStateAtom)

  const { item, changeItem } = useItemByMouse<SectionItem>(
    'section-id',
    sectionItems,
  )

  return (
    <>
      {/* tablet and above */}
      <CardMenu className="flex-1">
        {sectionItems.map((item) => (
          <CardMenuItemShell
            key={`section-${item.id}`}
            id={String(item.id)}
            onClick={changeItem}
            data-elementtype="section-id"
          >
            {item.section}
          </CardMenuItemShell>
        ))}
      </CardMenu>

      {/* table and above contact card */}
      {item && (
        <SectionCard
          className="hidden flex-1 md:flex"
          key={item.id} // change Card
          sectionItem={item}
          setOptionState={setOption}
        />
      )}

      {/* Mobile only contact card */}
      <div className="flex flex-col gap-8 md:hidden">
        {sectionItems.map((section) => (
          <SectionCard
            key={section.id}
            sectionItem={section}
            setOptionState={setOption}
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
