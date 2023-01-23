"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center content-center align-middle flex-wrap p-3 ">
        <Link href="/" className="inline-flex items-center p-2 mr-4 ">
          <h1 className="text-xl font-bold uppercase tracking-wide">
            unbounded
          </h1>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-orange-600 rounded lg:hidden ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className=" transition-all lg:inline-flex lg:flex-row lg:ml-auto lg:mr-auto lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto">
            <div className="lg:hidden w-full flex flex-col justify-end items-end justify-items-end">
              <Link
                href="/"
                className="text-center my-1 max-w-[120px] transition-all lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center shadow-md shad text-white bg-orange-600"
              >
                <h6 className="text-center  shadow-black">Sign Up</h6>
              </Link>
              <Link
                href="/"
                className="text-center  my-1 max-w-[120px] transition-all lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center shadow-md bg-gray-300"
              >
                <h6 className="text-center  shadow-black">Log In</h6>
              </Link>
            </div>
            <Link
              href="/"
              className="max-w-[120px] text-right transition-all lg:inline-flex lg:w-auto w-full px-3 py font-bold items-center justify-center border-b-4 border-b-transparent hover:border-b-orange-600"
            >
              Home
            </Link>
            <Link
              href="/"
              className="max-w-[120px] text-right transition-all lg:inline-flex lg:w-auto w-full px-3 py font-bold items-center justify-center border-b-4 border-b-transparent hover:border-b-orange-600"
            >
              Services
            </Link>
            <Link
              href="/"
              className="max-w-[120px] text-right transition-all lg:inline-flex lg:w-auto w-full px-3 py font-bold items-center justify-center border-b-4 border-b-transparent hover:border-b-orange-600"
            >
              About us
            </Link>
            <Link
              href="/"
              className="max-w-[120px] text-right transition-all lg:inline-flex lg:w-auto w-full px-3 py font-bold items-center justify-center border-b-4 border-b-transparent hover:border-b-orange-600"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* login and sign up buttons */}
        <div className="text-center  hidden lg:inline-flex ">
          <Link
            href="/"
            className="text-center transition-all lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center shadow-md mx-auto mr-3 bg-gray-300"
          >
            <h6 className="text-center  shadow-black">Log In</h6>
          </Link>
          <Link
            href="/"
            className="text-center  transition-all lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center shadow-md mx-auto mr-3 shad text-white bg-orange-600"
          >
            <h6 className="text-center  shadow-black">Sign Up</h6>
          </Link>
        </div>
      </nav>
    </>
  );
};
