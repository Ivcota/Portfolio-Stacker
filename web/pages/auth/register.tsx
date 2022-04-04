import React from "react";
import { useForm } from "react-hook-form";

interface IFormState {
  firstName: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<IFormState>();

  return (
    <div>
      <h1>Portfolio Stacker</h1>
      <form onSubmit={handleSubmit((data) => {})}>
        <label>First Name: </label>
        <input {...register("email")} type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Password: </label>
        <input {...register("password")} type="text" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
