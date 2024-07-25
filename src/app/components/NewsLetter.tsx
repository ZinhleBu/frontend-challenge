/** @format */

import { Mail } from "lucide-react";
import React from "react";

export default function NewsLetter() {
  return (
   
      <div className="row-span-3 col-start-4 row-start-4">
        <div className="select-options bg-sky-500 p-4 flex flex-col ">
          <Mail color="white" size={30} className="m-auto"/>
          <h1 className="text-xl text-white text-large text-center pt-4 pb-4">
            SIGN UP TO OUR MAILING LIST
          </h1>
          <form className="select-size flex flex-col gap-2">
            <label
              htmlFor="size"
              className="text-small font-medium text-white ml-3"
            >
              Size
            </label>
            <input
              type="text"
              className="border-none outline-none flex-grow flex flex-row text-small mb-3 h-10 p-2"
              placeholder="ENTER EMAIL ADDRESS"
            />
          </form>
          <button className="bg-white text-3xl text-large pt-3 pb-3 text-sky-500 items-center flex justify-center gap-4">
            Submit
          </button>
        </div>
      </div>
  );
}
