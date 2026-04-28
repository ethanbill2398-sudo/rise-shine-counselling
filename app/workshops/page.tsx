'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Workshops() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-sage-100 to-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label mb-3">Workshop</p>
          <h1 className="font-serif text-4xl md:text-5xl text-warm-900 leading-tight mb-5">
            The Blossoming Workshop
          </h1>
          <p className="text-sage-700 text-lg font-medium italic mb-4">
            From Reaction &rarr; Awareness &rarr; Lasting Change
          </p>
          <p className="text-warm-600 leading-relaxed max-w-xl mx-auto">
            Based on a four-part framework for behavior, wellbeing, and resilience — blending brain
            science, storytelling, and practical tools.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-warm-50 border border-warm-200 rounded-2xl p-8 text-center">
            <p className="text-warm-700 leading-relaxed text-lg">
              We all carry unseen weight — stress, emotional triggers, past experiences, and
              patterns that once protected us but now hold us back. The Blossoming Workshop helps
              participants understand stress responses and build healthier coping strategies for
              lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* ── What You Learn & Interactive ── */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Learn */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-sage-100 flex items-center justify-center">
                  <BookIcon />
                </div>
                <h2 className="font-serif text-xl text-warm-900">What Participants Learn</h2>
              </div>
              <ul className="space-y-3">
                {learnPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-warm-700 text-sm">
                    <CheckCircle className="text-sage-500" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive */}
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gold-100 flex items-center justify-center">
                  <StarIcon />
                </div>
                <h2 className="font-serif text-xl text-warm-900">Interactive &amp; Practical</h2>
              </div>
              <ul className="space-y-3">
                {interactivePoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-warm-700 text-sm">
                    <SproutIcon />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 bg-sage-50 border border-sage-200 rounded-xl p-4">
                <p className="text-sm font-medium text-sage-800 italic">
                  &ldquo;Participants leave with real-life strategies — not just inspiration.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formats ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Available Formats</p>
            <h2 className="section-heading">Choose What Works for You</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card border-2 border-sage-200 hover:border-sage-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center mb-4">
                <ClockIcon />
              </div>
              <h3 className="font-serif text-xl text-warm-900 mb-2">1-Hour Session</h3>
              <p className="text-warm-600 text-sm leading-relaxed mb-4">
                Perfect for Lunch &amp; Learns, staff meetings, or school sessions. A focused
                session exploring one core module for immediate application.
              </p>
              <div className="bg-sage-50 rounded-xl p-3 text-xs text-sage-700">
                <strong>Best for:</strong> Corporate teams, school groups, quick introductions
              </div>
            </div>
            <div className="card border-2 border-gold-200 hover:border-gold-400 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center mb-4">
                <SunriseIcon />
              </div>
              <h3 className="font-serif text-xl text-warm-900 mb-2">Full-Day Workshop</h3>
              <p className="text-warm-600 text-sm leading-relaxed mb-2 font-medium text-sage-700">
                9:00 a.m. – 3:30 p.m.
              </p>
              <p className="text-warm-600 text-sm leading-relaxed mb-4">
                Covers all four core modules plus group reflection and take-home tools for lasting
                impact. Ideal for PD days &amp; retreats.
              </p>
              <div className="bg-gold-50 rounded-xl p-3 text-xs text-gold-700">
                <strong>Best for:</strong> PD days, wellness retreats, leadership teams
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcomes & Who it Serves ── */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Outcomes */}
            <div>
              <p className="section-label mb-3">Key Outcomes</p>
              <h2 className="font-serif text-2xl text-warm-900 mb-6">
                What Participants Walk Away With
              </h2>
              <div className="space-y-3">
                {outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-warm-200">
                    <CheckCircle className="text-sage-500 mt-0.5" />
                    <span className="text-warm-700 text-sm">{o}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who it Serves */}
            <div>
              <p className="section-label mb-3">Who This Serves</p>
              <h2 className="font-serif text-2xl text-warm-900 mb-6">
                Built for Teams &amp; Organizations
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {audiences.map((a) => (
                  <div key={a} className="bg-white rounded-xl p-4 border border-warm-200 text-center hover:border-sage-300 transition-colors">
                    <div className="text-xs font-medium text-warm-700">{a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Not a lecture banner ── */}
      <section className="py-8 bg-sage-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white font-medium text-lg">
            <em>Not a lecture.</em>{' '}
            <span className="text-sage-300 text-base font-normal">
              Brain science made simple &bull; Emotional awareness training &bull; Practical tools &bull; Real-life storytelling
            </span>
          </p>
        </div>
      </section>

      {/* ── Presenter ── */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="card border-warm-200 inline-block text-left w-full">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center font-serif text-sage-700 font-bold text-lg">
                KP
              </div>
              <div>
                <div className="font-serif text-warm-900 font-semibold">Kendall Pruden, MCPC</div>
                <div className="text-xs text-warm-500">Founder, Rise &amp; Shine Counselling</div>
              </div>
            </div>
            <p className="text-warm-600 text-sm leading-relaxed">
              Kendall brings warmth, expertise, and lived understanding to every workshop. Her
              sessions are engaging, practical, and grounded in evidence — leaving attendees with
              tools they can actually use.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-warm-500">
              <a href="mailto:support@riseandshinecounselling.net" className="hover:text-sage-600 transition-colors">
                support@riseandshinecounselling.net
              </a>
              <a href="tel:3066314331" className="hover:text-sage-600 transition-colors">
                (306) 631-4331
              </a>
            </div>
            <p className="text-xs text-warm-400 mt-3 italic">
              * Contact directly for bookings, pricing, or more information
            </p>
          </div>
        </div>
      </section>

      {/* ── Registration Form ── */}
      <section id="register" className="py-20 bg-sage-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Register Interest</p>
            <h2 className="section-heading mb-4">Bring the Workshop to Your Team</h2>
            <p className="text-warm-600">
              Fill in your details below and Kendall will reach out personally to discuss your
              needs, availability, and pricing.
            </p>
          </div>
          <WorkshopForm />
        </div>
      </section>
    </>
  )
}

// ── JotForm Embed ──
function WorkshopForm() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://form.jotform.com/jssform/261136609104248'
    script.type = 'text/javascript'
    if (containerRef.current) {
      containerRef.current.appendChild(script)
    }
  }, [])

  return <div ref={containerRef} />
}

