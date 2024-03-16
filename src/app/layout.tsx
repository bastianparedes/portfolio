import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import background from './background.jpg';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bastián Paredes'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${urbanist.className} bg-sky-800`}>
        <Image
          alt={'Background'}
          className="w-full h-auto min-h-full object-cover fixed -z-10"
          loading="lazy"
          src={background}
        />
        {children}
      </body>
    </html>
  );
}
