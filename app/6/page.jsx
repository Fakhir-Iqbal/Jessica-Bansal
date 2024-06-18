// This file is used to display the details of a product based on the ID passed in the URL.
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import { data } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/router";

function Id() {
  const [params, setParams] = useState("");
  useEffect(() => {
    if (typeof window === "undefined") return; // Exit early if not running in the browser

    const param = window.location.pathname.split("/")[1]; // Get the parameter after '/recent/'
    setParams(param); // Assuming setParams is a function to update state
  }, []);

  // console.log();
  // const router = useRouter();
  // useEffect(() => {
  //   const { id } = router.query;
  //   console.log("Post ID:", id);
  // }, [router.query]);

  // const { id } = router.query;
  // console.log(params, "router", router);

  // Filter the data array to find the item with matching ID
  const selectedItem = data.filter((item) => item.id == params);
  // If no matching item is found, handle this case (e.g., show a message or redirect)
  if (selectedItem.length === 0) {
    return (
      <>
        <Header />
        <div className="h-80 bg-black bg-opacity-25 flex flex-col justify-center items-center font-cardo  text-6xl">
          Product not found
          <Link href="/recent">
            <span className="transition-all duration-300 hover:opacity-50 text-4xl font-light font-sans">
              Go to Recent Sales
            </span>
          </Link>
        </div>
      </>
    );
  }

  return (
    <main>
      <Header />
      <div className="pt-6 sm:pt-0 px-5 sm:px-0 sm:w-1/2 md:w-2/3 lg:w-1/2 mx-auto">
        <div
          key={selectedItem[0]?.id}
          className="flex flex-col items-center space-y-5 my-20"
        >
          <p className="font-phoppin text-sm">
            {"RECENTLY SOLD BY JESSICA BANSAL"}
          </p>
          <span className="font-cardo font-medium text-center sm:text-start text-4xl">
            {selectedItem[0]?.title}
          </span>
          <p className="text-sm text-justify sm:text-start font-sans py-4 leading-6 text-gray-700">
            {selectedItem[0]?.description}
          </p>
          <div className="flex flex-wrap">
            {selectedItem[0]?.indoor?.map((image, index) => (
              <div key={index} className="sm:w-1/3 p-1">
                <Image
                  src={image}
                  className="w-full h-auto sm:h-36 cursor-pointer"
                  width={170}
                  height={170}
                  alt=""
                />
              </div>
            ))}
          </div>
          {selectedItem[0]?.mainPic && (
            <Image
              src={selectedItem[0]?.mainPic}
              className="w-full  h-auto sm:h-[500px] p-1 cursor-pointer"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
            />
          )}
          {selectedItem[0].id == 6 ? (
            <div className="font-light text-center sm:text-start text-sm py-12 flex flex-col space-y-4">
              <p>{`${selectedItem[0]?.soldYear}${
                selectedItem[0]?.price ? `${selectedItem[0]?.price}.` : ""
              }`}</p>
            </div>
          ) : (
            <div className="font-light text-center sm:text-start text-sm py-12 flex flex-col space-y-4">
              <p>{`Sold ${selectedItem[0]?.soldYear}. ${
                selectedItem[0]?.price
                  ? `List price ${selectedItem[0]?.price}`
                  : ""
              }`}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Id;
