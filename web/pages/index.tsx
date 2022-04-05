import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen gap-3 dark:bg-steel-800">
      <h1 className="text-3xl font-logo ">Portfolio Stacker</h1>
      <p>Quickly Get Your Work Seen</p>
      <Link href="/auth/login">
        <a className="mb-5 text-center btn-primary">Get Started</a>
      </Link>
    </div>
  );
};

export default Home;
