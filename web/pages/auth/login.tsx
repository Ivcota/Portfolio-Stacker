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
    <div>
      <h1>Portfolio Stacker</h1>
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            const res = await authenticateUser({
              email: data.email.toLowerCase(),
              password: data.password,
            });

            if (
              res.data?.authenticateUserWithPassword?.__typename ===
              "UserAuthenticationWithPasswordFailure"
            ) {
              console.log("fail");
              setMesg("Incorrect email or password");
            } else {
              console.log("Success");
              router.push("/dashboard");
            }
          } catch (error) {
            console.log("fail");
          }
        })}
      >
        <label>Email: </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
        />
        <p> {errors.email?.message} </p>

        <label>Password: </label>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
        />
        <p> {errors.password?.message} </p>
        <button>Login</button>

        <p> {msg} </p>
      </form>
    </div>
  );
};

export default Login;
