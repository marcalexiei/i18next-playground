import { useTranslation } from "react-i18next";

export function Ns1() {
  const { t } = useTranslation(["ns1"]);

  return (
    <>
      {t(($) => $.job_details.title, { ns: "ns1" })}

      {/**
       * This should error since `invalidns` do not exists
       */}
      {/* @ts-expect-error */}
      {t(($) => $.job, { ns: "invalidns" })}

      {/* 
        There 2 possible missing errors here:
        - `ns2` should not be a valid `ns` 
          since is not included in useTranslation
        - job key doesn't exist on `ns2`
      */}
      {/* @ts-expect-error */}
      {t(($) => $.job, { ns: "n2" })}

      {/*
        Ignoring the fact that `ns2` should not be used here,
        the types provided in `$` for `ns2` are incorrect.
        description.part1` is available in n2 
      */}
      {/* @ts-expect-error */}
      {t(($) => $.description.part1, { ns: "n2" })}

      {t(($) => $.job)}
      {t(($) => $.job, { ns: "ns1" })}
      {/* @ts-expect-error */}
      {t(($) => $.job, { ns: "" })}
      {/* @ts-expect-error */}
      {t(($) => $.job, { ns: "ns2" })}
      {/* @ts-expect-error */}
      {t(($) => $.description.part1, { ns: "ns2" })}
      {/* @ts-expect-error */}
      {t(($) => $.description.part1, { ns: "" })}
    </>
  );
}

export function Ns1And2() {
  const { t } = useTranslation(["ns1", "ns2"]);

  return (
    <>
      {t(($) => $.job_details.title, { ns: "ns1" })}

      {/**
       * This should error since `invalidns` do not exists
       */}
      {/* @ts-expect-error */}
      {t(($) => $.job, { ns: "invalidns" })}

      {/* 
        There 2 possible missing errors here:
        - `ns2` should not be a valid `ns` 
          since is not included in useTranslation
        - job key doesn't exist on `ns2`
      */}
      {/* @ts-expect-error */}
      {t(($) => $.job, { ns: "n2" })}

      {/*
        Ignoring the fact that `ns2` should not be used here,
        the types provided in `$` for `ns2` are incorrect.
        description.part1` is available in n2 
      */}

      {/* @ts-expect-error */}
      {t(($) => $.description.part1, { ns: "n2" })}

      {t(($) => $.job)}
      {t(($) => $.job, { ns: "ns1" })}
      {/* @ts-expect-error */}
      {t(($) => $.job, { ns: "" })}
      {/* @ts-expect-error */}
      {t(($) => $.job, { ns: "ns2" })}
      {t(($) => $.description.part1, { ns: "ns2" })}
      {/* @ts-expect-error */}
      {t(($) => $.description.part1, { ns: "" })}
    </>
  );
}
