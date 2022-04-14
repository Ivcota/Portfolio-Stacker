import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useUser } from "../hooks/authHooks";

interface Props {
  children?: React.ReactNode;
}

const CheckAuth: FC<Props> = ({ children }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  /* Run this check after the user is done loading... */
  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/login");
    }
  }, [user]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <>{children} </>;
};

export default CheckAuth;
