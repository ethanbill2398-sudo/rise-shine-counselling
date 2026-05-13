'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function WorkshopRegister() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-14 bg-gradient-to-b from-sage-100 to-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label mb-3">Rise &amp; Shine Counselling Presents</p>
          <h1 className="font-serif text-4xl md:text-5xl text-warm-900 leading-tight mb-4">
            The Blossoming Workshop
          </h1>
          <p className="text-sage-700 text-xl font-medium italic mb-6">
            From Reaction &rarr; Awareness &rarr; Lasting Change
          </p>
          <div className="inline-flex items-center gap-2 bg-sage-700 text-white text-sm font-medium px-5 py-2.5 rounded-full">
            <CalendarIcon />
            Full-Day &bull; 9:00 a.m. – 3:30 p.m.
          </div>
        </div>
      </section>

      {/* ── About the Workshop ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose max-w-none text-warm-700 leading-relaxed space-y-5 text-center">
            <p className="text-lg">
              We all carry unseen weight — stress, emotional triggers, past experiences, and patterns
              that once protected us but now hold us back.
            </p>
            <p>
              The Blossoming Workshop is a powerful, interactive full-day experience led by{' '}
              <strong className="text-warm-900">Kendall Pruden, M.A., MCPC</strong> — a Master&apos;s
              level clinical counsellor with years of experience helping individuals and groups build
              real-life resilience.
            </p>
            <p>
              Grounded in brain science and delivered with warmth and storytelling, this workshop
              helps you understand your stress responses and build healthier coping strategies for
              lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* ── What You'll Get ── */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl text-warm-900 text-center mb-10">
            What You&apos;ll Walk Away With
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {takeaways.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-warm-200">
                <CheckCircle />
                <span className="text-warm-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Details ── */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {details.map((d) => (
              <div key={d.label} className="bg-sage-50 border border-sage-200 rounded-2xl p-6">
                <div className="flex justify-center mb-3 text-sage-600">{d.icon}</div>
                <div className="text-xs font-semibold text-sage-500 uppercase tracking-widest mb-1">{d.label}</div>
                <div className="font-serif text-warm-900 font-medium">{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment Instructions ── */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="section-label mb-3">Payment</p>
            <h2 className="font-serif text-3xl text-warm-900">How to Pay</h2>
          </div>

          <div className="bg-white rounded-3xl border border-warm-200 shadow-sm overflow-hidden">
            {/* Top banner */}
            <div className="bg-sage-700 px-8 py-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <MoneyIcon />
              </div>
              <div>
                <p className="text-white font-semibold">Interac E-Transfer</p>
                <p className="text-sage-200 text-sm">Secure, fast, and easy</p>
              </div>
            </div>

            <div className="px-8 py-8">
              {/* Email address highlight */}
              <p className="text-warm-600 text-sm mb-3">Send your payment to:</p>
              <div className="flex items-center gap-3 bg-sage-50 border border-sage-200 rounded-2xl px-6 py-4 mb-8">
                <svg className="w-5 h-5 text-sage-600 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sage-800 font-medium text-sm sm:text-base select-all">
                  support@riseandshinecounselling.net
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-5">
                {[
                  {
                    title: 'Register below',
                    body: 'Complete the registration form on this page to let Kendall know you\'re coming.',
                  },
                  {
                    title: 'Send your e-transfer',
                    body: <>In the <strong className="text-warm-900">message/notes field</strong>, include your <strong className="text-warm-900">full name</strong> and <strong className="text-warm-900">number of tickets</strong> — for example: &ldquo;Jane Smith — 2 tickets&rdquo;.</>,
                  },
                  {
                    title: 'Spot confirmed',
                    body: 'Kendall will confirm your registration once payment is received. At the venue, just give your name at the door.',
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-sage-600 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-warm-900 text-sm mb-0.5">{step.title}</p>
                      <p className="text-warm-600 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Registration Form ── */}
      <section id="register" className="py-20 bg-sage-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Secure Your Spot</p>
            <h2 className="section-heading mb-4">Register for the Workshop</h2>
            <p className="text-warm-600">
              Fill out the form below, then send your e-transfer to confirm your registration.
            </p>
          </div>
          <RegisterForm />
        </div>
      </section>

      {/* ── About Kendall ── */}
      <section className="py-14 bg-white border-t border-warm-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center font-serif text-sage-700 font-bold text-xl mx-auto mb-4">
            KP
          </div>
          <h3 className="font-serif text-2xl text-warm-900 mb-1">Kendall Pruden, M.A., MCPC</h3>
          <p className="text-warm-500 text-sm mb-4">Founder &amp; Clinical Counsellor, Rise &amp; Shine Counselling</p>
          <p className="text-warm-600 leading-relaxed max-w-xl mx-auto mb-6">
            Kendall is a Master&apos;s level clinical counsellor based in Saskatoon, SK. She brings
            warmth, expertise, and lived understanding to every workshop — leaving attendees with
            tools they can actually use.
          </p>
          <Link href="/about" className="text-sage-600 hover:text-sage-700 text-sm font-medium underline underline-offset-2">
            Learn more about Kendall
          </Link>
        </div>
      </section>

      {/* ── Questions ── */}
      <section className="py-12 bg-sage-700 text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <p className="text-sage-200 mb-2 text-sm">Have questions before registering?</p>
          <h3 className="font-serif text-2xl mb-5">Reach Out to Kendall Directly</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:3066314331" className="btn-outline-white text-sm">
              (306) 631-4331
            </a>
            <a href="mailto:support@riseandshinecounselling.net" className="btn-gold text-sm">
              Email Kendall
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// ── JotForm Embed ──
function RegisterForm() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"]'
    )
    const callHandler = () => {
      ;(window as any).jotformEmbedHandler(
        "iframe[id='JotFormIFrame-261136609104248']",
        'https://form.jotform.com/'
      )
    }
    if (existing) {
      callHandler()
    } else {
      const script = document.createElement('script')
      script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
      script.onload = callHandler
      document.body.appendChild(script)
    }
  }, [])

  return (
    <iframe
      id="JotFormIFrame-261136609104248"
      title="Send Your Details"
      onLoad={() => window.parent.scrollTo(0, 0)}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/261136609104248"
      style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
    />
  )
}

// ── Data ──
const takeaways = [
  'Understand how your brain responds to stress',
  'Recognize emotional triggers before they escalate',
  'Practical tools for preventing burnout',
  'Healthy coping strategies you can use immediately',
  'Strengthen the Four Pillars of Wellbeing',
  'Create small, sustainable life changes',
]

const details = [
  {
    label: 'Format',
    value: 'Full-Day Workshop',
    icon: <CalendarIcon />,
  },
  {
    label: 'Time',
    value: '9:00 a.m. – 3:30 p.m.',
    icon: <ClockIcon />,
  },
  {
    label: 'Location',
    value: 'Saskatoon, SK',
    icon: <LocationIcon />,
  },
]

// ── Icons ──
function CheckCircle() {
  return (
    <svg className="w-5 h-5 flex-shrink-0 text-sage-500" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function MoneyIcon() {
  return (
    <svg className="w-6 h-6 text-gold-600" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
