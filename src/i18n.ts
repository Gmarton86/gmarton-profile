import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ns1 from "./locales/en.json";
import ns2 from "./locales/sk.json";

// export const defaultNS = "ns1";
export const resources = {
  en: {
    translation: ns1,
  },
  sk: {
    translation: ns2,
  },
} as const;

i18next.use(initReactI18next).init({
  lng: "en",
  resources,
});
