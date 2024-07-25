/** @format */

import Image from "next/image";
import banner2 from "../../app/assets/images/large-banner.png";
import NavLink from "./NavLink";

export default function LargeBanner() {
  return (
    <div className="relative flex flex-col w-[307px] h-full justify-between  items-center">
      <Image
        src={banner2}
        alt="Top Banner"
        layout="fit"
        objectFit="cover"
        objectPosition="top"
        quality={100}
        className="z-0"
      />
     
    </div>
  );
}
