'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/workshops', label: 'Workshops' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-50/95 backdrop-blur-sm shadow-sm border-b border-warm-200/60'
          : 'bg-warm-50/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-sage-600 flex items-center justify-center shadow-sm group-hover:bg-sage-700 transition-colors">
              <SunIcon />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-semibold text-warm-900 text-base tracking-tight">
                Rise &amp; Shine
              </span>
              <span className="text-[10px] text-sage-600 tracking-[0.15em] font-medium uppercase">
                Counselling
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === link.href
                    ? 'text-sage-700'
                    : 'text-warm-700 hover:text-sage-700'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sage-500 rounded-full" />
                )}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary py-2.5 px-5">
              Book a Call
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-warm-700 hover:text-warm-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-warm-50 border-t border-warm-200 px-4 py-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center py-3 text-sm font-medium border-b border-warm-100 last:border-0 transition-colors ${
                pathname === link.href ? 'text-sage-700' : 'text-warm-700 hover:text-sage-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="py-4">
            <Link href="/contact" className="btn-primary justify-center w-full">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" fill="white" />
      <path
        d="M12 2V4M12 20V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H4M20 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
