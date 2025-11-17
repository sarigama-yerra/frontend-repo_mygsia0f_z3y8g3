import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} flames.blue — Minimalist portfolio</p>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-gray-900 transition-colors">Ylös</a>
            <a href="/test" className="hover:text-gray-900 transition-colors">Testisivu</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
