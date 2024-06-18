"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Custom Previous Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="a absolute sm:right-[120px] right-[70px] bottom-0 lg:bottom-14 z-10 hover:bg-orange hover:text-white transform bg-transparent border-2 border-orange rounded-full py-2  px-4 shadow-xl font-bold text-xl  text-orange -translate-y-1/2  "
    onClick={onClick}
  >
    &lt;
  </button>
);

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute sm:right-[50px] right-[10px] bottom-0 lg:bottom-14  hover:bg-orange hover:text-white transform -translate-y-1/2 bg-transparent border-2 border-orange rounded-full py-2  px-4 shadow-xl font-bold text-xl  text-orange "
    onClick={onClick}
  >
    &gt;
  </button>
);
const SliderComponent = ({ renderCard, className, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1, // Default number of items to show
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1024, // Large screens
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 768, // Medium screens
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480, // Small screens
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    // ],
  };

  return (
    <div className="!space-x-4">
      <Slider {...settings}>
        {data?.map((items, index) => renderCard({ items, index, className }))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
