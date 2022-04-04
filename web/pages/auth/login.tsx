import React from "react";
import { useForm } from "react-hook-form";

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

  return (
    <div>
      <h1>Portfolio Stacker</h1>
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
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
