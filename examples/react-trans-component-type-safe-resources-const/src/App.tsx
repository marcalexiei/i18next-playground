import { Trans } from "react-i18next";

export function TranCmp() {
  return (
    <div>
      <Trans ns="custom_ns" i18nKey="hello" values={{ name: 1 }} />
    </div>
  );
}
