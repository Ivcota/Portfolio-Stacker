import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { baseURL } from "./url";

export const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: baseURL,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
