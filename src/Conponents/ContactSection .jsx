// ContactSection.js

import React from "react";
import poster from "../assets/direction.png";
const ContactSection = () => {
  const handleSubmit = (e) => {
    alert(e.target);
  };

  return (
    <section id="ContactSection" className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className=" flex justify-around flex-wrap-reverse	 items-center">
          <div className=" p-4 w-[500px]">
            <h3 className="text-xl font-semibold mb-4">Leave us a message</h3>
            <form>
              <div className="mb-4  ">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 "
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-orange-500  hover:bg-orange-600 text-white px-4 py-2 rounded-md  w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="p-4 w-[500px]">
            <h3 className="text-xl font-semibold mb-4">Reach out to us</h3>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> info@example.com
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +91 9074141022, 8319922910
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> 3rd Floor, Near Raj Talkies Road, C.L.
              Colony, Chruch Road, <br /> Jahangirabad-462008, Bhopal, India
            </p>
            <div className=" mb-2 bg-orange-500  h-[45px] hover:bg-orange-600 text-white font-bold py-2 px-3  rounded flex  justify-between align-middle">
              <div>
                <a
                  href="https://maps.app.goo.gl/nE5xxvG3mDJiVeCMA"
                  target="_blank"
                >
                  <strong>Direction:</strong> Google Map
                </a>
              </div>
              <div className="h-full align-middle">
                <img
                  src={poster}
                  alt=""
                  className=" w-10 sm:-w-6 block ml-2 h-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
