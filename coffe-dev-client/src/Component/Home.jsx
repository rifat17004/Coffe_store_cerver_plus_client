import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { BsCupHot } from "react-icons/bs";

const Home = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  console.log(coffees);
  return (
    <div className="max-w-5xl mx-auto mb-8">
      <div className="text-center my-12">
        <p className="text-gray-600 text-lg mb-2">--- Sip & Savor ---</p>

        <h2
          className="text-5xl font-bold text-[#331A15] mb-8 drop-shadow-md"
          style={{ fontFamily: "Rancho, cursive" }}
        >
          Our Popular Products
        </h2>

        <Link to={"/addCoffe"}>
          <button
            className="btn bg-[#E3B577] hover:bg-[#c99a5e] border-2 border-[#331A15] text-white px-6 py-2 rounded-md flex items-center gap-2 mx-auto transition-all"
            style={{ fontFamily: "Rancho, cursive" }}
          >
            <span className="text-xl drop-shadow-sm">Add Coffee</span>
            <BsCupHot className="text-[#331A15] text-xl" />
          </button>
        </Link>
      </div>
      <div class="grid grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            setCoffees={setCoffees}
            coffees={coffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
