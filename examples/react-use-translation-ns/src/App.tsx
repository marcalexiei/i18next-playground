import { useTranslation } from "react-i18next"

export function App() {
  const { t } = useTranslation(["ns1"])

  return (
    <>
      {t("ns1:job")}
      {
        /**
         * This TypeError makes sense to me. I don't think this should be possible with 
         * the selector API either (correct me if I'm wrong though)
         */
      }
      {t("ns2:description.part1")}
      {
        /**
         * I thought this (below) is what you were saying should raise a TypeError,
         * since `useTranslation` only added `ns1` when it was instantiated
         * 
         * https://github.com/i18next/react-i18next/pull/1852#discussion_r2256990517
         */
      }
      {t("description.part1", { ns: 'ns2' })}
    </>
  )
}

export function App2() {
  const { t } = useTranslation(["ns2"])

  return (
    <>
      {
        /**
         * This TypeError makes sense to me. I don't think this should be possible with 
         * the selector API either (correct me if I'm wrong though)
         */
      }
      {t("ns1:job")}
      {t("ns2:description.part1")}
      {
        /**
         * I thought this (below) is what you were saying should raise a TypeError,
         * since `useTranslation` only added `ns2` when it was instantiated
         * 
         * https://github.com/i18next/react-i18next/pull/1852#discussion_r2256990517
         */
      }
      {t("job", { ns: 'ns1' })}
    </>
  )
}
