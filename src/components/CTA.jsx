import { Mail, CalendarClock } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0b0b1a] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(139,92,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-white/10 bg-white/5 p-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Ready to harden your stack?</h3>
            <p className="mt-3 text-white/70">Tell us where you are today and where you need to be. We’ll propose a pragmatic roadmap with quick wins and long‑term resilience.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@blueviolet.security" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white">
                <Mail className="h-4 w-4" /> Email us
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90">
                <CalendarClock className="h-4 w-4" /> Book a call
              </a>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-white/70">
            <li>• Security posture assessments and remediation plans</li>
            <li>• Cloud network designs: AWS, Azure, GCP</li>
            <li>• Migrations with zero‑downtime and rollback safety</li>
            <li>• Managed detection and response, 24/7</li>
            <li>• Vendor‑agnostic, outcome‑driven consulting</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
