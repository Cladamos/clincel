import { IconSend, IconX } from "@tabler/icons-react"
import classNames from "classnames"
import { useState } from "react"
import { useTranslation } from "react-i18next"

type createEntryProps = {
  opened: boolean
  isAnimating: boolean
  close: () => void
  handleOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

function CreateEntry(props: createEntryProps) {
  const [input, setInput] = useState("")
  const { t } = useTranslation()

  const chaLimit = 500,
    chaLeftShowcase = 100,
    chaWarning = 25,
    extraChaCount = 250

  const buttonInputClass = classNames(
    "text-gray-50 bg-primary rounded-md p-2  w-full mt-4",
    {
      "opacity-50 cursor-not-allowed": input.length > chaLimit,
    },
    { "hover:bg-secondary active:translate-y-0.5": !(input.length > chaLimit) },
  )

  const counterClass = classNames(
    "text-lg text-custom-text",
    { hidden: chaLimit - input.length >= chaLeftShowcase },
    { "text-red-500": input.length > chaLimit },
    { "text-secondary": input.length > chaLimit - chaWarning && !(input.length > chaLimit) },
  )

  return (
    <div
      onClick={props.handleOutsideClick}
      id="entry-creation"
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        props.opened || props.isAnimating ? "opacity-100" : "opacity-0 pointer-events-none "
      }`}
    >
      <div className="bg-custom-background rounded-lg shadow-lg max-w-xl w-full p-6 relative">
        <button onClick={props.close} id="closeModal" className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 active:translate-y-0.5">
          <IconX />
        </button>
        <p className="text-2xl font-bold">{t("create-entry.prepare")}</p>
        <div className="pt-4 flex flex-col gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={25}
            maxLength={chaLimit + extraChaCount}
            spellCheck={false}
            className="border rounded-md p-2 w-full bg-white dark:bg-gray-800 dark:border-gray-700 resize-none no-underline"
          />
          <p className={counterClass}>
            {chaLimit - input.length < 0
              ? t("create-entry.limit-exceeded.part-1") + " " + (input.length - chaLimit) + " " + t("create-entry.limit-exceeded.part-2")
              : t("create-entry.character-limit") + " " + (chaLimit - input.length)}
          </p>
          <button className={buttonInputClass} disabled={input.length > chaLimit}>
            <div className="flex flex-row gap-2 justify-center">
              <IconSend />
              <p className="text-md">{t("create-entry.send")}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
export default CreateEntry
