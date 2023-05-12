import React from "react";

const Navbar = () => {
  return (
    <div className="h-[120px] flex justify-evenly items-center">
      <h1 className="text-[45px] text-[#444] font-bold font-Crete">
        Travel Agency<span className="text-orange-500">.</span>
      </h1>
      <nav className="flex align-center justify-center">
        <ul className="flex justify-center items-center">
          <li className="mr-20 uppercase font-bold font-sans text-[#444]">
            <a className="" href="/">
              Accueil
            </a>
          </li>
          <li className="mr-20 uppercase font-bold text-[#444]">
            <a href="/">Destinations</a>
          </li>
          <li className="mr-20 uppercase font-bold text-[#444]">
            <a href="/">Circuits</a>
          </li>
          <li className="mr-20 uppercase font-bold text-[#444]">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
