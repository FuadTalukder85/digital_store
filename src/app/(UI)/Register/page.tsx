"use client";
import React from "react";
import loginImg from "../../../../public/loginImg.jpg";
import Image from "next/image";
import Input from "@/app/Components/ReusableForm/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRegisterUsersMutation } from "@/Redux/auth/authApi";
import toast from "react-hot-toast";
import { setUser } from "@/Redux/auth/authSlice";
import { useAppDispatch } from "@/Redux/hook";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [registerUsers] = useRegisterUsersMutation();
  const dispatch = useAppDispatch();
  const onSubmit = async (data) => {
    console.log("register user", data);
    try {
      const res = await registerUsers(data).unwrap();
      toast.success("Registration successful");
      dispatch(setUser({ user: res.user, token: res.token }));
      reset();
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error(
        error?.data?.message || "Registration failed. Please try again."
      );
    }
  };
  return (
    <div className="bg-[#00ccff17]">
      <div className="max-w-7xl mx-auto py-24">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-24 bg-primary rounded-xl p-10 text-white shadow-xl">
            <div>
              <Image
                src={loginImg}
                alt="loginImg"
                width={600}
                height={600}
                className="rounded-xl"
              ></Image>
            </div>
            <div>
              <p className="text-5xl">Create an account</p>
              <p className="my-5">
                Already have an account?{" "}
                <Link href="/Login">
                  <span className="underline">Log In</span>
                </Link>
              </p>
              <div>
                <div className="flex gap-3">
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    register={register("name", {
                      required: "First Name is required",
                    })}
                    error={errors.name}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    register={register("lastName")}
                  />
                </div>
              </div>
              <div>
                <Input
                  label="Email"
                  placeholder="Enter email"
                  register={register("email", {
                    required: "Email is required",
                  })}
                  error={errors.email}
                />
              </div>
              <div>
                <Input
                  label="Password"
                  placeholder="Enter password"
                  register={register("password", {
                    required: "Password is required",
                  })}
                  error={errors.password}
                />
              </div>
              <button className="bg-secondary py-2 rounded-sm w-full mt-5">
                Create an account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
