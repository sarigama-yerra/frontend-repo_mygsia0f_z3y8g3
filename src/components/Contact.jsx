import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Ota yhteyttä
          </motion.h2>
          <p className="mt-3 text-gray-700">Kerro projektistasi – vastaan nopeasti.</p>
        </div>

        <form className="mt-8 grid grid-cols-1 gap-4">
          <input type="text" placeholder="Nimi" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <input type="email" placeholder="Sähköposti" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <textarea placeholder="Viesti" rows="5" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          <button type="button" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
            <Send className="h-4 w-4 mr-2" /> Lähetä
          </button>
        </form>

        <div className="mt-6 flex justify-center text-sm text-gray-600">
          <Mail className="h-4 w-4 mr-2" /> tai suoraan: nimi@domain.com
        </div>
      </div>
    </section>
  )
}
