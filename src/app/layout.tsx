import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Pattern } from '@/components/ui/pattern'
import { Vignette } from '@/components/ui/vignette'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-black ${inter.className}`}>
        {children}
        <Pattern />
        <Vignette />
        <TailwindIndicator />
      </body>
    </html>
  )
}
