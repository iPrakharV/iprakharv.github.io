import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Grain } from '@/components/Grain'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prakhar Verma',
  description:
    'Full-Stack Developer, AI Enthusiast, and Community Leader. Co-Founder at Prepify Studio. GDG Campus Organizer at Purdue University.',
  keywords: [
    'Prakhar Verma',
    'Developer',
    'Portfolio',
    'Purdue University',
    'GDG',
    'CodeDay',
    'Full-Stack',
  ],
  authors: [{ name: 'Prakhar Verma', url: 'https://iprakharv.github.io' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSerifDisplay.variable} ${dmMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Grain />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
