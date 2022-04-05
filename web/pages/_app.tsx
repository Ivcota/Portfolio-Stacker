import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";
import { refocusExchange } from "@urql/exchange-refocus";
import type { AppProps } from "next/app";
import { createClient, Provider } from "urql";
import "../styles/globals.css";
import { BACKEND_URL } from "../utils/url";

const client = createClient({
  url: BACKEND_URL + "/api/graphql",
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [multipartFetchExchange],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <div className="dark">
        <div className="font-body dark:text-steel-100 dark:bg-steel-800">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
