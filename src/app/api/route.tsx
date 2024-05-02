import React from 'react';
import EmailSection from '../components/EmailSection';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const FromEmail = process.env.FROM_EMAIL;



export async function POST(req:any, res:any) {
    const {body} = await req.json();
    const {email, subject, message} = body;
  try {
    const data = await resend.emails.send({
      from:"",
      to: ['malka.shah12@gmail.com',email],
      subject: subject,
      react: (<>
      <p>
        <h1>Thank You for Contacting Us</h1>
        {message}
      </p>
      </>

      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
