import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Counselling services for individuals, couples, and youth in Saskatoon and online. Specializing in anxiety, depression, addiction, grief, eating disorders, relationships, and life transitions.',
}

export default function Services() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-warm-100 to-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label mb-3">What I Offer</p>
          <h1 className="font-serif text-4xl md:text-5xl text-warm-900 leading-tight mb-5">
            Counselling that meets you where you are
          </h1>
          <p className="text-warm-500 text-lg leading-relaxed">
            Whether you&apos;re navigating a difficult season, rebuilding a relationship, or simply
            ready to grow — there&apos;s a place for you here.
          </p>
        </div>
      </section>

      {/* ── Who I Work With ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Who I Work With</p>
            <h2 className="section-heading">Sessions for Every Stage of Life</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whoCards.map((card) => (
              <div
                key={card.title}
                className="card hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${card.bg}`}
                >
                  <span className="text-3xl">{card.emoji}</span>
                </div>
                <h3 className="font-serif text-xl text-warm-900 mb-3">{card.title}</h3>
                <p className="text-warm-600 text-sm leading-relaxed mb-5">{card.description}</p>
                <ul className="space-y-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-warm-600">
                      <Dot />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I Help With ── */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Areas of Support</p>
            <h2 className="section-heading">What Brings People to Counselling</h2>
            <p className="text-warm-500 max-w-xl mx-auto mt-4">
              These are some of the challenges I help people work through. If you don&apos;t see your
              concern here, please still reach out — every story is welcome.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {concerns.map((c) => (
              <span
                key={c.label}
                className="px-4 py-2 bg-white border border-warm-200 rounded-full text-sm text-warm-700 font-medium hover:bg-sage-50 hover:border-sage-300 transition-colors cursor-default"
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label mb-3">My Methods</p>
              <h2 className="section-heading mb-5">Evidence-Based Approaches</h2>
              <p className="text-warm-600 leading-relaxed mb-8">
                I primarily use two research-backed therapeutic approaches, selecting and blending
                them based on your unique needs and goals.
              </p>
              <div className="space-y-5">
                {approaches.map((a) => (
                  <div key={a.abbr} className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-sm ${a.badgeBg} ${a.badgeText}`}
                    >
                      {a.abbr}
                    </div>
                    <div>
                      <h4 className="font-semibold text-warm-900 text-sm mb-1">{a.name}</h4>
                      <p className="text-warm-500 text-sm leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="card border-2 border-sage-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏡</span>
                  <h3 className="font-serif text-lg text-warm-900">In-Person Sessions</h3>
                </div>
                <p className="text-warm-600 text-sm leading-relaxed mb-3">
                  Come meet me at my Saskatoon office — a warm, private, and welcoming space
                  designed to help you feel at ease from the moment you arrive.
                </p>
                <p className="text-xs text-warm-400">Briarwood, Saskatoon, SK</p>
              </div>

              <div className="card border-2 border-gold-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💻</span>
                  <h3 className="font-serif text-lg text-warm-900">Online via Zoom</h3>
                </div>
                <p className="text-warm-600 text-sm leading-relaxed mb-3">
                  Connect from the comfort of home. Online sessions are just as effective and offer
                  the flexibility many people need — especially across Saskatchewan.
                </p>
                <p className="text-xs text-warm-400">Available province-wide</p>
              </div>

              <div className="bg-sage-50 border border-sage-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📅</span>
                  <h4 className="font-semibold text-sage-800 text-sm">Hours</h4>
                </div>
                <p className="text-sage-700 text-sm">Open &middot; Closes 6:00 p.m.</p>
                <p className="text-sage-600 text-xs mt-1">
                  Contact me directly to find a time that works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Book ── */}
      <section className="py-20 bg-sage-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sage-300 text-xs font-semibold tracking-widest uppercase mb-3">
            Ready to Start?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-5">
            Booking is Simple &amp; Personal
          </h2>
          <p className="text-sage-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            I don&apos;t use online booking portals — I prefer to connect with you directly. Reach
            out by phone, text, or email, and we&apos;ll find a time that works.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 transition-colors text-center group"
              >
                <div className="text-3xl mb-3">{m.emoji}</div>
                <div className="text-white font-medium text-sm mb-1">{m.label}</div>
                <div className="text-sage-300 text-xs group-hover:text-sage-200 transition-colors break-all">
                  {m.value}
                </div>
              </a>
            ))}
          </div>

          <Link href="/contact" className="btn-gold">
            Send a Message
            <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}

// ── Data ──
const whoCards = [
  {
    emoji: '🧑',
    title: 'Individuals',
    bg: 'bg-sage-100',
    description:
      'One-on-one sessions tailored to your personal journey — at any age and any stage of life.',
    points: ['Adults navigating life challenges', 'Youth (teens & young adults)', 'Personal growth & self-discovery'],
  },
  {
    emoji: '💑',
    title: 'Couples',
    bg: 'bg-gold-100',
    description:
      'Support for partners who want to reconnect, communicate better, or navigate a difficult season together.',
    points: ['Communication & conflict resolution', 'Rebuilding trust & intimacy', 'Pre-marital counselling'],
  },
  {
    emoji: '🌱',
    title: 'Youth',
    bg: 'bg-warm-100',
    description:
      'A safe, non-judgmental space for young people to process emotions, identity, and life&apos;s big questions.',
    points: ['Teenagers & young adults', 'Anxiety, school stress, identity', 'Family & peer relationship issues'],
  },
]

const concerns = [
  { emoji: '😰', label: 'Anxiety' },
  { emoji: '💙', label: 'Depression' },
  { emoji: '🔄', label: 'Addiction' },
  { emoji: '🌿', label: 'Eating Disorders' },
  { emoji: '🕊️', label: 'Grief & Loss' },
  { emoji: '🔀', label: 'Life Transitions' },
  { emoji: '❤️', label: 'Relationship Issues' },
  { emoji: '🔥', label: 'Burnout' },
  { emoji: '😡', label: 'Anger Management' },
  { emoji: '🧍', label: 'Self-Esteem' },
  { emoji: '😴', label: 'Stress & Overwhelm' },
  { emoji: '🌱', label: 'Personal Growth' },
]

const approaches = [
  {
    abbr: 'CBT',
    name: 'Cognitive Behavioral Therapy',
    description:
      'Helps you identify and change unhelpful thoughts and behaviors that may be holding you back from living fully.',
    badgeBg: 'bg-sage-100',
    badgeText: 'text-sage-700',
  },
  {
    abbr: 'EFT',
    name: 'Emotionally Focused Therapy',
    description:
      'Helps you explore your emotions more deeply and improve your emotional connection with yourself and others.',
    badgeBg: 'bg-gold-100',
    badgeText: 'text-gold-700',
  },
]

const contactMethods = [
  { emoji: '📞', label: 'Call or Text', value: '(306) 631-4331', href: 'tel:3066314331' },
  {
    emoji: '✉️',
    label: 'Email',
    value: 'support@riseandshinecounselling.net',
    href: 'mailto:support@riseandshinecounselling.net',
  },
  { emoji: '💬', label: 'Send a Message', value: 'Use the contact form', href: '/contact' },
]

// ── Icons ──
function ArrowRight() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dot() {
  return <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sage-400 flex-shrink-0 inline-block" />
}
