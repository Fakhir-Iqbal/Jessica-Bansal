import React from "react";
import Button from "./Button";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";

function Footer() {
  const images = [
    "/footer1.svg",
    "/footer2.svg",
    "/footer3.svg",
    "/footer4.svg",
    "/footer5.svg",
    "/footer6.svg",
  ];
  return (
    <>
      <div className="flex sm:grid grid-cols-6 relative">
        {images.map((item, index) => (
          <div key={index}>
            <Image
              className={"w-20 h-[200px] sm:w-full object-cover"}
              src={item}
              sizes={"100vw"}
              width={0}
              height={0}
              alt={"image"}
            />
          </div>
        ))}
        <div className=" " >
          <div className="bg-white  sm:mx-0 px-4  sm:w-[300px] py-3 sm:py-7 absolute sm:right-0 sm:top-32  text-center text-sm sm:left-auto left-0 right-0 top-32   mr:[30%]">
            <p className=" sm:text-md sm:leading-1">
              Follow me on Instagram for the latest <br /> listings, market
              trends, and tips for buying <br /> and selling your home.
            </p>
            <Link
              href={
                "https://www.instagram.com/jess.realty?igsh=d2xvaDR3cXBqcWJ3"
              }
              aria-label="Instagram page"
            >
              <h1 className="text-sm sm:text-sm mt-2 font-semibold uppercase hover:opacity-50 transition-all duration-300">
                @Jess.Realty
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="!text-white  pt-20 px-4 xl:px-0 bg-green ">
        <div className="max-w-screen-lg flex flex-col  sm:grid grid-cols-3 gap-20 items-center  mx-auto w-full py-[120px]">
          <div className=" flex flex-col justify-between items-center">
            <div className={"!mb-6  text-whtie items-center font-semibold"}>
              <Link
                href={"/"}
                className={"cursor-pointer"}
                aria-label="homepage"
              >
                <h1 className={"text-xs uppercase font-cardo "}>
                  Jessica Bansal
                </h1>
                <p className="text-sm text-center ">PREC*</p>
              </Link>
            </div>

            <div className="text-sm sm:text-base text-center sm:text-start font-light sm:font-normal space-y-1">
              {[
                "eXp  Realty",
                "#1500 - 701 W Georgia St.",
                "Vancouver, British Columbia V7Y 1G5",
                ,
              ].map((items, index) => (
                <p className="  " key={index}>
                  {items}
                </p>
              ))}
              {/* <p className="font-medium !mt-6 hover:cursor-pointer">
                {"+778-297-3000"}
              </p> */}
              <p className="font-medium  hover:cursor-pointer">
                {"604-314-2309"}
              </p>
              <div className="flex justify-center sm:justify-start gap-6 items-center !mt-6 cursor-pointer">
                <Link
                  className="transition-all duration-300 hover:opacity-50 cursor-pointer"
                  href={
                    "https://www.instagram.com/jess.realty?igsh=d2xvaDR3cXBqcWJ3"
                  }
                  aria-label="Instagram page"
                  target="_blank"
                >
                  {" "}
                  <BsInstagram size={20} />{" "}
                </Link>
                <Link
                  className="transition-all duration-300 hover:opacity-50 cursor-pointer"
                  href={
                    "https://www.linkedin.com/in/jessbans?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  }
                  aria-label="Linkedin page"
                  target="_blank"
                >
                  <CiLinkedin size={24} />
                </Link>
                <Link
                  className="transition-all duration-300 hover:opacity-50 cursor-pointer"
                  href={"mailto:bansaljess@gmail.com"}
                  aria-label="send mail"
                  target="_blank"
                >
                  <TfiEmail size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 border-t sm:border-t-0 pt-10 sm:pt-0  flex  gap-20 items-center">
            <div className=" flex flex-col justify-between">
              <div className="space-y-3">
                {["Home", "About", "Resources", "Contact"].map(
                  (item, index) => (
                    <div key={index}>
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        aria-label={`${item} page`}
                      >
                        <p className="hover:opacity-50 text-sm sm:text-base sm:font-medium uppercase cursor-pointer transition-all duration-300">
                          {item}
                        </p>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className=" flex flex-col justify-between">
              <div className="space-y-3">
                {["Buy", "sell", "listings", "cities", "faq"].map(
                  (items, index) => (
                    <div key={index}>
                      <Link
                        href={
                          items === "Home" ? "/" : `/${items.toLowerCase()}`
                        }
                        aria-label={`${items} page`}
                      >
                        <p
                          className="text-sm sm:text-base hover:opacity-50 uppercase  cursor-pointer"
                          key={index}
                        >
                          {items}
                        </p>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="hidden sm:flex flex-col justify-between space-y-4 w-[80%]">
            <h1 className="text-white font-semibold text-2xl mb-8 font-cardo">
              Get a Custom MLS Feed Sent Straight to Your Inbox
            </h1>

            <p className="  cursor-pointer">
              Tell me what you’re looking for, and I’ll make sure you know about
              listings that match your criteria as soon as they hit the market.
            </p>
            <p className="pb-2 cursor-pointer border-b-2 border-white w-[fit-content] hover:opacity-50 transition-all duration-300 uppercase">
              GEt notified
            </p>
          </div>
        </div>

        <div className="border-t sm:border-t-0 text-center text-xs sm:mt-20">
          <div className="text-sm pr-4 py-3  text-white flex justify-end items-center cursor-pointer">
            <p>
              <span className="transition-all duration-300 hover:opacity-50">
                {" "}
                © 2024 JESSICA BANSAL
              </span>{" "}
              |{" "}
              <span className="transition-all duration-300 hover:opacity-50">
                All Rights Reserved
              </span>{" "}
              |{" "}
              <span className="transition-all duration-300 hover:opacity-50">
                Terms of Use
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
