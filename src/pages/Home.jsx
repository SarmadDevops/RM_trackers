import React from 'react'
import { ArrowRight, Shield, Zap, Globe, Clock, ChevronRight, Car, Bike, Truck, BarChart3 } from 'lucide-react'
import Button from '../components/Button'
import SectionWrapper from '../components/SectionWrapper'

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/src/assets/hero-bg.png')` }}
      />
      {/* Dark overlay - left side darker for text readability */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,15,30,0.97) 40%, rgba(10,15,30,0.6) 70%, rgba(10,15,30,0.1) 100%)' }} />
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex justify-center lg:justify-start">
        <div className="max-w-2xl mx-auto lg:mx-0">

          {/* Badge */}
          <div
            className="flex justify-center lg:justify-start mb-8"
            style={{ animation: 'fadeUp 0.5s ease forwards', opacity: 0 }}
          >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/5 text-brand-light text-sm font-body"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            Real-Time GPS Tracking — Pakistan Wide
          </div>
          </div>

          {/* Headline */}
          <h1
            className="font-heading font-700 text-4xl sm:text-5xl lg:text-6xl text-gradient leading-[1.05] mb-6 text-center lg:text-left"
            style={{ animation: 'fadeUp 0.6s ease 0.1s forwards', opacity: 0 }}
          >
            Route Master<br />
            Trackers<br />
            <span className="text-gradient-blue">"Rescue Matters"</span>
          </h1>

          {/* Description */} 
          <p
            className="font-body text-lg text-chrome-dark max-w-xl mb-10 leading-relaxed text-center lg:text-left"
            style={{ animation: 'fadeUp 0.6s ease 0.2s forwards', opacity: 0 }}
          >
            Route Master Trackers gives you real-time location, speed alerts, trip history,
            and fleet control — all from one powerful dashboard.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-16"
            style={{ animation: 'fadeUp 0.6s ease 0.3s forwards', opacity: 0 }}
          >
            <Button href="/contact" size="lg" className="animate-pulse-glow">
              Get Your Tracker <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Plans <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl border border-white/5 overflow-hidden w-full sm:w-fit mt-8"
            style={{ animation: 'fadeUp 0.6s ease 0.4s forwards', opacity: 0 }}
          >
            {[
              { value: '5,000+', label: 'Vehicles Tracked' },
              { value: '99.9%', label: 'Uptime' },
              { value: '24/7', label: 'Live Support' },
              { value: '5 Sec', label: 'Update Interval' },
            ].map((s) => (
              <div key={s.label} className="glass px-5 py-4 text-center sm:text-left">
                <div className="font-heading font-700 text-2xl text-white">{s.value}</div>
                <div className="font-body text-xs text-chrome-dark mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ── Services Preview ─────────────────────────────────────────────────────────
const SERVICE_CARDS = [
  { Icon: Car, title: 'Car Tracking', desc: 'Real-time location for personal and family vehicles with geo-fence alerts.' },
  { Icon: Bike, title: 'Bike Tracking', desc: 'Compact trackers for motorcycles with instant theft notifications.' },
  { Icon: Truck, title: 'Truck & Cargo', desc: 'Long-haul monitoring with route history and driver behavior reports.' },
  { Icon: BarChart3, title: 'Fleet Management', desc: 'Centralized dashboard to manage your entire vehicle fleet efficiently.' },
]

function Services() {
  return (
    <SectionWrapper id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-brand-light font-body text-sm uppercase tracking-[0.2em] mb-3">What We Offer</p>
        <h2 className="font-heading font-700 text-4xl sm:text-5xl text-gradient">Tracking For Every Vehicle</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICE_CARDS.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="glow-border bg-navy-800/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
              <Icon className="w-6 h-6 text-brand-blue" />
            </div>
            <h3 className="font-heading font-600 text-lg text-white mb-2">{title}</h3>
            <p className="font-body text-sm text-chrome-dark leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button href="/services" variant="outline">
          Explore All Services <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </SectionWrapper>
  )
}

// ── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  { Icon: Zap, title: 'Live Tracking', desc: '5-second refresh rate so you always know exactly where your vehicle is.' },
  { Icon: Shield, title: 'Anti-Theft Alerts', desc: 'Instant SMS and app alerts when your vehicle moves without permission.' },
  { Icon: Globe, title: 'Pakistan Coverage', desc: 'Full network coverage across all major cities and highways.' },
  { Icon: Clock, title: 'Trip History', desc: '90-day playback of all routes, stops, and speed data.' },
]

function Features() {
  return (
    <SectionWrapper className="py-24 bg-navy-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div className="text-center lg:text-left">
            <p className="text-brand-light font-body text-sm uppercase tracking-[0.2em] mb-3">Why Choose Us</p>
            <h2 className="font-heading font-700 text-4xl sm:text-5xl text-gradient mb-6">
              Built For Pakistan.<br />Reliable Anywhere.
            </h2>
            <p className="font-body text-chrome-dark leading-relaxed mb-8">
              We combine military-grade GPS hardware with a simple, fast dashboard
              that gives you total control — whether you have one car or a 500-vehicle fleet.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button href="/contact">
                Start Tracking Today <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map(({ Icon, title, desc }) => (
              <div key={title} className="glow-border bg-navy-800/40 rounded-xl p-5 transition-all duration-300 hover:bg-navy-800/60">
                <Icon className="w-5 h-5 text-brand-blue mb-3" />
                <h4 className="font-heading font-600 text-white mb-1">{title}</h4>
                <p className="font-body text-xs text-chrome-dark leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

// ── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <SectionWrapper className="relative py-32 overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/src/assets/cta-bg.png')` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-900/75" />

      {/* Content — Box on top */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <div className="rounded-2xl border border-brand-blue/30 bg-navy-900/70 backdrop-blur-md px-8 py-14 text-center">
          <h2 className="font-heading font-700 text-4xl sm:text-5xl text-gradient mb-4">
            Ready to Secure Your Vehicle?
          </h2>
          <p className="font-body text-chrome-dark mb-8 max-w-lg mx-auto">
            Get a GPS tracker installed today. Quick setup, no hidden fees, lifetime support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Order Now <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="tel:+923001234567" variant="outline" size="lg">
              Call Us Now
            </Button>
          </div>
        </div>
      </div>

    </SectionWrapper>
  )
}
// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <CTABanner />
    </>
  )
}
