// HeroSection.js

import poster from "../assets/poster.jpg";
const HeroSection = () => {
  return (
    <div className="flex items-center w-[1200px] mx-auto mb-36 mt-10 justify-between">
      {/* Left side with text */}
      <div className=" w-[50%] py-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Empower Through Communication
        </h1>
        <p className="text-lg md:text-xl mb-8 text-red-800 ">
          Enhance communication skills and personal growth.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Book A Demo
        </button>
        <button className="text-orange-500 border-orange-500 border-2 hover:text-white hover:bg-orange-600 text-white font-bold py-2 px-4 mx-5 rounded">
          Enquire Now
        </button>
      </div>

      {/* Right side with image */}
      <div className="w-[50%] flex border-l-8 border-orange-500 justify-end ">
        <img src={poster} alt="Hero" className="w-[500px] h-auto rounded-3xl " />
      </div>
    </div>
  );
};

export default HeroSection;
