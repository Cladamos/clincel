import { useParams } from "react-router"

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

  return (
    <div className="w-[calc(100vh-16rem)] p-8">
      <p className="text-2xl font-bold">{topic?.title}</p>
      <div className="flex flex-col pt-8 gap-20">
        {topic?.entrys?.map((e) => (
          <div key={e.text}>
            <p>{e.text}</p>
            <p className="flex justify-end">{"-" + e.username}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopicView
