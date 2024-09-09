"use client";
import Image from "next/image";
import graphicsLogin from "@/public/8ff238e5b5acb1cf34f2dd1e1e2bcbea.png";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { InputField } from "../components/Inputfield";
import { PrimaryButton } from "../components/PrimaryButton";
import { useForm } from "react-hook-form";
import EventLogin from "@/utils/mutations/eventLogin";

export default function OrgLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, data } = EventLogin();
  const onSubmit = async (info: any) => {
    console.log(info); // Logs form info
    await mutate(info);
    console.log(data);
    localStorage.setItem("eventOrganiserToken", data.token);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto bg-white">
        <div className="flex h-screen items-center">
          <div className="hidden sm:block w-1/2">
            <h1 className="text-4xl text-center">Hi, Welcome back</h1>
            {/* <h2 className="font-light text-center">Get Event Ticket</h2> */}
            <Image
              src={graphicsLogin}
              alt={"Signin and Signup"}
              className="mt-4 mx-auto"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <div className="mx-10 mb-5">
              <h1 className="text-2xl">Sign In the Org account</h1>
              <div className="flex gap-1">
                Don&apos;t have an account?
                <Link href="/orgsignup" className="text-primary">
                  Get started
                </Link>
              </div>
              <div className="mt-20">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
                  <div>
                    <InputField
                      label="Email Address"
                      placeholder="admin@gmail.com"
                      className="w-full sm:w-[80%] mx-auto sm:mx-0"
                      type="text"
                      name="email" // Provide the name for registering the field
                      register={register}
                    />
                    {errors.email?.message &&
                      typeof errors.email.message === "string" && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                  </div>

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
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                  <PrimaryButton
                    Name="Sign In"
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
