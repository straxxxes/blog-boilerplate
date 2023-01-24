import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* this is the initial root / landing page the visitor will see */}
      <div className="container w-full h-full max-w-5xl mx-auto mb-10 flex flex-col justify-center content-center items-center place-content-center align-center p-10 pt-0">
        <div className="bg-[#eee] text-center shadow-[0px_0px_30px_rgba(0,0,0,0.3)] rounded-lg px-10 py-10 z-20 translate-y-20 max-w-3xl">
          <h1 className="uppercase mb-2 font-bold text-xl">
            Welcome to the &nbsp;
            <span className="text-orange-500">World of Tomorrow</span>
          </h1>
          <p>
            Designing the future through the power of imagination, advanced
            technology and cutting-edge systems.
          </p>
        </div>
        <div className="border-2 border-gray-600 h-[400px] w-screen max-w-[1400px] flex items-center rounded-lg my-16">
          <div className="relative z-10 w-screen h-screen max-h-[500px] max-w-7xl shadow-[0px_0px_30px_rgba(0,0,0,0.5)] rounded-xl bg-center bg-hero-image bg-bg-size-sm mx-auto"></div>
        </div>
        <div className="w-full flex justify-evenly p-5">
          <button
            type="button"
            className="bg-orange-500 text-[#eee] text-lg font-bold px-10 py-5 rounded-lg shadow-sm shadow-black"
          >
            Learn More
          </button>
          <button
            type="button"
            className="bg-[#333] text-[#eee] text-lg font-bold px-10 py-5 rounded-lg shadow-sm shadow-black m-0"
          >
            View Portfolio
          </button>
        </div>
        <div className=" w-8 h-12 border-2 border-gray-600 shadow-[0px_0px_30px_rgba(0,0,0,0.3)] rounded-full ">
          <div className=" w-5 h-5 bg-gray-600 mx-auto rounded-full translate-y-5 scroll-animation"></div>
        </div>
      </div>
    </>
  );
}
