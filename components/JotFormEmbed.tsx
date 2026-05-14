'use client'

import { useEffect, useRef } from 'react'

export default function JotFormEmbed({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = src
    script.type = 'text/javascript'
    if (containerRef.current) {
      containerRef.current.appendChild(script)
    }
  }, [src])

  return <div ref={containerRef} />
}
