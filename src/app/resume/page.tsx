'use client'

import { NierLine } from '@/components/nier/nier-line'
import { NierPattern } from '@/components/nier/nier-pattern'
import { NierSuggestions } from '@/components/nier/nier-suggestions'
import { ContentShell } from '@/components/shells/content-shell'
import { Header } from '@/components/ui/header'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const backToPage = () => {
    router.push('/')
  }

  return (
    <section className="absolute h-full w-full bg-nier-500 text-nier-900">
      <NierPattern variant={'top'} />

      <Header onClick={backToPage}>RESUME</Header>

      <ContentShell className="flex gap-6">
        <NierLine />

        <section className="projects flex w-full flex-col items-center gap-4 overflow-y-scroll xs:items-start">
          <object
            data="/pdf/profile.pdf"
            type="application/pdf"
            className="h-screen w-full"
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
