import Spline from '@splinetool/react-spline'
import { ArrowRight, Shield, Network, Lock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0b0b1a]">
      {/* Gradient glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.25)_0%,_rgba(59,130,246,0.2)_40%,_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0b0b1a] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-32 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            <Shield className="h-3.5 w-3.5 text-violet-400" />
            Enterprise IT • Security • Networking
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Secure. Resilient. Future‑Ready.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            We design, harden, and operate modern infrastructures — from zero‑trust networks to cloud security architectures — so your business can move fast without compromise.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition-transform hover:scale-[1.02]">
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
              Explore services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-white/70">
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-violet-400" />Zero‑trust</div>
            <div className="flex items-center gap-2"><Network className="h-4 w-4 text-blue-400" />SD‑WAN/SASE</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-violet-400" />SOC & SIEM</div>
          </div>
        </div>

        {/* Spline Canvas */}
        <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  )
}
