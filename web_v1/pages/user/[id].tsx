import { useRouter } from "next/router";
import React from "react";

// @TODO Similar view as dashboard but server side rendered

const UserPage = () => {
  const router = useRouter();

  console.log(router.query.id);

  return (
    <div className="flex flex-col items-center min-h-screen">
      User: {router.query.id}
    </div>
  );
};

export default UserPage;
