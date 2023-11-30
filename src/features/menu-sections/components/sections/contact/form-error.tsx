export const FormError = ({
  errorMessage,
}: {
  errorMessage: string | undefined
}) => {
  if (!errorMessage) {
    return (
      <p
        className="w-full max-w-[590px] pt-1 opacity-0"
        aria-hidden={true}
        aria-disabled={true}
        hidden={!!errorMessage}
      >
        .
      </p>
    )
  }

  return (
    <p className="w-full max-w-[590px] pt-1 text-red-800">{errorMessage}</p>
  )
}
