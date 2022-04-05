import Link from "next/link";
import React, { FC } from "react";
import { useUser } from "../hooks/authHooks";

const CheckAuth: FC = ({ children }) => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return (
      <div>
        <h1>Please Login</h1>
        <Link href="/auth/login">Login Here</Link>
      </div>
    );
  }

  return <>{children} </>;
};

export default CheckAuth;
