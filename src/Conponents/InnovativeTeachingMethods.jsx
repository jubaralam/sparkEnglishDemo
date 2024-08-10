// InnovativeTeachingMethods.js
import React from "react";
import frontSide from "../assets/front_side.jpeg";
import backSide from "../assets/back_side.jpeg";
const InnovativeTeachingMethods = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Innovative Teaching Methods
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <img
              className="w-full h-64 object-cover"
              src={frontSide}
              alt="Image 1"
            />
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Collaborative Learning Experience
              </h3>
              <p className="text-gray-600">
                We facilitate collaborative discussions among diverse students,
                promoting critical thinking and real-world problem-solving
                skills.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <img
              className="w-full h-64 object-fill"
              src={backSide}
            />
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Confidence-Building Communication Seminars
              </h3>
              <p className="text-gray-600">
                Join our confidence-building communication seminars and unlock
                your full potential as a communicator. Gain practical strategies
                to overcome self-doubt, project confidence, and express yourself
                with clarity and conviction.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <img
              className="w-full h-64 object-cover"
              // src="https://www.tgci.com/sites/default/files/pictures/group_work_11.png"
              // src={frontSide}
              src="https://lh3.googleusercontent.com/p/AF1QipPjopcVm8UJvfEqxVrlcMWPJU2k9txwivgaNLMi=s680-w680-h510"

              alt="Image 3"
            />
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gamification in Education
              </h3>
              <p className="text-gray-600">
                Dive into gamification in education, a strategy that leverages
                game elements and mechanics to enhance learning outcomes.
                Motivate students, increase engagement, and reinforce learning
                through interactive and enjoyable experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeTeachingMethods;
