import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 pointer-events-none" />

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-sm tracking-widest text-gray-600">PORTFOLIO</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
              Minimalistinen kehittäjäportfolio
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              Moderni, kevyt ja elävä sivu. Interaktiivinen 3D-kansi luo hienovaraisen teknisen tunnelman.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#work" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                Katso projektit
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-2 text-sm font-medium border border-gray-200 shadow-sm hover:shadow transition-all">
                Ota yhteyttä
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
