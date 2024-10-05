import { defaultNS } from "../i18n/config.js";
import ns1 from "../i18n/en/ns1.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      ns1: typeof ns1;
    };
  }
}
