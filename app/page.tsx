import Link from 'next/link'
import ClientImage from '@/components/ClientImage'

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-warm-50">
        {/* Soft background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sage-100/50 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-gold-100/40 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-7 border border-sage-200">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
              Now accepting new clients
            </div>
            <h1 className="font-serif text-5xl md:text-[3.5rem] lg:text-[4rem] text-warm-900 leading-[1.1] mb-6">
              Helping You{' '}
              <span style={{ color: '#6c3f14' }}>Rise.</span>
              <br />
              Supporting You
              <br />
              to{' '}
              <span style={{ color: '#cbbabe' }}>Shine.</span>
            </h1>
            <p className="text-warm-600 text-lg leading-relaxed mb-8 max-w-md">
              A safe, compassionate space for individuals, couples, and youth navigating life&apos;s
              challenges — in Saskatoon and online across Saskatchewan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Book a Call
                <ArrowRight />
              </Link>
              <Link href="/about" className="btn-secondary">
                Meet Kendall
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-warm-500">
              <span className="flex items-center gap-1.5">
                <CheckMark />
                M.A., MCPC
              </span>
              <span className="flex items-center gap-1.5">
                <CheckMark />
                In-person &amp; online
              </span>
              <span className="flex items-center gap-1.5">
                <CheckMark />
                All are welcome
              </span>
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-[2rem] bg-sage-200 rotate-2 translate-y-2" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-warm-200 shadow-lg">
                <ClientImage
                  src="/images/kendall-hero.jpg"
                  alt="Kendall Pruden, Clinical Counsellor at Rise & Shine Counselling"
                  priority
                />
              </div>

              {/* Floating quote card */}
              <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-lg p-4 max-w-[210px] border border-warm-100">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-xs text-warm-700 leading-relaxed italic">
                  &ldquo;A warm, non-judgmental space where everyone is welcome.&rdquo;
                </p>
              </div>

              {/* Floating credential badge */}
              <div className="absolute -top-4 -right-4 bg-sage-600 text-white rounded-2xl px-4 py-2.5 shadow-md text-center">
                <div className="text-xs font-semibold tracking-wide">M.A., MCPC</div>
                <div className="text-[10px] text-sage-200">Certified Counsellor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Help With ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Areas of Support</p>
            <h2 className="section-heading mb-4">What I Help With</h2>
            <p className="text-warm-500 max-w-lg mx-auto">
              Whether you&apos;re feeling overwhelmed, stuck, or simply ready for change — you don&apos;t
              have to navigate this alone.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {concerns.map((c) => (
              <span
                key={c}
                className="px-4 py-2 bg-sage-50 border border-sage-200 rounded-full text-sm text-warm-700 font-medium hover:bg-sage-100 hover:border-sage-300 transition-colors cursor-default"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 rounded-[1.5rem] bg-gold-200/60 -translate-x-3 -translate-y-3" />
                <div className="relative rounded-[1.5rem] overflow-hidden aspect-square bg-warm-200 shadow-md">
                  <ClientImage
                    src="/images/kendall-about.jpg"
                    alt="Kendall Pruden"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="section-label mb-3">About Kendall</p>
              <h2 className="section-heading mb-5">
                A counsellor who truly walks alongside you
              </h2>
              <p className="text-warm-600 leading-relaxed mb-4">
                Hi, I&apos;m Kendall Pruden — a Master&apos;s-level Clinical Counsellor and founder of
                Rise &amp; Shine Counselling, based in Saskatoon, SK. I feel deeply grateful to walk
                alongside individuals and couples as they journey through healing, growth, and
                transformation.
              </p>
              <p className="text-warm-600 leading-relaxed mb-8">
                My door is open to all people. Whether you share my beliefs or not, I strive to
                create a safe, inclusive, and non-judgmental space where everyone feels welcome.
              </p>
              <Link href="/about" className="btn-primary">
                More About Me
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="py-20 bg-sage-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07]">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-12 -left-12 w-60 h-60 rounded-full bg-white" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sage-300 text-xs font-semibold tracking-widest uppercase mb-3">
            My Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Evidence-Based. Heart-Led.
          </h2>
          <p className="text-sage-200 max-w-xl mx-auto mb-12 text-lg">
            I use two powerful, research-backed approaches — tailored to where you are and what you need.
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
            <div className="bg-white/10 hover:bg-white/15 rounded-2xl p-8 transition-colors backdrop-blur-sm border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-gold-500/30 flex items-center justify-center mb-5">
                <BrainIcon />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                Cognitive Behavioral Therapy (CBT)
              </h3>
              <p className="text-sage-200 text-sm leading-relaxed">
                Helps you identify and reshape the unhelpful thoughts and behaviors that may be
                holding you back from living fully.
              </p>
            </div>
            <div className="bg-white/10 hover:bg-white/15 rounded-2xl p-8 transition-colors backdrop-blur-sm border border-white/10">
              <div className="w-11 h-11 rounded-xl bg-gold-500/30 flex items-center justify-center mb-5">
                <HeartIcon />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                Emotionally Focused Therapy (EFT)
              </h3>
              <p className="text-sage-200 text-sm leading-relaxed">
                Helps you explore emotions more deeply and strengthen your connection — with
                yourself and with those you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Workshop Spotlight ── */}
      <section className="py-20 bg-warm-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Featured Workshop</p>
            <h2 className="section-heading">The Blossoming Workshop</h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-warm-200">
            <div className="grid md:grid-cols-2">
              {/* Left: dark panel */}
              <div className="bg-sage-800 p-10 md:p-12 text-white flex flex-col">
                <p className="text-sage-300 text-sm font-medium italic mb-4">
                  From Reaction &rarr; Awareness &rarr; Lasting Change
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
                  Based on a four-part framework for behavior, wellbeing, and resilience.
                </h3>
                <p className="text-sage-200 text-sm leading-relaxed flex-1 mb-8">
                  Blending brain science, storytelling, and practical tools — this workshop helps
                  participants understand stress responses and build healthier coping strategies.
                </p>
                <div className="flex gap-3 flex-wrap mb-8">
                  <span className="bg-white/10 border border-white/20 text-sage-100 text-xs px-3 py-1.5 rounded-full">
                    1-Hour Session
                  </span>
                  <span className="bg-white/10 border border-white/20 text-sage-100 text-xs px-3 py-1.5 rounded-full">
                    Full-Day (9:00–3:30)
                  </span>
                </div>
                <Link href="/workshops" className="btn-gold self-start">
                  Register Interest
                  <ArrowRight />
                </Link>
              </div>

              {/* Right: light panel */}
              <div className="p-10 md:p-12">
                <h4 className="font-serif text-lg text-warm-900 mb-6">
                  What participants walk away with:
                </h4>
                <ul className="space-y-3.5 mb-8">
                  {workshopPoints.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-warm-700 text-sm">
                      <CheckCircle />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="bg-sage-50 border border-sage-200 rounded-xl p-4">
                  <p className="text-xs font-semibold text-sage-700 mb-1">Ideal for:</p>
                  <p className="text-xs text-sage-600">
                    Corporate teams &bull; Healthcare &bull; Educators &bull; First Responders &bull; Community orgs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-warm-800 to-warm-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-400/30 flex items-center justify-center mx-auto mb-6">
            <SparkleIcon />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-5 leading-tight">
            Ready to take the first step?
          </h2>
          <p className="text-warm-300 text-lg mb-10 leading-relaxed">
            Reaching out is the hardest part — and you&apos;ve already started. I&apos;d be honored to
            walk alongside you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              Get in Touch
              <ArrowRight />
            </Link>
            <a
              href="tel:3066314331"
              className="btn-outline-white"
            >
              <PhoneIcon />
              (306) 631-4331
            </a>
          </div>
          <p className="mt-10 text-warm-500 text-sm italic">
            &ldquo;If you&apos;re ready to take the next step, I&apos;d be honored to support you.&rdquo;
            — Kendall
          </p>
        </div>
      </section>
    </>
  )
}

// ── Data ──
const concerns = [
  'Anxiety',
  'Depression',
  'Addiction',
  'Eating Disorders',
  'Grief & Loss',
  'Life Transitions',
  'Relationships',
  'Couples',
  'Youth',
  'Self-Growth',
  'Burnout',
  'Wellbeing',
]

const workshopPoints = [
  'Recognize emotional triggers early',
  'Understand how the brain reacts under stress',
  'Prevent burnout & emotional shutdown',
  'Strengthen the Four Pillars of Wellbeing',
  'Build healthy, sustainable coping strategies',
]

// ── Icons ──
function ArrowRight() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckMark() {
  return (
    <svg className="w-4 h-4 text-sage-500 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckCircle() {
  return (
    <svg className="w-5 h-5 text-sage-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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

function BrainIcon() {
  return (
    <svg className="w-5 h-5 text-gold-300" viewBox="0 0 24 24" fill="none">
      <path d="M9 3C6.239 3 4 5.239 4 8c0 1.013.3 1.956.815 2.744C3.722 11.389 3 12.614 3 14c0 2.209 1.567 4.053 3.645 4.497C7.198 19.907 8.514 21 10 21c.34 0 .669-.046.984-.13A3.994 3.994 0 0012 21c.353 0 .695-.047 1.016-.13.315.084.644.13.984.13 1.486 0 2.802-1.093 3.355-2.503C19.433 18.053 21 16.209 21 14c0-1.386-.722-2.611-1.815-3.256C19.7 9.956 20 9.013 20 8c0-2.761-2.239-5-5-5-1.022 0-1.97.307-2.756.832A4.987 4.987 0 0010 3c-.428 0-.843.056-1.244.16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg className="w-5 h-5 text-gold-300" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg className="w-6 h-6 text-gold-300" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v1M12 20v1M4.22 4.22l.71.71M18.36 18.36l.71.71M3 12H4M20 12h1M4.22 19.78l.71-.71M18.36 5.64l.71-.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
