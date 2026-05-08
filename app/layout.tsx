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
  metadataBase: new URL('https://iprakharv.com'),
  title: {
    default: 'Prakhar Verma',
    template: '%s | Prakhar Verma',
  },
  description:
    'Computer science honors student at Purdue Fort Wayne building full-stack, ML, and hardware projects.',
  keywords: [
    'Prakhar Verma',
    'Software Developer',
    'Portfolio',
    'Purdue University',
    'GDG',
    'CodeDay',
    'Full-Stack Developer',
    'Machine Learning',
    'IoT',
  ],
  authors: [{ name: 'Prakhar Verma', url: 'https://iprakharv.com' }],
  creator: 'Prakhar Verma',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Prakhar Verma',
    description:
      'Computer science honors student at Purdue Fort Wayne building full-stack, ML, and hardware projects.',
    url: 'https://iprakharv.com',
    siteName: 'Prakhar Verma',
    type: 'website',
  },
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
