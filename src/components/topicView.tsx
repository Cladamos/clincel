import { IconWriting } from "@tabler/icons-react"
import { useState } from "react"
import { useParams } from "react-router"
import CreateEntry from "./createEntry"

export type topic = {
  title: string
  count: number
  route: string
  entrys?: entry[]
}

export type entry = {
  text: string
  vote: number
  username: string
}

function TopicView(props: { topics: topic[] }) {
  const title = useParams().topic
  const topic = props.topics.find((t) => t.route == title)

  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const closeLoginModal = () => {
    setIsAnimating(true)
    setIsAnimating(false)
    setIsOpen(false)
  }

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "entry-creation") {
      closeLoginModal()
    }
  }

  return (
    <>
      <div className="w-[calc(100vh-16rem)] p-8">
        <div className="flex flex-row justify-between items-start space-x-4 border-b-2 dark:border-gray-700 border-gray-200 pb-4">
          <p className="text-2xl font-bold max-w-[calc(100%-3rem)]">{topic?.title}</p>
          <button onClick={() => setIsOpen((o) => !o)} className="bg-primary p-2 rounded-md hover:bg-secondary text-gray-50 active:translate-y-0.5">
            <IconWriting />
          </button>
        </div>

        <div className="flex flex-col pt-8 gap-20">
          {topic?.entrys?.map((e) => (
            <div key={e.text}>
              <p>{e.text}</p>
              <p className="flex justify-end">{"-" + e.username}</p>
            </div>
          ))}
        </div>
      </div>
      <CreateEntry opened={isOpen} close={closeLoginModal} isAnimating={isAnimating} handleOutsideClick={handleOutsideClick} />
    </>
  )
}

export default TopicView
