import i18next from "i18next";
import ns1 from "./i18n/en/ns1.json";
import ns2 from "./i18n/en/ns2.json";

export const defaultNS = "ns1";

export const resources = {
  en: { ns1, ns2 },
};

i18next.init(
  {
    lng: "en", // if you're using a language detector, do not define the lng option
    debug: false,
    resources: resources,

    defaultNS,
  },
  (_, t) => {
    const jobDetailsTitle = t(($) => $.job_details.title);
    console.info(jobDetailsTitle);
  }
);
