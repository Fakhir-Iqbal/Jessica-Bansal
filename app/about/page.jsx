"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Head from "next/head";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Page() {
  const [text] = useTypewriter({
    words: [
      "Buying your first home",
      "Selling your home",
      "Investing in a rental property",
    ],
    loop: {},
    delaySpeed: 4000,
  });

  return (
    <main className="overflow-x-hidden">
      <Head
        title="Jessica Bansal Real Estate"
        description="Jessica Bansal Real Estate"
        keywords="Jessica Bansal Real Estate"
      />
      <Header />
      <div className="bg-[#ebeced]">
        <div className="flex flex-col sm:grid grid-cols-2 justify-center items-center py-20">
          <div className=" sm:w-[45%] sm:ml-auto m-6 sm:mr-20 space-y-6 order-2 sm:order-1">
            <p className="text-center !text-xs sm:text-start sm:text-base sm:font-medium">
              ABOUT JESSICA BANSAL
            </p>
            <h1 className="text-2xl lg:text-4xl font-cardo">
              Committed to your future so you can feel confident in your real
              estate decisions.
            </h1>
            <p className="font-cardo text-sm italic lg:text-2xl">
              I understand how personal buying and/or selling a home can feel.
              You have unique requirements, desires, and numbers you need to
              hit. You want someone who’s looking out for each and every one of
              your interests.
            </p>
          </div>
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="relative grayimage h-[80vh]  flex sm:items-center sm:justify-center order-1 sm:order-2"
          >
            <Image
              src={"/Headshot1.webp"}
              className="w-[60%] my-auto mx-auto md:w-60%] lg:w-[40%]"
              style={{ objectFit: "center !important" }}
              width={0}
              height={0}
              sizes={"100vw"}
              alt="rolodex Logo"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f4]">
        <div className="max-w-screen-xl animation mx-auto gap-[130px] flex flex-col items-center sm:grid grid-cols-2 py-20">
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className=""
          >
            <Image
              src={"/working.svg"}
              className="w-[80%] h-[100%] object-cover mx-auto sm:ml-auto"
              width={0}
              height={0}
              sizes={"100vw"}
              alt="rolodex Logo"
            />
          </div>
          <div className="flex justify-between flex-col w-[97%] px-5 sm:px-0 py-4">
            <div className="space-y-6 text-center sm:text-start">
              <p
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className=" font-medium text-[#424242]"
              >
                BEHIND THE SIGN
              </p>
              <h1
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className=" text-5xl  font-cardo "
              >
                Jessica Bansal
              </h1>
              <p
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className=" text-[17px] text-justify sm:text-start  leading-8  text-[#424242]"
              >
                From having moved to Burnaby (from Vancouver) with my family at
                a young age and now having a family of my own, I’m committed to
                being a positive leader and role model in the community. Real
                estate allows me to do this, by helping my clients find their
                right homes in Burnaby, New Westminster, Coquitlam, Surrey, and
                Vancouver.
              </p>
            </div>

            <div
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className="mt-auto flex items-center justify-start"
            >
              <Image
                src={"/cne.webp"}
                className="w-1/3  pt-12 ml-auto "
                width={0}
                height={0}
                sizes={"100vw"}
                alt="rolodex Logo"
              />
              <Image
                src={"/eXp Realty - Black-01.svg"}
                className="w-1/3 h-32  pt-12 ml-auto "
                width={0}
                height={0}
                sizes={"100vw"}
                alt="rolodex Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-screen-xl mx-auto gap-10 flex flex-col sm:grid grid-cols-3 items-center p-10">
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="w-full"
          >
            <Image
              src={"/dining.svg"}
              className="w-full h-full object-cover"
              width={0}
              height={0}
              alt="rolodex Logo"
            />
          </div>
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="w-full flex flex-col justify-center min-h-[200px]"
          >
            <p className="font-medium text-[#424242] text-[13px]">
              MY APPROACH
            </p>
            <br />
            <h1 className="text-[25px] font-cardo">
              Delivering an exceptional experience that exceeds your
              expectations and gets you results
            </h1>
            <br />
            <p className="text-justify sm:text-start text-[14px] font-nunito leading-4  text-[#424242]">
              My relationship-first approach provides you with an individual and
              personal experience tailored to your specific real estate needs.
              You will feel right at home and well taken care of as I provide
              you with the representation you deserve.
            </p>
          </div>
          <div className="w-full">
            <Image
              src={"/Kitchen.svg"}
              className="w-full sm:w-[65%] sm:h-[80%] object-cover"
              width={0}
              height={0}
              alt="rolodex Logo"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl sm:mx-auto gap-15 px-5 sm:px-0 sm:gap-20 flex flex-col sm:grid grid-cols-2 items-center py-20">
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="bg-black"
        >
          <Image
            src={"/hawaii.jpg"}
            className="w-full object-cover h-[400px] sm:h-[550px] sm:ml-auto"
            width={0}
            height={0}
            sizes={"100vw"}
            alt="rolodex Logo"
          />
        </div>
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="flex flex-col space-y-10 sm:space-y-15  py-4 text-[#424242] sm:font-medium"
        >
          <p className="text-4xl text-center sm:text-start sm:text-4xl font-cardo text-black">
            QUICK FACTS
          </p>
          <div className="sm:space-y-9 space-y-5 tracking-wider   sm:text-base uppercase">
            <p>Enjoying the great outdoors</p>
            <p>HAWAII IS ALWAYS A great IDEA</p>
            <p>Drinks celery juice every morning</p>
            <p>PET PEEVE? DELAYED TIMELINES</p>
            {/* <p>DIVING INTO MY READING LIST</p> */}
          </div>
        </div>
      </div>
      <div className="h-screen bg-white op px-5 sm:px-0 grayimage">
        <div className="flex flex-col justify-center items-center h-full space-y-16 ">
          <p className="text-xl font-semibold sm:font-normal ">KIND WORDS</p>
          <h1 className="text-2xl italic font-extralight sm:font-normal sm:text-4xl text-center font-cardo md:w-1/2 leading-10">
            As seasoned investors, we knew when we chose Jess that we made the
            right decision. She made the process as seamless as possible and
            even saved us thousands of dollars
          </h1>
          <p className="text-base uppercase">Jass - New Westminster </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 sm:px-0 py-20">
        <div className="flex flex-col justify-center items-center sm:items-start text-[#424242] h-full space-y-10 sm:w-[70%] text-[20px]">
          <p className="text-lg sm:text-xl">HOW I CAN HELP</p>
          <h1 className="text-3xl font-thin italic font-cardo mt-12">
            <span>{text}</span> <Cursor />
          </h1>
          <p>
            Everyone has a story, and each one fascinates me. As your Realtor, I
            get to be part of one of your most life changing chapters. Over the
            last 6+ years I’ve helped numerous clients get on the property
            ladder with their first home and then go on to build their property
            portfolio.
          </p>
          <p>
            I’ll guide and support you through your real estate journey with the
            utmost precision while building your knowledge (and confidence) of
            the home buying and selling process.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl px-5 sm:px-5  sm:gap-10 sm:mt-40 sm:relative sm:mx-auto sm:grid grid-cols-2">
        <div className=" relative w-full">
          <Image
            src={"/building.jpg"}
            className="w-full h-72 sm:w-[600px] sm:h-[50vh] sm:mt-auto"
            width={0}
            height={0}
            sizes={"100vw"}
            alt="rolodex Logo"
          />
          <div className="flex flex-col justify-center px-10 py-10 text-center  space-y-3 -right-32  sm:absolute top-10 bg-[rgba(235,236,237,1)] ">
            <h1 className="text-4xl !font-thin   font-cardo">
              Explore Listings
            </h1>
            <p className="text-sm">
              Click to search all homes for sale on the MLS database
            </p>
          </div>
        </div>
        <div className=" relative w-full mt-5 sm:mt-[250px]">
          <Image
            src={"/recentsales.jpg"}
            className="w-full h-72 sm:w-[600px] sm:h-[50vh] sm:mt-auto"
            width={0}
            height={0}
            sizes={"100vw"}
            alt="rolodex Logo"
          />
          <div className="flex flex-col bg-[rgba(235,236,237,1)] justify-center px-10 sm:px-14 py-10 text-center  space-y-3 -left-32  sm:absolute bottom-10 ">
            <Link href={"/recent"} aria-label="recentpage">
              <h1 className="text-4xl !font-thin   font-cardo">
                See Recent Sales
              </h1>
            </Link>
            <Link href={"/recent"} aria-label="recentpage">
              <p className="text-sm">
                Click to browse my latest sales and client results
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg px-5 sm:px-0 gap-10 relative mx-auto flex flex-col sm:grid grid-cols-2  py-40">
        <div className="flex flex-col justify-center items-center sm:items-start  h-full space-y-10 sm:space-y-4 ml-auto ">
          <p className="text-lg sm:text-sm">CONTACT</p>
          <h1 className="text-3xl  text-center sm:text-start font-cardo">
            Ready to Fulfill Your <br className="hidden sm:block" /> Real Estate
            Dreams?
          </h1>
          <p className="text-lg sm:text-sm">
            Whether you’re a homebuyer or seller, I can help you navigate{" "}
            <br className="hidden sm:block" />
            successfully through this robust, ever-changing market.
          </p>
        </div>
        <div className="flex items-end justify-center">
          <Link
            href={"/contact"}
            className={
              "bg-transparent hover:bg-white text-sm tracking-widest hover:!text-black !text-black border border-black !px-12 py-3"
            }
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Page;
