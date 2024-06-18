import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Explorecard from "./cards/explorecard";

const SliderComponent = ({ renderCard, className, data }) => {
  const listing = [
    {
      images: "/list1 (2).jpg",
      title: "362 Christina Place Skidegate/Sandspit",
      price: "$709,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images: "/list2 (2).jpg",

      title: "7835 10th Avenue, Burnaby ",
      price: "$780,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images: "/list3 (2).jpg",

      title: "411 E Eighth Avenue, New Westminster",
      price: "$89,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images: "/list4 (2).jpg",

      title: "602-618  Carnarvon St, New Westminster ",
      price: "$859,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images: "/list5 (2).jpg",

      title: "362 Christina Place Skidegate/Sandspit",
      price: "$710,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images: "/list6 (2).jpg",

      title: "411 E Eighth Avenue, New Westminster",
      price: "$910,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
    {
      images: "/list3.jpg",

      title: "602-618  Carnarvon St, New Westminster",
      price: "$289,000",
      address: "Metropolis, Superstate",
      id: "#g4353tywe456",
      type: "Condo",
    },
  ];

  const settingsCard = {
    prevArrow: <></>,
    nextArrow: <></>,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  {
    /* <Slider {...settings}>
    {listing?.map((items, index) => renderCard({ items, index, className }))}
  </Slider> */
  }
  return (
    <div className="!space-x-4 slider">
      {/* <Slider className="" {...settingsCard}> */}

      <div className="relative font-noto border-[1px] w-full md:w-1/2 lg:w-1/3 mx-auto border-gray-200 rounded-t-xl">
        <Explorecard />
        <div className="p-4 flex flex-col justify-between leading-normal ">
          <div className="mb-4 font-noto">
            <p className="text-xl line-clamp-2">362 Christina Place </p>
            <p className="text-[#9691A4] text-xl line-clamp-2 ">$710,000</p>
          </div>
          <div className="flex items-center gap-2 text-[#9691A4]">
            <p>Skidegate/Sandspit</p>
            <p></p>
          </div>
          <p className="text-lg"></p>
        </div>
      </div>

      {/* {listing.map((item, index) => (
        <div key={index} className="relative font-noto border-[1px] border-gray-200 rounded-t-xl">
           <Explorecard/>
          <div className="p-4 flex flex-col justify-between leading-normal ">
            <div className="mb-4 font-noto">
              <p className="text-xl line-clamp-2">{item.title}</p>
              <p className="text-[#9691A4] text-xl line-clamp-2">{item.price}</p>
            </div>
            <div className="flex items-center gap-2 text-[#9691A4]">
              <p>{item.id}</p>
              <p>{item.type}</p>
            </div>
            <p className="text-lg">{item.address}</p>
          </div>
        </div>
      ))} */}
      {/* </Slider> */}
    </div>
  );
};

export default SliderComponent;
