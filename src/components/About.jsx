import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Tyyli kohtaa selkeyden
        </motion.h2>
        <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5,delay:.1}} className="mt-4 text-gray-700">
          Rakennan moderneja käyttöliittymiä, jotka tuntuvat luonnollisilta ja toimivat nopeasti. Painotan typografiaa, tilaa ja pieniä mikroanimaatioita, jotka tekevät kokemuksesta miellyttävän.
        </motion.p>
        <div className="mt-8 flex justify-center gap-3">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs border border-gray-200 text-gray-700 shadow-sm">React</span>
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs border border-gray-200 text-gray-700 shadow-sm">Tailwind</span>
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs border border-gray-200 text-gray-700 shadow-sm">TypeScript</span>
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs border border-gray-200 text-gray-700 shadow-sm">Framer Motion</span>
        </div>
      </div>
    </section>
  )
}
