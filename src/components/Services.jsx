import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { services } from '../data/portfolioData'
import { FiCheck } from 'react-icons/fi'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-mono text-[#6c63ff] tracking-widest mb-3">WHAT I OFFER</p>
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">Complete solutions made for your needs</p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] rounded-full mx-auto -mt-8" />
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 group relative overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6c63ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-4xl mb-5 inline-block"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#6c63ff] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-slate-400">
                    <FiCheck className="text-[#6c63ff] flex-shrink-0" size={12} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card inline-block px-8 py-6 rounded-2xl">
            <p className="text-slate-400 mb-4">Ready to start your project?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <span>Let's Work Together</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
