import Image from "next/image";
import React from "react";

export default function LeftAside() {
  return (
    <div className="relative w-fit min-h-96">
      <div className="absolute inset-0 z-10 bg-[#171B1A]" />

      <div className="absolute inset-0 z-20 bg-[url('/assets/Rectangle.png')] bg-no-repeat bg-bottom bg-contain " />

      <ul className="menu relative z-30 ">
        <li>
          <a className="tooltip tooltip-right" data-tip="Home">
            <Image
              src="/assets/home.svg"
              width={32}
              height={32}
              alt="Home Icon"
            />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right" data-tip="Details">
            <Image
              src="/assets/profile-about.svg"
              width={32}
              height={32}
              alt="Details Icon"
            />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right" data-tip="Stats">
            <Image
              src="/assets/portfolio.svg"
              width={32}
              height={32}
              alt="Stats Icon"
            />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right" data-tip="Blog">
            <Image
              src="/assets/blog.svg"
              width={32}
              height={32}
              alt="Blog Icon"
            />
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right" data-tip="Contact">
            <Image
              src="/assets/phone.svg"
              width={32}
              height={32}
              alt="Phone Icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
