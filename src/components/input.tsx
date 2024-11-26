import { HTMLProps } from "react"
import classNames from "classnames"

type InputProps = {
  label?: string
  error?: { err: boolean; errMessage: string }
} & HTMLProps<HTMLInputElement>

function Input({ label, error, ...rest }: InputProps) {
  const errInputClass = classNames(
    "border rounded-md p-2 w-full bg-white dark:bg-gray-800",
    { "border-red-500": error?.err },
    { "dark:border-gray-700": !error?.err },
  )

  return error ? (
    <div className="bg-custom-background text-custom-text">
      <p className="text-sm">{label}</p>
      <input className={errInputClass} {...rest} />
      {error.err ? <p className="text-red-500">{error.errMessage}</p> : null}
    </div>
  ) : (
    <div className="bg-custom-background text-custom-text">
      <p className="text-sm">{label}</p>
      <input className="border rounded-md p-2 w-full bg-white dark:bg-gray-800 dark:border-gray-700" {...rest} />
    </div>
  )
}
export default Input
