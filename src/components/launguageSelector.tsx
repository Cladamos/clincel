import { IconLanguage } from "@tabler/icons-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

function LaunguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const { t, i18n } = useTranslation()

  const handleChange = () => {
    if (isOpen) {
      setIsAnimating(true)
      setTimeout(() => {
        setIsOpen(false)
        setIsAnimating(false)
      }, 100)
    } else {
      setIsAnimating(true)
      setIsOpen(true)
      setTimeout(() => setIsAnimating(false), 100)
    }
  }

  const changeLanguage = (l: "en" | "tr") => {
    handleChange()
    i18n.changeLanguage(l)
  }

  return (
    <div className="relative">
      <button onClick={handleChange} className="bg-primary p-2 rounded-lg hover:bg-secondary text-gray-50 active:translate-y-0.5">
        <IconLanguage />
      </button>

      {isOpen && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 mt-2 rounded-md bg-custom-background shadow-lg border dark:border-gray-700 p-1 transition-all transation-duration-100 ${
            isAnimating ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <button onClick={() => changeLanguage("tr")} className="w-full px-4 py-2 text-custom-text hover:bg-custom-hover active:translate-y-0.5">
            {t("language-selector.turkish")}
          </button>
          <button onClick={() => changeLanguage("en")} className="w-full px-4 py-2 text-custom-text hover:bg-custom-hover active:translate-y-0.5">
            {t("language-selector.english")}
          </button>
        </div>
      )}
    </div>
  )
}
export default LaunguageSelector
