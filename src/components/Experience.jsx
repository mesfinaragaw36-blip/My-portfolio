import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/portfolioData'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#a855f7]/3 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono text-[#6c63ff] tracking-widest mb-2">MY JOURNEY</p>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle text-sm">My professional path and academic background</p>
          <div className="w-14 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] rounded-full mx-auto -mt-10" />
        </motion.div>

        {/* Full-width timeline */}
        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="timeline-line" />

          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative mb-6 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute -left-[30px] top-5 timeline-dot" />

              {/* Card */}
              <div className="glass-card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-[#6c63ff] font-medium">{item.company}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
