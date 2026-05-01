import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolioData'

const skillIcons = {
  html: '🌐', css: '🎨', js: '⚡', ts: '🔷', react: '⚛️', next: '▲', tailwind: '💨',
  node: '🟢', express: '🚂', mongo: '🍃', mysql: '🐬', firebase: '🔥', api: '🔌',
  git: '🐙', figma: '🎭', vscode: '💻', postman: '📮', docker: '🐳', linux: '🐧',
}

const categories = [
  { key: 'frontend', label: 'Frontend', color: '#6c63ff' },
  { key: 'backend', label: 'Backend', color: '#00d4ff' },
  { key: 'tools', label: 'Tools', color: '#a855f7' },
]

function SkillCard({ skill, index, isInView, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="glass-card p-5 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skillIcons[skill.icon] || '💡'}</span>
          <span className="text-sm font-semibold text-white">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-slate-400">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: index * 0.07 + 0.3, duration: 1.2, ease: 'easeOut' }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const currentSkills = skills[activeTab]
  const currentColor = categories.find(c => c.key === activeTab)?.color || '#6c63ff'

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6c63ff]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-[#6c63ff] tracking-widest mb-3">WHAT I KNOW</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with daily</p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] rounded-full mx-auto -mt-8" />
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass rounded-2xl p-1.5 flex gap-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat.key
                    ? 'text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={
                  activeTab === cat.key
                    ? { background: `linear-gradient(135deg, ${cat.color}33, ${cat.color}22)`, border: `1px solid ${cat.color}44` }
                    : {}
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {currentSkills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              isInView={isInView}
              color={currentColor}
            />
          ))}
        </motion.div>

        {/* Tech stack icons row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-slate-500 mb-8 font-mono tracking-widest">ALSO FAMILIAR WITH</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Netlify','Rect', 'Node', 'Vercel', 'Mysql', 'Github', 'Bootstrap', 'Tailwind Css'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -2 }}
                className="tag cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
