'use client'

import { NierButton, NierPattern } from '@/features/nier'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const backToPage = () => router.push('/')

  return (
    <main className="relative flex min-h-screen flex-col bg-nier-light-100">
      <NierPattern variant="block" />

      <div className="flex flex-1 flex-col">
        <NierButton
          className="mx-2 flex self-start"
          onClick={backToPage}
          reverse
        >
          Back to Portfolio
        </NierButton>
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
