/** @format */

"use client";

import { X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const [chips, setChips] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([300, 2000]);

  const onSubmit = (data: any) => {
    data.priceRange = priceRange;
    console.log(data);
  };

  const addChip = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>
  ) => {
    if (
      (event.type === "keydown" &&
        (event as React.KeyboardEvent).key === "Enter") ||
      event.type === "blur"
    ) {
      const value = event.currentTarget.value.trim();
      if (value) {
        if (event.type === "keydown") {
          event.preventDefault();
        }
        setChips([...chips, value]);
        setValue("Brands", "");
      }
    }
  };

  const removeChip = (chipToRemove: string) => {
    setChips(chips.filter((chip) => chip !== chipToRemove));
  };

  const handlePriceChange = (newPriceRange: number | number[]) => {
    setPriceRange(newPriceRange as [number, number]);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label
        className="text-gray-400 font-extrabold text-small mb-3"
        htmlFor="brands"
      >
        Brands
      </label>
      <div className="border-2 rounded-sm p-1 border-gray-300 flex flex-wrap items-center overflow-y-hidden gap-2">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center rounded-sm px-3 py-1 bg-sky-500 text-white text-small"
          >
            <span>{chip}</span>
            <button
              type="button"
              className="ml-2 text-white"
              onClick={() => removeChip(chip)}
            >
              <X size={16} />
            </button>
          </div>
        ))}
        <input
          type="text"
          className="border-none outline-none flex-grow flex flex-row text-small"
          {...register("Brands", { required: false, maxLength: 50 })}
          onKeyDown={addChip}
          onBlur={addChip}
        />
      </div>
      {errors.Brands && <p className="text-red-500">This field is required</p>}

      <label
        className="text-gray-400 font-extrabold text-small mt-3 mb-1"
        htmlFor="colors"
      >
        Colors
      </label>
      <select
        className="border-2 rounded-sm p-1 border-gray-300 text-gray-500 text-small"
        {...register("Colors", { required: true })}
      >
        <option className="text-gray-500 text-small" value="">
          Select a color
        </option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
      </select>
      {errors.Colors && <p className="text-red-500">This field is required</p>}

      <label
        className="text-gray-400 font-extrabold text-small mt-3 mb-1"
        htmlFor="pricing"
      >
        Pricing
      </label>
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-small">R{priceRange[0]}</span>
        <div className="flex-grow mx-2">
          <Slider
            range
            min={300}
            max={2000}
            defaultValue={priceRange}
            onChange={handlePriceChange}
          />
        </div>
        <span className="text-gray-500 text-small">R{priceRange[1]}</span>
      </div>

      <button type="submit" className="bg-sky-500 text-white rounded-sm p-2 mt-3 text-large max-w-md">Submit</button>
    </form>
  );
}
