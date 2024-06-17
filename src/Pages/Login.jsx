import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();


    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <section className="py-12 bg-gray-100  h-[100vh] align-middle">
      <div className="w-[500px] rounded-lg mx-auto px-4 sm:px-6 lg:px-8  bg-white shadow-md">
        <h1>LogIn</h1>
        <form className="flex flex-col space-y-4 px-4 py-8 rounded ">
          <label htmlFor="email" className="text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
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
          />
          <button onClick={handleSubmit} className="btn btn-primary mt-4">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
