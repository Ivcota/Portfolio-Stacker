import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Portfolio Stacker</h1>
      <p>Quickly Get Your Work Seen</p>
      <Link href="/auth/login">Get Started</Link>
    </div>
  );
};

export default Home;
