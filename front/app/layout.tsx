import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import TopLoader from '@/components/common/top-loader';
import Header from '@/components/header/header';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import ReduxProvider from '@/components/common/redux-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Flat Rentals',
  description: 'Flat Rentals',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col antialiased',
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ReduxProvider>
          <TopLoader />
          <Header />
          <main className="container flex flex-grow flex-col py-4">
            {children}
          </main>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
