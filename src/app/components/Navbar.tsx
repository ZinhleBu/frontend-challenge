/** @format */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../app/assets/images/logo.png";
import NavLink from "./NavLink";
import { Gift, Heart, Star, Tag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header >
        <nav className="m-auto flex max-w-7xl items-center justify-between px-3 py-5">
          <Link href="/" passHref className="sm:hidden">
            <div className="flex items-center gap-3 cursor-pointer">
              <Image src={logo} width={120} height={120} objectFit="contain" alt="Reway logo" />
            </div>
          </Link>
          
          <div className="hidden max-sm:flex flex-row gap-3 items-center text-center ">
            <NavLink
              href="/sign-up"
              exact
              className="hover:font-bold text-lg max-md:text-sm [&.active]:font-bold flex-shrink-0 text-sky-500 nav-link "
            >
              SIGN UP
            </NavLink>
            <NavLink
              href="/sign-up"
              exact
              className="hover:font-bold text-lg max-md:text-sm border-solid ml-4 max-md:ml-0 pl-4 pr-4 rounded-md border-4 border-sky-500 [&.active]:font-bold text-sky-500 nav-link "
            >
              Login
            </NavLink>
          </div>

          <div className="hidden max-sm:flex flex-row gap-3 items-center text-center">
            <button onClick={toggleSidebar}>
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <nav className="m-auto flex max-w-7xl items-center justify-between px-3 py-5 max-sm:hidden">
          
          <div className="flex flex-row gap-3 items-center text-center ">
          <Link href="/" passHref>
            <div className="flex items-center gap-3 cursor-pointer">
              <Image src={logo} width={120} height={120} alt="Reway logo" />
            </div>
          </Link>
            <NavLink
              href="/"
              exact
              className="hover:font-bold text-md [&.active]:font-bold [&.active]:text-sky-500 nav-link "
            >
              Apparels
            </NavLink>

            <NavLink
              href="/shoes"
              exact
              className="hover:font-bold text-md [&.active]:font-bold [&.active]:text-sky-500 nav-link "
            >
              shoes
            </NavLink>
            <NavLink
              href="/equipment"
              exact
              className="hover:font-bold text-md [&.active]:font-bold [&.active]:text-sky-500 nav-link "
            >
              Equipment
            </NavLink>
            <NavLink
              href="/gift"
              exact
              className="hover:font-bold text-md [&.active]:font-bold [&.active]:text-sky-500 nav-link "
            >
              Gift
            </NavLink>
          </div>
          <div className="flex flex-row gap-3 items-center text-center">
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
          <div className="flex flex-row gap-3 items-center text-center ">
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
        <nav className="m-auto flex w-full md:max-w-7xl items-center justify-evenly p-4 h-fit bg-gray-300 max-sm:hidden">
          <h3 className="text-md w-full md:text-lg text-gray-600 nav-link">
            Adventure is just around the corner!
          </h3>
          <div className="flex flex-row gap-3 items-center text-center ">
            <NavLink
              href="/"
              exact
              className="hover:font-bold md:text-lg border-solid ml-4 pl-4 pr-4 rounded-md border-4 border-sky-500 [&.active]:font-bold text-sky-500 nav-link "
            >
              FIND A STORE
            </NavLink>
            <h3 className="text-lg text-gray-600 nav-link">NOT IN SOUTH AFRICA?</h3>
          </div>
        </nav>
      </header>
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-800 text-white h-full z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">
          <button onClick={toggleSidebar} className="mb-4">
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="space-y-4">
            <NavLink
              href="/"
              exact
              className="block hover:underline"
              onClick={toggleSidebar}
            >
              Apparels
            </NavLink>
            <NavLink
              href="/shoes"
              exact
              className="block hover:underline"
              onClick={toggleSidebar}
            >
              Shoes
            </NavLink>
            <NavLink
              href="/equipment"
              exact
              className="block hover:underline"
              onClick={toggleSidebar}
            >
              Equipment
            </NavLink>
            <NavLink
              href="/gift"
              exact
              className="block hover:underline"
              onClick={toggleSidebar}
            >
              Gift
            </NavLink>
            <NavLink
              href="/sign-up"
              exact
              className="block hover:underline"
              onClick={toggleSidebar}
            >
              SIGN UP
            </NavLink>
            <NavLink
              href="/sign-up"
              exact
              className="block hover:underline"
              onClick={toggleSidebar}
            >
              Login
            </NavLink>
          </nav>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black opacity-50 z-30 transition-opacity ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}
