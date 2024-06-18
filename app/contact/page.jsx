"use client"
import React from "react";
import Header from "@/components/header";
import Button from "@/components/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";

function Page() {
  const contact = [
    {
      title: "Explore the Blog",
      description:
        "The best resource in town for getting to know whats going on in Vancouvers market.",
      button: "READ",
      link: "/blog",
    },
    {
      title: "Follow on Instagram",
      description:
        "Get to know me and my work on a regular basis with updates and highlights all in one place.",
      button: "FOLLOW",
      link: "https://www.instagram.com/jess.realty?igsh=d2xvaDR3cXBqcWJ3",
    },
    {
      title: "Featured Listings",
      description:
        "Check out my current listings and recent sales to see what could be possible for you!",
      button: "BROWSE",
      link: "/recent",
    },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="contactimage w-full h-full p-5 sm:py-32 sm:mt-0 mt-20 flex  justify-center items-center ">
        <div className="max-w-screen-lg flex  justify-between space-y-4 sm:space-y-16 flex-col py-10 px-5 sm:p-10 bg-white w-full  sm:h-auto bg-opacity-90">
          <div className="text-center">
            <p className=" sm:text-lg uppercase">Contact Jessica </p>
            <h1 className="text-4xl  font-cardo sm:text-5xl ">
              Leave a message
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:grid grid-cols-2 gap-10 space-y-6 sm:space-y-0">
              <div className="space-y-6 ">
                <div className="flex flex-col ">
                  <h1 className="text-xl font-cardo text-black  italic">
                    Name:
                  </h1>
                  <input
                    {...register(
                      "Name",
                      { required: "Name is required" },
                      { maxLength: 80 },
                      { minLength: 2 },
                      { pattern: /^[A-Za-z]+$/i },
                      { message: "Please enter a valid name" }
                    )}
                    type="text"
                    className="border focus:outline-none border-black p-2"
                  />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xl font-cardo text-black  italic">
                    Email:
                  </h1>
                  <input
                    {...register(
                      "Email",
                      { required: "Email is required" },
                      { pattern: /^\S+@\S+$/i },
                      { message: "Please enter a valid email" }
                    )}
                    type="text"
                    className="border focus:outline-none border-black p-2"
                  />
                </div>
                <div className="flex flex-col ">
                  <h1 className="text-xl font-cardo text-black  italic">
                    Phone:
                  </h1>
                  <input
                    {...register(
                      "Phone",
                      { required: "Phone is required" },
                      { pattern: /^[0-9]+$/i },
                      { message: "Please enter a valid phone number" }
                    )}
                    type="text"
                    className="border focus:outline-none border-black p-2"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-cardo text-black  italic">
                  Your Message:
                </h1>
                <div>
                  <textarea
                    {...register(
                      "Message",
                      { required: "Message is required" },
                      { maxLength: 500 },
                      { minLength: 2 },
                      { message: "Please enter a valid message" }
                    )}
                    type="text"
                    className="border resize-none w-full focus:outline-none border-black p-2 h-[230px]"
                  />
                </div>
                <div className="flex items-end justify-end">
                  <Button type="submit"
                    className={
                      "bg-transparent !text-black border border-black !px-10"
                    }
                  >
                    SEND
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#4d5864] !text-white">
        <div className="max-w-screen-xl mx-auto py-20 sm:py-40">
          <h1 className="text-5xl text-center font-cardo">Stay Connected</h1>
          <div className="flex flex-col items-center space-y-8 sm:flex-row justify-around mt-20">
            <div className="hidden"></div>
            {contact.map((item, index) => (
              <div className="space-y-10 text-center max-w-[260px]" key={index}>
                <h1 className="text-2xl font-cardo italic">{item.title}</h1>
                <p>{item.description}</p>
                <Button
                  className={
                    "bg-transparent font-semibold border border-white hover:bg-transparent !px-16"
                  }
                >
                  <Link href={item.link}>{item.button}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
