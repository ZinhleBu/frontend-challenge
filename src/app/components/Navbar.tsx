/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../app/assets/images/logo.png";

export default function Navbar() {


  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-7xl items-center justify-between px-3 py-5">
        <Link href="/" passHref>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image src={logo} width={120} height={120} alt="Reway logo" />
          </div>
        </Link>
        <div className="flex flex-row gap-2 items-center">
      
        </div>
      </nav>
    </header>
  );
}
