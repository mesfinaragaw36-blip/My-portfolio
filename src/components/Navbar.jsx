import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/portfolioData'

// ── Theme Toggle Button ──────────────────────────────────────────────────────
function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      className={`relative w-14 h-7 rounded-full border transition-all duration-500 flex items-center px-1 ${
        darkMode
          ? 'bg-[#1a1a2e] border-[#6c63ff]/40'
          : 'bg-white border-[#6c63ff]/30 shadow-inner shadow-purple-100'
      }`}
    >
      {/* Track glow */}
      <span
        className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
          darkMode ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ boxShadow: 'inset 0 0 10px rgba(108,99,255,0.25)' }}
      />

      {/* Sliding knob */}
      <motion.span
        layout
        animate={{ x: darkMode ? 0 : 28 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`relative z-10 w-5 h-5 rounded-full flex items-center justify-center text-xs shadow-md transition-colors duration-300 ${
          darkMode
            ? 'bg-gradient-to-br from-[#6c63ff] to-[#a855f7]'
            : 'bg-gradient-to-br from-yellow-300 to-orange-400'
        }`}
      >
        {darkMode ? '🌙' : '☀️'}
      </motion.span>
    </motion.button>
  )
}

// ── Navbar ───────────────────────────────────────────────────────────────────
 function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollPos = window.scrollY + 100
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href)
        if (section && scrollPos >= section.offsetTop) setActive(link.href)
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="font-bold text-lg gradient-text">Mesfin</span>
          </motion.div>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${active === link.href ? 'active text-white' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop — Theme toggle */}
          <div className="hidden md:flex items-center gap-3">
            <span className={`text-xs font-mono transition-colors duration-300 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              {darkMode ? 'Dark' : 'Light'}
            </span>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          {/* Mobile — toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`block w-6 h-0.5 rounded-full transition-colors ${darkMode ? 'bg-white' : 'bg-[#1e1e2e]'}`}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block w-6 h-0.5 rounded-full transition-colors ${darkMode ? 'bg-white' : 'bg-[#1e1e2e]'}`}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`block w-6 h-0.5 rounded-full transition-colors ${darkMode ? 'bg-white' : 'bg-[#1e1e2e]'}`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-menu md:hidden"
            >
              <div className="mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#00d4ff] flex items-center justify-center text-sm font-bold text-white mb-2">
                  &lt;/&gt;
                </div>
                <p className={`text-sm transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Full Stack Developer
                </p>
              </div>

              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                    active === link.href
                      ? 'bg-purple-500/10 text-white border border-purple-500/20'
                      : darkMode
                        ? 'text-slate-400 hover:text-white hover:bg-white/5'
                        : 'text-slate-500 hover:text-[#1e1e2e] hover:bg-purple-50'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Theme toggle in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex items-center gap-3 px-4"
              >
                <span className={`text-sm transition-colors ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </span>
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
export default Navbar;