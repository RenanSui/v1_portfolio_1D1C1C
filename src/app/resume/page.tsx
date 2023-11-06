'use client'

import { ContactButton } from '@/components/contact/contact-button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const backToPage = () => {
    router.push('/')
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex bg-nier-500 p-2">
        <ContactButton reverse onClick={backToPage}>
          Back to Portfolio
        </ContactButton>
      </div>
      <div className="flex-1 bg-nier-500">
        <object
          data="pdf/resume_renan_neves_atualizado.pdf"
          type="application/pdf"
          className="relative z-[60] h-full w-full p-2 pt-0"
        />
      </div>
    </div>
  )
}
