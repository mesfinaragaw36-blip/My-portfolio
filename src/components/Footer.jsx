import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi'
import { FaTelegram, FaInstagram } from 'react-icons/fa'
import { personalInfo, navLinks } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm gradient-text">Mesfin</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-xs text-slate-500 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Socials + back to top */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FiGithub size={14} />,   href: personalInfo.github,             label: 'GitHub' },
              { icon: <FiLinkedin size={14} />,  href: personalInfo.linkedin,           label: 'LinkedIn' },
              { icon: <FaTelegram size={14} />,  href: personalInfo.telegram,           label: 'Telegram' },
              { icon: <FiMail size={14} />,      href: `mailto:${personalInfo.email}`,  label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 hover:text-white border border-white/10 hover:border-[#6c63ff]/40 transition-all"
              >
                {s.icon}
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6c63ff] to-[#a855f7] flex items-center justify-center text-white ml-1"
              aria-label="Back to top"
            >
              <FiArrowUp size={12} />
            </motion.button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/5 mt-4 pt-4 text-center">
          <p className="text-xs text-slate-600 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}.All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
