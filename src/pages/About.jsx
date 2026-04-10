import React from 'react'
import { Shield, Users, Award, Globe } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'

const STATS = [
  { value: '5,000+', label: 'Vehicles Tracked' },
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Cities Covered' },
  { value: '24/7', label: 'Support Available' },
]

const VALUES = [
  { Icon: Shield, title: 'Reliability', desc: '99.9% uptime. Your tracking data is always available when you need it.' },
  { Icon: Users, title: 'Customer First', desc: 'Dedicated support team available via call, WhatsApp, and email.' },
  { Icon: Award, title: 'Quality Hardware', desc: 'We use only certified GPS devices with long-term performance guarantees.' },
  { Icon: Globe, title: 'Nationwide', desc: 'Operations in Lahore, Karachi, Islamabad, and 47 more cities.' },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-brand-light font-body text-sm uppercase tracking-[0.2em] mb-3">Our Story</p>
          <h1 className="font-heading font-700 text-5xl sm:text-6xl text-gradient mb-4">About Route Master</h1>
          <p className="text-chrome-dark font-body leading-relaxed">
            We started with a mission: make professional vehicle tracking accessible to every Pakistani — individual, family, and business alike.
          </p>
        </div>
      </div>

      {/* Stats */}
      <SectionWrapper className="py-16 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl border border-white/5 overflow-hidden">
          {STATS.map((s) => (
            <div key={s.label} className="glass px-6 py-8 text-center">
              <div className="font-heading font-700 text-3xl text-white mb-1">{s.value}</div>
              <div className="font-body text-xs text-chrome-dark">{s.label}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper className="py-16 bg-navy-950/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-700 text-4xl text-gradient mb-6">Our Mission</h2>
          <p className="font-body text-chrome-dark text-lg leading-relaxed">
            Route Master Trackers was founded to solve a real problem — vehicle theft, fleet mismanagement, and lack of real-time visibility.
            We built a platform that is powerful enough for enterprise fleets and simple enough for someone tracking their first car.
            Today we protect thousands of vehicles across Pakistan with technology that actually works.
          </p>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-700 text-4xl text-gradient">What Drives Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALUES.map(({ Icon, title, desc }) => (
            <div key={title} className="glow-border bg-navy-800/40 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 group text-center sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <Icon className="w-6 h-6 text-brand-blue mb-4" />
              </div>
              <h3 className="font-heading font-600 text-white text-lg mb-2">{title}</h3>
              <p className="font-body text-sm text-chrome-dark leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading font-700 text-4xl text-gradient mb-4">Join Thousands of Satisfied Customers</h2>
          <p className="font-body text-chrome-dark mb-8">
            Ready to experience professional GPS tracking? Get in touch with our team today.
          </p>
          <Button href="/contact" size="lg">
            Contact Us Now
          </Button>
        </div>
      </SectionWrapper>
    </div>
  )
}
