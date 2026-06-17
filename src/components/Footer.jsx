import React from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'
import logo from '../assets/logo.png'

const LINKS = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Car Tracking', to: '/services' },
    { label: 'Bike Tracking', to: '/services' },
    { label: 'Truck & Fleet', to: '/services' },
    { label: 'Live Monitoring', to: '/services' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
           <div className="flex items-center gap-3 mb-4">
              <img
               src={logo}
               alt="Route Master Trackers"
               className="h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(26,109,255,0.5)]"
              />
             <div>  
               <div>
                <span className="block font-heading font-700 text-xl text-white tracking-wide">Route Master</span>
                <span className="block font-body text-[10px] text-brand-light uppercase tracking-[0.2em]">Trackers</span>
             </div>
             </div>
            </div>
            <p className="text-chrome-dark text-sm leading-relaxed max-w-xs mb-6">
              Pakistan's trusted GPS vehicle tracking company. Real-time location, fleet management, and anti-theft solutions for individuals and businesses.
            </p>
            <div className="space-y-2">
              <a href="tel:+923224135609" className="flex items-center gap-2 text-sm text-chrome-dark hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                +923224135609
              </a>
              <a href="mailto:info@rmtrackers.com" className="flex items-center gap-2 text-sm text-chrome-dark hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                info@rmtrackers.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-600 text-white text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <NavLink
                      to={l.to}
                      className="text-sm text-chrome-dark hover:text-brand-light transition-colors"
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-chrome-dark">
            © {new Date().getFullYear()} Route Master Trackers. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, href: '#' },
              { Icon: Instagram, href: '#' },
              { Icon: Youtube, href: '#' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-chrome-dark hover:text-white hover:bg-brand-blue/20 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
