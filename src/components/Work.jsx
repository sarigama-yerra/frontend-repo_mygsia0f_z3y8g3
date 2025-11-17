import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Product Dashboard',
    desc: 'Kevyt hallintapaneeli kauniilla animaatioilla.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    live: '#',
    code: '#',
  },
  {
    title: 'E-commerce UI',
    desc: 'Minimalistinen kauppakäyttöliittymä ja sujuva kokemus.',
    tags: ['React', 'Tailwind'],
    live: '#',
    code: '#',
  },
  {
    title: 'Portfolio Theme',
    desc: 'Teema, joka keskittyy typografiaan ja tilaan.',
    tags: ['Design', 'Accessibility'],
    live: '#',
    code: '#',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Valikoituja töitä</h2>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Kaikki projektit</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              viewport={{ once: true, amount: 0.5 }}
              className="group relative rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all bg-white"
            >
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-5 group-hover:from-gray-100 group-hover:to-gray-200 transition-colors" />
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
                  <ExternalLink className="h-4 w-4 mr-1" /> Live
                </a>
                <a href={p.code} className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900">
                  <Github className="h-4 w-4 mr-1" /> Koodi
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
