import { useTranslation } from 'react-i18next';

import { Cmp } from './Cmp';

export function App() {
  const { t } = useTranslation(['ns1'], { useSuspense: false });
  return (
    <>
      <Cmp i18nKey={($) => $.prova} />
      {t(($) => $.prova, { ns: 'ns1' })}
    </>
  );
}
