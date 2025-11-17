import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center min-h-[92vh] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900/90 dark:text-white/90">
            GSAP-level Motion. Pure React Simplicity.
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-700/80 dark:text-gray-200/80">
            A modern, fully responsive landing experience with buttery-smooth animations, Spline 3D cover, and interactions that feel alive.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center pointer-events-auto">
            <a href="#showcase" className="inline-flex items-center justify-center rounded-xl bg-gray-900 hover:bg-black text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-sm transition-colors">
              Explore Demos
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/80 hover:bg-white text-gray-900 px-6 py-3 text-sm sm:text-base font-semibold shadow-sm ring-1 ring-inset ring-black/10 transition">
              Get Started
            </a>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent opacity-90" />
      </div>
    </section>
  )
}

export default Hero
