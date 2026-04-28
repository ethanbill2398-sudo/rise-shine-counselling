import type { Metadata } from 'next'
import Link from 'next/link'
import ClientImage from '@/components/ClientImage'

export const metadata: Metadata = {
  title: 'About Kendall',
  description:
    'Meet Kendall Pruden, M.A., MCPC — founder of Rise & Shine Counselling in Saskatoon. Learn about her approach, values, and how she helps individuals, couples, and youth.',
}

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-sage-50 to-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Photo */}
            <div className="relative flex justify-center order-2 md:order-1">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 rounded-[2rem] bg-sage-200 rotate-3 scale-[0.97]" />
                <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-warm-200 shadow-lg">
                  <ClientImage
                    src="/images/kendall-about.jpg"
                    alt="Kendall Pruden, founder of Rise & Shine Counselling"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                {/* Credential badge */}
                <div className="absolute bottom-6 -right-5 bg-white rounded-2xl shadow-lg border border-warm-200 px-5 py-3 text-center">
                  <div className="font-serif text-sage-700 font-semibold text-sm">Kendall Pruden</div>
                  <div className="text-xs text-warm-500 mt-0.5">M.A., MCPC</div>
                  <div className="text-xs text-warm-400">Founder &amp; Counsellor</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <p className="section-label mb-3">About Me</p>
              <h1 className="font-serif text-4xl md:text-5xl text-warm-900 leading-tight mb-6">
                Meet the heart behind
                <br />
                <span className="text-sage-600">Rise &amp; Shine</span>
              </h1>
              <p className="text-warm-600 leading-relaxed mb-5">
                Hi, I&apos;m Kendall Pruden. I grew up in Moose Jaw, Saskatchewan, and now call
                Saskatoon home. I hold a Master&apos;s degree in Clinical Counselling and feel deeply
                grateful to walk alongside individuals and couples as they journey through healing,
                growth, and transformation.
              </p>
              <p className="text-warm-600 leading-relaxed">
                Faith is an important part of my life. I&apos;m a God-loving woman, and I truly believe
                He is the reason I&apos;m in this career today. While my faith guides who I am, my door
                is open to all people — whether you share my beliefs or not. I strive to create a
                safe, inclusive, and non-judgmental space where everyone feels welcome and supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── My Story ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-label mb-3">My Approach</p>
          <h2 className="section-heading mb-8">How I Work With You</h2>

          <div className="prose prose-warm max-w-none text-left">
            <p className="text-warm-600 leading-relaxed mb-6">
              Through Rise &amp; Shine Counselling, I work with youth, adults, and couples navigating
              challenges such as anxiety, depression, addiction, eating disorders, relationship
              issues, grief, and life transitions.
            </p>
            <p className="text-warm-600 leading-relaxed mb-6">
              I offer both in-person sessions in Saskatoon and online sessions via Zoom for those
              who prefer or need that flexibility.
            </p>
            <p className="text-warm-600 leading-relaxed">
              When it comes to booking sessions — I&apos;m a bit old-school. I like to keep things
              personal! You can reach me directly by phone, text, or email to book or ask questions.
              I believe the therapeutic relationship begins before you even step into my office.
            </p>
          </div>
        </div>
      </section>

      {/* ── Therapy Approaches ── */}
      <section className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Therapeutic Methods</p>
            <h2 className="section-heading">Two Approaches. One Goal.</h2>
            <p className="text-warm-500 max-w-xl mx-auto mt-4">
              I primarily use two evidence-based approaches, always tailored to meet you where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-5">
                <AboutBrainIcon />
              </div>
              <h3 className="font-serif text-xl text-warm-900 mb-4">
                Cognitive Behavioral Therapy
              </h3>
              <div className="inline-flex items-center bg-sage-100 text-sage-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                CBT
              </div>
              <p className="text-warm-600 text-sm leading-relaxed mb-4">
                CBT helps you identify and change unhelpful thoughts and behaviors that may be
                holding you back. It&apos;s a structured, goal-oriented approach that gives you
                practical tools to manage challenges in everyday life.
              </p>
              <ul className="space-y-2">
                {cbtPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-warm-600">
                    <CheckCircle />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-5">
                <AboutHeartIcon />
              </div>
              <h3 className="font-serif text-xl text-warm-900 mb-4">
                Emotionally Focused Therapy
              </h3>
              <div className="inline-flex items-center bg-gold-100 text-gold-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                EFT
              </div>
              <p className="text-warm-600 text-sm leading-relaxed mb-4">
                EFT helps you explore your emotions more deeply and improve your emotional
                connection with yourself and others. It&apos;s particularly effective for couples and
                those working through relational wounds.
              </p>
              <ul className="space-y-2">
                {eftPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-warm-600">
                    <CheckCircle />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Session Formats ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Formats Available</p>
            <h2 className="section-heading">Meet Where You Are</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card border-2 border-sage-200 hover:border-sage-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="font-serif text-lg text-warm-900 mb-2">In-Person Sessions</h3>
              <p className="text-warm-600 text-sm leading-relaxed mb-3">
                Meet in a warm, private office space in Saskatoon designed to feel safe and
                comfortable.
              </p>
              <p className="text-xs text-warm-500">
                Briarwood, Saskatoon, SK
              </p>
            </div>
            <div className="card border-2 border-gold-200 hover:border-gold-400 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-serif text-lg text-warm-900 mb-2">Online via Zoom</h3>
              <p className="text-warm-600 text-sm leading-relaxed mb-3">
                Connect from the comfort of your own home. Flexible scheduling for those across
                Saskatchewan.
              </p>
              <p className="text-xs text-warm-500">Available province-wide</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Second photo + quote ── */}
      <section className="py-20 bg-sage-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-white translate-x-16 -translate-y-16" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-6">
                &ldquo;Whether you&apos;re seeking growth, healing, or simply a place to be heard —
                I&apos;d be honoured to walk with you.&rdquo;
              </blockquote>
              <p className="text-sage-300 font-medium">— Kendall Pruden, M.A., MCPC</p>
              <p className="text-sage-400 text-sm mt-1">Founder, Rise &amp; Shine Counselling</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-gold">
                  Book a Call
                  <ArrowRight />
                </Link>
                <Link href="/services" className="btn-outline-white">
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-xs rounded-[1.5rem] overflow-hidden aspect-[3/4] bg-sage-600 shadow-xl">
                <ClientImage
                  src="/images/kendall-hero.jpg"
                  alt="Kendall Pruden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// ── Data ──
const cbtPoints = [
  'Identify negative thought patterns',
  'Develop practical coping strategies',
  'Change unhelpful behaviors',
  'Manage anxiety & depression',
]

const eftPoints = [
  'Deepen emotional self-awareness',
  'Heal attachment wounds',
  'Strengthen couple bonds',
  'Process grief and trauma',
]

// ── Icons ──
function ArrowRight() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckCircle() {
  return (
    <svg className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AboutBrainIcon() {
  return (
    <svg className="w-6 h-6 text-sage-600" viewBox="0 0 24 24" fill="none">
      <path d="M9 3C6.239 3 4 5.239 4 8c0 1.013.3 1.956.815 2.744C3.722 11.389 3 12.614 3 14c0 2.209 1.567 4.053 3.645 4.497C7.198 19.907 8.514 21 10 21c.34 0 .669-.046.984-.13A3.994 3.994 0 0012 21c.353 0 .695-.047 1.016-.13.315.084.644.13.984.13 1.486 0 2.802-1.093 3.355-2.503C19.433 18.053 21 16.209 21 14c0-1.386-.722-2.611-1.815-3.256C19.7 9.956 20 9.013 20 8c0-2.761-2.239-5-5-5-1.022 0-1.97.307-2.756.832A4.987 4.987 0 0010 3c-.428 0-.843.056-1.244.16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AboutHeartIcon() {
  return (
    <svg className="w-6 h-6 text-gold-500" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
