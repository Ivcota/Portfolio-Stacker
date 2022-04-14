import { useRouter } from "next/router";
import { UserQuery, useUserQuery } from "../src/generated/graphql";
import { graphqlurl } from "../utils/url";

export function useUser() {
  const router = useRouter();

  const { data, isLoading, error } = useUserQuery({
    endpoint: graphqlurl,
    fetchParams: {
      credentials: "include",
    },
  });

  return {
    user: data?.authenticatedItem,
    isLoading,
    error: error,
  };
}
