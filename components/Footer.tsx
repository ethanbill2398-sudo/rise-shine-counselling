import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Rise & Shine Counselling"
                width={160}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-warm-400 leading-relaxed italic mb-3">
              "Helping You Rise, Supporting You to Shine."
            </p>
            <p className="text-sm text-warm-500">Kendall Pruden, M.A., MCPC</p>
            <p className="text-sm text-warm-500">Founder &amp; Clinical Counsellor</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-warm-100 font-semibold text-xs tracking-widest uppercase mb-5">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Kendall' },
                { href: '/services', label: 'Services' },
                { href: '/workshops', label: 'Workshops' },
                { href: '/contact', label: 'Book a Call' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-400 hover:text-warm-200 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-warm-100 font-semibold text-xs tracking-widest uppercase mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-warm-400">
              <li>
                <a
                  href="tel:3066314331"
                  className="flex items-start gap-3 hover:text-warm-200 transition-colors group"
                >
                  <PhoneIcon className="mt-0.5 flex-shrink-0 text-sage-500 group-hover:text-sage-400" />
                  <div>
                    <div>(306) 631-4331</div>
                    <div className="text-xs text-warm-600">Call or text</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@riseandshinecounselling.net"
                  className="flex items-start gap-3 hover:text-warm-200 transition-colors group"
                >
                  <EmailIcon className="mt-0.5 flex-shrink-0 text-sage-500 group-hover:text-sage-400" />
                  <span className="break-all">support@riseandshinecounselling.net</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <LocationIcon className="mt-0.5 flex-shrink-0 text-sage-500" />
                <div>
                  <div>325 Herold Rd #1</div>
                  <div>Saskatoon, SK S7V 0A9</div>
                  <div className="text-xs text-warm-600 mt-1">In-person &amp; online via Zoom</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-700/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-warm-600">
          <p>&copy; {new Date().getFullYear()} Rise &amp; Shine Counselling. All rights reserved.</p>
          <p>Serving Saskatoon, SK &amp; online across Saskatchewan</p>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.86a19.79 19.79 0 01-3.07-8.67A2 2 0 012.41 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="none">
      <path
        d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
