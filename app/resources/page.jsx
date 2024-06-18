"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import Modal from "@/components/modal/formModal";

function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [href, setHref] = useState("");
  console.log("page", href);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const trusty = [
    {
      name: "Mortgage Broker",
      image: "/mortgage.png",
      alt: "Mortgage Broker",
    },
    {
      name: "Home Inspection",
      image: "/inspection.png",
      alt: "Home Inspection",
    },
    {
      name: "Insurance Broker",
      image: "/insurance.png",
      alt: "insurance broker",
    },
    {
      name: "Notary Public",
      image: "/notary.png",
      alt: "Home Stager",
    },
    {
      name: "Moving & Storage",
      image: "/movers.png",
      alt: "moving and storage",
    },
    {
      name: "Cleaning",
      image: "/scrubbi.png",
      alt: "Cleaning",
    },
  ];
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Modal isOpen={modalOpen} onClose={handleCloseModal} href={href} />
      {/* mainbg */}
      <div className="resourceimage h-[550px] relative p-5">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <span className="font-cardo font-medium text-center text-4xl px-5  sm:text-6xl">
            Real Estate Resources
          </span>
          <p className="font-cardo  text-xs leading-6 text-center text-gray-700 px-6 py-5 italic sm:text-lg">
            Dedicating to helpiing you to make the very best real estate
            decision for your lives.
          </p>
        </div>
      </div>
      {/* guidesection */}
      <div className="p-5 md:grid grid-cols-2 max-w-screen-2xl mx-auto">
        <div className="">
          <div className="p-3 flex flex-col md:justify-center md:h-full space-y-3 md:space-y-7">
            <Image
              className="object-cover h-56 sm:h-96 md:h-[70%]  w-full"
              src="/buyerbg.webp"
              alt="Real Estate Guide"
              width={800}
              height={500}
            />
            <p className="uppercase text-xs sm:text-lg md:text-sm">
              in case you missed it
            </p>
            <h2 className="font-cardo text-xl sm:text-3xl md:w-2/3">
              8 Secrets for Purchasing a Profitable Investment Property in
              Vancouver (comming soon!)
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2  text-center md:flex flex-col items-center ">
          <div className="  md:w-64 ">
            {" "}
            <div className="p-3 flex flex-col space-y-3">
              <div
                onClick={() => {
                  handleOpenModal();
                  setHref("/pdf/Sellers Guide.pdf");
                }}
                className="relative cursor-pointer "
              >
                <Image
                  src="/buyerbg.webp"
                  alt="Real Estate Guide"
                  width={800}
                  height={500}
                  className="object-cover h-40 sm:h-80 w-full  "
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white m-3 sm:m-8 bg-opacity-80">
                  <div className="w-4/5 text-center flex flex-col space-y-4 sm:gap-8 md:gap-6">
                    <span className="text-[5px] sm:text-xs">
                      jessicabansal.com
                    </span>
                    <p className="text-lg font-cardo uppercase sm:text-4xl">
                      Seller Guide
                    </p>
                    <div className="flex flex-col font-cardo">
                      <span className="text-[7px] sm:text-lg md:text-sm  ">
                        JESSICA BANSAL
                      </span>
                      <span className="text-[5px] sm:text-[9px] md:text-[6px]">
                        PERSONAL REAL ESTATE CORPORATION
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="md:hidden uppercase text-xs text-gray-600 sm:text-xl font-semibold">
                download
              </p>
              <div className="hidden md:flex flex-col space-y-2">
                <span className="font-cardo text-2xl">Free Download</span>
                <span
                  onClick={() => {
                    handleOpenModal();
                    setHref("/pdf/Sellers Guide.pdf");
                  }}
                  className="uppercase cursor-pointer text-xs transition-all duration-300 hover:opacity-50 tracking-widest"
                >
                  get it now
                </span>
              </div>
            </div>
          </div>
          <div className=" md:w-64">
            {" "}
            <div className="p-3 flex flex-col space-y-3">
              <div
                onClick={() => {
                  handleOpenModal();
                  setHref("/pdf/Buyers Guide.pdf");
                }}
                className="relative cursor-pointer"
              >
                <Image
                  src="/buyerbg.webp"
                  alt="Real Estate Guide"
                  width={800}
                  height={500}
                  className="object-cover h-40 sm:h-80 w-full "
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white m-3 sm:m-8 bg-opacity-80">
                  <div className="w-4/5 text-center flex flex-col space-y-4 sm:gap-8 md:gap-6">
                    <span className="text-[5px] sm:text-xs">
                      jessicabansal.com
                    </span>
                    <p className="text-lg font-cardo uppercase sm:text-4xl">
                      BUYER Guide
                    </p>
                    <div className="flex flex-col font-cardo">
                      <span className="text-[7px] sm:text-lg md:text-sm  ">
                        JESSICA BANSAL
                      </span>
                      <span className="text-[5px] sm:text-[9px] md:text-[6px]">
                        PERSONAL REAL ESTATE CORPORATION
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="md:hidden uppercase text-xs text-gray-600 sm:text-xl font-semibold">
                download
              </p>
              <div className="hidden md:flex flex-col space-y-2">
                <span className="font-cardo text-2xl">Free Download</span>
                <span
                  onClick={() => {
                    handleOpenModal();
                    setHref("/pdf/Buyers Guide.pdf");
                  }}
                  className="uppercase cursor-pointer text-xs transition-all duration-300 hover:opacity-50 tracking-widest"
                >
                  get it now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blogsection */}
      <div className="resourceimage h-[500px] sm:h-[600px] relative p-5">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10 space-y-4 sm:space-y-10">
          <span className="text-xs sm:text-lg sm:tracking-widest">
            Get Notified
          </span>
          <span className="font-cardo font-medium text-center text-2xl px-5  sm:text-5xl md:w-1/2">
            Get a Custom MLS Feed Sent Straight to Your Inbox
          </span>
          <p className="font-cardo sm:font-sans  text-xs sm:text-xl leading-6 text-center text-black text-opacity-85 px-6  ">
            Tell me what you’re looking for, and I’ll make sure you know about
            listings that match your criteria as soon as they hit the market.
          </p>
          <Button
            className={
              "uppercase bg-transparent border border-black !text-xs sm:!text-lg !py-4 !px-12 !text-black"
            }
          >
            get notified
          </Button>
        </div>
      </div>
      {/* next section */}
      <div className="bg-[#EBECED]">
        <div className="flex flex-col space-y-6 sm:space-y-12 px-7 py-14  md:grid grid-cols-3 md:gap-10 max-w-screen-2xl mx-auto ">
          <div className="hidden"></div>
          <div className="flex flex-col space-y-6  md:items-center md:px-16 md:text-center ">
            <h1 className="font-cardo tracking-wider sm:text-3xl md:text-xl">
              Calculate
            </h1>
            <p className="text-sm sm:text-2xl sm:leading-10  md:text-sm">
              Estimate your regular mortgage payments based on the purchase
              price of the home, the size of your down payment, the interest
              rate and amortization of the loan.
            </p>
            <span className="md:hidden uppercase tracking-wider text-xs sm:text-2xl">
              calculate
            </span>

            <Button
              className={
                "uppercase hidden md:block bg-transparent border border-black !text-xs !py-4 !px-12 !text-black md:w-fit"
              }
            >
              calculate
            </Button>
          </div>
          <hr className="md:hidden border-black border-opacity-40" />

          <div className="flex flex-col md:items-center space-y-6 md:border-l md:border-r border-black border-opacity-50 md:px-16 md:text-center">
            <h1 className="font-cardo tracking-wider sm:text-3xl md:text-xl">
              Go To Form
            </h1>
            <p className="text-sm sm:text-2xl sm:leading-10 md:text-sm">
              Receive a free, no-obligation estimate of the market value of your
              home from Amit. Complete the provided form and I&apos;ll be in
              touch with information soon.
            </p>
            <span className="md:hidden uppercase tracking-wider  text-xs sm:text-2xl">
              go to form
            </span>

            <Button
              className={
                "uppercase hidden md:block bg-transparent border border-black !text-xs !py-4 !px-12 !text-black md:w-fit"
              }
            >
              go to form
            </Button>
            <hr className="border-black md:hidden border-opacity-40" />
          </div>
          <div className="flex flex-col space-y-6 md:items-center md:px-16 md:text-center">
            <h1 className="font-cardo tracking-wider  sm:text-3xl md:text-xl">
              Look At The Form
            </h1>
            <p className="text-sm sm:text-2xl sm:leading-10 md:text-sm">
              Read the monthly housing market report and get the most up-to-date
              statistics to learn what the latest buying and selling trends
              mean.
              <br />
              <br />
            </p>
            <span className="md:hidden uppercase tracking-wider text-xs sm:text-2xl">
              look at the stats
            </span>
            <Button
              className={
                "uppercase hidden md:block bg-transparent border border-black !text-xs !py-4 !px-12 !text-black md:w-fit"
              }
            >
              look at the stats
            </Button>
          </div>
        </div>
      </div>

      {/* trusted */}
      <div className="py-8 px-5 flex flex-col items-center space-y-6 text-center">
        <span className="text-xs uppercase sm:text-lg md:text-base">
          tap into my network of
        </span>
        <h1 className="font-cardo text-4xl sm:text-6xl md:text-4xl">
          Trusted Professionals
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-20">
          {trusty.map((item, index) => (
            <div key={index} className=" flex flex-col space-y-3">
              <Image
                className="object-contain h-28 w-full md:w-48 sm:h-48"
                src={item.image}
                alt={item.alt}
                width={800}
                height={500}
              />
              <p className="uppercase text-xs sm:text-xl md:text-xs">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default Page;
