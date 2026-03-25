import { Trans } from 'react-i18next';

export function TranCmp() {
  const someCondition = true;
  return (
    <div>
      <Trans ns="ns1" i18nKey="job_details.title" values={{ asd: 'asd' }} />
      <Trans
        ns="ns1"
        i18nKey="food"
        context={someCondition ? 'pizza' : undefined}
        values={{ test: 'a' }}
      />
    </div>
  );
}
