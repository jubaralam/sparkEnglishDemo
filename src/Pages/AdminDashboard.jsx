import React, { useContext } from "react";
import { userCrediantial } from "../Context/AuthContext";
import AttendanceData from "../Conponents/AttendanceData";
import StudentReportCard from "../Conponents/StudentReportCard";
import SummeryData from "../Conponents/SummeryData";

const AdminDashboard = () => {
  const { isLoggedIn, token } = useContext(userCrediantial);
  console.log(isLoggedIn);

  return (
    <section id="ContactSection" className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <AttendanceData />
        {/* <StudentReportCard /> */}
        <SummeryData />
      </div>
    </section>
  );
};

export default AdminDashboard;
