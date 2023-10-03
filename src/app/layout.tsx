import { NierPattern2 } from '@/components/nier/nier-pattern2'
import { NierVignette } from '@/components/nier/nier-vignette'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { RodinPro } from '@/lib/fonts'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
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
        <Toaster position="top-center" expand={false} />
        <NierPattern2 />
        <NierVignette />
        <TailwindIndicator />
      </body>
    </html>
  )
}
