import { useRouter } from "next/router";
import { useUserQuery } from "../src/generated/graphql";

export function useUser() {
  const router = useRouter();
  const [userResult, refetchQuery] = useUserQuery();

  return {
    user: userResult.data?.authenticatedItem,
    isLoading: userResult.fetching,
    error: userResult.error?.message,
  };
}
