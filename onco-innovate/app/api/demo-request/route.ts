import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In production, use environment variables for these
const SMTP_CONFIG = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password'
  }
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@oncoinnovate.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, product } = body

    // Validate required fields
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport(SMTP_CONFIG)

    // Email to admin
    const adminMailOptions = {
      from: SMTP_CONFIG.auth.user,
      to: ADMIN_EMAIL,
      subject: `New Demo Request: ${product}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0076e6;">New Demo Request</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Product:</strong> ${product}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 10px; border-radius: 4px;">
              ${message || 'No message provided'}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This request was submitted from OncoInnovate website.
          </p>
        </div>
      `
    }

    // Confirmation email to user
    const userMailOptions = {
      from: SMTP_CONFIG.auth.user,
      to: email,
      subject: 'Demo Request Received - OncoInnovate',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0076e6 0%, #00e68f 100%); padding: 30px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">OncoInnovate</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333;">Thank you for your interest, ${name}!</h2>
            <p style="color: #666; line-height: 1.6;">
              We've received your demo request for <strong>${product}</strong>. 
              Our team will contact you within 24 hours to schedule a personalized demonstration.
            </p>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0076e6; margin-top: 0;">What's Next?</h3>
              <ul style="color: #666; line-height: 1.8;">
                <li>A specialist will review your requirements</li>
                <li>We'll schedule a convenient time for your demo</li>
                <li>You'll receive personalized insights for your use case</li>
              </ul>
            </div>
            <p style="color: #666;">
              If you have any immediate questions, feel free to reach out to us at 
              <a href="mailto:info@oncoinnovate.com" style="color: #0076e6;">info@oncoinnovate.com</a>
            </p>
          </div>
          <div style="background: #333; color: #999; padding: 20px; text-align: center; font-size: 12px;">
            © 2024 OncoInnovate. All rights reserved.
          </div>
        </div>
      `
    }

    // Send emails (in production, handle this asynchronously)
    if (process.env.NODE_ENV === 'production') {
      await transporter.sendMail(adminMailOptions)
      await transporter.sendMail(userMailOptions)
    }

    // Store in database (implement your database logic here)
    // For now, we'll just log it
    console.log('Demo request received:', { name, email, company, product })

    return NextResponse.json(
      { message: 'Demo request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing demo request:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}