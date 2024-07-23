/** @format */

import Image from "next/image";

export default function Home() {
  return (
    <main className="m-auto my-10 max-w-7xl space-y-10 px-3">
      <section >
        <div className="grid grid-cols-3 grid-rows-12 gap-4">
          <div className="row-span-4">Sidebar</div>
          <div className="col-span-2">Ad Banner 1</div>
          <div className="row-span-4 col-start-3 row-start-2">
            Product Information
          </div>
          <div className="row-span-7 col-start-2 row-start-2">
            Image Gallery
          </div>
          <div className="row-span-3 col-start-3 row-start-6">Add to cart</div>
          <div className="row-span-4 col-start-1 row-start-5">Ad Banner 2</div>
          <div className="row-span-3 row-start-9">News Letter form</div>
          <div className="col-span-2 row-span-3 row-start-9">More Products</div>
        </div>
      </section>
    </main>
  );
}
