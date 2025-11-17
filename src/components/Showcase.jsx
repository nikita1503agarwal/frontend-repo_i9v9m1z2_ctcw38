import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Parallax Panels',
    text: 'Layered cards that drift as you scroll for subtle depth cues.',
  },
  {
    title: 'Staggered Reveals',
    text: 'Sections cascade into view with playful, organic timing.',
  },
  {
    title: 'Button Micro-States',
    text: 'Hover, press, and rest states that feel tactile and responsive.',
  },
]

function Showcase() {
  return (
    <section id="showcase" className="py-24 sm:py-28 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl p-6 bg-white/70 dark:bg-gray-900/60 backdrop-blur border border-black/5 dark:border-white/10 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{c.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{c.text}</p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex items-center rounded-xl bg-gray-900 hover:bg-black text-white px-4 py-2 text-sm font-semibold shadow transition"
              >
                Try it
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
