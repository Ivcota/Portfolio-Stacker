import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserQuery } from "../src/generated/graphql";

// Custom useUser hook with Urql + Nextjs
export function useUser() {
  const router = useRouter();
  const [userResult] = useUserQuery();

  useEffect(() => {
    if (!userResult.data) {
      router.push("/auth/login");
    }
  }, [userResult.error]);

  return {
    user: userResult.data?.authenticatedItem,
    isLoading: userResult.fetching,
    error: userResult.error?.message,
  };
}
