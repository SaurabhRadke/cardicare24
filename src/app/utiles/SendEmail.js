"use server"
import nodemailer from 'nodemailer';

// Create transporter with existing configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail(data) {
  // Basic validation
  if (!data || !data.Email || !data.Name || !data.Number || !data.Description) {
    return {
      success: false,
      message: 'Missing required fields'
    };
  }

  try {
    // Using your existing email template
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Query for Cardicare",
      html: `
        <h2>Contact Form health checkup</h2>
        <p><strong>Name:</strong> ${data.Name}</p>
        <p><strong>Email:</strong> ${data.Email}</p>
        <p><strong>Phone No:</strong> ${data.Number}</p>
        <p><strong>Query:</strong> ${data.Description}</p>
        ${data.Company ? `<p><strong>Company:</strong> ${data.Company}</p>` : ''}
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);

    if (result) {
      return {
        success: true,
        message: 'Email sent successfully',
        data: result
      };
    } else {
      return {
        success: false,
        message: 'Failed to send email'
      };
    }

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: error.message || 'Failed to send email',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    };
  }
}

// Add a validation function if needed
export function validateEmailData(data) {
  const errors = [];

  if (!data.Email?.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.Email)) {
    errors.push('Invalid email format');
  }

  if (!data.Name?.trim()) {
    errors.push('Name is required');
  }

  if (!data.Number?.trim()) {
    errors.push('Phone number is required');
  } else if (!/^\d{10}$/.test(data.Number)) {
    errors.push('Invalid phone number format');
  }

  if (!data.Description?.trim()) {
    errors.push('Query description is required');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// For handling Next.js API route if needed
export async function POST(req) {
  try {
    const data = await req.json();
    
    // Validate the data
    const validation = validateEmailData(data);
    if (!validation.isValid) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Send email
    const result = await sendEmail(data);

    if (result.success) {
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify(result), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

  } catch (error) {
    console.error('API Route Error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}