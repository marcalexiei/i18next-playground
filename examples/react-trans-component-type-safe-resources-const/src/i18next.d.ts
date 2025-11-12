import type { defaultNS, resources } from "./index.js";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      custom_ns: {
        hello: "Hello {{name}}";
        tired: "a lot";
      };
    };
  }
}
