/** @format */

import Image from "next/image";
import banner from "../../app/assets/images/top-banner.png";
import NavLink from "./NavLink";

export default function TopBanner() {
  return (
    <div className="relative flex w-full min-h-[89px] justify-between  items-center">
      <Image
        src={banner}
        alt="Top Banner"
        layout="fit"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center py-4 px-8 bg-opacity-60 ">
        <div className="flex flex-col text-white">
          <h1 className="text-white text-large text-xl font-bold">
            SUMMER SALE!
          </h1>
          <p className="text-white text-large text-lg font-bold">
            UP TO 50% OFF
          </p>
        </div>
        <div className="flex flex-col text-white">
          <NavLink
            href="/"
            exact
            className="hover:font-bold text-lg border-solid ml-4 pl-4 pr-4 rounded-md border-4 border-white [&.active]:font-bold text-white nav-link "
          >
            SHOP NOW
          </NavLink>
        </div>
      </div>
    </div>
  );
}
