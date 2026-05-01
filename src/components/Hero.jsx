import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

// Floating light blobs matching the screenshot
const blobs = [
  { w: 320, h: 320, left: '-5%',  top: '15%',  color: 'rgba(0,212,255,0.07)',    blur: 80, delay: 0 },
  { w: 260, h: 260, left: '75%',  top: '5%',   color: 'rgba(255,0,128,0.07)',    blur: 80, delay: 1 },
  { w: 200, h: 200, left: '80%',  top: '55%',  color: 'rgba(108,99,255,0.09)',   blur: 70, delay: 2 },
  { w: 180, h: 180, left: '10%',  top: '65%',  color: 'rgba(0,212,255,0.06)',    blur: 60, delay: 1.5 },
  { w: 140, h: 140, left: '50%',  top: '80%',  color: 'rgba(168,85,247,0.07)',   blur: 50, delay: 0.5 },
]

export default function Hero({ darkMode }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6 pt-24 pb-16 transition-colors duration-500 ${
        darkMode ? 'bg-[#050508]' : 'bg-[#f0f4ff]'
      }`}
    >
      {/* ── Floating blobs ── */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.w, height: b.h,
            left: b.left, top: b.top,
            background: `radial-gradient(circle, ${b.color}, transparent 70%)`,
            filter: `blur(${b.blur}px)`,
          }}
          animate={{ y: [0, -25, 0], x: [0, 12, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 9 + i * 2, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* ── Subtle star dots ── */}
      {Array.from({ length: 28 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#fff',
            opacity: 0.4,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      {/* ── Profile image with glowing cyan ring ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.35 }}
        className="relative mb-7 z-10"
      >
        {/* Outer glow pulse */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />

        {/* Spinning cyan ring — thin */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-1.5 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, #00d4ff, transparent 55%, #00d4ff)',
            borderRadius: '50%',
            padding: '1px',
          }}
        />

        {/* Static solid ring — thin */}
        <div
          className="absolute -inset-1.5 rounded-full"
          style={{ border: '1px solid rgba(0,212,255,0.25)', borderRadius: '50%' }}
        />

        {/* Photo circle */}
        <div
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden z-10"
          style={{
            border: '1.5px solid rgba(0,212,255,0.4)',
            boxShadow: '0 0 12px rgba(0,212,255,0.2)',
          }}
        >
          <img
            src="/m - Copy.jpg"
            alt="Mesfin Aragaw"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </motion.div>

      {/* ── Available for Hire badge ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative z-10 mb-6"
      >
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
          style={{
            background: 'rgba(0,212,255,0.08)',
            border: '1.5px solid rgba(0,212,255,0.5)',
            color: '#00d4ff',
            boxShadow: '0 0 18px rgba(0,212,255,0.2)',
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#00d4ff]"
          />
          Available for Hire
        </div>
      </motion.div>

      {/* ── Name ── */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10 leading-tight mb-3"
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.3rem)',
          fontWeight: 600,
          color: darkMode ? '#ffffff' : '#111827',
          textShadow: darkMode
            ? '2px 2px 0 #ff0080, -2px -2px 0 #00d4ff, 0 0 40px rgba(255,255,255,0.1)'
            : 'none',
          letterSpacing: '0px',
        }}
      >
        {personalInfo.name}
      </motion.h1>

      {/* ── Typing title ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        className="relative z-10 mb-5 text-xl md:text-2xl font-bold"
        style={{ color: '#00d4ff' }}
      >
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'UI/UX Engineer',
            2000,
            'React Specialist',
            2000,
            'Problem Solver',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* ── Tagline ── */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="relative z-10 max-w-xl text-base md:text-lg leading-relaxed mb-10"
        style={{ color: darkMode ? 'rgba(255,255,255,0.55)' : '#4b5563' }}
      >
        {personalInfo.tagline}
      </motion.p>

      {/* ── CTA Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="relative z-10 flex flex-wrap justify-center gap-4 mb-10"
      >
        <motion.button
          whileHover={{ scale: 1.06, boxShadow: '0 0 28px rgba(0,212,255,0.45)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo('projects')}
          className="px-7 py-3 rounded-full font-semibold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg, #00d4ff, #6c63ff)',
            boxShadow: '0 0 18px rgba(0,212,255,0.3)',
          }}
        >
          Explore My Work
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollTo('contact')}
          className="px-7 py-3 rounded-full font-semibold text-sm flex items-center gap-2"
          style={{
            background: 'transparent',
            border: '1.5px solid rgba(0,212,255,0.5)',
            color: darkMode ? '#fff' : '#111827',
          }}
        >
          Let's Connect
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          href={personalInfo.cvLink}
          className="px-7 py-3 rounded-full font-semibold text-sm flex items-center gap-2"
          style={{
            background: 'transparent',
            border: '1.5px solid rgba(168,85,247,0.5)',
            color: darkMode ? '#c4b5fd' : '#7c3aed',
          }}
        >
          <FiDownload size={14} />
          Download CV
        </motion.a>
      </motion.div>

      {/* ── Social icons ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative z-10 flex items-center gap-4 mb-12"
      >
        {[
          { icon: <FiGithub size={18} />,   href: personalInfo.github,              label: 'GitHub' },
          { icon: <FiLinkedin size={18} />,  href: personalInfo.linkedin,            label: 'LinkedIn' },
          { icon: <FaTelegram size={18} />,  href: personalInfo.telegram,            label: 'Telegram' },
          { icon: <FiMail size={18} />,      href: `mailto:${personalInfo.email}`,   label: 'Email' },
        ].map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: 'rgba(0,212,255,0.07)',
              border: '1px solid rgba(0,212,255,0.25)',
              color: darkMode ? 'rgba(255,255,255,0.7)' : '#374151',
            }}
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* ── Floating stat badges ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 flex flex-wrap justify-center gap-4 mb-10"
      >
        {[
          { emoji: '⚡', top: '1+ Year', sub: 'Experience' },
          { emoji: '🚀', top: '5+ Projects', sub: 'Delivered' },
          { emoji: '⭐', top: '100%', sub: 'Satisfaction' },
        ].map((stat, i) => (
          <motion.div
            key={stat.sub}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl"
            style={{
              background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)',
              border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(108,99,255,0.15)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="text-lg">{stat.emoji}</span>
            <div>
              <p className="text-xs font-bold" style={{ color: darkMode ? '#fff' : '#111827' }}>{stat.top}</p>
              <p className="text-xs" style={{ color: darkMode ? 'rgba(255,255,255,0.4)' : '#6b7280' }}>{stat.sub}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollTo('about')}
        className="relative z-10 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-xs font-mono tracking-widest" style={{ color: 'rgba(0,212,255,0.5)' }}>
          SCROLL DOWN
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ color: '#00d4ff' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
