// // HeroSection.js

 import poster from "../assets/poster.jpg";
// const HeroSection = () => {
//   return (
//     <div className="flex items-center w-[1200px] mx-auto mb-36 mt-10 justify-between">
//       {/* Left side with text */}
//       <div className=" w-[50%] py-8 sm:w-[100%]">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
//           Empower Through Communication
//         </h1>
//         <p className="text-lg md:text-xl mb-8 text-red-800 ">
//           Enhance communication skills and personal growth.
//         </p>
//         <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
//           Book A Demo
//         </button>
//         <button className="text-orange-500 border-orange-500 border-2 hover:text-white hover:bg-orange-600 text-white font-bold py-2 px-4 mx-5 rounded">
//           Enquire Now
//         </button>
//       </div>

//       {/* Right side with image */}
//       <div className="w-[50%] flex border-l-8 border-orange-500 justify-end sm:hidden">
//         <img src={poster} alt="Hero" className="w-[500px] h-auto rounded-3xl " />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className=" mb-4 text-4xl  font-bold  text-gray-800">Empower Through Communication</h1>
            <p className="text-lg md:text-xl mb-8 text-red-800">Enhance your communication skills and unlock your potential to express yourself effectively in various situations.</p>
            <div className="  ">

            <button className="bg-orange-500  hover:bg-orange-600 text-white font-bold py-2 px-3  rounded">
        Book A Demo
        </button>
       <button className="text-orange-500  sm:mx-2 border-orange-500 border-2 hover:text-white hover:bg-orange-600 font-bold py-2 px-3 mx-5 rounded">
          Enquire Now
        </button>
            </div>
          </div>
          <div className="md:text-right">
            <img src={poster} alt="Hero" className="w-full md:w-auto md:max-w-sm mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
