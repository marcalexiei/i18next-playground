import { Trans } from "react-i18next";

export function TranCmp() {
  return (
    <div>
      <Trans ns="ns1" i18nKey={($) => $.prova} />
      <Trans ns="ns2" i18nKey={($) => $.description.part1} />
    </div>
  );
}
