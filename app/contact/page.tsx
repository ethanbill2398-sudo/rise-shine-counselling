'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

// Note: metadata must be in a server component; move to a separate layout if needed.
// export const metadata: Metadata = { title: 'Book a Call', ... }

export default function Contact() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-warm-100 to-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label mb-3">Let&apos;s Connect</p>
          <h1 className="font-serif text-4xl md:text-5xl text-warm-900 leading-tight mb-5">
            Reach Out — I&apos;d Love
            <br />
            to Hear From You
          </h1>
          <p className="text-warm-600 text-lg leading-relaxed max-w-xl mx-auto">
            I don&apos;t use online booking systems — I believe the therapeutic relationship begins
            with a real conversation. Leave your details and I&apos;ll call you personally.
          </p>
        </div>
      </section>

      {/* ── Contact Options ── */}
      <section className="py-6 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                className="bg-white rounded-2xl border border-warm-200 hover:border-sage-300 hover:shadow-sm transition-all p-5 text-center group"
              >
                <div className="text-3xl mb-3">{m.emoji}</div>
                <div className="font-medium text-warm-800 text-sm mb-1">{m.label}</div>
                <div className="text-xs text-warm-500 group-hover:text-sage-600 transition-colors break-all">
                  {m.value}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Form + Info ── */}
      <section className="py-16 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-10">
            {/* Sidebar info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="font-serif text-2xl text-warm-900 mb-3">What to Expect</h2>
                <p className="text-warm-600 text-sm leading-relaxed">
                  After you submit this form, Kendall will call or text you at the number you
                  provide — usually within 1–2 business days. From there, you&apos;ll chat briefly to
                  make sure it feels like a good fit, and then schedule your first session.
                </p>
              </div>

              <div className="space-y-3">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-sage-100 text-sage-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-warm-600 text-sm leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>

              <div className="bg-sage-50 border border-sage-200 rounded-2xl p-5">
                <h3 className="font-semibold text-sage-800 text-sm mb-3">Office Location</h3>
                <p className="text-sage-700 text-sm leading-relaxed">
                  325 Herold Rd #1<br />
                  Saskatoon, SK S7V 0A9
                </p>
                <p className="text-sage-600 text-xs mt-2">Open &middot; Closes 6:00 p.m.</p>
                <p className="text-sage-600 text-xs mt-1">In-person &amp; online via Zoom</p>
              </div>

              <div className="bg-gold-50 border border-gold-200 rounded-2xl p-5">
                <p className="text-gold-800 text-sm font-medium italic leading-relaxed">
                  &ldquo;If you&apos;re ready to take the next step, I&apos;d be honored to support
                  you.&rdquo;
                </p>
                <p className="text-gold-600 text-xs mt-2">— Kendall Pruden, M.A., MCPC</p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-3xl border border-warm-200 shadow-sm p-8 md:p-10">
                <h2 className="font-serif text-2xl text-warm-900 mb-2">Send Your Details</h2>
                <p className="text-warm-500 text-sm mb-7">
                  Fill this out and Kendall will reach out to you directly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map / Location banner ── */}
      <section className="py-14 bg-white border-t border-warm-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl text-warm-900 mb-3">
            Serving Saskatoon &amp; Beyond
          </h2>
          <p className="text-warm-500 mb-8">
            In-person sessions in Saskatoon &bull; Online sessions available across Saskatchewan
          </p>
          <div className="bg-warm-100 rounded-2xl border border-warm-200 p-8 text-warm-500 text-sm">
            <div className="text-4xl mb-3">📍</div>
            <p className="font-medium text-warm-800">325 Herold Rd #1, Saskatoon, SK S7V 0A9</p>
            <a
              href="https://maps.google.com/?q=325+Herold+Rd+%231+Saskatoon+SK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sage-600 hover:text-sage-700 font-medium text-sm underline underline-offset-2"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Contact Form Component ──
function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const contactTime = (form.elements.namedItem('contactTime') as HTMLInputElement).value
    const sessionType = (form.querySelector('input[name="sessionType"]:checked') as HTMLInputElement)?.value ?? ''
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    const subject = encodeURIComponent(`New Booking Request from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nBest time to call: ${contactTime || 'Not specified'}\nLooking for: ${sessionType || 'Not specified'}\n\nMessage:\n${message || 'None provided'}`
    )

    window.open(`mailto:support@riseandshinecounselling.net?subject=${subject}&body=${body}`)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-5">
          <span className="text-3xl">&#x2728;</span>
        </div>
        <h3 className="font-serif text-2xl text-warm-900 mb-3">Message received!</h3>
        <p className="text-warm-600 leading-relaxed mb-6">
          Kendall will reach out to you personally within 1–2 business days. You&apos;ve taken a
          brave first step.
        </p>
        <p className="text-warm-500 text-sm">
          Need to reach her sooner?{' '}
          <a href="tel:3066314331" className="text-sage-600 font-medium hover:underline">
            Call (306) 631-4331
          </a>
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-xs text-warm-400 hover:text-warm-600 transition-colors underline"
        >
          Submit another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="label" htmlFor="c-name">Full Name *</label>
          <input id="c-name" name="name" type="text" required className="input-field" placeholder="Your name" />
        </div>
        <div>
          <label className="label" htmlFor="c-phone">Phone Number *</label>
          <input id="c-phone" name="phone" type="tel" required className="input-field" placeholder="(306) 000-0000" />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="c-email">Email Address *</label>
        <input id="c-email" name="email" type="email" required className="input-field" placeholder="you@example.com" />
      </div>

      <div>
        <label className="label" htmlFor="c-time">Best Time to Call</label>
        <input
          id="c-time"
          name="contactTime"
          type="text"
          className="input-field"
          placeholder="e.g. Weekday mornings, after 3 p.m."
        />
      </div>

      {/* Session type */}
      <div>
        <label className="label">I&apos;m Looking For</label>
        <div className="grid sm:grid-cols-3 gap-2">
          {sessionTypes.map((t) => (
            <label
              key={t.value}
              className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border border-warm-200 hover:border-sage-400 transition-colors has-[:checked]:border-sage-500 has-[:checked]:bg-sage-50 text-sm"
            >
              <input type="radio" name="sessionType" value={t.value} className="accent-sage-600" />
              <span className="text-warm-800">{t.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="label" htmlFor="c-message">
          What brings you here? <span className="text-warm-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={4}
          className="input-field resize-none"
          placeholder="Share as much or as little as you'd like..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send My Details'}
      </button>

      <p className="text-center text-xs text-warm-400">
        Kendall will call you to follow up — this is not a confirmed appointment.
      </p>
    </form>
  )
}

// ── Data ──
const contactMethods = [
  {
    emoji: '📞',
    label: 'Call or Text',
    value: '(306) 631-4331',
    href: 'tel:3066314331',
  },
  {
    emoji: '✉️',
    label: 'Email',
    value: 'support@riseandshinecounselling.net',
    href: 'mailto:support@riseandshinecounselling.net',
  },
  {
    emoji: '📍',
    label: 'Office',
    value: '325 Herold Rd #1, Saskatoon',
    href: 'https://maps.google.com/?q=325+Herold+Rd+%231+Saskatoon+SK',
  },
]

const steps = [
  'Fill out the form with your name, phone, and a convenient time to call.',
  'Kendall will reach out to you within 1–2 business days.',
  "You'll have a brief chat to ensure it's a good fit.",
  'Schedule your first session — in person or online.',
]

const sessionTypes = [
  { value: 'individual', label: 'Individual' },
  { value: 'couples', label: 'Couples' },
  { value: 'youth', label: 'Youth' },
]
