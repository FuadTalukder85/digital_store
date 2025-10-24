"use client";
import React from "react";
import loginImg from "../../../../public/loginImg.jpg";
import Image from "next/image";
import Input from "@/app/Components/ReusableForm/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useLoginUsersMutation } from "@/Redux/auth/authApi";
import toast from "react-hot-toast";
import { setUser } from "@/Redux/auth/authSlice";
import { useAppDispatch } from "@/Redux/hook";
import { useRouter } from "next/navigation";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [loginUsers] = useLoginUsersMutation();
  const dispatch = useAppDispatch();
  const onSubmit = async (formData: any) => {
    try {
      const res = await loginUsers(formData).unwrap();
      // console.log("Response from login:", res);
      if (res?.token && res?.user) {
        toast.success("Login successful!");
        dispatch(setUser({ user: res.user, token: res.token }));
        reset();
        router.push("/");
      } else {
        toast.error("Invalid response from server");
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      toast.error(error?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="bg-[#00ccff17] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto py-16 px-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row items-center gap-10 bg-primary rounded-xl p-10 text-white shadow-xl">
            {/* left image */}
            <div className="hidden md:block">
              <Image
                src={loginImg}
                alt="Register Image"
                width={800}
                height={800}
                className="rounded-xl"
              />
            </div>

            {/* right form */}
            <div className="w-full max-w-md">
              <p className="text-4xl font-bold">Please Login</p>
              <p className="my-4 text-gray-200">
                Don't have an account?{" "}
                <Link href="/Register">
                  <span className="underline text-white">Register</span>
                </Link>
              </p>
              <Input
                label="Email"
                placeholder="Enter email"
                register={register("email", {
                  required: "Email is required",
                })}
                error={errors.email}
              />
              <Input
                label="Password"
                placeholder="Enter password"
                register={register("password", {
                  required: "Password is required",
                })}
                error={errors.password}
              />
              <button
                type="submit"
                className="bg-secondary w-full mt-5 text-primary px-5 py-2 font-semibold rounded-md hover:bg-[#0F494D] transition-all duration-300 hover:text-white cursor-pointer"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
