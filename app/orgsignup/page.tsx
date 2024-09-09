"use client";
import Image from "next/image";
import graphicsLogin from "@/public/8ff238e5b5acb1cf34f2dd1e1e2bcbea.png";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { InputField } from "../components/Inputfield";
import { PrimaryButton } from "../components/PrimaryButton";
import { useForm } from "react-hook-form";
import EventSignup from "@/utils/mutations/eventSignup";

export default function OrgSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate } = EventSignup();
  const onSubmit = async (info: any) => {
    console.log(info); // Logs form data
    await mutate(info);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto bg-white">
        <div className="flex h-screen items-center">
          <div className="hidden sm:block w-1/2">
            <h1 className="text-4xl text-center">Hi, Welcome</h1>
            <h2 className="font-light text-center">Get Event Ticket</h2>
            <Image
              src={graphicsLogin}
              alt={"Signin and Signup"}
              className="mt-4 mx-auto"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <div className="mx-10 mb-5">
              <h1 className="text-2xl">Sign Up to your account</h1>
              <div className="flex gap-1">
                Already have an account?
                <Link href="/login" className="text-primary">
                  Log in
                </Link>
              </div>
              <div className="mt-20">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
                  <div>
                    <InputField
                      label="Full Name"
                      placeholder="John Smith"
                      className="w-full sm:w-[80%] mx-auto sm:mx-0"
                      type="text"
                      name="name"
                      register={register}
                    />
                    {errors.fullName?.message &&
                      typeof errors.fullName.message === "string" && (
                        <p className="text-red-500">
                          {errors.fullName.message}
                        </p>
                      )}
                  </div>

                  <div>
                    <InputField
                      label="Email Address"
                      placeholder="admin@gmail.com"
                      className="w-full sm:w-[80%] mx-auto sm:mx-0 mt-10"
                      type="text"
                      name="email"
                      register={register}
                    />
                    {errors.email?.message &&
                      typeof errors.email.message === "string" && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                  </div>

                  <div>
                    <InputField
                      label="Password"
                      className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0"
                      placeholder="8+ characters"
                      type="password"
                      name="password"
                      register={register}
                    />
                    {errors.password?.message &&
                      typeof errors.password.message === "string" && (
                        <p className="text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                  </div>

                  <PrimaryButton
                    Name="Sign Up"
                    type="submit"
                    className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
