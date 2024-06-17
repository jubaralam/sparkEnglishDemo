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
              <img src="https://img.freepik.com/premium-photo/woman-examines-globe-using-magnifying-glass-young-female-chooses-place-tourist-trip-person_151013-50166.jpg?w=900" alt="Explore Industries" className=" h-[250px] w-[900px] mx-auto object-cover rounded-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Networking and Connections</h3>
              <p className="text-gray-700 mb-6">Build relationships and connections to open up opportunities in your chosen field.</p>
            </div>
            <div className="text-center">
              <img src="https://img.freepik.com/premium-photo/smiling-caucasian-businessman-wear-suit-handshake-african-corporate-client-new-partner-happy-team-diverse-meeting-negotiation-shake-hands-make-professional-agreement-group-briefing-concept_774935-1540.jpg?w=900" alt="Networking" className=" h-[250px] w-[900px] mx-auto object-cover rounded-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
              <p className="text-gray-700 mb-6">Continuous learning and skill enhancement are essential for career growth and advancement.</p>
            </div>
            <div className="text-center">
              <img src="https://glancetrend.com/wp-content/uploads/2024/04/DALL%C2%B7E-2024-04-21-00.09.51-A-person-sitting-at-a-desk-engaged-in-an-online-course-on-a-laptop-surrounded-by-books-and-notes-illustrating-a-focused-learning-environment.webp" alt="Professional Development" className="h-[250px] w-[900px] mx-auto object-cover rounded-2xl" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
