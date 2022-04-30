import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  namedOperations,
  useEndSessionMutation,
  useUserQuery,
} from "../src/generated/graphql";

export function useUser() {
  const router = useRouter();
  const { data, loading, error } = useUserQuery();

  return {
    user: data?.authenticatedItem,
    isLoading: loading,
    error: error,
  };
}

export const useEndUserSession = () => {
  const [endSessionMutation, { data, loading, error }] = useEndSessionMutation({
    refetchQueries: [],
  });
  const router = useRouter();

  const endSession = async () => {
    await endSessionMutation();
    router.push("/login");
  };

  return {
    endSession,
  };
};
