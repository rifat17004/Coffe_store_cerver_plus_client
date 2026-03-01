import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { name, Price, supplier, taste, category, details, photo } =
    useLoaderData();

  return (
    <div>
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#374151] hover:text-primary transition-colors font-medium text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span style={{ fontFamily: "Rancho, cursive" }}>Back to home</span>
        </Link>
      </div>

      <div className="bg-[#F4F3F0] border-2 border-white rounded-lg max-w-5xl mx-auto p-10 md:p-20 shadow-sm flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={photo}
            alt={name}
            className="w-full max-w-sm object-contain drop-shadow-xl"
          />
        </div>

        <div className="md:w-1/2 space-y-4 text-[#1B1B1B]">
          <h2
            className="text-4xl font-bold mb-6 text-[#331A15]"
            style={{ fontFamily: "Rancho, cursive" }}
          >
            Niceties
          </h2>

          <div className="space-y-2 text-lg">
            <p>
              <span className="font-bold">Name:</span> {name}
            </p>
            <p>
              <span className="font-bold">Price:</span> {Price}
            </p>
            <p>
              <span className="font-bold">Supplier:</span> {supplier}
            </p>
            <p>
              <span className="font-bold">Taste:</span> {taste}
            </p>
            <p>
              <span className="font-bold">Category:</span> {category}
            </p>
            <p>
              <span className="font-bold">Details:</span> {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
