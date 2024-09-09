import Image from "next/image";

import graphicsLogin from "@/public/8ff238e5b5acb1cf34f2dd1e1e2bcbea.png";
import Link from "next/link";

import { Navbar } from "../components/Navbar";
import { TextAreaField } from "../components/TextAreaField";
import { InputField } from "../components/Inputfield";
import { PrimaryButton } from "../components/PrimaryButton";

export default function Signup() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto bg-white">
        <div className="flex h-screen items-center">
          <div className="hidden  sm:block w-1/2">
            <h1 className="text-4xl text-center ">Hi, Welcome </h1>
            <h2 className="font-light text-center">Get Event Ticket</h2>
            <Image
              src={graphicsLogin}
              alt={"Signin and Signup"}
              className="mt-4 mx-auto"
            ></Image>
          </div>
          <div className=" w-full sm:w-1/2">
            <div className="mx-10 mb-5">
              <h1 className="text-2xl">Sign Up to your account</h1>
              <div className=" flex gap-1">
                Don&apos;t have an account?
                <Link href="/signup" className="text-primary">
                  Get started
                </Link>
              </div>
              <div className="mt-20">
                <InputField
                  label="Full Name"
                  placeholder="John smith "
                  className="w-full sm:w-[80%] mx-auto sm:mx-0"
                  type="text"
                ></InputField>
                <InputField
                  label="Email Address"
                  placeholder="admin@gmail.com"
                  className="w-full sm:w-[80%] mx-auto sm:mx-0 mt-10"
                  type="text"
                ></InputField>
                <InputField
                  label="Password"
                  className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0"
                  placeholder={"8+ characters"}
                  type="password"
                ></InputField>
                <PrimaryButton
                  Name={"Sign Up"}
                  className="w-full sm:w-[80%] mt-10 mx-auto sm:mx-0"
                ></PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
