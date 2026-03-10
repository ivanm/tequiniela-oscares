import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";

const urlParams = new URLSearchParams(window.location.search);
const paramLang = urlParams.get("lang")?.toLowerCase();
const savedLang = localStorage.getItem("lang");
const browserLang = navigator.language.split("-")[0];

const validLangs = ["es", "en"];
const resolvedLang =
  (paramLang && validLangs.includes(paramLang) ? paramLang : null) ??
  (savedLang && validLangs.includes(savedLang) ? savedLang : null) ??
  (validLangs.includes(browserLang) ? browserLang : null) ??
  "es";

if (paramLang && validLangs.includes(paramLang)) {
  localStorage.setItem("lang", resolvedLang);
}

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: resolvedLang,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = resolvedLang;

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
  document.documentElement.lang = lng;
});

export default i18n;
