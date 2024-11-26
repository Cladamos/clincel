import { IconBottleFilled, IconMoon, IconSun } from "@tabler/icons-react"
import Login from "./login"
import SignIn from "./sign-in"
import { useEffect, useState } from "react"
import LaunguageSelector from "./launguageSelector"

function Header() {
  const [openedLogin, setOpenedLogin] = useState(false)
  const [isLoginAnimating, setIsLoginAnimating] = useState(false)
  const [openedSignIn, setOpenedSignIn] = useState(false)
  const [isSignInAnimating, setIsSignInAnimating] = useState(false)

  const handleOutsideClickLogin = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "login") {
      closeLoginModal()
    }
  }
  const handleOutsideClickSignIn = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "sign-in") {
      closeSignInModal()
    }
  }
  const closeLoginModal = () => {
    setIsLoginAnimating(true)
    setIsLoginAnimating(false)
    setOpenedLogin(false)
  }
  const closeSignInModal = () => {
    setIsSignInAnimating(true)
    setIsSignInAnimating(false)
    setOpenedSignIn(false)
  }

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" || false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <>
      <div className="container max-w-screen-xl md:mx-auto p-5 flex flex-row justify-between border-b-2 dark:border-gray-700 border-gray-200">
        <div className="flex flex-row gap-0.5 items-center">
          <IconBottleFilled className="fill-primary size-7" />
          <div className="flex flex-row">
            <p className="text-2xl font-bold">Clinc</p>
            <p className="text-2xl font-bold text-primary">el</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <button onClick={() => setOpenedLogin((o) => !o)} className="p-2 px-4 rounded-md hover:bg-custom-hover active:translate-y-0.5">
            Login
          </button>
          <button
            onClick={() => setOpenedSignIn((o) => !o)}
            className="p-2 px-4 rounded-lg text-primary hover:bg-custom-hover active:translate-y-0.5"
          >
            Sign-in
          </button>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => {
                setDarkMode((t) => !t)
              }}
              className="bg-primary p-2 rounded-full hover:bg-secondary text-gray-50 active:translate-y-0.5"
            >
              {darkMode ? <IconMoon /> : <IconSun />}
            </button>
            <LaunguageSelector />
          </div>
        </div>
      </div>
      <Login opened={openedLogin} isAnimating={isLoginAnimating} close={closeLoginModal} handleOutsideClick={handleOutsideClickLogin} />
      <SignIn opened={openedSignIn} isAnimating={isSignInAnimating} close={closeSignInModal} handleOutsideClick={handleOutsideClickSignIn} />
    </>
  )
}
export default Header
