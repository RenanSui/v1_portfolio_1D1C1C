import { LoadingText } from '../loading/loading-text'
import { NierSquare } from '../nier/nier-square'

export const CustomToaster = () => {
  return (
    <section className="relative z-40 w-full max-w-[600px] cursor-default bg-nier-500 pb-4 text-nier-700 blur-[0.8px]">
      <h1 className="flex items-center gap-3 bg-nier-700 p-3 py-2 tracking-[0.4em] text-nier-600 md:text-xl">
        <NierSquare className="h-[20px] w-[20px] cursor-default bg-nier-600" />
        <LoadingText>SYSTEM MESSAGE</LoadingText>
      </h1>
      <p className="mx-8 mt-4 text-lg text-black">Message Sended.</p>
      <div className="mx-3 mt-20 h-[1px] bg-nier-700 opacity-70" />
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-50 bg-[url(/images/pattern.png)] bg-[length:5px_5px] bg-repeat opacity-[0.07]" />
    </section>
  )
}
