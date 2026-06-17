import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'

const CONTACT_INFO = [
  { Icon: Phone, label: 'Phone / WhatsApp', value: '+923224135609', href: 'tel:+923224135609' },
  { Icon: Mail, label: 'Email', value: 'info@rmtrackers.com', href: 'mailto:info@rmtrackers.com' },
  { Icon: MapPin, label: 'Location', value: 'Lahore, Punjab, Pakistan', href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicle: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)

  emailjs.send(
    'service_j3nuxu8',
    'template_sxcy8xe',
    {
      from_name: form.name,
      phone: form.phone,
      email: form.email,
      vehicle: form.vehicle,
      message: form.message,
    },
    'YdeI0ZbijxaGeEKnt'
  )
  .then(() => {
    setLoading(false)
    setSubmitted(true)
  })
  .catch((error) => {
    setLoading(false)
    alert('Something went wrong. Please try again.')
  })
}
  return (
    <div className="pt-20 relative">
      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-5">
        <img
          src="/src/assets/logo.png"
          alt=""
          className="w-[600px] h-[600px] object-contain"
        />
      </div>
      {/* Header */}
      <div className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-brand-light font-body text-sm uppercase tracking-[0.2em] mb-3">Get In Touch</p>
          <h1 className="font-heading font-700 text-5xl sm:text-6xl text-gradient mb-4">Contact Us</h1>
          <p className="text-chrome-dark font-body">
            Ready to protect your vehicle? Our team will get back to you within 1 hour.
          </p>
        </div>
      </div>

      <SectionWrapper className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — Info */}
          <div className="text-center lg:text-left">
            <h2 className="font-heading font-700 text-3xl text-white mb-4">We're Here to Help</h2>
            <p className="font-body text-chrome-dark leading-relaxed mb-8">
              Whether you need a tracker for your personal car, a whole fleet, or just have questions —
              reach out and we'll guide you to the right solution.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-4 rounded-xl glow-border bg-navy-800/40 hover:bg-navy-800/60 transition-all group"
                >
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-chrome-dark mb-0.5">{label}</div>
                    <div className="font-heading font-600 text-white">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl border border-brand-blue/20 bg-brand-blue/5">
              <p className="font-heading font-600 text-white mb-1">Business Hours</p>
              <p className="font-body text-sm text-chrome-dark">Mon – Sat: 9 AM – 8 PM</p>
              <p className="font-body text-sm text-chrome-dark">Sunday: 10 AM – 4 PM</p>
              <p className="font-body text-xs text-brand-light mt-2">Emergency support available 24/7</p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass rounded-2xl border border-white/5 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-14 h-14 text-brand-blue mb-4" />
                <h3 className="font-heading font-700 text-2xl text-white mb-2">Message Sent!</h3>
                <p className="font-body text-chrome-dark">
                  We'll contact you within 1 hour. Thank you for choosing Route Master Trackers.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', vehicle: '', message: '' }) }}
                  className="mt-6 text-sm text-brand-blue hover:text-brand-light transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-700 text-2xl text-white mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs text-chrome-dark mb-1.5">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Ahmed Khan"
                        className="w-full bg-navy-800/60 border border-white/5 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-chrome-dark focus:outline-none focus:border-brand-blue/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-chrome-dark mb-1.5">Phone *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+92 300 0000000"
                        className="w-full bg-navy-800/60 border border-white/5 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-chrome-dark focus:outline-none focus:border-brand-blue/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs text-chrome-dark mb-1.5">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ahmed@example.com"
                      className="w-full bg-navy-800/60 border border-white/5 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-chrome-dark focus:outline-none focus:border-brand-blue/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs text-chrome-dark mb-1.5">Vehicle Type *</label>
                    <select
                      name="vehicle"
                      value={form.vehicle}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-800/60 border border-white/5 rounded-lg px-4 py-3 text-sm font-body text-white focus:outline-none focus:border-brand-blue/50 transition-colors appearance-none"
                    >
                      <option value="" disabled>Select vehicle type</option>
                      <option value="car">Car / SUV</option>
                      <option value="bike">Motorcycle</option>
                      <option value="truck">Truck / Loader</option>
                      <option value="fleet">Fleet (5+ vehicles)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-xs text-chrome-dark mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your tracking needs..."
                      className="w-full bg-navy-800/60 border border-white/5 rounded-lg px-4 py-3 text-sm font-body text-white placeholder-chrome-dark focus:outline-none focus:border-brand-blue/50 transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" size="md" className="w-full justify-center" onClick={handleSubmit}>
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
