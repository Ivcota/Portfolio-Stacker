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
    <div className="w-screen min-h-screen">
      <h1>Portfolio Stacker</h1>
      <form
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
          className="text-black"
          {...register("email", { required: "Email is required" })}
          type="email"
        />
        <p className="text-red-300"> {errors.email?.message} </p>

        <label>Password: </label>
        <input
          className="text-black"
          {...register("password", { required: "Password is required" })}
          type="password"
        />
        <p className="text-red-300"> {errors.password?.message} </p>
        <button>Login</button>

        <p className="text-red-300"> {msg} </p>
      </form>
    </div>
  );
};

export default Login;
