import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

interface IFormState {
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormState>();

  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <div className="flex flex-col items-center mt-8 rounded-md shadow-2xl bg-steel-700 p-9">
        <h1 className="mb-1 text-3xl font-logo mt-9">Portfolio Stacker</h1>
        <h2 className="mt-1 mb-2 text-2xl font-thin">Login</h2>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <label>First Name: </label>
          <input
            className="px-2 py-1 my-2 text-black transition-all duration-200 rounded-sm outline-none ring-red-400 focus:ring "
            {...register("firstName", {
              required: "First name is required...",
            })}
            type="text"
          />
          <p className="text-red-300"> {errors.firstName?.message} </p>
          <label>Email:</label>
          <input
            className="px-2 py-1 my-2 text-black transition-all duration-200 rounded-sm outline-none ring-red-400 focus:ring"
            type="text"
            {...register("email", { required: "Email is required..." })}
          />
          <p className="text-red-300"> {errors.email?.message} </p>
          <label>Password: </label>
          <input
            className="px-2 py-1 my-2 text-black transition-all duration-200 rounded-sm outline-none ring-red-400 focus:ring"
            {...register("password", {
              required: "Password is required...",
            })}
            type="text"
          />
          <p className="text-red-300"> {errors.password?.message} </p>
          <label>Confirm Password </label>
          <input
            className="px-2 py-1 my-2 text-black transition-all duration-200 rounded-sm outline-none ring-red-400 focus:ring"
            {...register("confirmPassword", {
              required: "Confirm Password is required...",
            })}
            type="text"
          />
          <p className="text-red-300"> {errors.confirmPassword?.message} </p>
          <button className="self-center my-2 mb-5 text-center btn-primary">
            Register
          </button>

          <Link href="/auth/login">
            <p>Already have an account</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
