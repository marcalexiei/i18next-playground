import type { resources } from "./index.js";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: false;
    enableSelector: true;
    contextSeparator: '|';
    resources: (typeof resources)["en"];
  }
}
