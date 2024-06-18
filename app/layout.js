"use client";
import React, { useEffect } from "react";
import { Cardo, Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import AOS from "aos";
import dynamic from "next/dynamic";
const PureCounter = dynamic(() => import("@srexi/purecounterjs"), {
  ssr: false,
});
import "aos/dist/aos.css";
import "animate.css";
import Head from "next/head";

// import PureCounter from "@srexi/purecounterjs";
// const pure = new PureCounter();
const Cardos = Cardo({
  variable: "--font-cardo",
  subsets: ["latin"],
  // display: "swap",
  weight: ["700", "400"],
});
const Nunit = Nunito({
  variable: "--font-Nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: "phone", "tablet", "mobile", boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations" detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 300, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
    new PureCounter({
      // Setting that can"t" be overriden on pre-element
      selector: ".purecounter", // HTML query selector for spesific element
      // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
      start: 0, // Starting number [uint]
      // end: 100, // End number [uint]
      duration: 2, // The time in seconds for the animation to complete [seconds]
      delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
      once: true, // Counting at once or recount when the element in view [boolean]
      pulse: false, // Repeat count for certain time [boolean:false|seconds]
      decimals: 0, // How many decimal places to show. [uint]
      legacy: true, // If this is true it will use the scroll event listener on browsers
      filesizing: false, // This will enable/disable File Size format [boolean]
      currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
      formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
      separator: false, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
    });
  }, []);
  return (
    <html lang="en" className={`${Cardos.variable} ${Nunit.variable}`}>
      <head>
        <title>Jessica Bansal | PREC*</title>
        <meta name="description" content="Vancouver Realty" />
        <link rel="icon" href="./favicon.ico" sizes="32x32" />
      </head>
      <body className={(Cardos.className, Nunit.className)}>
        <>
          <style jsx global>{`
            body {
              font-family: ${Nunit.style.fontFamily};
            }
          `}</style>

          <div>{children}</div>
          <Footer />
        </>
      </body>
    </html>
  );
}
