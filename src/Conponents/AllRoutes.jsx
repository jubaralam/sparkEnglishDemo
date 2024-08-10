import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import AdminDashboard from "../Pages/AdminDashboard";
import PrivateRoutes from "./PrivateRoutes";
import StudentDetails from "./StudentDetails";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoutes>
            <AdminDashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/dashboard/:studentName"
        element={
          <PrivateRoutes>
            <StudentDetails />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
