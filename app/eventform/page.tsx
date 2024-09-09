"use client";
import { useForm } from "react-hook-form";
import { Navbar } from "../components/Navbar";
import { InputField } from "../components/Inputfield";
import { PrimaryButton } from "../components/PrimaryButton";
import useUpload from "@/utils/mutations/useUpload";
import CreateNewEvent from "@/utils/mutations/createEvent";

export default function CreateEvent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: imageUpload } = useUpload();
  const { mutate: createEvent } = CreateNewEvent();

  const onSubmit = async (info: any) => {
    await imageUpload(info);
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
                      label="Ticket Price"
                      placeholder="Enter Ticket Number"
                      className="w-full sm:w-[80%] mx-auto sm:mx-0"
                      type="number"
                      name="price"
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
                  <div className="mt-10">
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          {...register("image")}
                        />
                      </label>
                    </div>
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
