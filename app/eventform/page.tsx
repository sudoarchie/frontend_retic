"use client";
import { useForm } from "react-hook-form";
import { Navbar } from "../components/Navbar";
import { InputField } from "../components/Inputfield";
import { PrimaryButton } from "../components/PrimaryButton";

export default function CreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Logs event data
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto bg-white">
        <div className="flex h-screen items-center">
          <div className="w-full sm:w-2/3 mx-auto">
            <div className="mx-10 mb-5">
              <h1 className="text-2xl">Create a New Event</h1>
              <div className="mt-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <InputField
                      label="Event Name"
                      placeholder="Event Name"
                      className="w-full sm:w-[80%] mx-auto sm:mx-0"
                      type="text"
                      name="eventName"
                      register={register}
                    />
                    {errors.eventName?.message &&
                      typeof errors.eventName.message === "string" && (
                        <p className="text-red-500">
                          {errors.eventName.message}
                        </p>
                      )}
                  </div>

                  <div className="mt-10">
                    <InputField
                      label="Ticket Number"
                      placeholder="Enter Ticket Number"
                      className="w-full sm:w-[80%] mx-auto sm:mx-0"
                      type="number"
                      name="ticketNo"
                      register={register}
                    />
                    {errors.ticketNo?.message &&
                      typeof errors.ticketNo.message === "string" && (
                        <p className="text-red-500">
                          {errors.ticketNo.message}
                        </p>
                      )}
                  </div>

                  <div className="mt-10">
                    <InputField
                      label="About the Event"
                      placeholder="Describe the event"
                      className="w-full sm:w-[80%] mx-auto sm:mx-0"
                      type="text"
                      name="about"
                      register={register}
                    />
                    {errors.about?.message &&
                      typeof errors.about.message === "string" && (
                        <p className="text-red-500">{errors.about.message}</p>
                      )}
                  </div>

                  <PrimaryButton
                    Name="Create Event"
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
