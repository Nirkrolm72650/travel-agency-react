import React from "react";

const Hero = () => {
  return (
    <div className="h-[580px] bg-hero-section bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="uppercase font-normal pt-[150px] pb-[40px] text-[55px] text-center mb-[20px] text-[#444]">
          Organisez votre
          <br />
          <strong>voyage sur mesure</strong>
        </h2>
        <a href="/" className="w-[120px] h-[50px] text-white bg-[#ff7a00] text-center text-[20px] rounded-[3px] py-2 mx-auto hover:bg-[#02b8dd]">
          Par ici
        </a>
      </div>
    </div>
  );
};

export default Hero;
