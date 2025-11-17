import { motion } from 'framer-motion'
import { Sparkles, Sparkle, Timer, Zap } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'GSAP-like Animation Flow',
    text: 'Timeline-friendly motion using Framer Motion primitives with springy eases, staggering, and scroll triggers.'
  },
  {
    icon: Timer,
    title: 'Performance First',
    text: 'Lazy sprites, GPU-accelerated transforms, and compositing-ready layers to keep frames silky at any breakpoint.'
  },
  {
    icon: Zap,
    title: 'Responsive by Design',
    text: 'Adaptive layout, fluid typography, and micro-interactions that scale from phone to ultrawide.'
  },
]

function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28 md:py-32 bg-gradient-to-b from-white via-white to-rose-50/40 dark:from-gray-950 dark:via-gray-950 dark:to-rose-950/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">Built for motion</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Bring your brand to life with layered animations, parallax highlights, and satisfying transitions.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-6 shadow-sm"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 text-white flex items-center justify-center mb-5">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
