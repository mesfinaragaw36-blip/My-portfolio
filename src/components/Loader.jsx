import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        className="loader-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6c63ff] to-[#00d4ff] flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-purple-500/30">

            <img src="/m - Copy.jpg" className="w-20 h-20 rounded-2xl object-cover object-top" />
           
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6c63ff] to-[#00d4ff] opacity-30 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold gradient-text mb-1">Mesfin Aragaw</h1>
            <p className="text-sm text-slate-500 font-mono tracking-widest">FULL STACK DEVELOPER</p>
          </motion.div>

          {/* Loader bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="w-48 h-1 bg-white/5 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.9, duration: 1.2, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 1, duration: 1, repeat: Infinity }}
            className="text-xs text-slate-600 font-mono tracking-widest"
          >
            LOADING...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
