"use client";
import React from "react";
import Link from "next/link";
import Header from "@/components/header";
import { Link as ScrollLink } from "react-scroll";

export default function Page() {
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
      <div className="flex flex-col overflow-x-hidden max-w-screen-full  mx-auto font-nunito ">
        <div className="overflow-x-hidden overflow-y-auto relative">
          <div
            className="aboutus-hero bg-no-repeat bg-cover bg-fixed relative w-[100%] h-[95vh] flex flex-col items-center justify-center text-center"
            style={{
              backgroundImage: `url("/cities main.jpg")`,
              backgroundPosition: "center center",
            }}
          >
            <h1 className="py-[10px] text-[40px] text-white font-light font-cardo px-[30px] md:mx-0 mx-10">
              Vancouver Cities & Neighbourhoods
            </h1>
            <span className="text-lg text-white italic font-cardo hidden md:block mt-0">
              Learn more about each community, it s current real estate report,
              and available listings.
            </span>
            <br />
            <div className="text-white font-nunito mt-10 flex flex-col gap-4">
              <ScrollLink
                to="new-west"
                smooth={true}
                duration={1000} // Specify duration (in milliseconds)
                className="cursor-pointer md:hidden block"
              >
                NEW WEST
              </ScrollLink>
              <ScrollLink
                to="Burnaby"
                smooth={true}
                duration={1000} // Specify duration (in milliseconds)
                className="cursor-pointer md:hidden block"
              >
                BURNBAY
              </ScrollLink>
              <ScrollLink
                to="Vancouver"
                smooth={true}
                duration={1000} // Specify duration (in milliseconds)
                className="cursor-pointer md:hidden block"
              >
                VANCOUVER
              </ScrollLink>
              <ScrollLink
                to="Coquitlam"
                smooth={true}
                duration={1000} // Specify duration (in milliseconds)
                className="cursor-pointer md:hidden block"
              >
                COQUITLAM
              </ScrollLink>
              <ScrollLink
                to="Surrey"
                smooth={true}
                duration={1000} // Specify duration (in milliseconds)
                className="cursor-pointer md:hidden block"
              >
                SURREY
              </ScrollLink>
              <ScrollLink
                to="Port-Moody"
                smooth={true}
                duration={1000} // Specify duration (in milliseconds)
                className="cursor-pointer md:hidden block"
              >
                Port MOODY
              </ScrollLink>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="  h-16 bg-black w-full text-white flex justify-center md:gap-9 lg:gap-20 xl:gap-28 items-center">
            <ScrollLink
              to="new-west"
              smooth={true}
              duration={1000} // Specify duration (in milliseconds)
              className="cursor-pointer"
            >
              NEW WEST
            </ScrollLink>
            <ScrollLink
              to="Burnaby"
              smooth={true}
              duration={1000} // Specify duration (in milliseconds)
              className="cursor-pointer"
            >
              BURNBAY
            </ScrollLink>
            <ScrollLink
              to="Vancouver"
              smooth={true}
              duration={1000} // Specify duration (in milliseconds)
              className="cursor-pointer"
            >
              VANCOUVER
            </ScrollLink>
            <ScrollLink
              to="Coquitlam"
              smooth={true}
              duration={1000} // Specify duration (in milliseconds)
              className="cursor-pointer"
            >
              COQUITLAM
            </ScrollLink>
            <ScrollLink
              to="Surrey"
              smooth={true}
              duration={1000} // Specify duration (in milliseconds)
              className="cursor-pointer"
            >
              SURREY
            </ScrollLink>
            <ScrollLink
              to="Port-Moody"
              smooth={true}
              duration={1000} // Specify duration (in milliseconds)
              className="cursor-pointer"
            >
              PORT MODDY
            </ScrollLink>
          </div>
        </div>
      </div>
      {/* Top Section Complete */}

      <div className="flex justify-center">
        <div
          className="flex flex-col-reverse  md:flex-row justify-center items-center w-full md:w-[90%] lg:w-[80%] xl:w-[50%] gap-16 py-10 m-5"
          id="new-west"
        >
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="font-cardo text-[38px]">New Westminster</h1>

            <div className="md:hidden block">
              <Link href={"/"} className="text-sm font-nunito">
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> New Westminster
                Market Report{" "}
              </Link>
              <br />
              <Link
                href={"/"}
                className="text-sm font-nunito hover:text-slate-500"
              >
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> New Westminster
                Market Report{" "}
              </Link>
            </div>
            <br />
            <p className="font-nunito font-[rgba(66, 66, 66, 1)] text-[12px] leading-[2] ">
              New West residents love the expansive waterfront of the Fraser
              River for its beautiful scenery and awesome recreation facilities.
              Over the years, New Westminster has grown and developed into a
              prime location to live and work. Many young families have come to
              the area, creating a young, vibrating community feeling. As a
              result, the city often hosts events and festivals to bring people
              together.
            </p>
            <br />
            <Link href={"/"} className="text-sm font-nunito md:block hidden ">
              {" "}
              <span className="underline text-[12px]">CLICK TO VIEW</span> New Westminster
              Market Report{" "}
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-sm font-nunito md:block hidden hover:text-slate-500"
            >
              {" "}
              <span className="underline text-[12px]">CLICK TO VIEW</span> New Westminster
              Market Report{" "}
            </Link>
          </div>
          <div
            className="w-full md:w-1/2 h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: `url("/New_Westminster.jpg")`,
              minHeight: "300px", // Set a minimum height to ensure the div is visible
            }}
          ></div>
        </div>
      </div>

      {/* 1st div complete */}

      <div className="flex justify-center bg-[#ebeced]">
        <div
          className="flex flex-col-reverse  md:flex-row-reverse justify-center items-center w-full md:w-[90%] lg:w-[80%] xl:w-[50%] gap-16 py-10 m-5"
          id="Burnaby"
        >
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="font-cardo text-[38px]">Burnaby</h1>
            <div className="md:hidden block">
              <Link href={"/"} className="text-sm font-nunito">
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Burnaby Market
                Report{" "}
              </Link>
              <br />
              <Link
                href={"/"}
                className="text-sm font-nunito  hover:text-slate-500"
              >
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Burnaby Market
                Report{" "}
              </Link>
            </div>
            <br />
            <p className="font-nunito font-[rgba(66, 66, 66, 1)] text-[12px] leading-[2]">
              Burnaby is a large urban center known for great shopping and
              restaurants, excellent family-friendly communities, and a good
              public transit system. Residents of Burnaby are easily able to get
              involved in community events and recreation opportunities, such as
              swimming, local classes, or visiting the library. Because Burnaby
              is a large city, there are a number of high-calibre schools, both
              public and private, with many options at all levels of education.
            </p>
            <br />
            <Link href={"/"} className="text-sm font-nunito md:block hidden">
              {" "}
              <span className="underline text-[12px] ">CLICK TO VIEW</span> Burnaby Market
              Report{" "}
            </Link>
            <br />
            <br />
            <Link
              href={"/"}
              className="text-sm font-nunito md:block hidden hover:text-slate-500"
            >
              {" "}
              <span className="underline text-[12px]">CLICK TO VIEW</span> Burnaby Market
              Report{" "}
            </Link>
          </div>
          <div
            className="w-full md:w-1/2 h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: `url("/Burnaby.jpg")`,
              minHeight: "300px", // Set a minimum height to ensure the div is visible
            }}
          ></div>
        </div>
      </div>

      {/* 2nd Div Complete */}

      <div className="flex justify-center ">
        <div
          className="flex flex-col-reverse  md:flex-row justify-center items-center w-full md:w-[90%] lg:w-[80%] xl:w-[50%] gap-16 py-10 m-5"
          id="Vancouver"
        >
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="font-cardo text-[38px]">Vancouver</h1>
            <div className="md:hidden block">
              <Link href={"/"} className="text-sm font-nunito ">
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Vancouver
                Report{" "}
              </Link>
              <br />
              <Link
                href={"/"}
                className="text-sm font-nunito  hover:text-slate-500"
              >
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Vancouver
                Report{" "}
              </Link>
            </div>
            <br />
            <p className="font-nunito font-[rgba(66, 66, 66, 1)] text-[12px] leading-[2] ">
              Consistently thought of as one of the best cities in the world,
              Vancouver is an exciting place to live. Celebrated for ready
              access to beaches and the outdoors, and active transportation
              modes including walking and cycling, it’s that special place that
              has it all. This is a real foodie city with many award-winning
              restaurants, cafes, food markets, and artisan shops to tantalize
              your taste buds.
            </p>
            <br />
            <Link href={"/"} className="text-sm font-nunito md:block hidden">
              {" "}
              <span className="underline text-[12px] ">CLICK TO VIEW</span> Vancouver Report{" "}
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-sm font-nunito md:block hidden hover:text-slate-500"
            >
              {" "}
              <span className="underline text-[12px] ">CLICK TO VIEW</span> Vancouver Report{" "}
            </Link>
          </div>
          <div
            className="w-full md:w-1/2 h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: `url("/Vancouver.jpg")`,
              minHeight: "300px", // Set a minimum height to ensure the div is visible
            }}
          ></div>
        </div>
      </div>

      {/* 3rd Div Complete */}

      <div className="flex justify-center bg-[#ebeced]">
        <div
          className="flex flex-col-reverse  md:flex-row-reverse justify-center items-center w-full md:w-[90%] lg:w-[80%] xl:w-[50%] gap-16 py-10 m-5"
          id="Coquitlam"
        >
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="font-cardo text-[38px]">Coquitlam</h1>
            <div className="md:hidden block">
              <Link href={"/"} className="text-sm font-nunito">
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Coquitlam
                Report{" "}
              </Link>
              <br />
              <Link
                href={"/"}
                className="text-sm font-nunito hover:text-slate-500"
              >
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Coquitlam
                Report{" "}
              </Link>
            </div>
            <br />
            <p className="font-nunito font-[rgba(66, 66, 66, 1)] text-[12px] leading-[2] ">
              Home to shopping centres, theme parks and other picturesque
              attractions loved and admired by tourists and locals alike,
              Coquitlam is a busy, vibrant city that keeps everyone moving. This
              is an urban oasis that offers the best of both worlds as you can
              just as easily stay isolated by taking a trip to the mountains,
              rivers, and other outdoor activities that lie just beyond your
              doorstep.
            </p>
            <br />
            <Link href={"/"} className="text-sm font-nunito md:block hidden">
              {" "}
              <span className="underline text-[12px] ">CLICK TO VIEW</span> Coquitlam Report{" "}
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-sm font-nunito md:block hidden hover:text-slate-500"
            >
              {" "}
              <span className="underline text-[12px] ">CLICK TO VIEW</span> Coquitlam Report{" "}
            </Link>
          </div>
          <div
            className="w-full md:w-1/2 h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: `url("/Coquitlam.jpg")`,
              minHeight: "300px", // Set a minimum height to ensure the div is visible
            }}
          ></div>
        </div>
      </div>

      {/* 4th Div Complete */}

      <div className="flex justify-center">
        <div
          className="flex flex-col-reverse  md:flex-row justify-center items-center w-full md:w-[90%] lg:w-[80%] xl:w-[50%] gap-16 py-10 m-5"
          id="Surrey"
        >
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="font-cardo text-[38px]">Surrey</h1>
            <div className="md:hidden block">
              <Link href={"/"} className="text-sm font-nunito">
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Surrey Report{" "}
              </Link>
              <br />
              <Link
                href={"/"}
                className="text-sm font-nunito hover:text-slate-500"
              >
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Surrey Report{" "}
              </Link>
            </div>
            <br />
            <p className="font-nunito font-[rgba(66, 66, 66, 1)] text-[12px] leading-[2] ">
              Surrey is an expansive city with diverse neighbourhoods, cost of
              living, and community resources. The cultural make-up of the city
              provides a welcoming environment for newcomers to Canada and adds
              interesting events, activities, and services to the area. The cost
              of living in Surrey is generally much lower in comparison to other
              cities in Greater Vancouver, which includes the lower cost of
              purchasing a house. Many first-time homeowners are favouring
              Surrey for these affordable options.
            </p>
            <br />
            <Link href={"/"} className="text-sm font-nunito md:block hidden">
              {" "}
              <span className="underline text-[12px] ">CLICK TO VIEW</span> Surrey Report{" "}
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-sm font-nunito md:block hidden hover:text-slate-500"
            >
              {" "}
              <span className="underline text-[12px] ">CLICK TO VIEW</span> Surrey Report{" "}
            </Link>
          </div>
          <div
            className="w-full md:w-1/2 h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: `url("/Surrey.jpg")`,
              minHeight: "300px", // Set a minimum height to ensure the div is visible
            }}
          ></div>
        </div>
      </div>

      {/* 5th Div Complete */}

      <div className="flex justify-center bg-[#ebeced]">
        <div
          className="flex flex-col-reverse  md:flex-row-reverse justify-center items-center w-full md:w-[90%] lg:w-[80%] xl:w-[50%] gap-16 py-10 m-5"
          id="Port-Moody"
        >
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h1 className="font-cardo text-[38px]">Port Moody</h1>
            <div className="md:hidden block">
              <Link href={"/"} className="text-sm font-nunito">
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Port Moody
                Report{" "}
              </Link>
              <br />
              <Link
                href={"/"}
                className="text-sm font-nunito hover:text-slate-500"
              >
                {" "}
                <span className="underline text-[12px] ">CLICK TO VIEW</span> Port Moody
                Report{" "}
              </Link>
            </div>
            <br />
            <p className="font-nunito font-[rgba(66, 66, 66, 1)] text-[12px] leading-[2]">
              Located just a little further along the Burrard Inlet, “PoMo” is
              an excellent city. It boasts all the same features of Vancouver
              making it a great place to live. It’s the perfect combination of
              urban, trendy, and relaxed — with all the natural beauty to go
              with it. It is a community that people can call home while still
              maintaining an urban chic lifestyle.
            </p>
            <br />
            <Link href={"/"} className="text-sm font-nunito md:block hidden">
              {" "}
              <span className="underline text-[12px] ">CLICK TO VIEW</span> Port Moody Report{" "}
            </Link>
            <br />
            <Link
              href={"/"}
              className="text-sm font-nunito md:block hidden hover:text-slate-500"
            >
              {" "}
              <span className="underline text-[12px] ">CLICK TO VIEW</span> Port Moody Report{" "}
            </Link>
          </div>
          <div
            className="w-full md:w-[50%] h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: `url("/PortMoody.jpg")`,
              minHeight: "300px", // Set a minimum height to ensure the div is visible
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
