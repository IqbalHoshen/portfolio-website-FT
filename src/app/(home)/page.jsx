import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-center mt-6">
      <div className="flex flex-col gap-4">
        <Image
          src={"/assets/portfolio/rec1.png"}
          width={332}
          height={321}
          alt="Image"
        />
        <Image
          src={"/assets/portfolio/rec2.png"}
          width={332}
          height={447}
          alt="Image"
        />
        <Image
          src={"/assets/portfolio/rec3.png"}
          width={332}
          height={204}
          alt="Image"
        />
        <Image
          src={"/assets/portfolio/rec9.png"}
          width={332}
          height={204}
          alt="Image"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Image
          src={"/assets/portfolio/rec4.png"}
          width={332}
          height={248}
          alt="Image"
        />
        <Image
          src={"/assets/portfolio/rec5.png"}
          width={332}
          height={220}
          alt="Image"
        />
        <Image
          src={"/assets/portfolio/rec6.png"}
          width={332}
          height={220}
          className="mt-1"
          alt="Image"
        />
        <Image
          src={"/assets/portfolio/rec7.png"}
          width={332}
          height={260}
          className="mt-1"
          alt="Image"
        />
        <Image
          src={"/assets/portfolio/rec8.png"}
          width={332}
          height={204}
          alt="Image"
        />
      </div>
    </div>
  );
}
