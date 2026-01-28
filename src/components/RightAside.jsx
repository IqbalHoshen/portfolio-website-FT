import React from "react";

export default function RightAside() {
  return (
    <div className="relative min-h-[600px] flex flex-col justify-between pl-4">
      <div className="absolute inset-0 z-10 bg-[#171B1A]" />
      <div className="absolute inset-0 z-20 bg-[url('/assets/Rectangle.png')] scale-x-[-1] bg-no-repeat bg-bottom bg-contain" />

      <div className="relative  z-30 flex flex-col items-center mt-4">
        <p
          className="absolute  rotate-90 
 whitespace-nowrap w-8 mt-10"
        >
          © design by themefisher developed by gethugothemes
        </p>
      </div>

      {/* Buttons at the bottom */}
      <div className="z-30 flex flex-col items-center gap-4 mb-4">
        <button className="btn btn-circle bg-[#343434] font-bold">Fr</button>
        <button
          className="btn btn-circle font-bold text-white"
          style={{
            background: "linear-gradient(90deg, #F5BD4D 0%, #F89222 100%)",
          }}
        >
          En
        </button>{" "}
      </div>
    </div>
  );
}
