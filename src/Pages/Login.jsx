import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const bashURL =
    "https://backend-for-spark-english.onrender.com/student/login";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    userLogIn();
  };

  const userLogIn = async () => {
    try {
      const response = await axios.post(bashURL, {
        email,
        password,
      });

      console.log(response.status);
      setMessage(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  if (message.token) {
    alert(message.message);
    return navigate("/dashboard");
  }
  return (
    <section className=" bg-gray-200  h-[100vh] align-middle py-28 px-5">
      <div className=" max-w-[500px] rounded-lg mx-auto px-4 sm:px-6 lg:px-8  bg-white shadow-md ">
        <h1 className="font-bold text-center py-5 text-xl text-red-500">
          {message.message ? message : ""}
        </h1>
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
            onChange={(e) => setEmail(e.target.value)}
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
        <p onClick={()=> navigate("/register")} className="mx-auto my-2 text-center py-5 text-xl text-blue-800 cursor-pointer">Register</p>
      </div>
    </section>
  );
};

export default Login;
