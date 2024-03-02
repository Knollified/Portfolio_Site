// components/Hero.js

import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-200 py-5 sm:py-5 md:py-5 lg:py-5">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-center">
        <p className="px-4 text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg w-2/3 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3">I am an aspiring developer dedicated to refining my skills and driving innovative projects forward. My passion for crafting and designing solutions is matched only by my commitment to problem-solving, honed through four years of hands-on experience in designing, developing, and implementing applications across various technologies and programming languages. I am eager to leverage my diverse development background and technical expertise in a challenging role as a junior front-end developer/software engineer.</p>
        <img className="w-1/3 h-1/3" src="/Profile_Pic.jpg" alt="Profile Image" />
      </div>
    </section>
  );
};

export default Hero;
