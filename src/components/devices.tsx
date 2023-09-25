import { ScreenStates } from '@/app/(lobby)/page'
import { Dispatch, SetStateAction } from 'react'

interface DeviceProps {
  setScreenState: Dispatch<SetStateAction<ScreenStates>>
}

const Devices = ({ setScreenState }: DeviceProps) => {
  return (
    <div>
      <h1>Devices</h1>

      <section className="md:hidden">
        <h1>Mobile</h1>
      </section>
      <section className="hidden md:block xl:hidden">
        <h1>Tablet</h1>
      </section>
      <section className="hidden xl:block">
        <h1>Desktop</h1>
      </section>
    </div>
  )
}

export { Devices }
