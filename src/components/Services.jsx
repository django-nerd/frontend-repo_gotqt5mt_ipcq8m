import { ShieldCheck, Cloud, Network, LockKeyhole, Bug, LaptopMinimal, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'Security Architecture',
    desc: 'Zero‑trust design, IAM, SSO, policy as code, least‑privilege by default.'
  },
  {
    icon: Network,
    title: 'Networking & SASE',
    desc: 'SD‑WAN, microsegmentation, secure remote access, high‑availability edge.'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    desc: 'Secure landing zones, CSPM, workload protection, secrets management.'
  },
  {
    icon: Bug,
    title: 'Threat & Vulnerability',
    desc: 'Purple teaming, SIEM tuning, EDR, incident response preparedness.'
  },
  {
    icon: LockKeyhole,
    title: 'Compliance & Governance',
    desc: 'ISO 27001, SOC 2, NIST CSF mappings, evidence automation.'
  },
  {
    icon: LaptopMinimal,
    title: 'Managed Services',
    desc: '24/7 monitoring, runbooks, SLAs, and lifecycle management.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0b0b1a] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_10%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What we do</h2>
          <p className="mt-3 text-white/70">Practical expertise, delivered with measurable outcomes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white transition-transform hover:scale-[1.01]">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-content-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-600">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <button className="mt-5 inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white">
                Learn more <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
