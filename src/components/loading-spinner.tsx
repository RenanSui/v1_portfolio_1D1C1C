const LoadingSpinner = () => {
  return (
    <>
      <div className="absolute right-5 top-12 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-nier-300 md:right-16 md:top-32">
        <div className="relative flex h-[44px] w-[44px] items-center justify-center rounded-full border-4 border-nier-900 bg-transparent after:h-10 after:w-10 after:animate-loading after:rounded-full after:border-4 after:border-transparent after:border-t-nier-900">
          <div className="absolute h-6 w-6 rounded-full border-4 border-nier-900 bg-transparent"></div>
        </div>
      </div>
    </>
  )
}

export { LoadingSpinner }
