import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthenticateUserWithPasswordMutation } from "./../../src/generated/graphql";

interface IFormState {
  email: string;
  password: string;
}

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormState>();

  const [
    authenticateUserResult,
    authenticateUser,
  ] = useAuthenticateUserWithPasswordMutation();

  const router = useRouter();
  const [msg, setMesg] = useState("");

  return (
    <div className="flex flex-col items-center w-screen min-h-screen ">
      <div className="flex flex-col items-center mt-8 rounded-md shadow-2xl bg-steel-700 p-9">
        <h1 className="mb-1 text-3xl font-logo mt-9">Portfolio Stacker</h1>
        <h2 className="mt-1 mb-2 text-2xl font-thin">Login</h2>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(async (data) => {
            try {
              const res = await authenticateUser({
                email: data.email.toLowerCase(),
                password: data.password,
              });
              // @ts-expect-error
              if (res.data?.authenticateUserWithPassword.message) {
                // @ts-expect-error
                setMesg(res.data?.authenticateUserWithPassword.message);
              } else {
                router.push("/dashboard");
              }
            } catch (error) {
              console.log(authenticateUserResult.error?.message);
              console.log("fail");
            }
          })}
        >
          <label>Email: </label>
          <input
            className="px-2 py-1 my-2 text-black transition-all duration-200 rounded-sm outline-none ring-red-400 focus:ring "
            {...register("email", { required: "Email is required" })}
            type="email"
          />
          <p className="text-red-300"> {errors.email?.message} </p>

          <label>Password: </label>
          <input
            className="px-2 py-1 my-2 text-black transition-all duration-200 rounded-sm outline-none ring-red-400 focus:ring "
            {...register("password", { required: "Password is required" })}
            type="password"
          />
          <p className="text-red-300"> {errors.password?.message} </p>
          <button className="self-center my-2 mb-5 text-center btn-primary">
            Login
          </button>

          <p className="text-red-300"> {msg} </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
