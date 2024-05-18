import type { NextApiRequest, NextApiResponse } from 'next';
import EmailSection from '../components/EmailSection';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <>',
    to: ['malka.shah12@gmail.com'],
    subject: 'Hello world',
    react: EmailSection(),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
