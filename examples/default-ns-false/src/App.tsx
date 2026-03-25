import { useTranslation } from 'react-i18next';

export function App() {
  const { t } = useTranslation(['ns1'], { useSuspense: false });
  return <>{t(($) => $.prova, { ns: 'ns1' })}</>;
}
