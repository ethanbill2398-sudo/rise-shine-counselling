'use client'

import { useEffect } from 'react'

export default function WorkshopFormEmbed() {
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
