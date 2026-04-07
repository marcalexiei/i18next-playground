import i18next from 'i18next';

import ns1 from './i18n/en/ns1.json';

export const resources = {
  en: { ns1 },
};

i18next.init(
  {
    lng: 'en', // if you're using a language detector, do not define the lng option
    debug: false,
    resources: resources,
    defaultNS: false,
  },
  (_, t) => {
    const jobDetailsTitle = t(($) => $.prova, { ns: 'ns1' });
    console.info(jobDetailsTitle);
  },
);
