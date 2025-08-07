import { useTranslation } from "react-i18next";

export function App() {
  const { t } = useTranslation(["ns1"]);

  return (
    <>
      {t("ns1:job")}
      {t("ns2:test")}
    </>
  );
}

export function App2() {
  const { t } = useTranslation(["ns2"]);

  return (
    <>
      {t("ns1:job")}
      {t("ns2:description.part1")}
    </>
  );
}
