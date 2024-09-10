"use client";

import { Navbar } from "../components/Navbar";
import useGetAllEvent from "@/utils/query/eventGetllAll";
import { CardOne } from "../components/CardOne";

export default function Event() {
  const { data, isLoading, isError } = useGetAllEvent();

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl text-center mt-5 font-bold">Events</h1>
      {isLoading ? (
        <div className="text-center mt-10">Loading events...</div>
      ) : isError ? (
        <div className="text-center mt-10 text-red-500">
          Error loading events. Please try again later.
        </div>
      ) : (
        <div className="mt-5 flex flex-wrap gap-5 justify-center items-center">
          {data?.info?.map((event: any, index: number) => (
            <CardOne
              key={event.id} // Use a unique identifier from the data
              title={event.eventName}
              discription={event.about}
              image={event.image}
              btnOneOnClick={() => console.log("hi")}
              url={event.url} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
