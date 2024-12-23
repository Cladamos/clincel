import i18next from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./en.json"
import tr from "./tr.json"

i18next.use(initReactI18next).init({
  resources: { en, tr },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
})
