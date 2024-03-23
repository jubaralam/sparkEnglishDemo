import React from "react";
import mashkoorKhanImg from "../assets/mashkoor_khan.jpg"
// import logo from "../assets/logo1.png"
const FacultyExcellence = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Faculty Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex">
            <div className="">
              <img
                src={mashkoorKhanImg}
                alt="Mo. Mashkoor Khan"
                className="w-[250px]  rounded-full relative right-0"
              />
             
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2">Mo. Mashkoor Khan</h3>
              <p className="text-gray-700 mb-2">Experience: 10+ years</p>
              <p className="text-gray-700 mb-2">
                Degree: M.A. in English, is a seasoned expert in language
                dynamics.
              </p>
              <p className="text-gray-700">
                Specialization: mastery extends to Linguistics and Literary
                Theory, enriching students understanding of language nuances in
                both spoken English and personality development.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex">
            <div className="">
              <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAeP2o508M89xkDAfVKDKysH3l0Pheuwe_oBuawt0sPIeW9fuoy-LhAnc4HQmyanKubY8&usqp=CAU"}
                alt="Yousuf Ahmed"
                className="w-[250px]  rounded-full relative right-0"
              />
             
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-2">Yousuf Ahmed</h3>
              <p className="text-gray-700 mb-2">Experience: 5+ years</p>
              <p className="text-gray-700 mb-2">
              Degree: Engineering degree in Electronics, offers a unique
                perspective to English spoken and personality development.
              </p>
              <p className="text-gray-700">
              Specialization: Technical acumen and real-world experience
                complement his teaching, providing students with a holistic
                approach to language and personal growth
              </p>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default FacultyExcellence;
