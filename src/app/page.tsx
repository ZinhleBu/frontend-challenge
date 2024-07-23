/** @format */

import Image from "next/image";

export default function Home() {
  return (
    <main className="m-auto my-10 max-w-7xl space-y-10 px-3">
      <section>
        <div className="grid grid-cols-3 grid-rows-12 gap-4">
          <div className="row-span-4">1</div>
          <div className="col-span-2">2</div>
          <div className="row-span-4 col-start-3 row-start-2">4</div>
          <div className="row-span-7 col-start-2 row-start-2">5</div>
          <div className="row-span-3 col-start-3 row-start-6">6</div>
          <div className="row-span-4 col-start-1 row-start-5">7</div>
          <div className="row-span-3 row-start-9">8</div>
          <div className="col-span-2 row-span-3 row-start-9">9</div>
        </div>
      </section>
    </main>
  );
}
