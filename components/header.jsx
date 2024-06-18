"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    // fixed top-0 left-0 right-0
    <div
      className={`fixed top-0 left-0 right-0 sm:static  z-40 py-4 w-full px-4 !font-phoppin bg-white`}
    >
      <div className="px-3  flex flex-wrap items-center justify-between">
        <div className={" ml-8 text-center text-whtie font-semibold"}>
          <Link href={"/"} className={"cursor-pointer"} aria-label="homepage">
            <h1 className={" uppercase font-cardo "}>Jessica Bansal</h1>
            <p className="text-[10px] font-semibold tracking-wider">PREC*</p>
          </Link>
        </div>
        <div>
          <GiHamburgerMenu
            className="text-3xl sm:hidden cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
        <div className={` md:flex items-center gap-6  z-30  hidden`} id="">
          <div className="flex md:gap-0 gap-6 !uppercase items-center space-x-8 text-gray-600 font-medium text-[12px]">
            <Link href={"/"} aria-label="homepage">
              <p className=" pr-4  hover:opacity-50 transition-all duration-300   ">
                Home
              </p>
            </Link>
            <Link href={"/about"} aria-label="aboutpage">
              <p className="   hover:opacity-50 transition-all duration-300   ">
                ABOUT
              </p>
            </Link>
            <Link href={"/buy"} aria-label="buypage">
              <p className="   hover:opacity-50 transition-all duration-300   ">
                BUY
              </p>
            </Link>

            <Link href={"/sell"} aria-label="sellpage">
              <p className=" py-2   hover:opacity-50 transition-all duration-300   ">
                SELL
              </p>
            </Link>
            <Link href={"/recent"} aria-label="recentpage">
              <p className=" py-2   hover:opacity-50 transition-all duration-300 text-center  ">
                Recent <br /> sales
              </p>
            </Link>
            <Link href={"/cities"} aria-label="cities">
              <p className=" py-2   hover:opacity-50 transition-all duration-300   ">
                cities
              </p>
            </Link>
            <Link href={"/"} aria-label="homesearch">
              <p className=" py-2   hover:opacity-50 transition-all duration-300 text-center  ">
                home <br /> search
              </p>
            </Link>
            <Link href={"/resources"} aria-label="resources">
              <p className=" py-2   hover:opacity-50 transition-all duration-300   ">
                Resources
              </p>
            </Link>
          </div>
          <Link href={"/contact"} aria-label="contact page">
            <Button>Contact</Button>
          </Link>
        </div>
        <div
          className={`sm:hidden items-center gap-6  z-30 w-full text-center ${
            isNavOpen ? "block" : "hidden"
          }`}
          id=""
        >
          <div className="flex flex-col font-bold opacity-80 mt-4 items-center rounded-lg !uppercase bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
            <Link href={"/"} aria-label="homepage">
              <p className=" block font-bold cool-link navlink py-2  md:p-0  text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary ">
                Home
              </p>
            </Link>
            <Link href={"/about"} aria-label="about page">
              <p className=" block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                About
              </p>
            </Link>
            <Link href={"/buy"} aria-label="buy page">
              <p className=" block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                Buy
              </p>
            </Link>

            <Link href={"/sell"} aria-label="sell page">
              <p className="  block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                Sell
              </p>
            </Link>
            <Link href={"/recent"} aria-label="recent page">
              <p className="block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                Recent sales
              </p>
            </Link>
            <Link href={"/cities"} aria-label="cities page">
              <p className=" block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary  ">
                Cities
              </p>
            </Link>
            <Link href={"/"} aria-label="homesearch page">
              <p className="   block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary ">
                Home search
              </p>
            </Link>
            <Link href={"/resources"} aria-label="resource page">
              <p className=" block font-bold cool-link navlink py-2  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary ">
                Resources
              </p>
            </Link>
          </div>
          <Link href={"/contact"} aria-label="contact page">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
