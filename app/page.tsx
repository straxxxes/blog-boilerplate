import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* this is the initial root / landing page the visitor will see */}
      <main>
        <div className="container my-10 mx-auto max-w-[1024px] h-screen flex flex-col content-around ">
          <div className="relative  z-20  h-max  w-max max-w-lg translate-x-1/5 translate-y-1/2 before:absolute  before:border before:border-black before:rounded-lg before:-top-5 before:-left-5 before:w-3/5 before:h-2/3 before:-z-50">
            <div className="bg-[#eeeeee] border rounded-xl p-10 border-orange-500 shadow-md shadow-[rgba(0,0,0,0.5)]">
              <h1 className="text-2xl font-black uppercase mb-3">
                welcome to the <br />
                <span className="text-orange-500"> World of Tomorrow</span>
              </h1>
              <p className="text-md">
                Designing the future through the power of imagination, advanced
                technology and cutting-edge systems.
              </p>
            </div>
          </div>
          <div className="absolute w-full h-full max-h-[500px] max-w-[800px] contain z-10 justify-end align-middle top-0 bottom-0 right-0 m-auto rounded-l-xl translate-y-10 translate-x-2/4 border border-black before:absolute  before:border before:border-black before:rounded-lg before:bottom-5 before:right-0 before:w-3/5 before:h-2/3 before:-z-50 before:bg-[#eee] before:w-full before:-left-1/4"></div>
          <Image
            width={1080}
            height={1080}
            className="absolute w-full h-full shadow-md shadow-gray-600 max-h-[500px] max-w-[800px] contain z-10 justify-end align-middle top-0 bottom-0 right-0 m-auto rounded-l-xl"
            src="/hero_image.png"
            alt="imagine a man changing the world"
          ></Image>
        </div>
      </main>
    </>
  );
}
