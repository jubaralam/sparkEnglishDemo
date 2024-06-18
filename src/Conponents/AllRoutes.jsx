import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import UserDashboard from "../Pages/UserDashboard";
import PrivateRoutes from "./PrivateRoutes";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <UserDashboard />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
