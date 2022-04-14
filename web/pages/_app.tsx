import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
  useMantineTheme,
} from "@mantine/core";
import { ReactNode, useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { QueryClient, QueryClientProvider } from "react-query";

declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [value, setValue] = useLocalStorage<ColorScheme>({
    key: "color-scheme",
    defaultValue: "dark",
  });

  const theme = useMantineTheme();

  const queryClient = new QueryClient();

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
        <Global
          styles={(theme) => ({
            body: {
              transition: "ease-in-out",
              transitionDuration: "300ms",
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[9]
                  : theme.colors.dark[0],
            },
          })}
        />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
