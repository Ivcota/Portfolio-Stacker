import { useRouter } from "next/router";
import { useEffect } from "react";
import { useEndSessionMutation, useUserQuery } from "../src/generated/graphql";

export function useUser() {
  const router = useRouter();
  const [userResult, refetchQuery] = useUserQuery();

  return {
    user: userResult.data?.authenticatedItem,
    isLoading: userResult.fetching,
    error: userResult.error?.message,
    refetchQuery,
  };
}

export const useEndUserSession = () => {
  const [result, endSessionMutate] = useEndSessionMutation();
  const router = useRouter();

  const endSession = async () => {
    await endSessionMutate();
    router.push("/login");
  };

  return {
    endSession,
  };
};
