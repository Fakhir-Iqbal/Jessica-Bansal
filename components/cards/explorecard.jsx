import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="bg-green text-white   absolute left-4  z-50 bottom-[40%]
   font-bold transform    rounded-full h-8 w-8  flex items-center justify-center  shadow-lg  text-2xl      "
    onClick={onClick}
  >
    &lt;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute bg-green   text-white right-4 bottom-[40%] transform    rounded-full text-2xl   h-8 w-8 flex items-center justify-center shadow-lg font-bold    "
    onClick={onClick}
  >
    &gt;
  </button>
);
const Explorecard = ({ items, className, latest, image, index }) => {
  // console.log("items", items);

  const settingsCard = {
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const images = [
    "listing1.jpg",
    "listing2.jpg",
    "listing3.jpg",
    "listing4.jpg",
    "listing5.jpg",
  ];
  return (
    <div
      key={index}
      className="xsm:min-w-[130px] sm:min-w-[200px] relative font-noto "
    >
      <div
        target="_blank"
        className={` w-full   flex flex-col rounded-xl overflow-hidden    ${className}`}
      >
        <div className="w-full  ">
          <Slider {...settingsCard}>
            {images.map((image, index) => (
              <div className="w-full" key={index}>
                <Image
                  src={image}
                  alt={"Image"}
                  height={0}
                  width={0}
                  sizes={"100vw"}
                  className="w-full rounded-t-xl h-[289px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Explorecard;
