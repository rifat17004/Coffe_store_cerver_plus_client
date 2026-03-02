import React from "react";

import logo from "../assets/logo1.png";

const Header = () => {
  return (
    <div
      className="flex items-center justify-between px-8 py-4 shadow-xl mb-5"
      style={{
        backgroundColor: "#331A15",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
      }}
    >
      {/* Left Spacer for Balance on Desktop */}
      <div className="hidden md:block w-24"></div>

      {/* Center Logo and Title */}
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

      <div className="flex items-center">
        <a
          href="/login"
          className="btn btn-ghost text-white hover:bg-white/10 normal-case text-lg"
          style={{ fontFamily: "Rancho, cursive" }}
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Header;