// ── Data ──
const learnPoints = [
  'Recognizing emotional triggers early',
  'How the brain reacts under stress',
  'Preventing burnout & emotional shutdown',
  'Strengthening the Four Pillars of Wellbeing',
  'Building healthy coping strategies',
  'Creating small, sustainable life changes',
]

const interactivePoints = [
  'Guided reflection & trigger mapping',
  'Break-out worksheet exercises',
  '1–10 awareness scale practice',
  'Affirmation & intervention tools',
]

const outcomes = [
  'Improved stress management',
  'Stronger emotional regulation',
  'Increased mental clarity',
  'Healthier coping strategies',
  'Greater wellbeing awareness',
]

const audiences = [
  'Corporate Teams & Leadership',
  'Educators & School Staff',
  'Healthcare Professionals',
  'First Responders',
  'Youth & Young Adults',
  'Community Organizations',
]

// ── Icons ──
function BookIcon() {
  return (
    <svg className="w-5 h-5 text-sage-600" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-gold-600" viewBox="0 0 24 24" fill="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 text-sage-600" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SunriseIcon() {
  return (
    <svg className="w-5 h-5 text-gold-600" viewBox="0 0 24 24" fill="none">
      <path d="M17 18a5 5 0 00-10 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2v7M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 flex-shrink-0 ${className}`} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SproutIcon() {
  return (
    <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
      <path d="M12 22V12M12 12C12 7 8 4 3 4C3 9 6 12 12 12ZM12 12C12 7 16 4 21 4C21 9 18 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
