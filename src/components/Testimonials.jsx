// import { useRef, useState } from 'react'
// import { motion, useInView, AnimatePresence } from 'framer-motion'
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
// import { testimonials } from '../data/portfolioData'

// export default function Testimonials() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-100px' })
//   const [current, setCurrent] = useState(0)

//   const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
//   const next = () => setCurrent((c) => (c + 1) % testimonials.length)

//   return (
//     <section id="testimonials" className="py-32 relative" ref={ref}>
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d4ff]/3 to-transparent pointer-events-none" />

//       <div className="max-w-4xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <p className="text-sm font-mono text-[#6c63ff] tracking-widest mb-3">KIND WORDS</p>
//           <h2 className="section-title">
//             Client <span className="gradient-text">Testimonials</span>
//           </h2>
//           <div className="w-16 h-1 bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] rounded-full mx-auto mt-4" />
//         </motion.div>

//         {/* Carousel */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.2 }}
//           className="relative"
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 0.4 }}
//               className="glass-card p-8 md:p-12 text-center"
//             >
//               {/* Stars */}
//               <div className="flex justify-center gap-1 mb-6">
//                 {Array.from({ length: testimonials[current].rating }).map((_, i) => (
//                   <span key={i} className="text-yellow-400 text-lg">⭐</span>
//                 ))}
//               </div>

//               {/* Quote */}
//               <div className="text-4xl text-[#6c63ff]/30 font-serif mb-4">"</div>
//               <p className="text-lg text-slate-300 leading-relaxed mb-8 italic">
//                 {testimonials[current].text}
//               </p>

//               {/* Author */}
//               <div className="flex items-center justify-center gap-4">
//                 <img
//                   src={testimonials[current].avatar}
//                   alt={testimonials[current].name}
//                   className="w-12 h-12 rounded-full border-2 border-[#6c63ff]/40"
//                 />
//                 <div className="text-left">
//                   <p className="font-semibold text-white">{testimonials[current].name}</p>
//                   <p className="text-sm text-slate-400">{testimonials[current].role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation */}
//           <div className="flex items-center justify-center gap-4 mt-8">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={prev}
//               className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6c63ff]/40 transition-colors"
//             >
//               <FiChevronLeft />
//             </motion.button>

//             {/* Dots */}
//             <div className="flex gap-2">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrent(i)}
//                   className={`rounded-full transition-all duration-300 ${
//                     i === current
//                       ? 'w-6 h-2 bg-[#6c63ff]'
//                       : 'w-2 h-2 bg-white/20 hover:bg-white/40'
//                   }`}
//                 />
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={next}
//               className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6c63ff]/40 transition-colors"
//             >
//               <FiChevronRight />
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
