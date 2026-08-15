import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'salehinia.i@gmail.com'

  try {
    const body = await request.json()
    const { name, phone, email, postcode, service, urgency, preferredDate, message } = body

    if (!name || !phone || !email || !postcode || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const urgencyLabel: Record<string, string> = {
      standard: 'Standard — anytime this week',
      soon: 'As soon as possible',
      emergency: 'Emergency — today if possible',
    }

    await resend.emails.send({
      from: 'BuilderFix Glazing <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Quote Request — ${service} — ${postcode}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background: #0f2442; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Quote Request</h1>
            <p style="color: #94a3b8; margin: 4px 0 0; font-size: 14px;">BuilderFix Glazing — builderfix.co.uk</p>
          </div>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 140px; color: #64748b; font-size: 14px; font-weight: 600;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 700;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; font-weight: 600;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 700;">
                  <a href="tel:${phone.replace(/\s/g, '')}" style="color: #f97316; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; font-weight: 600;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="background: #fff7ed;">
                <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; color: #64748b; font-size: 14px; font-weight: 600; padding-left: 8px;">📍 Postcode</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; font-size: 16px; color: #0f172a; font-weight: 900; padding-left: 8px;">${postcode.toUpperCase()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; font-weight: 600;">Service</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 700;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; font-weight: 600;">Urgency</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: ${urgency === 'emergency' ? '#dc2626' : '#0f172a'}; font-weight: ${urgency === 'emergency' ? '700' : '400'};">
                  ${urgencyLabel[urgency] ?? urgency}
                </td>
              </tr>
              ${preferredDate ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; font-weight: 600;">Preferred Date</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a;">${preferredDate}</td>
              </tr>` : ''}
            </table>

            ${message ? `
            <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="margin: 0 0 8px; font-size: 13px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; font-size: 14px; color: #0f172a; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>` : ''}

            <div style="text-align: center; margin-top: 8px;">
              <a href="tel:${phone.replace(/\s/g, '')}" style="display: inline-block; background: #f97316; color: #fff; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-size: 15px;">
                📞 Call ${name.split(' ')[0]} back
              </a>
            </div>

          </div>
          <p style="text-align: center; font-size: 12px; color: #94a3b8; margin-top: 16px;">
            BuilderFix Glazing · builderfix.co.uk · Reply to this email to contact the customer directly.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
