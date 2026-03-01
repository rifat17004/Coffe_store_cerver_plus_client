import React from "react";

import logo from "../assets/logo1.png";

const Header = () => {
  return (
    <div
      className="flex items-center justify-center py-4 shadow-xl mb-5"
      style={{
        backgroundColor: "#331A15",

        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Espresso Emporium Logo"
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />

        <h1
          className="text-4xl md:text-6xl text-white"
          style={{ fontFamily: "Rancho, cursive" }}
        >
          Espresso Emporium
        </h1>
      </div>
    </div>
  );
};

export default Header;
