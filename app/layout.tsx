import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { Hind } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const hind = Hind({
  weight: ['300','400','500','600','700'],
  preload: false,
})

export const metadata = {
  title: 'Know Me',
  description: 'Created by Jaival Saija',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}>
      <html lang="en">
        <Head>
          <title>Know Me</title>
        </Head>
        <body className={hind.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
