"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import BuySlider from "@/components/buySlider";
import Button from "@/components/Button";
import Modal from "@/components/modal/formModal";
import Link from "next/link";
// import { Link } from "react-scroll";

const data = [
  {
    image: "/slider1.svg",
    process: "THE HOME SELLING PROCESS",
    sno: "1.",
    title: "Get Pre-Approved",
    description:
      "Knowing your budget is essential as you’ll know exactly how much you can borrow and the price range your home needs to be in. You can lock in interest rates for up to 90 days while you look for your home.",
  },
  {
    image: "/slider2.svg",
    process: "THE HOME SELLING PROCESS",
    sno: "2.",
    title: "The Search",
    description:
      "Choosing a home that complements your lifestyle, income, and preferences is no easy task. But, with the right realtor, whose personality meshes well with yours, you will soon understand your wants and needs. ",
  },
  {
    image: "/slider3.svg",
    process: "THE HOME SELLING PROCESS",
    sno: "3.",
    title: "The Offer",
    description:
      "When you’ve found ‘the one’ I’ll conduct a Comparative Market Analysis to determine where a reasonable offer should stand. Then we’ll present our Contract of Purchase and Sale to the listing agent.",
  },
  {
    image: "/slider4.svg",
    process: "THE HOME SELLING PROCESS",
    sno: "4.",
    title: "Remove Subjects",
    description:
      "This is where we successfully complete the conditions outlined in the Contract of Purchase and Sale, which will include a home inspection and finalizing your lending terms with your mortgage broker and bank.",
  },
  {
    image: "/slider5.svg",
    process: "THE HOME SELLING PROCESS",
    sno: "5.",
    title: "Sign and Close",
    description:
      "With your deposit paid, you’ll meet with a legal representative to register the property and transfer the Title from the previous owner to you. You’ll sign all the documents a few days before completion day, which is when you legally get ownership of your new home.",
  },
  {
    image: "/slider6.svg",
    process: "THE HOME SELLING PROCESS",
    sno: "6.",
    title: "Moving Day!",
    description:
      "Congratulations are in order because you just got the keys to your new home and you can start moving in. Don’t forget to file your change of address!",
  },
];

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
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Modal isOpen={modalOpen} onClose={handleCloseModal} href={href} />
      {/* mainbg */}
      <div className="sellerbg  h-[550px] md:h-96 relative p-5">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <span className="font-cardo font-light text-center text-6xl px-5  sm:text-6xl">
            SELLING <br />
            <span className="italic">with Jessica</span>
          </span>
        </div>
      </div>
      {/* section1 smscreen */}
      <div className="md:hidden px-5 py-32 flex flex-col gap-20">
        <div className="flex flex-col  text-center gap-14 ">
          <p className="uppercase text-xl">on your side</p>
          <h1 className="text-7xl font-cardo">
            Let&apos;s Find Your <span className="italic">Dream Home</span>
          </h1>
        </div>
        <div>
          <p className="text-center text-xl tracking-wide">
            Whether you are a first-time home Buyer with a million questions, or
            a real estate veteran who knows exactly what you want, I have got
            your back.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-8 h-full w-full ">
          <Image
            className=""
            src="/Headshot1.webp"
            alt="buy"
            width={1920}
            height={1080}
          />
          <Image src="/buy.jpg" alt="buy" width={1920} height={1080} />
        </div>
        <div>
          <p className="text-center text-xl tracking-wide">
            Each property is unique, and as such, your home should have a
            customized and tailored marketing plan to reach as many potential
            buyers as possible. This includes getting your listing in front of
            an online audience. When it comes to getting top dollar for your
            home, the details matter. Choosing me as your realtor gives you the
            confidence in knowing you are securing the best outcome for your
            situation.
          </p>
        </div>
      </div>
      {/* section2 desktop screen */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center w-full">
          <div className="max-w-screen-lg mx-auto flex items-center justify-between gap-10 p-10 ">
            <div className="font-cardo">
              <p>Elevate your listing</p>
              <h1 className="text-3xl">Selling your home with Jessica </h1>
              <Image
                src="/Headshot1.webp"
                alt="buy"
                width={1920}
                height={1080}
                className=" lg:h-[355px] md:h-[230px] w-[2300px] pt-3"
              />
            </div>

            <img src="/laptop.jpg" alt="buy" width={200} className="" />

            <div>
              <p>
                Each property is unique, and as such, your home should have a
                customized and tailored marketing plan to reach as many
                potential buyers as possible. This includes getting your listing
                in front of an online audience.
              </p>
              <br />
              <p>
                When it comes to getting top dollar for your home, the details
                matter. Choosing me as your realtor gives you the confidence in
                knowing you are securing the best outcome for your situation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="flex flex-col justify-center items-center">
        <div className="px-10 flex flex-col md:flex-row md:justify-center md:items-center gap-20 pb-20 md:py-20 md:w-[70%] w-[100%] max-w-screen-xl">
          <div className="flex flex-col gap-10">
            <span className="hidden md:block text-sm">
              YOU&#39;RE IN THE RIGHT PLACE
            </span>
            <h1 className="text-3xl xl:text-5xl xl:tracking-wide  font-cardo">
              If You Are Serious About Selling Your Home, I am Serious About
              Getting the Job Done
            </h1>
            <p className=" text-xs xl:text-lg tracking-wide">
              I dont just list your property for sale: I get to know the
              history, the architecture, the ins and outs of what makes it
              special. Creating a 24/7 marketing plan that puts your property in
              front of the right buyers is my specialty.
              <br />
              With deep roots in New Westminster and the Greater Vancouver area
              with contacts and connections spanning years in the industry, I am
              an invaluable partner in achieving your home selling goals.
            </p>
          </div>
          <div className="">
            <Image
              src="/moving.svg"
              alt="buy"
              width={1920}
              height={1080}
              className=" lg:h-[390px] md:h-[230px] w-[2300px] pt-3 obje"
            />
          </div>
        </div>
      </div>
      {/* section4 */}
      <div className="reviewimage h-auto lg:py-32 sm:h-[600px] relative p-5 flex justify-center">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10 space-y-4 sm:space-y-10 xl:w-[70%]  w-[100%] max-w-screen-xl">
          <span className="font-cardo font-medium text-center md:leading-normal text-3xl px-5  sm:text-5xl md:w-2/3 ">
            &quot;Jessica was amazing at alleviating my fears from start to
            finish.&ldquo;
          </span>
          <p className="font-cardo sm:font-sans  text-xs font-semibold sm:text-xl md:leading-6 text-center text-black text-opacity-85 px-6 md:font-cardo ">
            After owning my condo for 25 years I felt it was time for a change,
            but was a little nervous about the process. He was very organized
            and kept in touch with me every step of the way, I felt like I had
            someone on my side. The whole process was completed in just over a
            week with multiple offers. I cant thank jessica enough for all the
            work he put in.
          </p>
          <span className="text-lg font-semibold tracking-widest sm:text-xl sm:tracking-widest">
            SHERRI, BURNABY
          </span>
        </div>
      </div>
      {/* section5 */}
      <BuySlider data={data} />
      {/* section6 */}

      <div className="flex !justify-center !items-center my-28">
        <div className="lg:w-[50%] max-w-screen-xl w-[80%] !item-cennter  flex gap-20 md:flex-row flex-col">
          <div className="h-64 flex justify-center xl:w-1/2 w-full">
            {" "}
            <div
              onClick={() => {
                handleOpenModal();
                setHref("/pdf/Buyers Guide.pdf");
              }}
              className="cursor-pointer w-48 buyer_guide_pdf"
            >
              <img
                src="/Seller Guide-01 (1).jpg"
                alt="Real Estate Guide"
                width={800}
                height={500}
                className="h-64 w-48 rounded-sm "
              />
              {/* <div className="absolute inset-0 flex items-center justify-center bg-white m-3 sm:m-4 bg-opacity-80 ">
                <div className="w-full h-full text-center flex flex-col justify-around">
                  <span className="text-[5px] sm:text-xs">
                    jessicabansal.com
                  </span>
                  <p className="text-lg font-cardo uppercase sm:text-3xl">
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
              </div> */}
            </div>
            {/* <Image
              src="/shadow.webp"
              alt="Real Estate Guide"
              width={800}
              height={500}
              className="w-100 relative top-[-130px] right-[65px]"
            /> */}
          </div>
          <div className="flex flex-col space-y-2 xl:w-1/2 w-full">
            <span className="font-cardo text-3xl">Get The Complete Guide</span>
            <span className="text-sm">
              There are many things you will need to consider when selling your
              home. Its a complex, multi-step process that calls for the
              expertise of a Real Estate Agent. Grab my free guide to prepare
              you for what to expect.
            </span>
            <br />
            <span
              onClick={() => {
                handleOpenModal();
                setHref("/pdf/Buyers Guide.pdf");
              }}
              className="uppercase cursor-pointer text-xs transition-all duration-300 hover:opacity-50 tracking-widest underline"
            >
              Download
            </span>
          </div>
        </div>
      </div>

      {/* section7 */}
      <div className="resourceimage h-[500px] sm:h-[600px] relative p-5">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10 space-y-4 sm:space-y-10">
          <span className="text-xl sm:text-lg sm:tracking-widest">
            READY TO SELL?
          </span>
          <span className="font-cardo font-medium text-center text-3xl px-5  sm:text-5xl md:w-1/2">
            My goal is to sell your home for the most money possible in a
            timeframe that is acceptable to you.
          </span>
          {/* <p className=" sm:font-sans  text-xl sm:text-xl leading-6 text-center text-black text-opacity-85 px-6  ">
            Tell me what you’re looking for, and I’ll make sure you know about
            listings that match your criteria as soon as they hit the market.
          </p> */}
          <Link
            href="/contact"
            className={
              "uppercase bg-transparent border border-black !text-lg sm:!text-lg !py-4 !px-12 !text-black"
            }
          >
            Contact Jessica
          </Link>
        </div>
      </div>
    </main>
  );
}
export default Page;
