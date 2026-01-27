import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-[#121414] flex lg:grid lg:grid-cols-12 py-3">
        {/* LEFT */}
        <div className="lg:col-span-1"></div>
        <div className="navbar-start lg:col-span-3 lg:mr-3 ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>
                  <Image
                    src={"/assets/homeicom.png"}
                    width={40}
                    height={40}
                    alt="Icon"
                  />
                  <span>Home</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold text-3xl flex flex-row gap-2">
              <span className="text-white">Daryl</span>
              <span className="bg-gradient-to-r from-[#F5BD4D] to-[#F89222] bg-clip-text text-transparent">
                Smith
              </span>
            </h1>
            <p className="text-[#C2C2C2] text-lg font-normal">UI/UX designer</p>
          </div>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex lg:col-span-5 lg:border-l-2 lg:border-l-[#353535]">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>
                <Image
                  src={"/assets/homeicom.png"}
                  width={40}
                  height={40}
                  alt="Icon"
                />
                <span className="text-2xl font-bold">Home</span>
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end lg:col-span-3 lg:justify-end">
          <button className="btn btn-outline btn-warning rounded-4xl btn-lg">
            Talk To Me
          </button>
        </div>
      </div>
    </div>
  );
}
