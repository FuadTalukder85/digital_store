"use client";
import React, { useEffect, useState } from "react";
import loginImg from "../../../../public/loginImg.jpg";
import Image from "next/image";
import Input from "@/app/Components/ReusableForm/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRegisterUsersMutation } from "@/Redux/auth/authApi";
import toast from "react-hot-toast";
import { setUser } from "@/Redux/auth/authSlice";
import { useAppDispatch } from "@/Redux/hook";
import { useSearchParams } from "next/navigation";

const Register = () => {
  const searchParams = useSearchParams();
  const [referralCode, setReferralCode] = useState<string | null>(null);
  useEffect(() => {
    const code = searchParams.get("r");
    if (code) {
      setReferralCode(code);
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [registerUsers] = useRegisterUsersMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (formData: any) => {
    try {
      const res = await registerUsers({
        data: formData,
        referralCode,
      }).unwrap();
      toast.success("Registration successful!");
      dispatch(setUser({ user: res.user, token: res.token }));
      reset();
    } catch (error: any) {
      console.error("Registration failed:", error);
      toast.error(error?.data?.message || "Registration failed!");
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
                width={600}
                height={600}
                className="rounded-xl"
              />
            </div>

            {/* right form */}
            <div className="w-full max-w-md">
              <p className="text-4xl font-bold">Create an account</p>
              <p className="my-4 text-gray-200">
                Already have an account?{" "}
                <Link href="/Login">
                  <span className="underline text-white">Log In</span>
                </Link>
              </p>
              {referralCode && (
                <div className="bg-green-600/20 border border-green-500 rounded-md px-3 py-2 mb-4 text-green-300">
                  You’re joining via referral code:{" "}
                  <b className="text-white">{referralCode}</b>
                </div>
              )}
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
                className="bg-secondary py-2 rounded-sm w-full mt-5 hover:bg-secondary/80 transition"
              >
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
