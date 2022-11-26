import { createTransport, SentMessageInfo } from 'nodemailer';

const defaultTo = process.env.PERSONAL_EMAIL;

const sendMail = async (
  subject: string,
  text: string,
  to: string = defaultTo
): Promise<SentMessageInfo> => {
  return await createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_PASSWORD
    }
  }).sendMail({
    from: process.env.SENDER_EMAIL,
    to,
    subject,
    text
  });
};

export default sendMail;
