import classNames from "classnames"
import { Dispatch, SetStateAction } from "react"
import { useTranslation } from "react-i18next"

type textareaProps = {
  input: string
  setInput: Dispatch<SetStateAction<string>>
} & (
  | {
      counter?: false
      chaLimit?: never
      chaLeftShowcase?: never
      chaWarning?: never
      extraChaCount?: never
    }
  | {
      counter: true
      chaLimit: number
      chaLeftShowcase: number
      chaWarning: number
      extraChaCount: number
    }
)

function Textarea({ input, setInput, counter, chaLimit, chaLeftShowcase, chaWarning, extraChaCount }: textareaProps) {
  const { t } = useTranslation()
  const counterClass =
    chaLimit !== undefined && chaLeftShowcase !== undefined && chaWarning !== undefined
      ? classNames(
          "text-lg text-custom-text",
          { hidden: chaLimit - input.length >= chaLeftShowcase },
          { "text-red-500": input.length > chaLimit },
          { "text-secondary": input.length > chaLimit - chaWarning && !(input.length > chaLimit) },
        )
      : classNames("hidden")

  return (
    <div className="pt-4 flex flex-col gap-2">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={25}
        maxLength={chaLimit ? (extraChaCount ? chaLimit + extraChaCount : extraChaCount) : undefined}
        spellCheck={false}
        className="border rounded-md p-2 w-full bg-white dark:bg-gray-800 dark:border-gray-700 resize-none no-underline"
      />
      {counter ? (
        <p className={counterClass}>
          {chaLimit! - input.length < 0
            ? t("create-entry.limit-exceeded.part-1") + " " + (input.length - chaLimit!) + " " + t("create-entry.limit-exceeded.part-2")
            : t("create-entry.character-limit") + " " + (chaLimit! - input.length)}
        </p>
      ) : (
        <></>
      )}
    </div>
  )
}
export default Textarea
