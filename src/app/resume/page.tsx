'use client'

import { ContactButton } from '@/components/contact/contact-button'
import { NierPattern } from '@/features/nier'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const backToPage = () => router.push('/')

  return (
    <main className="relative flex min-h-screen flex-col bg-nier-500">
      <NierPattern variant="block" />

      <div className="flex flex-1 flex-col">
        <ContactButton
          className="mx-2 flex self-start"
          onClick={backToPage}
          reverse
        >
          Back to Portfolio
        </ContactButton>

        <object
          data="pdf/resume_renan_neves_atualizado.pdf"
          type="application/pdf"
          className="h-full w-full flex-1 p-2"
        />
      </div>

      <NierPattern variant="block" />
    </main>
  )
}
