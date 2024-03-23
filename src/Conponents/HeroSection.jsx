
import poster from "../assets/poster.jpg";
const HeroSection = () => {
  return (
    <section className="bg-gray-100 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-between content-start ">
          <div className="p-6 bg-white rounded-lg shadow-md h-[400px] pt-10">
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
          <div className="md:text-right flex md:justify-self-end sm:justify-self-center  p-2 bg-slate-200	 bg-gradient-to-tl from-orange-600 via-orange-400	 to-orange-600 rounded-lg	">
            <img src={poster} alt="Hero" className="w-full md:w-auto md:max-w-sm mx-auto h-[400px] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
