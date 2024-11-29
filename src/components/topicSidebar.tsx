import { Link } from "react-router"
import { topic } from "./topicView"
import { useTranslation } from "react-i18next"
import { IconPlus } from "@tabler/icons-react"
import { useState } from "react"
import CreateTopic from "./createTopic"

function Topics(props: { topics: topic[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const closeModal = () => {
    setIsAnimating(true)
    setIsAnimating(false)
    setIsOpen(false)
  }

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "topic-creation") {
      closeModal()
    }
  }
  const { t } = useTranslation()
  return (
    <>
      <div className="flex flex-col w-64 gap-4">
        <p className="text-xl pb-2 px-4 border-b-2 dark:border-gray-700 border-gray-200">{t("topic-sidebar.topics")}</p>
        <div className="flex flex-col gap-2 max-h-[calc(100vh-20rem)] overflow-y-scroll scrollbar-thin dark:scrollbar-thumb-gray-500 scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {props.topics.map((e) => (
            <Link to={e.route}>
              <div className="box-border h-16 w-xs p-3 rounded-md hover:bg-custom-hover">
                <div className="flex flex-row justify-between gap-4">
                  <p className="text-sm line-clamp-2">{e.title}</p>
                  <p className="text-sm text-gray-400">{e.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="border-b-2 dark:border-gray-700 border-gray-200"></div>
        <button
          onClick={() => setIsOpen((o) => !o)}
          className="text-gray-50 bg-primary rounded-md p-2 w-full mt-2 hover:bg-secondary active:translate-y-0.5"
        >
          <div className="flex flex-row gap-2 justify-center">
            <IconPlus />
            <p className="text-md">{t("topic-sidebar.create")}</p>
          </div>
        </button>
      </div>
      <CreateTopic close={closeModal} isAnimating={isAnimating} opened={isOpen} handleOutsideClick={handleOutsideClick} />
    </>
  )
}
export default Topics
