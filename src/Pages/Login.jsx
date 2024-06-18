import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", username);
    console.log("Password:", password);
    userLogIn();
  };


  const userLogIn = async () => {
    try {
      const loginUrl = 'https://fakestoreapi.com/auth/login'; 
      const response = await axios.post(loginUrl, {
        username, 
        password,
      });
  
      console.log(response.data); 
  
    } catch (error) {
      console.error(error); 
    }
  };
  


  return (
    <section className=" bg-gray-200  h-[100vh] align-middle py-28 px-5">
      <div className=" max-w-[500px] rounded-lg mx-auto px-4 sm:px-6 lg:px-8  bg-white shadow-md ">
        <h1 className="font-bold text-center py-5 text-xl ">LogIn</h1>
        <form className="flex flex-col space-y-4 px-4 py-8 rounded box-border">
          <label htmlFor="email" className="text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="text-gray-700 font-bold mb-2">
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
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
