import { Link } from "react-router"
import { topic } from "./topicView"

function Topics(props: { topics: topic[] }) {
  return (
    <div className="flex flex-col w-64 ">
      <p className="text-xl pb-2 px-4 border-b-2 dark:border-gray-700 border-gray-200">topics</p>
      <div className="flex flex-col gap-2 mt-4 max-h-[calc(100vh-15rem)] overflow-y-scroll">
        {props.topics.map((e) => (
          <Link to={e.route}>
            <div className="box-border h-16 w-xs p-4 rounded-md hover:bg-custom-hover">
              <div className="flex flex-row justify-between">
                <p className="text-sm">{e.title}</p>
                <p className="text-sm text-gray-400">{e.count}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Topics
