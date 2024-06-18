"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import BuySlider from "@/components/buySlider";
import Button from "@/components/Button";
import Modal from "@/components/modal/formModal";

const data = [
  {
    image: "/slider1.svg",
    process: "the home buying process",
    sno: "1.",
    title: "Get Pre-Approved",
    description:
      "Knowing your budget is essential as you’ll know exactly how much you can borrow and the price range your home needs to be in. You can lock in interest rates for up to 90 days while you look for your home.",
  },
  {
    image: "/slider2.svg",
    process: "the home buying process",
    sno: "2.",
    title: "The Search",
    description:
      "Choosing a home that complements your lifestyle, income, and preferences is no easy task. But, with the right realtor, whose personality meshes well with yours, you will soon understand your wants and needs. ",
  },
  {
    image: "/slider3.svg",
    process: "the home buying process",
    sno: "3.",
    title: "The Offer",
    description:
      "When you’ve found ‘the one’ I’ll conduct a Comparative Market Analysis to determine where a reasonable offer should stand. Then we’ll present our Contract of Purchase and Sale to the listing agent.",
  },
  {
    image: "/slider4.svg",
    process: "the home buying process",
    sno: "4.",
    title: "Remove Subjects",
    description:
      "This is where we successfully complete the conditions outlined in the Contract of Purchase and Sale, which will include a home inspection and finalizing your lending terms with your mortgage broker and bank.",
  },
  {
    image: "/slider5.svg",
    process: "the home buying process",
    sno: "5.",
    title: "Sign and Close",
    description:
      "With your deposit paid, you’ll meet with a legal representative to register the property and transfer the Title from the previous owner to you. You’ll sign all the documents a few days before completion day, which is when you legally get ownership of your new home.",
  },
  {
    image: "/slider6.svg",
    process: "the home buying process",
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
      <div className="buyresourceimage h-[550px] md:h-96 relative p-5">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <span className="font-cardo font-light text-center text-6xl px-5  sm:text-6xl">
            BUYING <br />
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
            Whether you’re a first-time home Buyer with a million questions, or
            a real estate veteran who knows exactly what you want, I’ve got your
            back.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-8 item-center justify-center">
          <Image
            className="object-cover w-full h-full"
            src="/Headshot1.webp"
            alt="buy"
            width={1920}
            height={1080}
          />
          <Image src="/Kitchen.svg" alt="buy" width={1920} height={1080} />
        </div>
        <div>
          <p className="text-center text-xl tracking-wide">
            I’m there for you every step of the way, helping you narrow and
            refine your search, saving you time and money. I’m committed to
            making sure you’re always well informed and prepared when the
            perfect home comes along.
          </p>
        </div>
      </div>
      {/* section2 desktop screen */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center w-full">
          <div className="max-w-screen-lg mx-auto flex items-center justify-between gap-10 p-10 ">
            <div className="font-cardo">
              <p>ON YOUR SIDE</p>
              <h1 className="text-3xl">Lets Find Your Dream Home</h1>
              <Image
                src="/Headshot1.webp"
                alt="buy"
                width={1920}
                height={1080}
                className=" lg:h-[355px] md:h-[230px] pt-3 w-[2300px]"
              />
            </div>
            <div>
              <Image
                src="/Kitchen.svg"
                alt="buy"
                width={1920}
                height={1080}
                className=""
              />
            </div>
            <div>
              <p>
                Whether you’re a first-time home Buyer with a million questions,
                or a real estate veteran who knows exactly what you want, I’ve
                got your back.
              </p>
              <br />
              <p>
                I’m there for you every step of the way, helping you narrow and
                refine your search, saving you time and money. I’m committed to
                making sure you’re always well informed and prepared when the
                perfect home comes along.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="flex flex-col justify-center items-center">
        <div className="px-10 flex flex-col md:flex-row md:justify-center md:items-center gap-20 pb-20 md:py-20 md:w-[70%] w-[100%] max-w-screen-xl">
          <div className="flex flex-col gap-10">
            <span className="hidden md:block text-xs">
              MORE THAN JUST A HOUSE
            </span>
            <h1 className="text-3xl xl:text-5xl xl:tracking-wide  font-cardo">
              Your Home is: <br /> The Heart of Your Family, Your Cherished
              Gathering Place, Your Own Personal Haven.
            </h1>
            <p className=" text-xs xl:text-xl tracking-wide">
              Buying your home with me means you benefit not only from expert
              knowledge and the latest technology, but the kind of customer
              service and personal attention that has earned me an outstanding
              reputation and loyal client base.
            </p>
          </div>
          <div className="">
            <video
              className="object-cover w-[150%] xl:h-[500px] h-[250px] "
              loop
              muted
              autoPlay
              playsInline
            >
              <source src="buyvideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* section4 */}
      <div className="resourceimage h-auto lg:py-32 sm:h-[600px] relative p-5 flex justify-center">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center h-full relative z-10 space-y-4 sm:space-y-10 xl:w-[70%]  w-[100%] max-w-screen-xl">
          <span className="font-cardo font-medium text-center md:leading-normal text-3xl px-5  sm:text-5xl md:w-2/3 ">
            &quot;Jessica helped us secure an offer below asking price and we
            were moving in before we knew it.&ldquo;
          </span>
          <p className="font-cardo sm:font-sans  text-xs font-semibold sm:text-xl md:leading-6 text-center text-black text-opacity-85 px-6 md:font-cardo ">
            As first time home buyers we consider ourselves extremely lucky to
            have been able to work with Amit. He was able to quickly educate us,
            and help us determine our needs in a home. The same day we met with
            Amit we ended up falling in love with a home that he recommended we
            see. His communication was on point and he responded efficiently
            when we made our offer. We’re so grateful for Amit&apos;s dedicated
            services.
          </p>
          <span className="text-lg font-semibold tracking-widest sm:text-xl sm:tracking-widest">
            PETER, COQUITLAM
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
              <Image
                src="/buyersguide.jpg"
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
              Choosing to buy a home is one of the biggest decisions you’ll make
              in your life. It’s a complex ordeal that requires a lot of
              planning, and instating the help of a knowledgeable Real Estate
              Agent to make the process run smoothly. Download my full guide to
              prepare you for what to expect.
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
            HOME FINDER
          </span>
          <span className="font-cardo font-medium text-center text-3xl px-5  sm:text-5xl md:w-1/2">
            Get a Custom MLS Feed Sent Straight to Your Inbox
          </span>
          <p className=" sm:font-sans  text-xl sm:text-xl leading-6 text-center text-black text-opacity-85 px-6  ">
            Tell me what you’re looking for, and I’ll make sure you know about
            listings that match your criteria as soon as they hit the market.
          </p>
          <Button
            className={
              "uppercase bg-transparent border border-black !text-lg sm:!text-lg !py-4 !px-12 !text-black"
            }
          >
            get notified
          </Button>
        </div>
      </div>
    </main>
  );
}
export default Page;
