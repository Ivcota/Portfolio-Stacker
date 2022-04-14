import { NextPage } from "next";
import React from "react";
import CheckAuth from "../components/CheckAuth";
import { useUser } from "../hooks/authHooks";

const Dashboard: NextPage = () => {
  const { user } = useUser();

  return (
    <CheckAuth>
      <div>
        <h1>Dashboard</h1>
        <p> Hello {user?.firstName} </p>
      </div>
    </CheckAuth>
  );
};

export default Dashboard;
