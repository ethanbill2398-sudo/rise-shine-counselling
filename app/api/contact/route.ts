import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const {
      name,
      email,
      phone,
      contactTime,
      sessionType,
      message,
      organization,
      format,
      groupSize,
      formType,
    } = data

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Build email HTML depending on form type
    const isWorkshop = formType === 'workshop'
    const subject = isWorkshop
      ? `Workshop Inquiry from ${name}${organization ? ` — ${organization}` : ''}`
      : `New Booking Request from ${name}`

    const html = isWorkshop
      ? `
        <h2 style="font-family:Georgia,serif;color:#2e1e14;">New Workshop Inquiry</h2>
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;width:160px;"><strong>Name</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;"><strong>Organization</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${organization || '—'}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;"><strong>Email</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;"><strong>Phone</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;"><strong>Format</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${format || '—'}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;"><strong>Group Size</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${groupSize || '—'}</td></tr>
          <tr><td style="padding:8px 12px;color:#6b5538;vertical-align:top;"><strong>Message</strong></td><td style="padding:8px 12px;">${message || '—'}</td></tr>
        </table>
      `
      : `
        <h2 style="font-family:Georgia,serif;color:#2e1e14;">New Booking Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;width:160px;"><strong>Name</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;"><strong>Email</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;"><strong>Phone</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;"><strong>Best Time to Call</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${contactTime || '—'}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#6b5538;"><strong>Session Type</strong></td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${sessionType || '—'}</td></tr>
          <tr><td style="padding:8px 12px;color:#6b5538;vertical-align:top;"><strong>Message</strong></td><td style="padding:8px 12px;">${message || '—'}</td></tr>
        </table>
      `

    // Send via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Rise & Shine Website <noreply@riseandshinecounselling.net>',
          to: ['support@riseandshinecounselling.net'],
          reply_to: email,
          subject,
          html,
        }),
      })

      if (!response.ok) {
        const err = await response.text()
        console.error('Resend error:', err)
        // Still return success to the user — log the error server-side
      }
    } else {
      // Log to console when no email service is configured (development)
      console.log('--- Form Submission (no RESEND_API_KEY configured) ---')
      console.log('Subject:', subject)
      console.log('Data:', data)
      console.log('------------------------------------------------------')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
