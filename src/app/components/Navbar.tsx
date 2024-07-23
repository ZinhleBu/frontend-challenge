/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../app/assets/images/logo.png";
import NavLink from "./NavLink";
import { Gift, Heart, Star, Tag } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <header className="shadow-sm">
        <nav className="m-auto flex max-w-7xl items-center justify-evenly px-3 py-5">
          <Link href="/" passHref>
            <div className="flex items-center gap-3 cursor-pointer">
              <Image src={logo} width={120} height={120} alt="Reway logo" />
            </div>
          </Link>
          <div className="flex flex-row gap-3 items-center text-center max-sm:before:w-[480px]">
            <NavLink
              href="/"
              exact
              className="hover:font-bold text-lg [&.active]:font-bold [&.active]:text-sky-500 nav-link "
            >
              Apparels
            </NavLink>

            <NavLink
              href="/shoes"
              exact
              className="hover:font-bold text-lg [&.active]:font-bold [&.active]:text-sky-500 nav-link "
            >
              shoes
            </NavLink>
            <NavLink
              href="/equipment"
              exact
              className="hover:font-bold text-lg [&.active]:font-bold [&.active]:text-sky-500 nav-link "
            >
              Equipment
            </NavLink>
            <NavLink
              href="/gift"
              exact
              className="hover:font-bold text-lg [&.active]:font-bold [&.active]:text-sky-500 nav-link "
            >
              Gift
            </NavLink>
          </div>
          <div className="flex flex-row gap-3 items-center text-center max-sm:before:w-[480px]">
            <Link href="" passHref>
              <Gift className="hover:font-bold text-lg [&.active]:font-bold [&.active]:text-sky-500 nav-link " />
            </Link>
            <Link href="" passHref>
              <Star className="hover:font-bold text-lg [&.active]:font-bold [&.active]:text-sky-500 nav-link " />
            </Link>
            <Link href="" passHref>
              <Heart className="hover:font-bold text-lg [&.active]:font-bold [&.active]:text-sky-500 nav-link " />
            </Link>
            <Link href="" passHref>
              <Tag className="hover:font-bold text-lg [&.active]:font-bold [&.active]:text-sky-500 nav-link " />
            </Link>
          </div>
          <div className="flex flex-row gap-3 items-center text-center max-sm:before:w-[480px]">
            <NavLink
              href="/sign-up"
              exact
              className="hover:font-bold text-lg [&.active]:font-bold text-sky-500 nav-link "
            >
              SIGN UP
            </NavLink>
            <NavLink
              href="/sign-up"
              exact
              className="hover:font-bold text-lg border-solid ml-4 pl-4 pr-4 rounded-md border-4 border-sky-500 [&.active]:font-bold text-sky-500 nav-link "
            >
              Login
            </NavLink>
          </div>
        </nav>
      </header>
      <nav className="m-auto flex w-full items-center justify-evenly py-8 h-10  bg-gray-300">
        <h3 className="text-lg text-gray-600 nav-link">
          Adventure is just around the corner!
        </h3>
        <div className="flex flex-row gap-3 items-center text-center max-sm:before:w-[480px]">
          <NavLink
            href="/"
            exact
            className="hover:font-bold text-lg border-solid ml-4 pl-4 pr-4 rounded-md border-4 border-sky-500 [&.active]:font-bold text-sky-500 nav-link "
          >
            FIND A STORE
          </NavLink>
          <h3 className="text-lg text-gray-600 nav-link">
            NOT IN SOUTH AFRICA?
          </h3>
        </div>
      </nav>
    </>
  );
}
