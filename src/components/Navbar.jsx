import { Menu, ShieldCheck } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2 text-white">
              <div className="grid h-9 w-9 place-content-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight">BlueViolet Security</span>
            </a>
            <nav className="hidden gap-8 text-sm text-white/80 md:flex">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#approach" className="hover:text-white transition-colors">Approach</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white">
              <Menu className="h-6 w-6" />
            </button>
          </div>
          {open && (
            <div className="border-t border-white/10 px-4 py-3 sm:px-6 md:hidden">
              <nav className="flex flex-col gap-3 text-sm text-white/80">
                <a href="#services" className="hover:text-white">Services</a>
                <a href="#approach" className="hover:text-white">Approach</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
