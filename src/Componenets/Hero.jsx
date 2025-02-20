import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/Hero.jpg";

function Hero() {
  return (
    <div className="">
      <div
        className="relative min-h-[70vh] object-contain inset-0 overflow-y-hidden flex items-center flex-col justify-center bg-center z-0"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover", // Makes the background cover the entire element
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //   filter: "brightness(0.3)",
        }}
      >
        <div className="absolute z-10 top-0 left-0 size-full bg-black/50"></div>
        <div className="absolute m-0 z-50 -bottom-4 left-0 w-full h-10 bg-white blur-lg "></div>
        <h1 className="text-5xl z-50 md:text-6xl font-bold text-white mb-6">
          1337 Event Hub
        </h1>
        <p className="text-xl z-50 text-white max-w-3xl mx-auto text-center">
          Welcome to the 1337 Event Hub – Where Innovation Meets Talent!"
        </p>
        <a
        href="/Events"
        className="z-10 mt-6 px-5 py-3 text-base font-medium text-center text-gray-950 bg-white rounded-lg hover:bg-gray-200"
          >
          Events
        </a>
      </div>
    </div>
  );
}

export default Hero;
