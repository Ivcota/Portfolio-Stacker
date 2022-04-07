import { useRouter } from "next/router";
import { useEffect } from "react";
import { useEndSessionMutation } from "../src/generated/graphql";

export const useLogout = () => {
  const [endSessionRes, endSessionMutate] = useEndSessionMutation();
  const router = useRouter();

  async function logout() {
    await endSessionMutate();
    router.push("auth/login");
  }

  return { logout };
};
