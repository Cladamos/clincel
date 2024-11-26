import { createBrowserRouter, Outlet, RouterProvider } from "react-router"
import Header from "./components/header"
import Topics from "./components/topicSidebar"
import TopicView, { topic } from "./components/topicView"

const topicDummies: topic[] = [
  {
    title: "Boyum kisa",
    count: 9912392,
    route: "boyum-kisa",
    entrys: [
      {
        text: "Beni zaten Kim neden sevsinki cirkinim ne uzunum ne zayifim ne kasliyim hicbir ozelligim yok yalniz oldum ve yanlniz ölucem benim yaratilma amacim insanlar sevdikleriyle mutluyken uzaktan izlemek",
        vote: 232,
        username: "arda_ozkul123",
      },
      { text: "vallaha benim boyda cok kisa nasil yapicazz yaaaa", vote: 0, username: "cladamos" },
    ],
  },
]

for (let i = 0; i < 15; i++) {
  topicDummies.push(topicDummies[0])
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-custom-background text-custom-text h-screen">
        <Header />
        <div className="container max-w-screen-xl md:mx-auto flex flex-row p-4 py-8 gap-10">
          <Topics topics={topicDummies} />
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: ":topic",
        element: <TopicView topics={topicDummies} />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
