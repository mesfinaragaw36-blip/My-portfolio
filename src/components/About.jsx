import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiCode, FiLayers, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

const traits = [
  { icon: <FiCode />,   title: 'Clean Code',   desc: 'Maintainable, scalable, well-documented code.' },
  { icon: <FiLayers />, title: 'UI/UX Focus',  desc: 'Beautiful and intuitive interfaces.' },
]

const stats = [
  { value: '1+',  label: 'Years Exp.' },
  { value: '5+', label: 'Projects' },
  { value: 'some', label: 'Client' },
  { value: '-',  label: 'Certs' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono text-[#6c63ff] tracking-widest mb-2">GET TO KNOW ME</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] rounded-full mx-auto mt-3" />
        </motion.div>

        {/* ── Two columns ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: code card + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Code editor card */}
            <div className="glass-card p-1 rounded-2xl overflow-hidden">
              <div
                className="rounded-xl relative overflow-hidden"
                style={{ height: '280px' }}
              >
                <img
                  src="/m4.jpg"
                  alt="Mesfin Aragaw"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0f0f1a] to-transparent" />
                {/* Name tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-bold">Mesfin Aragaw</p>
                    <p className="text-[#00d4ff] text-xs">Full Stack Developer</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="glass-card p-3 text-center"
                >
                  <div className="text-lg font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Traits grid */}
            <div className="grid grid-cols-2 gap-3">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="glass-card p-3 flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6c63ff]/20 to-[#00d4ff]/20 flex items-center justify-center text-[#6c63ff] flex-shrink-0 mt-0.5">
                    {trait.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white mb-0.5">{trait.title}</h4>
                    <p className="text-xs text-slate-400 leading-snug">{trait.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: text + info cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            {/* Heading */}
            <h3 className="text-xl font-bold text-white whitespace-nowrap">
              Passionate Developer &{' '}
              <span className="gradient-text">Creative Thinker</span>
            </h3>

            {/* First paragraph */}
            <p className="text-slate-400 text-sm leading-relaxed">
              I'm Mesfin Aragaw, a full-stack developer with years of experience creating
              innovative web applications and digital solutions. I specialize in building modern
              web applications with a focus on performance, accessibility, and user experience.
              My approach combines technical expertise with creative problem-solving to deliver
              solutions that not only work flawlessly but also delight users.
            </p>

            {/* Expandable paragraph */}
            <AnimatePresence>
              {showMore && (
                <motion.p
                  key="more"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="text-slate-400 text-sm leading-relaxed overflow-hidden"
                >
                  I started with a simple curiosity about how websites work, and that spark grew
                  into a career I truly love. I enjoy turning complex problems into clean, simple
                  solutions — whether it's a fast API, a smooth UI, or a well-structured database.
                  I keep learning every day and love pushing what's possible with code.
                </motion.p>
              )}
            </AnimatePresence>

            {/* Learn More button */}
            <motion.button
              onClick={() => setShowMore(!showMore)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full"
              style={{
                background: 'rgba(108,99,255,0.1)',
                border: '1px solid rgba(108,99,255,0.35)',
                color: '#a78bfa',
              }}
            >
              {showMore
                ? <><FiChevronUp size={13} /> Show Less</>
                : <><FiChevronDown size={13} /> Learn More</>
              }
            </motion.button>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Name',     value: personalInfo.name,     icon: '👤', green: false },
                { label: 'Email',    value: personalInfo.email,    icon: '✉️',  green: false },
                { label: 'Location', value: personalInfo.location, icon: '📍', green: false },
                { label: 'Status',   value: 'Available',           icon: '✅', green: true  },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="glass-card p-3 flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-sm"
                    style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.2)' }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wider leading-none mb-0.5">{item.label}</p>
                    <p className={`text-xs font-semibold truncate ${item.green ? 'text-green-400' : 'text-white'}`}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
