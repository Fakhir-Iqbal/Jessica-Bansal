"use client";
import React from "react";
import Header from "@/components/header";
import Image from "next/image";

// import "./index.css"
// max-w-screen-xl

function Page() {
  React.useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".aboutus-hero");
      let scrollPosition = window.pageYOffset;
      parallax.style.backgroundPositionY = scrollPosition * -0.4 + "px";
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />

      <div className="overflow-x-hidden overflow-y-auto relative">
        <div
          className="aboutus-hero  bg-no-repeat bg-cover bg-fixed	relative w-[100%] h-[100vh] flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `url("/faq2.jpg")`,
          }}
        >
          <h1 className="py-[45px] text-[40px] font-light font-cardo bg-white px-[30px] md:mx-0 mx-10">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>
      </div>

      {/* Top Slider End */}

      <div className=" flex flex-col overflow-x-hidden items-end xl:items-center  max-w-screen-full  mx-auto font-nunito">
        <div className="px-10 ">
          <div className="block md:hidden">
            <div
              className="w-full h-[28rem] pt-12"
              style={{
                backgroundImage: "/faq3.jpg",
                backgroundPosition: "center",
              }}
            >
              <Image
                src="/faq3.jpg"
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </div>
          </div>

          <h1 className="text-[38px] md:ms-10 lg:ms-[100px]  font-cardo md:pt-20 pt-10">
            SELLER <br />
            Frequently Asked Questions
          </h1>

          <div className=" md:flex gap-10 lg:gap-20 flex-wrap md:ms-10 lg:ms-[100px]  max-w-screen-xl">
            <div className="pt-16 flex-1 ">
              <div className="">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  Should I sell before buying? Or vice versa?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  The homeowner&quot;s dilemma. It all comes down to your own
                  personal circumstances, much of which are financial. You
                  should think about ‘worst case&quot; scenarios when choosing
                  to buy or sell first, and figure out which decision is most
                  livable for you and your family. You&quot;ll find this blog
                  post helpful in highlighting some of the most common
                  situations.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  Should I sell before buying? Or vice versa?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  The homeowner&quot;s dilemma. It all comes down to your own
                  personal circumstances, much of which are financial. You
                  should think about ‘worst case&quot; scenarios when choosing
                  to buy or sell first, and figure out which decision is most
                  livable for you and your family. You&quot;ll find this blog
                  post helpful in highlighting some of the most common
                  situations.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  Should I sell before buying? Or vice versa?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  The homeowner&quot;s dilemma. It all comes down to your own
                  personal circumstances, much of which are financial. You
                  should think about ‘worst case&quot; scenarios when choosing
                  to buy or sell first, and figure out which decision is most
                  livable for you and your family. You&quot;ll find this blog
                  post helpful in highlighting some of the most common
                  situations.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  How do you market my home?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  I employ a combination of traditional and digital marketing
                  methods to showcase your home in the best possible light and
                  reach the most potential buyers. From staging to photography,
                  newsletters to social media, we&quot;ll distribute your
                  home&quot;s best features to get people to find and fall in
                  love with your home.
                </p>
              </div>
            </div>
            <div className="md:pt-8 mt-8 flex-1">
              <div>
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  Should I sell before buying? Or vice versa?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  As a Seller, you want to make it easy for Buyers to see your
                  home, and open houses are a great opportunity to get people in
                  the door in the least intimidating way. This is particularly
                  fruitful in a hot market whereby we get as many people viewing
                  over the weekend and then have the offer presentations on
                  Monday. The best case scenario is that this generates a
                  multi-offer process when more than one buyer makes a written
                  offer.
                </p>
                <br />
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7">
                  It&quot;s best to leave your house during an open, or private
                  showing so that the Buyer is able to picture themselves living
                  there (without being reminded that it currently belongs to
                  you). Private showings typically only take 15-20 minutes. Take
                  the time to go for a drive, or a walk and have some downtime.
                </p>
              </div>
              <div className="h-44 w-[160%] overflow-visible md:mt-16 hidden md:block">
                <Image
                  src="/faq4.jpg"
                  className="h-[100%] w-[50em] object-cover object-bottom"
                  alt=""
                />
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  How much will it cost to sell my home?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  When budgeting the cost of selling your home, you&quot;ll need
                  to consider real estate commission (sellers pay a gross
                  commission, that of which is split between the listing agent
                  and the Buyer&quot;s agent), cleaning, staging, or prepping
                  services, legal fees/disbursements, and potentially a mortgage
                  penalty depending on how far along in your term you are.
                </p>
              </div>
            </div>
            <div
              className="h-96 w-52 justify-end bg-[red] hidden md:flex"
              style={{
                backgroundImage: "/faq3.jpg",
                backgroundPosition: "center",
              }}
            >
              <Image src="/faq3.jpg" className="w-[100%] h-[100%] " alt="" />
            </div>
          </div>
        </div>
        <div className="h-[80px] mt-10 bg-[#242829] w-full"></div>
        <div className="px-10 md:mt-20 max-w-screen-xl ">
          <div className="block md:hidden">
            <div
              className="w-full h-[28rem] py-12"
              style={{
                backgroundImage: "/faq3.jpg",
                backgroundPosition: "center",
              }}
            >
              <Image
                src="/faq3.jpg"
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </div>
          </div>

          <h1 className="text-[38px] md:ms-10 lg:ms-0 font-cardo">
            BUYER <br />
            Frequently Asked Questions
          </h1>

          <div className="block md:flex gap-10 md:ms-10 lg:ms-0">
            <div className="pt-16 flex-1">
              <div className="">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  Should I sell before buying? Or vice versa?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  The homeowner&quot;s dilemma. It all comes down to your own
                  personal circumstances, much of which are financial. You
                  should think about ‘worst case&quot; scenarios when choosing
                  to buy or sell first, and figure out which decision is most
                  livable for you and your family. You&quot;ll find this blog
                  post helpful in highlighting some of the most common
                  situations.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  Should I sell before buying? Or vice versa?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  The homeowner&quot;s dilemma. It all comes down to your own
                  personal circumstances, much of which are financial. You
                  should think about ‘worst case&quot; scenarios when choosing
                  to buy or sell first, and figure out which decision is most
                  livable for you and your family. You&quot;ll find this blog
                  post helpful in highlighting some of the most common
                  situations.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  Should I sell before buying? Or vice versa?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  The homeowner&quot;s dilemma. It all comes down to your own
                  personal circumstances, much of which are financial. You
                  should think about ‘worst case&quot; scenarios when choosing
                  to buy or sell first, and figure out which decision is most
                  livable for you and your family. You&quot;ll find this blog
                  post helpful in highlighting some of the most common
                  situations.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  How do you market my home?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  I employ a combination of traditional and digital marketing
                  methods to showcase your home in the best possible light and
                  reach the most potential buyers. From staging to photography,
                  newsletters to social media, we&quot;ll distribute your
                  home&quot;s best features to get people to find and fall in
                  love with your home.
                </p>
              </div>
            </div>
            <div className="pt-20 flex-1">
              <div>
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  Should I sell before buying? Or vice versa?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  As a Seller, you want to make it easy for Buyers to see your
                  home, and open houses are a great opportunity to get people in
                  the door in the least intimidating way. This is particularly
                  fruitful in a hot market whereby we get as many people viewing
                  over the weekend and then have the offer presentations on
                  Monday. The best case scenario is that this generates a
                  multi-offer process when more than one buyer makes a written
                  offer.
                </p>
                <br />
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7">
                  It&quot;s best to leave your house during an open, or private
                  showing so that the Buyer is able to picture themselves living
                  there (without being reminded that it currently belongs to
                  you). Private showings typically only take 15-20 minutes. Take
                  the time to go for a drive, or a walk and have some downtime.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-[18px] md:text-[16px] text-justify md:text-left font-cardo italic">
                  How much will it cost to sell my home?
                </h3>
                <p className="text-[18px] md:text-[14px] text-justify md:text-left leading-7 mt-4">
                  When budgeting the cost of selling your home, you&quot;ll need
                  to consider real estate commission (sellers pay a gross
                  commission, that of which is split between the listing agent
                  and the Buyer&quot;s agent), cleaning, staging, or prepping
                  services, legal fees/disbursements, and potentially a mortgage
                  penalty depending on how far along in your term you are.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div
                className="h-96 w-52 flex justify-end bg-[red]"
                style={{
                  backgroundImage: "/faq5.jpg",
                  backgroundPosition: "center",
                }}
              >
                <Image
                  src="/faq5.jpg"
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
              <div
                className="h-96 w-52 mt-10 flex justify-end bg-[red]"
                style={{
                  backgroundImage: "	/faq6.jpg",
                  backgroundPosition: "center",
                }}
              >
                <Image
                  src="	/faq6.jpg"
                  className="w-[100%] h-[100%] object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom Slider */}

      <div className="overflow-x-hidden overflow-y-auto relative pt-10">
        <div
          className="aboutus-hero text-white bg-no-repeat bg-cover bg-fixed	relative w-[100%] h-[50vh] md:h-[45vh] flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/faq1.jpg")`,
          }}
        >
          <p className="text-base font-semibold font-nunito">
            NEED SOMETHING ELSE?
          </p>
          <h1 className="py-[45px] text-[30px] italic font-light font-cardo px-[30px] md:mx-0 mx-10 md:w-1/2 w-full p-5">
            Feel free to reach out should you have any questions before making
            those first steps in your real estate goals
          </h1>
          <button className="bg-[#1a1816] h-[47px] w-[200px]">
            EMAIL JESSICA
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;
