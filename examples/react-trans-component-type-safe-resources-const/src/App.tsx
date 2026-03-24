import { Trans } from "react-i18next";

export function TranCmp() {
  return (
    <div>
      {/* @ts-expect-error */}
      <Trans ns="custom_ns" i18nKey="hello" values={{ name: 1 }} />
    </div>
  );
}
