import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: '700',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Bastián Paredes",
  description: "Bastián's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
