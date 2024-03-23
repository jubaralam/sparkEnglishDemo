import React from 'react';

const EngagingCurriculum = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Engaging Curriculum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Speaking English</h3>
            <p className="text-gray-700 mb-4">Master the art of spoken English through interactive sessions and immersive activities.</p>
            {/* Add any other content or features specific to Speaking English card */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Personality Development</h3>
            <p className="text-gray-700 mb-4">Enhance your personality traits and soft skills to excel in both personal and professional spheres.</p>
            {/* Add any other content or features specific to Personality Development card */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">GD Training</h3>
            <p className="text-gray-700 mb-4">Learn the art of effective group discussions and hone your communication skills for group settings.</p>
            {/* Add any other content or features specific to GD Training card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagingCurriculum;
