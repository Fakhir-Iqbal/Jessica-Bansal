import React from "react";
import Image from "next/image";
function ServiceCard() {
  return (
    <div className="relative group ">
      <div className="h-full w-full flex justify-center items-center  -z-10 absolute top-0 left-0">
        <div className="h-[50%] w-full rounded-xl  bg-[#EAFCEA] a "></div>
      </div>
      <div
        className={
          "shadow-xl relative border overflow-hidden border-gray-100 rounded-xl w-[80%] mx-auto bg-white  flex-col z-20 px-6 py-12  space-y-12"
        }
      >
        <div className="space-y-6">
          <h1 className="text-xl font-semibold">Quality Materials</h1>
          <p className="text-[#929292] text-sm">
            There are many variatons of passag of Lorem Ipsum available, but the
            a jority have suffered
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full shadow-lg flex justify-center items-center">
            <Image
              className={"s"}
              src={"/icons/arrow-right.svg"}
              sizes={"100vw"}
              width={14}
              height={14}
              alt={"image"}
            />
          </div>
          <p className="g group-hover:text-green transition-colors duration-1000">
            Read More
          </p>
        </div>
        <div
          className={
            "p-4 bg-[#EAFCEA] rounded-full ab  absolute -bottom-10 -right-10"
          }
        >
          <div
            className={
              "p-6 h-[100px] w-[100px]  transition-all   duration-500 bg-green   group-hover:bg-opacity-100 bg-opacity-50  rounded-full  "
            }
          >
            <Image
              className={"s"}
              src={"/icons/House.svg"}
              sizes={"100vw"}
              width={30}
              height={30}
              alt={"image"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
