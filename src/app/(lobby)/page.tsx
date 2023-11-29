import { Screens } from '@/components/screens'

export type ScreenStates =
  | 'boot-screen'
  | 'loading-screen'
  | 'menu-screen'
  | 'devices'

export default function Home() {
  return (
    <main className="relative h-screen w-screen text-zinc-100">
      <Screens />
    </main>
  )
}
