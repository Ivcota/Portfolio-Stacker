import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

/* 
This page will display a single user account just like the dashboard
*/

const UserPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.id);
  }, []);

  return <div>User: {router.query.id} </div>;
};

export default UserPage;
