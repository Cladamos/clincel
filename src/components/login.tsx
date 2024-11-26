import { IconX } from "@tabler/icons-react"
import Input from "./input"
import { useTranslation } from "react-i18next"

type loginProps = {
  opened: boolean
  isAnimating: boolean
  close: () => void
  handleOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

function Login(props: loginProps) {
  const { t } = useTranslation("translation")

  return (
    <div
      onClick={props.handleOutsideClick}
      id="login"
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        props.opened || props.isAnimating ? "opacity-100" : "opacity-0 pointer-events-none "
      }`}
    >
      <div className="bg-custom-background rounded-lg shadow-lg max-w-sm w-full p-6 relative">
        <button onClick={props.close} id="closeModal" className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 active:translate-y-0.5">
          <IconX />
        </button>
        <p className="text-2xl font-bold">Login</p>
        <div className="pt-4 flex flex-col gap-3">
          <Input label={t("login-page.login")} />
          <Input label="Password" />
          <button className="text-gray-50 bg-primary rounded-md p-2 hover:bg-secondary active:translate-y-0.5 w-full mt-4">Log in</button>
        </div>
      </div>
    </div>
  )
}
export default Login
