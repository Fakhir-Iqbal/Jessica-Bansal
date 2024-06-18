import React from "react";
import Image from "next/image";
function Plusbutton({
  showplus1,
  showplus2,
  showplus3,
  setshowplus1,
  setshowplus2,
  setshowplus3,
}) {
  return (
    <div
      className={
        "relative h-full  flex items-center justify-center   w-full z-10"
      }
    >
      <div
        onClick={() => {
          setshowplus1(!showplus1);
        }}
        class="absolute  left-[34%] top-[7%]  flex  w-10 h-10"
      >
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
        <div className=" w-10 h-10 text-white font-medium text-xl s cursor-pointer   bg-green rounded-full shadow-lg flex justify-center items-center">
          <p className={`${!showplus1 ? "pl-0 " : "pl-3"}`}> +</p>
          <div
            className={` relative w-full -left-2 top-2  flex items-center ${
              !showplus1 ? "hidden" : "block child"
            }`}
          >
            <div className="absolute top-[16px] ro rotate-180 w-[20px] ">
              <Image
                className={"ml-2  "}
                src={"/Vector 1.svg"}
                sizes={"100vw"}
                width={20}
                height={20}
                alt={"image"}
              />
            </div>
            <div className="tooltip-content p-8 rounded-xl bg-white ">
              <h1 className="text-xl text-black">Combustion Roof Vent1</h1>
              <p className="text-[#929292] text-sm mt-4">
                There are many variatons of passag of Lorem Ipsum available, but
                the a jority have suffered
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setshowplus2(!showplus2);
        }}
        class="absolute right-[18%] top-[50%] parent flex  w-10 h-10"
      >
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
        <div className="w-10 h-10 text-white   font-medium text-xl s cursor-pointer rounded-full bg-green shadow-lg flex justify-center items-center">
          <p className={`${!showplus2 ? "pl-0 " : "pl-3"}`}>+</p>
          <div
            className={` relative w-full -left-2 top-2  flex items-center ${
              !showplus2 ? "hidden" : "block child"
            }`}
          >
            <div className="absolute -top-[50px] w-[20px]  ">
              <Image
                className={"-ml-2 w-full  "}
                src={"/Vector 1.svg"}
                sizes={"100vw"}
                width={20}
                height={20}
                alt={"image"}
              />
            </div>
            <div className="tooltip-content !bottom-[50px] p-8 rounded-xl bg-white ">
              <h1 className="text-xl text-black">Combustion Roof Vent2</h1>
              <p className="text-[#929292] text-sm mt-4">
                There are many variatons of passag of Lorem Ipsum available, but
                the a jority have suffered
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setshowplus3(!showplus3);
        }}
        class="absolute left-[15%] bottom-[20%] flex  w-10 h-10"
      >
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
        <div className="w-full text-white font-medium text-xl cursor-pointer rounded-full  bg-green shadow-lg flex justify-center items-center">
          <p className={`${!showplus3 ? "pl-0 " : "pl-3"}`}>+</p>
          <div
            className={` relative w-full -left-2 top-2  transition-all duration-1000  flex items-center ${
              !showplus3 ? "hidden" : "block child"
            }`}
          >
            <div className="absolute -top-[50px] w-[20px]  ">
              <Image
                className={" w-full -ml-2"}
                src={"/Vector 1.svg"}
                sizes={"100vw"}
                width={50}
                height={50}
                alt={"image"}
              />
            </div>
            <div className="tooltip-content   !bottom-[50px] p-8 rounded-xl bg-white ">
              <h1 className="text-xl text-black">Combustion Roof Vent3</h1>
              <p className="text-[#929292] text-sm mt-4">
                There are many variatons of passag of Lorem Ipsum available, but
                the a jority have suffered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plusbutton;
