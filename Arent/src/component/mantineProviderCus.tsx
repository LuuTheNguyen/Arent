import { Grid, MantineProvider, Text, rem } from "@mantine/core";
import { Children } from "react";

const MantineProviderCus: React.FC<any> = ({ children }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Noto, sans-serif",
        globalStyles: (theme) => ({
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },

          body: {
            ["place-items"]: "unset",
          },
        }),
        colors: {
          light: [
            "#191919",
            "#333333",
            "#4c4c4c",
            "#666666",
            "#7f7f7f",
            "#999999",
            "#b2b2b2",
            "#cccccc",
            "#e5e5e5",
            "#FFFFFF",
          ],
          primary300: [
            "#fff9e8",
            "#fff4d2",
            "#ffefbc",
            "#ffeaa6",
            "#ffe590",
            "#ffe079",
            "#ffdb63",
            "#ffd64d",
            "#ffd137",
            "#FFCC21",
          ],
          primary400: [
            "#fff4eb",
            "#ffead8",
            "#ffdfc4",
            "#ffd5b1",
            "#ffca9d",
            "#ffc08a",
            "#ffb576",
            "#ffab62",
            "#ffa04f",
            "#FF963C",
          ],
          primary500: [
            "#fcf0e5",
            "#fae1cc",
            "#f8d2b2",
            "#f6c499",
            "#f4b57f",
            "#f2a666",
            "#f0984c",
            "#ee8932",
            "#ec7a19",
            "#EA6C00",
          ],
          secondary300: [
            "#f3fcfa",
            "#e8faf5",
            "#ddf8f0",
            "#d2f6ec",
            "#c7f4e7",
            "#bbf1e2",
            "#b0efde",
            "#a5edd9",
            "#9aebd4",
            "#8FE9D0",
          ],
          dark: [
            "#eaeaea",
            "#d5d5d5",
            "#c0c0c0",
            "#ababab",
            "#969696",
            "#818181",
            "#6c6c6c",
            "#575757",
            "#424242",
            "#2E2E2E",
          ],
          dark500text: [
            "#ececec",
            "#d9d9d9",
            "#c6c6c6",
            "#b3b3b3",
            "#a0a0a0",
            "#8d8d8d",
            "#7a7a7a",
            "#666666",
            "#545454",
            "#414141",
          ],
          gray400: [
            "#f1f1f1",
            "#e3e3e3",
            "#d6d6d6",
            "#c8c8c8",
            "#bbbbbb",
            "#adadad",
            "#9f9f9f",
            "#929292",
            "#848484",
            "#777777",
          ],
        },
      }}
    >
      {children}
    </MantineProvider>
  );
};

export default MantineProviderCus;
