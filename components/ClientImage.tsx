'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ClientImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
  initials?: string
}

/**
 * Renders a Next.js Image with a warm gradient placeholder fallback.
 * Shows a sage/warm gradient with initials when the image file is missing.
 */
export default function ClientImage({
  src,
  alt,
  fill = true,
  className = 'object-cover',
  priority = false,
  initials = 'KP',
}: ClientImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-sage-200 via-warm-100 to-sage-300 flex flex-col items-center justify-center gap-3">
        <div className="w-20 h-20 rounded-full bg-sage-400/40 flex items-center justify-center">
          <span className="font-serif text-2xl font-semibold text-sage-800">{initials}</span>
        </div>
        <p className="text-sage-700 text-xs text-center px-6 font-medium">
          Add photo to<br />
          <span className="font-mono text-[10px] text-sage-600 break-all">{src}</span>
        </p>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  )
}
