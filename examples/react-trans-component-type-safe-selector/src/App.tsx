import { Trans } from "react-i18next";

export function TranCmp() {
  const someCondition = true;
  return (
    <div>
      <Trans
        ns="ns1"
        i18nKey={($) => $.food}
        context="pizza"
        values={{ test: "a" }}
      />
      <Trans
        ns="ns1"
        i18nKey={($) => $.food}
        context={someCondition ? "pizza" : undefined}
        values={{ test: "a" }}
      />
    </div>
  );
}
