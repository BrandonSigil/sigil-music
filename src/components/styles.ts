import { createMakeAndWithStyles, CSSObject } from "tss-react"; //"tss-react/compat" if your project is using Typescript < 4.4

function useTheme() {
  return {
    primaryColor: "#32CD32",
  };
}

const { makeStyles: libMakeStyles } = createMakeAndWithStyles({
  useTheme,
});

export function makeStyles<N extends string, P = void>(
  cb: (props: P) => Record<N, CSSObject>,
) {
  return libMakeStyles<P, N>()((_, props) => cb(props));
}
