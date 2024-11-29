import { IconX } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"

type createTopicProps = {
  opened: boolean
  isAnimating: boolean
  close: () => void
  handleOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

function CreateTopic(props: createTopicProps) {
  const { t } = useTranslation()
  return (
    <div
      onClick={props.handleOutsideClick}
      id="topic-creation"
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        props.opened || props.isAnimating ? "opacity-100" : "opacity-0 pointer-events-none "
      }`}
    >
      <div className="bg-custom-background rounded-lg shadow-lg max-w-xl w-full p-6 relative">
        <button onClick={props.close} id="closeModal" className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 active:translate-y-0.5">
          <IconX />
        </button>
        <p className="text-2xl font-bold">{t("create-topic.create")}</p>
      </div>
    </div>
  )
}
export default CreateTopic
