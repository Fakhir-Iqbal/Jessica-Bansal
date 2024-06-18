"use client";
import Button from "@/components/Button";
import Explorecard from "@/components/cards/explorecard";
import Header from "@/components/header";
import Modal from "@/components/modal/formModal";
import SliderComponent from "@/components/slickslider";
import Sliderr from "@/components/slider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function Home() {
  const [cities, setCities] = useState([]);
  const API_URL =
    "https://countriesnow.space/api/v0.1/countries/population/cities";

  const [postalCodes, setPostalCodes] = useState([]);
  const PostAPI_URL = "https://geocode.xyz/Vancouver+CA?json=1";

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        // Filter cities for Vancouver
        const vancouverCities = data.data.filter(
          (city) => city.country === "Canada"
        );
        setCities(vancouverCities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };
    fetchCities();
    const fetchPostalCodes = async () => {
      try {
        const response = await fetch(PostAPI_URL);
        const data = await response.json();
        if (data.error) {
          console.error("Error fetching postal codes:", data.error);
        } else {
          const vancouverPostalCodes = data.postal;
          setPostalCodes(vancouverPostalCodes);
          console.log("vancouverPostalCodes", vancouverPostalCodes);
        }
      } catch (error) {
        console.error("Error fetching postal codes:", error);
      }
    };
    fetchPostalCodes();
  }, []);

  const [subdivision, setSubdivision] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");

  const handleSubdivisionChange = (event) => {
    setSubdivision(event.target.value);
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    // Perform search based on selected values
    console.log("Subdivision:", subdivision);
    console.log("Postcode:", postcode);
    console.log("City:", city);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 660,
      behavior: "smooth",
    });
  };
  const texts = useMemo(
    () => [
      {
        name: "David - New Westminster",
        title: "Data Analysis Report",
        description:
          "This report provides a comprehensive analysis of the data collected over the past quarter. It includes key insights, trends, and recommendations for future strategies. The detailed analysis covers various aspects, such as customer behavior, market trends, and performance metrics.",
      },
      {
        name: "Jass - New Westminster",
        title: "Strategic Business Plan Overview",
        description:
          "Gain insights into our strategic business plan, outlining goals, initiatives, and milestones. This overview highlights the key strategies driving our companys growth and success. The plan covers market positioning, competitive analysis, and a roadmap for executing our strategic initiatives.",
      },
      {
        name: "Rafael - Vancouver",
        title: "Incredible experience",
        description:
          "We went in knowing nothing and honestly kind of scared of the huge commitment buying our first apartment would be. But Jessica was there every step of the way, making sure we had all the information and easing away our fears.",
      },
      {
        name: "Anna - Vancouver",
        title: "Highly recommend!",
        description:
          "Jessica guided me through the ever-changing real estate market and ensured I purchased not only a home that I love, but also a sound investment. His wealth of knowledge and years of experience in the local market made me feel confident in every decision I made.",
      },
      {
        name: "Ari - Langley",
        title: "Very lucky to find Jessica",
        description:
          "Jessica helped us narrow down our parameters, educated us on the process, and helped us every step of the way. What we really appreciated about Jessica is his up to date market knowledge, professionalism, integrity, and prompt communication.",
      },
      {
        name: "David - New Westminster",
        title: "Genuinely eager to find our perfect home",
        description:
          "We couldn’t imagine a better buying experience than the one that we had with Jessica. He guided us through our journey with precision while helping to build our knowledge of the home buying process as first-time home buyers.",
      },
    ],
    []
  );

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = (texts.indexOf(currentText) + 1) % texts.length;
      setCurrentText(texts[currentIndex]);
    }, 3000);
    const timeoutId = setTimeout(() => clearInterval(intervalId), 15000);

    // Uncomment the following line to stop the animation after a certain period (e.g., 15 seconds)
    // setTimeout(() => clearInterval(intervalId), 15000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [currentText, texts]);

  const handleChangeText = (index) => {
    const newIndex = (texts.indexOf(currentText) + index) % texts.length;
    setCurrentText(newIndex < 0 ? texts[texts.length - 1] : texts[newIndex]);
    console.log("index", index);
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4, // Default number of items to show
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 9000,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 2,
        },
      },
    ],
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000", // Change this to your desired border color
      },
    },
  });

  return (
    <>
      <main className="overflow-x-hidden">
        <Head>
          <title>Jessica Bansal | PREC*</title>
        </Head>
        <div className={"relative  "}>
          <div className={" w-full "}>
            <div
              className={
                " relative flex flex-col justify-center sm:p-20 h-screen items-center w-full   "
              }
            >
              <div className="absolute top-0 left-0 w-full  h-screen overflow-hidden z-10">
                <video
                  ref={videoRef}
                  className="object-cover w-full h-full "
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src="mainvideo3.mp4" type="video/mp4" />
                </video>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hidden absolute top-4 left-4 bg-white text-black border-none p-2 cursor-pointer z-20"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
              <div className="w-full flex flex-col justify-center sm:justify-between h-screen z-10">
                <div
                  className={
                    "hidden sm:flex justify-between nav  items-center text-xl text-white  xl:space-y-6  "
                  }
                >
                  <div className="flex cursor-pointer gap-10 items-center">
                    <div
                      className={
                        "text-center text-black  flex h-full  justify-center flex-col items-center"
                      }
                    >
                      <Link
                        href={"/"}
                        className={"cursor-pointer"}
                        aria-label="homepage"
                      >
                        <h1
                          className={
                            "text-[24px] font-semibold uppercase font-cardo "
                          }
                        >
                          Jessica Bansal
                        </h1>
                        <p className="font-cardo text-[16px] uppercase font-semibold !leading-none">
                          prec*
                        </p>
                      </Link>
                    </div>

                    <Image
                      src={"/eXp Realty - Black-01.svg"}
                      className="w-[90px] "
                      width={0}
                      height={0}
                      sizes={"100vw"}
                      alt="rolodex Logo"
                    />
                  </div>
                  <Link href={"/contact"} aria-label="contactButton">
                    <Button>Contact</Button>
                  </Link>
                </div>
                <div className="flex  items-center justify-between !text-white">
                  <div
                    onClick={handleClick}
                    className="hidden  rounded-full cursor-pointer  sm:flex justify-center items-center w-12 h-12 text-white border-2 border-white"
                  >
                    <div className="">
                      <FaArrowDown />
                    </div>
                  </div>
                  <div className="text-center px-5 sm:px-0 sm:text-end   font-cardo">
                    <p className="text-sm sm:text-base  xl:text-xl  sm:font-semibold">
                      TOP VANCOUVER REALTOR, JESSICA BANSAL
                    </p>
                    <h1 className=" sm:font-semibold my-3 text-4xl sm:text-[40px] xl:text-5xl  font-cardo">
                      COMMITTED TO YOUR FUTURE
                    </h1>
                    <p className="px-10 sm:px-0 sm:text-xl italic font-cardo">
                      Buying and selling residential real estate in Burnaby{" "}
                      <br /> and the Lower Mainland since 2018
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <div>
          <div className="flex flex-col px-5 sm:px-0 sm:block mt-20 w-full text-center max-w-screen-xl mx-auto">
            <p className="text-sm">
              Jessica Bansal Personal Real Estate Corporation
            </p>
            <h1 className="px-4 sm:px-0 text-4xl  py-4 font-cardo">
              Your Next Great Move Starts Here
            </h1>
            <div className=" gap-6 my-10 flex order-2 justify-center items-center ">
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="300"
              >
                <Image
                  src={"./img1.webp"}
                  sizes={"100vw"}
                  width={793}
                  height={814}
                  alt={"image"}
                  className="w-[153px] h-[200px] sm:w-[365px] sm:h-[411px]"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="300"
              >
                <Image
                  src={"./img2.webp"}
                  sizes={"100vw"}
                  width={0}
                  height={0}
                  alt={"image"}
                  className="w-[153px] h-[200px] sm:w-[365px] sm:h-[411px]"
                />
              </div>
            </div>
            <p>
              Say &quot;goodbye&quot; to overwhelm, and &quot;hello&quot; to
              your new home. My goal is to simplify this complex <br /> process
              by replacing stress and anxiety with ease and excitement.
              It&apos;s important to me that you are <br />
              confident and comfortable with every choice you make.
            </p>
          </div>
          {/* about us */}
          <div className=" max-w-screen-lg items-center mx-auto lg:gap-20 xl:gap-40 my-20 flex flex-col sm:grid grid-cols-2">
            <div className=" space-y-6 pt-10 flex justify-between flex-col w-[73%] order-2 sm:order-1 text-center sm:text-start ">
              <p className="text-green text-sm font-medium ">MEET YOUR AGENT</p>
              <div>
                <h1 className="text-3xl font-cardo ">JESSICA BANSAL</h1>
              </div>
              <div className="space-y-6 text-sm flex flex-col items-center sm:block">
                <p className="">
                  I know that buying or selling a home is more than just a
                  transaction: it&#39;s a life changing experience. My
                  relationship-first approach is what makes the journey to
                  success more enjoyable.
                </p>
                <p className="">
                  Whether you&#39;re new to the area or a 604 native, I&#39;ll
                  guide you through each step of your real estate needs -
                  before, during, and after the sale
                </p>
                <Button className={"!flex gap-2 "}>
                  <Link href={"/about"} aria-label="aboutpage">
                    <p>ABOUT ME</p>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative order-1 sm:order-2">
              <Image
                data-aos="fade-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="400"
                className={"w-full"}
                src={"/Headshot1.webp"}
                sizes={"100vw"}
                width={0}
                height={0}
                alt={"image"}
              />
            </div>
          </div>
          <div
            className={
              "h-[100px]  bg-green z-50 flex flex-col justify-center    "
            }
          >
            <Slider {...settings}>
              {[
                "$200M+ TOTAL SALES",
                "250+ KEYS EXCHANGED",
                "25 AVERAGE DAYS ON MARKET",
                "98% SALES TO LIST RATIO",
                "$200M+ TOTAL SALES",
                "250+ KEYS EXCHANGED",
              ].map((items, index) => (
                <div
                  key={index}
                  className="text-base text-center sm:text-xl text-white font-semibold "
                >
                  {items}
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* Services Area */}
        <div className="s">
          <div className="max-w-screen-xl sm:mx-auto gap-20 py-20 flex flex-col sm:grid grid-cols-3">
            <div className="cols-span-1 flex flex-col items-center px-8 sm:px-0 sm:items-end space-y-6">
              <h1 className="">WHAT&#39;S YOUR GOAL?</h1>
              <hr className="border-t  w-2/3 sm:w-1/2 border-black" />
              <Link
                href={"/buy"}
                className="text-sm text-gray-800 sm:text-[13px] transition-colors duration-500 hover:text-gray-400 cursor-pointer tracking-widest"
              >
                BUY MY NEXT HOME
              </Link>
              <hr className="border-t  w-2/3 sm:w-1/2 border-black" />
              <Link
                href={"/sell"}
                className="text-sm text-gray-800 sm:text-[13px] transition-colors duration-500 hover:text-gray-400 cursor-pointer tracking-widest "
              >
                SELL MY HOME
              </Link>
              <hr className="border-t  w-2/3 sm:w-1/2 border-black" />
            </div>
            <div className="col-span-2 space-y-6 sm:pl-12 px-8 sm:w-[77%]">
              <h1 className="text-[22px] leading-tight sm:leading-normal sm:text-2xl font-medium font-cardo">
                You&#39;re serious about your real estate goals; Im serious
                about getting the job done! I ensure no details fall through the
                cracks so that you get the best deal.
              </h1>
              <p className="text-sm leading-loose sm:leading-normal ">
                Regardless of the market conditions one thing is for sure -
                it&#39;s highly competitive. So it&#39;s simply not enough to
                casually browse consumer-facing platforms like Zolo. It takes
                having an agent in your corner who&#39;s well-networked, has a
                proven track record, is an expert negotiator, and can navigate
                the paperwork on your behalf for the best possible outcome.
              </p>
            </div>
          </div>
          <div className="max-w-screen-xl mx-4 sm:mx-auto mb-20">
            <h1 className=" text-center px-8 sm:px-0 text-4xl font-cardo">
              Browse Jessica&#39;s Listings
            </h1>

            <div className="relative  my-20">
              <SliderComponent
                data={[1, 3, 4, 5, 6, 67, 7, 8, 9]}
                renderCard={Explorecard}
                className={"!mx-4 "}
                fixedWidth={270}
              />
            </div>
            <div className="mx-2  sm:mx-16 2xl:mx-0">
              <h1 className="text-4xl text-center sm:text-start  sm: my-4 font-">
                Start Your Home Search
              </h1>
              <div className="flex mt-8 sm:mt-0 ">
                <ThemeProvider theme={theme}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="New Westminster"
                    variant="outlined"
                  />
                </ThemeProvider>
                <div className="bg-green cursor-pointer w-20 flex items-center justify-center rounded-[4px]">
                  <IoMdSearch size={30} color="white" />
                </div>
              </div>
              {/* dropdown */}
              <div className="bg-white hidden shadow-lg p-5 mt-1 rounded">
                <ThemeProvider theme={theme}>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="subdivision-label">Subdivision</InputLabel>
                    <Select
                      labelId="subdivision-label"
                      id="subdivision-select"
                      value={subdivision}
                      onChange={handleSubdivisionChange}
                      label="Subdivision"
                    >
                      {/* Subdivision options */}
                      <MenuItem value="subdivision1">Subdivision 1</MenuItem>
                      <MenuItem value="subdivision2">Subdivision 2</MenuItem>
                      <MenuItem value="subdivision3">Subdivision 3</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="postcode-label">Postcode</InputLabel>
                    <Select
                      labelId="postcode-label"
                      id="postcode-select"
                      value={postcode}
                      onChange={handlePostcodeChange}
                      label="Postcode"
                    ></Select>
                  </FormControl>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, minWidth: "100%" }}
                  >
                    <InputLabel id="city-label">City</InputLabel>
                    <Select
                      labelId="city-label"
                      id="city-select"
                      value={city}
                      onChange={handleCityChange}
                      label="City"
                    >
                      {/* City options */}
                      {cities.map((city) => (
                        <MenuItem key={city.city} value={city.city}>
                          {city.city}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Button variant="contained" onClick={handleSearch}>
                    Search
                  </Button>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>

        {/* blog section */}
        <div className="bg-[#ebeced]">
          <div className="max-w-screen-xl flex flex-col sm:flex-row justify-center gap-20  mx-auto py-40">
            {[
              {
                img: "/buy.jpg",
                title: "Buyer Representation",
                description:
                  "Finding the right house is first of many steps to home buying. I will support you through each stage of the planning process by providing timely advice and recommendations tailored to your needs. Youre in good hands.",
                button: "BUY WITH JESSICA",
                href: "/buy",
              },
              {
                img: "/Great room .svg",
                title: "Selling Your Home",
                description:
                  "Whats the secret to successfully selling your home? The details. My proven sales approach, effective marketing, extensive network, and pro negotiation skills ensures you get the most money for your home.",
                button: "SELL WITH JESSICA",
                href: "/sell",
              },
              {
                img: "/Home Office.svg",
                title: "Home Evaluation",
                description:
                  "Thinking of selling? Get started with a complimentary, no obligation, Comparative Market Analysis (CMA). This report will provide all the data you need when comparing your home to similar properties on the market.",
                button: "START NOW",
                href: "/",
              },
            ].map((items, index) => (
              <div
                key={index}
                className=" space-y-10 sm:space-y-6 mx-4 sm:mx-0  sm:max-w-[250px]"
              >
                <Image
                  className={"w-full object-cover !h-[375px]"}
                  src={items.img}
                  sizes={"100vw"}
                  width={0}
                  height={0}
                  alt={"image"}
                  layout="responsive"
                />
                <h1 className="text-3xl sm:text-2xl  font-medium font-cardo">
                  {items.title}
                </h1>
                <p className="text-sm leading-6 text-gray-600">
                  {items.description}
                </p>
                <br />
                <Link
                  href={items.href}
                  className="py-2 px-4 mt-[20px] text-[12px] font-semibold shadow-sm text-white bg-[#424242]"
                >
                  {items.button}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div
          className={
            " relative parllax flex flex-col justify-center py-20 px-8 sm:p-20 items-center    w-full   z-10"
          }
        >
          <div className="absolute bottom-6 right-8 cursor-pointer rounded-full sm:hidden flex justify-center items-center w-12 h-12 text-white border-2 border-white z-30">
            <div onClick={() => handleChangeText(1)}>
              <FaArrowRight color="white" />
            </div>
          </div>
          <div className=" relative flex flex-col !text-center px-8 md:px-20 xl:px-40 py-12 space-y-10 sm:w-2/3 z-50 !text-black bg-white xl:max-w-screen-xl">
            <div className="hidden  absolute bottom-6 right-8 cursor-pointer rounded-full sm:flex justify-center items-center w-12 h-12 text-white border-2 border-black z-30">
              <div onClick={() => handleChangeText(1)}>
                <FaArrowRight color="black" />
              </div>
            </div>
            <h1 className="font-medium text-gray-500 sm:text-black   text-4xl font-cardo">
              What Clients Are Saying
            </h1>
            <div className="flex items-center justify-center">
              <Image
                className={"w-2/3 sm:w-[20%]"}
                src={"/download (2).jpg"}
                sizes={"100vw"}
                width={0}
                height={0}
                alt={"image"}
              />
            </div>

            <p className="text-2xl font-medium font-cardo">
              {currentText.title}
            </p>
            <p className="text-sm ">{currentText.description}</p>
            <p className="italic font-cardo">{currentText.name}</p>
          </div>
        </div>
        <div className="bg-[#ebeced]">
          <div className="max-w-screen-xl  flex flex-col items-center gap-20 mx-auto pt-20 pb-40">
            <div className="text-center">
              <p className="text-[13px] font-semibold tracking-widest ">
                YOUR INFORMATION HUB
              </p>
              <h1 className="font-medium mt-5 sm:mt-10 px-5 sm:px-0 text-4xl font-cardo">
                Real Estate Resources For <br /> Buyers and Sellers
              </h1>
            </div>
            <div className=" items-center relative">
              <div className="flex justify-center relative gap-20 items-center">
                <div
                  data-aos="fade-right"
                  data-aos-duration="200"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="600"
                >
                  <Image
                    className={
                      "w-screen sm:w-[551px] sm:h-[473px] h-[322px] object-cover"
                    }
                    src={"/exterior.svg"}
                    sizes={"100vw"}
                    width={0}
                    height={0}
                    alt={"image"}
                  />
                </div>
                <div className="bg-white h-72 sm:h-[fit-content]  absolute top-48 sm:top-[78px] sm:-right-[200px] flex text-center flex-col space-y-6 items-center px-5 py-12 sm:p-16 w-[75%] sm:w-[fit-content]">
                  <p className="text-[12px]">NEIGHBOURHOODS</p>
                  <h1 className="font-medium   text-4xl font-cardo">
                    Market Reports
                  </h1>
                  <p className="text-[12px]">
                    Browse listings and market stats <br />
                    specific to your neighbourhood.
                  </p>
                  <Button className={"!px-10 !py-1 text-[12px]"}>View</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl  flex flex-col items-center gap-20 mx-auto pt-20 pb-40">
            <div className="flex  justify-center relative gap-20 items-center">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="500"
              >
                <Image
                  className={"w-full sm:w-[551px] h-[322px] sm:h-[473px]"}
                  src={"./recentsales.jpg"}
                  sizes={"100vw"}
                  width={0}
                  height={0}
                  alt={"image"}
                />
              </div>
              <div className="bg-white absolute top-48 sm:top-[60px] sm:-left-[200px]  h-72 sm:h-[fit-content] flex text-center flex-col space-y-6 items-center px-5 py-12 sm:p-20 w-[75%] sm:w-2/3">
                <p className="text-[12px]">FEATURED HOMES</p>
                <h1 className="font-medium   text-4xl font-cardo">
                  Recent Sales
                </h1>
                <p className="text-[12px]">
                  Check out my most recent sales <br /> and featured listings
                </p>
                <Link href={"/recent"} aria-label="recentpage">
                  <Button className={"!px-10 !py-1 text-[12px]"}>VIEW</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-col sm:grid grid-cols-2 items-center gap-20 mx-auto pt-20 pb-40">
          <div>
            <Image
              className={
                "w-2/3 mx-auto sm:mx-0 shadow-2xl sm:w-1/2 sm:ml-auto rounded-xl border-[15px] border-black"
              }
              style={{
                boxShadow: "2px 2px 12px black",
              }}
              src={"/Investment Sell.jpg"}
              sizes={"100vw"}
              width={0}
              height={0}
              alt={"image"}
            />
          </div>
          <div className="bg-white h-[fit-content] flex  flex-col space-y-6 items-center sm:items-start text-center sm:text-start  sm:pr-16 w-[85%]">
            <p className="text-sm font-medium">
              GET MY MOST REQUESTED RESOURCE
            </p>
            <h1 className="font-medium px-3 sm:px-0 text-4xl font-cardo">
              Property Investment Guide
            </h1>
            <p className="text-sm ">
              Your complete guide to purchasing a profitable investment property
              in Vancouver. Im sharing all my secrets so you can build wealth
              and breakthrough the real estate market.
            </p>
            <p className="text-[12px] ">PLUS! ILL TELL YOU WHAT NOT TO DO</p>
            <Button
              className={"!px-10 w-2/3 font-bold !bg-black "}
              onClick={handleOpenModal}
            >
              DOWNLOAD NOW
            </Button>
            <Modal
              isOpen={modalOpen}
              onClose={handleCloseModal}
              href="/pdf/Investment Guide.pdf"
            />
          </div>
        </div>
      </main>
    </>
  );
}
