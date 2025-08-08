import { useTranslation } from "react-i18next";

export function App() {
  const { t } = useTranslation(["ns1"]);

  return (
    <>
      {t(($) => $.job, { ns: "n1" })}

      {/**
       * This should error since `invalidns` do not exists
       */}
      {t(($) => $.job, { ns: "invalidns" })}

      {/* 
        There 2 possible missing errors here:
        - `ns2` should not be a valid `ns` 
          since is not included in useTranslation
        - job key doesn't exist on `ns2`
      */}
      {t(($) => $.job, { ns: "n2" })}

      {/*
        Ignoring the fact that `ns2` should not be used here,
        the types provided in `$` for `ns2` are incorrect.
        description.part1` is available in n2 
      */}
      {t(($) => $.description.part1, { ns: "n2" })}
    </>
  );
}
