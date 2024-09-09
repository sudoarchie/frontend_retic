import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface card {
  title: string;
  discription: string;
  image: StaticImageData | string;
  url: string;
}
export function CardOne({ title, discription, image, url }: card) {
  return (
    <div className="w-[300px] h-[500px]  border p-5 bg-white rounded-2xl m-1">
      <Image
        src={image}
        alt={title}
        width="300"
        height="200"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold h-[50px]">
          {title}
        </h1>
        <p className="mt-3 text-sm text-gray-600 h-[100px]">{discription}</p>
        {/* <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div> */}
        <Link href={url}>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-primary px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}
