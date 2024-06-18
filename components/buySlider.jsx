"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const BuySlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: true,
    prevArrow: <></>,
    nextArrow: <></>,
    swipeToSlide: false,
  };
  // const data = [
  //   {
  //     image: "/buy.jpg",
  //     process: "the home buying process",
  //     sno: "1.",
  //     title: "Get Pre-Approved",
  //     description:
  //       "Knowing your budget is essential as you’ll know exactly how much you can borrow and the price range your home needs to be in. You can lock in interest rates for up to 90 days while you look for your home.",
  //   },
  //   {
  //     image: "/buy.jpg",
  //     process: "the home buying process",
  //     sno: "2.",
  //     title: "The Search",
  //     description:
  //       "Choosing a home that complements your lifestyle, income, and preferences is no easy task. But, with the right realtor, whose personality meshes well with yours, you will soon understand your wants and needs. ",
  //   },
  //   {
  //     image: "/buy.jpg",
  //     process: "the home buying process",
  //     sno: "3.",
  //     title: "The Offer",
  //     description:
  //       "When you’ve found ‘the one’ I’ll conduct a Comparative Market Analysis to determine where a reasonable offer should stand. Then we’ll present our Contract of Purchase and Sale to the listing agent.",
  //   },
  //   {
  //     image: "/buy.jpg",
  //     process: "the home buying process",
  //     sno: "4.",
  //     title: "Remove Subjects",
  //     description:
  //       "This is where we successfully complete the conditions outlined in the Contract of Purchase and Sale, which will include a home inspection and finalizing your lending terms with your mortgage broker and bank.",
  //   },
  //   {
  //     image: "/buy.jpg",
  //     process: "the home buying process",
  //     sno: "5.",
  //     title: "Sign and Close",
  //     description:
  //       "With your deposit paid, you’ll meet with a legal representative to register the property and transfer the Title from the previous owner to you. You’ll sign all the documents a few days before completion day, which is when you legally get ownership of your new home.",
  //   },
  //   {
  //     image: "/buy.jpg",
  //     process: "the home buying process",
  //     sno: "6.",
  //     title: "Moving Day!",
  //     description:
  //       "Congratulations are in order because you just got the keys to your new home and you can start moving in. Don’t forget to file your change of address!",
  //   },
  // ];

  return (
    <>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
            key={index}
            className="!flex justify-center md:h-92 w-full !md:w-[50%] md:p-10 bg-[#ebeced]
          "
          >
            <div className="flex xl:flex-row md:flex-row flex-col justify-center items-center p-5 lg:w-[60%] md:w-[80%] sm:w-[60%] w-full">
              <div className="w-full">
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  alt="buy"
                  className="md:w-[500px] w-full flex-1 xl:h-[500px] h-[250px] px-10 object-cover"
                />
              </div>
              <div className="flex flex-col w-full px-16 items-center md:items-start space-y-4 md:mt-0 mt-8">
                <h1 className="text-sm tracking-wider uppercase  text-center md:text-start xl:text-2xl">
                  {item.process}
                </h1>
                <div className="relative flex flex-col md:gap-10 gap-5">
                  <h1 className="absolute top-8 -left-20 -z-auto text-9xl text-[#C8CFD5] font-bold font-cardo italic ">
                    {item.sno}
                  </h1>
                  <h1 className="xl:text-4xl text-[18px] font-cardo italic ">
                    {item.title}
                  </h1>
                  <p className="xl:text-xl text-xs tracking-wide z-99 relative">
                    {item.description}
                  </p>
                  <img
                    src="/Arrow.svg"
                    style={{ marginTop: -30 }}
                    width={100}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
export default BuySlider;
