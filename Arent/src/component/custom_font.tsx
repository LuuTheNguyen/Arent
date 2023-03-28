import { Global } from "@mantine/core";
import inter from "@/assets/fonts/inter/Inter-VariableFont_slnt,wght.ttf";
import notoBlack from "@/assets/fonts/noto_sans_jp/NotoSansJP-Black.ttf";
import notoLight from "@/assets/fonts/noto_sans_jp/NotoSansJP-Light.ttf";
import notoBold from "@/assets/fonts/noto_sans_jp/NotoSansJP-Bold.ttf";
import notoRegular from "@/assets/fonts/noto_sans_jp/NotoSansJP-Regular.ttf";
import notoThin from "@/assets/fonts/noto_sans_jp/NotoSansJP-Thin.ttf";
import notoMedium from "@/assets/fonts/noto_sans_jp/NotoSansJP-Medium.ttf";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Noto",
            src: `url('${notoBold}') format("tff")`,
            fontWeight: 300,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Noto",
            src: `url('${notoBlack}') format("tff")`,
            fontWeight: 300,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Noto",
            src: `url('${notoLight}') format("tff")`,
            fontWeight: 300,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Noto",
            src: `url('${notoRegular}') format("tff")`,
            fontWeight: 300,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Noto",
            src: `url('${notoThin}') format("tff")`,
            fontWeight: 300,
            fontStyle: "normal",
          },
        },

        {
          "@font-face": {
            fontFamily: "Noto",
            src: `url('${notoMedium}') format("tff")`,
            fontWeight: 300,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter",
            src: `url('${inter}') format("tff")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
