import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate()

  const bashURL =
    "https://backend-for-spark-english.onrender.com/student/register";

  const handleSubmit = async (e) => {
    e.preventDefault();

    userLogIn();
  };
  
  const userLogIn = async () => {
    try {
      const response = await axios.post(bashURL, {
        fullName,
        email,
        password,
      });
      
      console.log(response.data);
      setFullName("");
      setPassword("");
      setEmail("");
      alert(response.data);
      console.log("completed")
      navigate("/login")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className=" bg-gray-200  h-[100vh] align-middle py-28 px-5">
      <div className=" max-w-[500px] rounded-lg mx-auto px-4 sm:px-6 lg:px-8  bg-white shadow-md ">
        <h1 className="font-bold text-center py-5 text-xl ">
          Student's Register
        </h1>
        <form className="flex flex-col space-y-4 px-4 py-8 rounded box-border">
          <label htmlFor="email" className="text-gray-700 font-bold mb-1">
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="fullName"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="email" className="text-gray-700 font-bold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-gray-700 font-bold mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className=" bg-orange-500  hover:bg-orange-600 text-white font-bold py-3 my-10 rounded "
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
