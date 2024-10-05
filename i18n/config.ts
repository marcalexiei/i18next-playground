import i18next from "i18next";
// using json imports would work, but interpolation checks would not work
// import ns1 from './en/ns1.json';
// import ns2 from './en/ns2.json';
import mainWorker from "./en/main.worker.json";

export const defaultNS = "main.worker";

export const resources = {
  en: {
    ["main.worker"]: typeof mainWorker,
  },
};

i18next.init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  resources,
  defaultNS,
});
