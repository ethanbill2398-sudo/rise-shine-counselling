import type { Metadata } from 'next'
import WorkshopFormEmbed from '@/components/WorkshopFormEmbed'

export const metadata: Metadata = {
  title: 'Book a Counselling Session in Saskatoon | Contact Kendall Pruden',
  description:
    'Get in touch with Kendall Pruden, M.A., MCPC, to book a counselling session in Saskatoon or online across Saskatchewan. Call, text, or email — no automated portals.',
  alternates: { canonical: '/contact' },
}

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
                  Briarwood, Saskatoon, SK
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
                <WorkshopFormEmbed />
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
            <p className="font-medium text-warm-800">Briarwood, Saskatoon, SK</p>
            <a
              href="https://maps.google.com/?q=Briarwood+Saskatoon+SK"
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
    value: 'Briarwood, Saskatoon, SK',
    href: 'https://maps.google.com/?q=Briarwood+Saskatoon+SK',
  },
]

const steps = [
  'Fill out the form with your name, phone, and a convenient time to call.',
  'Kendall will reach out to you within 1–2 business days.',
  "You'll have a brief chat to ensure it's a good fit.",
  'Schedule your first session — in person or online.',
]

