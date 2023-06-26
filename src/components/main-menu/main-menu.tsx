import { motion } from 'framer-motion'

const MainMenu = () => {
  return (
    <motion.div
      className="h-full w-full bg-red-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1, duration: 3 } }}
    >
      <h1 className="text-5xl text-nier-100">MainMenu</h1>
    </motion.div>
  )
}

export { MainMenu }
