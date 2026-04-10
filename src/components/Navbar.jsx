import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Button from './Button'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/5 shadow-xl shadow-navy-950/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-20">

          {/* LEFT — Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 font-heading font-600 text-base tracking-wide transition-colors duration-200 rounded-lg ${
                      isActive
                        ? 'text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-brand-blue after:rounded-full'
                        : 'text-chrome-dark hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CENTER — Logo */}
          <NavLink
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
          >
            <img
              src={logo}
              alt="Route Master Trackers"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_8px_rgba(26,109,255,0.6)]"
            />
          </NavLink>

          {/* RIGHT — Phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-1.5 text-sm text-chrome-dark hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span className="font-body">+92 300 4829290</span>
            </a>
            <Button href="/contact" size="sm">
              Get Tracker
            </Button>
          </div>

          {/* Mobile — Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-chrome hover:text-white hover:bg-white/5 transition-colors ml-auto"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass border-b border-white/5 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-heading font-600 text-base tracking-wide transition-colors ${
                  isActive
                    ? 'bg-brand-blue/10 text-brand-light border-l-2 border-brand-blue'
                    : 'text-chrome-dark hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="pt-3 border-t border-white/5 space-y-3">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 px-4 text-sm text-chrome-dark"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              +92 300 1234567
            </a>
            <Button href="/contact" size="sm" className="w-full justify-center">
              Get Tracker
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}