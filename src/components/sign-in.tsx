import { IconX } from "@tabler/icons-react"
import { FormEvent, useEffect, useState } from "react"
import Input from "./input"
import { useTranslation } from "react-i18next"

type signInProps = {
  opened: boolean
  isAnimating: boolean
  close: () => void
  handleOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

function SignIn(props: signInProps) {
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  })
  const [errors, setErrors] = useState({
    username: false,
    nickname: false,
    password: false,
    passwordConfirm: false,
  })
  const [isTouched, setIsTouched] = useState(false)

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const { t } = useTranslation()

  useEffect(() => {
    if (isTouched) {
      validateForm()
    }
  }, [formData])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    validateForm()
    setIsTouched(true)
  }

  useEffect(() => {
    handleClose()
  }, [props.opened])

  const handleClose = () => {
    setFormData({
      username: "",
      nickname: "",
      password: "",
      passwordConfirm: "",
    })
    setErrors({ username: false, nickname: false, password: false, passwordConfirm: false })
    setIsTouched(false)
  }

  // const validateField = (field: string, value: string) => {
  //   setErrors((prev) => {
  //     const newErrors = { ...prev }

  //     if (field === "username") {
  //       newErrors.username = value.length < 3
  //     } else if (field === "nickname") {
  //       newErrors.nickname = value.length < 3
  //     } else if (field === "password") {
  //       newErrors.password = value.length < 7
  //     } else if (field === "passwordConfirm") {
  //       newErrors.passwordConfirm = value !== pass
  //     }

  //     console.log(pass)

  //     return newErrors
  //   })
  // }

  const validateForm = () => {
    const newErrors = {
      username: formData.username.length < 3,
      nickname: formData.nickname.length < 3,
      password: formData.password.length < 7,
      passwordConfirm: formData.password !== formData.passwordConfirm,
    }

    setErrors(newErrors)
  }
  const inputDatas = [
    {
      label: t("sign-in-page.username"),
      value: formData.username,
      name: "username",
      err: errors.username,
      errMessage: t("sign-in-page.username-err"),
    },
    {
      label: t("sign-in-page.nickname"),
      value: formData.nickname,
      name: "nickname",
      err: errors.nickname,
      errMessage: t("sign-in-page.nickname-err"),
    },
    {
      label: t("sign-in-page.password"),
      value: formData.password,
      name: "password",
      err: errors.password,
      errMessage: t("sign-in-page.password-err"),
    },
    {
      label: t("sign-in-page.confirm-password"),
      value: formData.passwordConfirm,
      name: "passwordConfirm",
      err: errors.passwordConfirm,
      errMessage: t("sign-in-page.confirm-password-err"),
    },
  ]
  return (
    <div
      onClick={props.handleOutsideClick}
      id="sign-in"
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        props.opened || props.isAnimating ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-custom-background rounded-lg shadow-lg max-w-sm w-full p-6 relative">
        <button onClick={props.close} id="closeModal" className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 active:translate-y-0.5">
          <IconX />
        </button>
        <p className="text-2xl font-bold">{t("sign-in-page.sign-in")}</p>
        <form onSubmit={handleSubmit}>
          <div className="pt-4 flex flex-col gap-3">
            {inputDatas.map((i, index) => (
              <Input
                key={index}
                label={i.label}
                type="text"
                onChange={handleChange}
                name={i.name}
                value={i.value}
                error={{ err: i.err, errMessage: i.errMessage }}
              />
            ))}
            <button type="submit" className="text-gray-50 bg-primary rounded-md p-2 hover:bg-secondary active:translate-y-0.5 w-full mt-4">
              {t("sign-in-page.sign-in")}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignIn
