import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './_components/theme-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hudson Sena',
  description: 'Landing Page de teste para outras landing pages. O principal intuito nesse projeto, é criar uma landing page base usando Next e Tailwind como forma de estudo dos mesmos, e com isso, facilitar a criação de outras landing pages futuras.',
  keywords: [
    'Nexts.js',
    'Next.js 14',
    'React.js',
    'Hudson Sena',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS'
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
