import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Pattern } from '@/components/ui/pattern'
import { Vignette } from '@/components/ui/vignette'
import { RodinPro } from '@/lib/fonts'
import { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Renan Sui',
  description: "Renan Sui's Personal Portfolio",
  metadataBase: new URL('https://renansui.vercel.app'),
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
      <body className={`bg-black ${RodinPro.className}`} data-menu="0">
        {children}
        <Pattern />
        <Vignette />
        <TailwindIndicator />
      </body>
    </html>
  )
}
