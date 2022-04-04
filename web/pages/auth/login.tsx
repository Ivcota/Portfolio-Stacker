import { useRouter } from "next/router";
import React from "react";
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

  return (
    <div>
      <h1>Portfolio Stacker</h1>
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);

          const res = await authenticateUser({
            email: data.email.toLowerCase(),
            password: data.password,
          });

          if (
            res.data?.authenticateUserWithPassword?.__typename ===
            "UserAuthenticationWithPasswordFailure"
          ) {
            console.log("fail");
          } else {
            console.log("Success");
            router.push("/dashboard");
          }
        })}
      >
        <label>Email</label>
        <input
          {...register("email", { required: "Email is required" })}
          type="text"
        />
        <p> {errors.email?.message} </p>

        <label>Password</label>
        <input
          {...register("password", { required: "Password is required" })}
          type="text"
        />
        <p> {errors.password?.message} </p>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
