import { BootScreen } from '@/components/BootScreen'
import { LoadingScreen } from '@/components/LoadingScreen'

export default function Home() {
  return (
    <>
      <main className="h-screen w-screen bg-zinc-800 text-zinc-100">
        <BootScreen />
        <LoadingScreen />
      </main>
    </>
  )
}
