/** @format */
"use client";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import TopBanner from "./components/TopBanner";
import { useState } from "react";
import image1 from "../app/assets/images/image01.png";
import image2 from "../app/assets/images/image02.png";
import image3 from "../app/assets/images/image03.png";
import image4 from "../app/assets/images/image04.png";
import image5 from "../app/assets/images/image05.png";
import { ShoppingCart } from "lucide-react";
import LargeBanner from "./components/LargeBanner";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/ProductCard";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(image1);
  const images = [image1, image2, image3, image4, image5];
  return (
    <main className="m-auto my-10 md:max-w-7xl space-y-10 px-3">
      <section>
        <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-9 gap-4 ">
          <div className="row-span-2 sticky">
            <Sidebar />
          </div>
          <div className="col-span-3 row-span-1">
            <TopBanner />
          </div>
          <div className="row-span-2 col-start-4 row-start-2">
            <div>
              <div className="product-details border-8 border-sky-500 p-5 h-full">
                <h1 className="text-xl text-large">Dylan Hiker Boot</h1>
                <p className="text-small text-xs text-gray-400">SUPERBALIST</p>
                <p>
                  <span className="text-small">Fabrication:</span>
                  <strong>Faux Leather</strong>
                </p>
                <p>
                  <span className="text-small">Colour:</span>{" "}
                  <strong>Brown</strong>
                </p>
                <p>
                  <span className="text-small mb-4">Brand:</span>{" "}
                  <strong>Superbalist</strong>
                </p>
                <hr />
                <p className="text-small text-xs text-gray-400 mt-4 mb-4">
                  {" "}
                  PRODUCT DETAILS
                </p>
                <ul className="product-specs">
                  <li className="text-small text-xs text-gray-500">
                    {" "}
                    Hiking boot
                  </li>
                  <li className="text-small text-xs text-gray-500">
                    Speed laces
                  </li>
                  <li className="text-small text-xs text-gray-500">
                    Lace-up design
                  </li>
                  <li className="text-small text-xs text-gray-500">
                    Rubber sole
                  </li>
                </ul>
                <div className="price flex flex-col w-fit ">
                  <span className="original-price text-large text-md text-right">
                    R 599
                  </span>
                  <span className="discounted-price text-large text-3xl">
                    R 359
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="row-span-6 col-start-2 col-span-2 row-start-2">
            <div className="breadcrumb text-small text-md">
              <a className="text-small text-md" href="/">
                Home
              </a>{" "}
              &gt;{" "}
              <a className="text-small text-md" href="/boots">
                Boots
              </a>{" "}
              &gt; Dylan Hiker Boots
            </div>
            <div className="product-container border-6 border-sky-500">
              <div className="product-images m-auto  ">
                <div className="main-image m-auto">
                  <Image
                    src={selectedImage}
                    alt="Dylan Hiker Boot"
                    width={500}
                    height={500}
                    layout="fit"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <div className="thumbnail-images  m-auto">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="thumbnail"
                      onClick={() => setSelectedImage(image )}
                    >
                      <Image
                        src={image}
                        alt={`Dylan Hiker Boot ${index}`}
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="row-span-3 col-start-4 row-start-4">
            <div className="select-options bg-gray-200 p-4 flex flex-col">
              <div className="select-size flex flex-col gap-2">
                <label
                  htmlFor="size"
                  className="text-small font-medium text-gray-400"
                >
                  Size
                </label>
                <select
                  id="size"
                  className="h-12 text-small font-bold border-2 text-gray-400"
                >
                  <option>Select Size</option>
                  {/* Add size options here */}
                </select>
              </div>
              <div className="select-quantity flex flex-col gap-2">
                <label
                  htmlFor="quantity"
                  className="text-small font-medium text-gray-400"
                >
                  Quantity
                </label>
                <select
                  id="quantity"
                  className="h-12 text-small font-bold border-2 text-gray-400"
                >
                  <option>Select Quantity</option>
                  {/* Add quantity options here */}
                </select>
              </div>
              <button className="bg-sky-500 text-3xl text-large pt-8 pb-8 text-white items-center flex justify-center gap-4">
                <ShoppingCart size={40} />
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="row-span-3 col-start-1 row-start-3 sm:w-full sm:m-auto sm:flex sm:items-center sm:justify-center">
            <LargeBanner />
          </div>
          <div className="row-span-2 col-start-1 row-start-6">
            <NewsLetter />
          </div>
          <div className="col-span-3 row-span-3 col-start-2 row-start-6">
            <div className="flex gap-2 justify-center items-center mb-6 max-sm:mb-7 max-xs:mb-8">
              <h1 className="text-3xl text-large h-10 flex flex-row md:w-[400px] flex-wrap gap-2">
                More From <span className="text-sky-500">Boots</span>
              </h1>
              <hr className="border-2 border-gray-500 w-full max-sm:hidden" />
            </div>
            <div>
              <Products />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .product-page {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .breadcrumb {
          margin-bottom: 20px;
        }
        .breadcrumb a {
          color: #0070f3;
          text-decoration: none;
        }
        .product-container {
          display: flex;
        }
        .product-images {
          flex: 1;
          margin-right: 20px;
        }
        .main-image {
          margin-bottom: 10px;
        }
        .thumbnail-images {
          display: flex;
        }
        .thumbnail {
          margin-right: 10px;
          cursor: pointer;
        }
        .product-details {
          flex: 1;
        }

        .product-specs {
          list-style-type: none;
          padding: 0;
        }
        .product-specs li {
          margin-bottom: 5px;
        }
        .price {
          margin: 20px 0;
        }
        .original-price {
          text-decoration: line-through;
          color: #888;
          margin-right: 10px;
        }
        .discounted-price {
          color: #e60023;
          font-weight: bold;
        }
        .select-options {
          margin: 20px 0;
        }
        .select-options div {
          margin-bottom: 10px;
        }
        .add-to-cart {
          background-color: #0070f3;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </main>
  );
}
