import { Trans } from "react-i18next";

export function TranCmp() {
  return (
    <div>
      <Trans ns="ns1" i18nKey="job_details.title" values={{ asd: "asd" }} />
    </div>
  );
}
