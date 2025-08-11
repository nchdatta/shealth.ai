import Footer from '@/components/layout/footer';
import RootProvider from '@/components/providers/root-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shealth AI',
  description: 'Your AI-powered health companion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <RootProvider>
          {children}

          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
