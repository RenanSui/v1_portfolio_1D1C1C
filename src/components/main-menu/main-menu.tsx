import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { MenuOption } from './menu-option'

const MainMenu = () => {
  const [showPressAny, setShowPressAny] = useState(true)

  return (
    <motion.div
      className="flex h-full w-full flex-col bg-nier-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 3 } }}
    >
      {/* <div className="h-full w-full">
        <div className="stars1 absolute h-full w-full bg-[url(/images/stars-3.jpg)] bg-cover opacity-30" />
        <div className="stars2 absolute h-full w-full bg-[url(/images/stars-3.jpg)] bg-cover opacity-30 blur-sm" />
        <div></div>
      </div> */}
      {/* <div // z-10
        className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-[url(/images/pattern.png)] bg-[length:15px_15px] bg-repeat opacity-30"
      />
      <div // z-10
        className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-[radial-gradient(circle,_hsla(0,_0%,_100%,_0.05)_0%,_hsla(0,_0%,_0%,_0.5)_100%)]"
      /> */}
      <AnimatePresence>
        {showPressAny && (
          <>
            <div onClick={() => setShowPressAny(false)}>
              <MenuOption>Press Any Button</MenuOption>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export { MainMenu }
