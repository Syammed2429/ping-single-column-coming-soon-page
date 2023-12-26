import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const libreFranklin = Libre_Franklin({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ping single column coming soon page',
  description: 'Created by Dada',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={libreFranklin.className}>
        {children}
        <Toaster position='bottom-right' />
      </body>
    </html>
  );
}
