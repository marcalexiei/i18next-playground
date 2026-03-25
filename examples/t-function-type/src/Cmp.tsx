import { TFunction, SelectorParam } from 'i18next';

interface CmpProps {
  i18nKey: SelectorParam<'ns1'>;
}

export function Cmp(props: CmpProps) {
  return <>{props.i18nKey}</>;
}
