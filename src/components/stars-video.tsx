import { motion } from 'framer-motion'

const StarsVideo = () => {
  return (
    <>
      <motion.video
        loop
        autoPlay
        className="pointer-events-none fixed left-0 top-0 h-[100vh] w-[100vw] object-cover opacity-20"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [
            0, 0.05, 0.1, 0.15, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0,
          ],
          transition: { duration: 14.15, repeat: Infinity },
        }}
      >
        <source src="videos/stars-1.mp4" type="video/mp4" />
      </motion.video>
      <motion.video
        loop
        autoPlay
        className="pointer-events-none fixed left-0 top-0 h-[100vh] w-[100vw] scale-x-[-1] object-cover opacity-20"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0, 0],
          transition: { duration: 10, repeat: Infinity, delay: 10 },
        }}
      >
        <source src="videos/stars-2.mp4" type="video/mp4" />
      </motion.video>
    </>
  )
}

export { StarsVideo }
