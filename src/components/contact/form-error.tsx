export const FormError = ({
  errorMessage,
}: {
  errorMessage: string | undefined
}) => {
  if (!errorMessage) return null

  return (
    <p className="w-full max-w-[590px] py-1 text-red-800">{errorMessage}</p>
  )
}
