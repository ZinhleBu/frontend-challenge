/** @format */

"use client";

import { ArrowLeft } from "lucide-react";
import SearchForm from "./SearchForm";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-background border-sky-500 md:w-[260px]">
      <div className="bg-sky-500 p-4 flex flex-col rounded-t-lg justify-start items-start space-y-4">
        <div className="flex items-start justify-center">
          <ArrowLeft color="white" size={20} />
          <p className="ml-2 text-white text-small">Hide</p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <SearchForm />
      </div>
    </aside>
  );
}
