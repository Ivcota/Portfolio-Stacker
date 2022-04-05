import { NextPage } from "next";
import React from "react";
import { useUser } from "../../hooks/authHooks";

const Dashboard: NextPage = () => {
  const { user, isLoading, error } = useUser();

  return (
    <div>
      <h1>Dashboard {user?.firstName} </h1>
    </div>
  );
};

export default Dashboard;
