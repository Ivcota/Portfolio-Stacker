import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import { useUser } from "../hooks/authHooks";

const CheckAuth: FC = ({ children }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  /* Run this check after the user is done loading... */
  useEffect(() => {
    if (!user && !isLoading) {
      router.push("auth/login");
    }
  }, [user]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Link href="/auth/login">Login Here</Link>
      </div>
    );
  }

  return <>{children} </>;
};

export default CheckAuth;
