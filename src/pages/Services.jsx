import React from 'react'
import { Car, Bike, Truck, BarChart3, Shield, Clock, Bell, Map, ArrowRight, Fuel, Package, Camera, LocateFixed } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'

const PLANS = [
  {
    name: 'Basic',
    price: '1,500',
    period: '/month',
    desc: 'Perfect for single vehicle owners.',
    features: ['Live GPS Tracking', 'Speed Alerts', '30-day History', 'SMS Notifications', 'Mobile App Access'],
    cta: 'Get Basic',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '2,500',
    period: '/month',
    desc: 'Best for families and small businesses.',
    features: ['Everything in Basic', 'Geo-fence Alerts', '90-day History', 'WhatsApp Alerts', 'Anti-theft Engine Cut', '3 Vehicles'],
    cta: 'Get Pro',
    highlight: true,
  },
  {
    name: 'Fleet',
    price: 'Custom',
    period: '',
    desc: 'For businesses with 5+ vehicles.',
    features: ['Unlimited Vehicles', 'Fleet Dashboard', 'Driver Reports', 'Fuel Monitoring', 'API Access', 'Dedicated Manager'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

const SERVICES = [
  { Icon: Car, title: 'Car Tracking', desc: 'Real-time GPS location for personal and family cars with live map view and speed monitoring.' },
  { Icon: Bike, title: 'Bike Tracking', desc: 'Compact hidden trackers for motorcycles with instant theft alerts on SMS and WhatsApp.' },
  { Icon: Truck, title: 'Truck & Cargo', desc: 'Monitor long-haul trucks, cargo safety, driver routes, and live ETA from anywhere.' },
  { Icon: BarChart3, title: 'Fleet Management', desc: 'One dashboard for your entire fleet — assign drivers, track performance, cut fuel costs.' },
  { Icon: Shield, title: 'Anti-Theft & Recovery', desc: 'Remote engine cut-off, instant alerts, and stolen vehicle recovery support.' },
  { Icon: Map, title: 'Geo-Fencing', desc: 'Set virtual boundaries — get instant alerts when vehicle enters or exits a defined zone.' },
  { Icon: Bell, title: 'Driver Behavior Monitoring', desc: 'Track harsh braking, overspeeding, and rash driving to improve driver safety.' },
  { Icon: Clock, title: 'Trip History & Playback', desc: 'Replay any trip from past 90 days with full route, speed, and stop data.' },
  { Icon: Fuel, title: 'Fuel Monitoring', desc: 'Detect fuel theft and track fuel consumption across your entire fleet in real time.' },
  { Icon: Package, title: 'Asset & Container Tracking', desc: 'Track high-value assets, containers, and cargo with tamper alerts and live location.' },
  { Icon: Camera, title: 'MDVR — Vehicle Cameras', desc: 'In-vehicle cameras with live footage, incident recording, and remote playback.' },
  { Icon: LocateFixed, title: 'Stolen Vehicle Recovery', desc: 'Dedicated recovery support with police coordination and real-time location sharing.' },
]
export default function Services() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-brand-light font-body text-sm uppercase tracking-[0.2em] mb-3">Our Services</p>
          <h1 className="font-heading font-700 text-5xl sm:text-6xl text-gradient mb-4">GPS Tracking Solutions</h1>
          <p className="text-chrome-dark font-body">
            From single cars to enterprise fleets — we have a solution for every need.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <SectionWrapper className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map(({ Icon, title, desc }) => (
            <div key={title} className="glow-border bg-navy-800/40 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 group text-center sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-blue/20 transition-colors">
                  <Icon className="w-5 h-5 text-brand-blue" />
                </div>
              </div>
              <h3 className="font-heading font-600 text-white text-lg mb-2">{title}</h3>
              <p className="font-body text-sm text-chrome-dark leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing — commented out
      <SectionWrapper className="py-20 bg-navy-950/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-light font-body text-sm uppercase tracking-[0.2em] mb-3">Pricing</p>
            <h2 className="font-heading font-700 text-4xl sm:text-5xl text-gradient">Simple, Transparent Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? 'border-brand-blue bg-navy-700/60 shadow-xl shadow-brand-blue/10'
                    : 'border-white/5 bg-navy-800/40'
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block mb-4 text-xs font-body font-500 tracking-widest text-brand-blue uppercase bg-brand-blue/10 px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-700 text-2xl text-white">{plan.name}</h3>
                <div className="flex items-end gap-1 my-3">
                  <span className="font-heading font-700 text-4xl text-white">
                    {plan.price === 'Custom' ? 'Custom' : `PKR ${plan.price}`}
                  </span>
                  <span className="text-chrome-dark font-body text-sm mb-1">{plan.period}</span>
                </div>
                <p className="text-chrome-dark font-body text-sm mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-body text-chrome">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={plan.highlight ? 'primary' : 'outline'}
                  className="w-full justify-center"
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      */}
    </div>
  )
}
