import React from 'react';

const CareerOpportunities = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Explore Career Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Explore Different Industries</h3>
              <p className="text-gray-700 mb-6">Research and delve into diverse sectors to discover potential career paths.</p>
            </div>
            <div className="text-center">
              <img src="/explore_industries.svg" alt="Explore Industries" className="w-32 mx-auto" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Networking and Connections</h3>
              <p className="text-gray-700 mb-6">Build relationships and connections to open up opportunities in your chosen field.</p>
            </div>
            <div className="text-center">
              <img src="/networking.svg" alt="Networking" className="w-32 mx-auto" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
              <p className="text-gray-700 mb-6">Continuous learning and skill enhancement are essential for career growth and advancement.</p>
            </div>
            <div className="text-center">
              <img src="/professional_development.svg" alt="Professional Development" className="w-32 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
