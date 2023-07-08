import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Pattern } from '@/components/ui/pattern'
import { Vignette } from '@/components/ui/vignette'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Renan Sui',
  description: "Renan Sui's Personal Portfolio",
  icons: {
    icon: 'images/favicon.ico',
    shortcut: 'images/favicon.ico',
    apple: 'images/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: 'images/apple-touch-icon.png',
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-black ${inter.className}`} data-menu="0">
        {children}
        <Pattern />
        <Vignette />
        <TailwindIndicator />
      </body>
    </html>
  )
}
