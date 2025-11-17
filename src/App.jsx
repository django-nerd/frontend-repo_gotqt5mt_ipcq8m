import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b1a]">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <footer className="border-t border-white/10 bg-[#0b0b1a] py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} BlueViolet Security. All rights reserved.
      </footer>
    </div>
  )
}

export default App
