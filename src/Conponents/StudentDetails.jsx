import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";
import StudentCard from "./StudentCard";
const StudentDetails = () => {
  const [studentDetails, setStudentDetails] = useState();
  const [loading, setLoading] = useState(true);
  const { studentName } = useParams();

  const url = `http://localhost:3000/attendance?name=${studentName}`;

  const getAttendanceData = async (url) => {
    try {
      const response = await axios({
        method: "get",
        url: url,
      });

      setLoading(false);
      console.log(response.data);
      setStudentDetails(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAttendanceData(url);
  }, [url]);

  if (loading) {
    return <Loading />;
  }
  const { name, summary, attendance } = studentDetails[0];

  return (
    <section
    id="ContactSection"
    className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8"
    >
    <StudentCard studentName={name}/>
      <div className="max-w-7xl mx-auto   px-4 sm:px-6  lg:px-8 ">
        <div className="flex justify-around my-5 bg-white  sm:px-1 py-3 lg:px-8 rounded-lg">
          <h1 className="text-xl font-bold">{name}</h1>
          <h1 className="text-xl font-bold">{"Batch Name"}</h1>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
          {attendance?.map((day) => {
            return (
              <tr key={day.date}>
                <td>{day.date}</td>
                <td>{day.status}</td>
              </tr>
            );
          })}
        </table>
        <div>
          <div>
            <p>Excused_absence: {summary.excusedAbsence}</p>
            <p>Unexcused_absence: {summary.unexcusedAbsence}</p>

            <p>Due Fine: {summary.dueFine}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDetails;
