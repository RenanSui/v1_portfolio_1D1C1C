'use client'

import { ContactButton } from '@/components/contact/contact-button'
import { NierLine } from '@/components/nier/nier-line'
import { NierPattern } from '@/components/nier/nier-pattern'
import { NierSuggestions } from '@/components/nier/nier-suggestions'
import { ContentShell } from '@/components/shells/content-shell'
import { Header } from '@/components/ui/header'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const backToPage = () => {
    router.push('/')
  }

  return (
    <section className="absolute h-full w-full bg-nier-500 text-nier-900 blur-[0.7px]">
      <NierPattern variant={'top'} />

      <Header onClick={backToPage}>RESUME</Header>

      <div className="mx-3 mb-6 flex gap-4 md:mx-12">
        <Link href={'/pdf/resume_renan_neves.pdf'} target="_blank">
          <ContactButton>Download Resume PDF</ContactButton>
        </Link>
      </div>

      <ContentShell className="flex gap-6 md:max-h-[45vh] xl:max-h-[55vh] 2xl:max-h-[60vh]">
        <NierLine />

        <section className="projects flex w-full flex-col items-center gap-4 overflow-y-scroll xs:items-start">
          <object
            data="pdf/resume_renan_neves.pdf"
            type="application/pdf"
            className="relative z-[60] h-screen w-full"
          ></object>
        </section>
      </ContentShell>

      <NierSuggestions onClick={backToPage}>
        Adjust website settings
      </NierSuggestions>

      <NierPattern variant={'bottom'} />
    </section>
  )
}
