import React from "react";
import loginImg from "../../../../public/loginImg.jpg";
import Image from "next/image";
import Input from "@/app/Components/ReusableForm/Input";
import Link from "next/link";
const Register = () => {
  return (
    <div className="bg-[#00ccff17]">
      <div className="max-w-7xl mx-auto py-24">
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
                  //   register={register("title", { required: "Title is required" })}
                  //   error={errors.title}
                />{" "}
                <Input
                  label="Last"
                  placeholder="Last Name"
                  //   register={register("title", { required: "Title is required" })}
                  //   error={errors.title}
                />
              </div>
            </div>
            <div>
              <Input
                label="Email"
                placeholder="Enter email"
                //   register={register("title", { required: "Title is required" })}
                //   error={errors.title}
              />
            </div>
            <div>
              <Input
                label="Password"
                placeholder="Enter password"
                //   register={register("title", { required: "Title is required" })}
                //   error={errors.title}
              />
            </div>
            <button className="bg-secondary py-2 rounded-sm w-full mt-5">
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
