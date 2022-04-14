import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [value, setValue] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });

  useEffect(() => {
    setColorScheme(value);
  }, []);

  useEffect(() => {
    setValue(colorScheme);
  }, [colorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          colors: {
            dark: [
              "#F9FAFB",
              "#F3F6F8",
              "#E3E8F0",
              "#CED1E8",
              "#ACA9D8",
              "#817FC3",
              "#5C5AA2",
              "#45457D",
              "#33355A",
              "#282B45",
            ],
          },
        }}
        withGlobalStyles
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
