import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Navigate, useNavigate } from "react-router-dom";

// const attendanceData = [
//   {
//     name: "Mashkoor Sir",
//     attendance: {
//       "6/7": "L",
//       "6/10": "L",
//       "6/11": "L",
//       "6/12": "L",
//       "6/13": "L",
//     },
//     summary: {
//       Late: 4,
//       Excused_absence: 0,
//       Unexcused_absence: 0,
//       Remaining: 70,
//       June: 40,
//       Total: 110,
//       Paid: 0,
//       Due_Fine: 110,
//     },
//   },
//   {
//     name: "Zubair",
//     attendance: {
//       "6/7": "P",
//       "6/10": "P",
//       "6/11": "P",
//       "6/12": "P",
//       "6/13": "P",
//     },
//     summary: {
//       Late: 0,
//       Excused_absence: 0,
//       Unexcused_absence: 0,
//       Remaining: 0,
//       June: 0,
//       Total: 0,
//       Paid: 0,
//       Due_Fine: 0,
//     },
//   },
// ];

const AttendanceData = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getAttendanceData = async (url) => {
    try {
      const response = await axios({
        method: "get",
        url: url,
      });

      setLoading(false);
      console.log(response.data.data);
      setAttendanceData(response.data.data);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getAttendanceData(
      "https://backend-for-spark-english.onrender.com/student/"
    );
  }, []);

  if (loading) {
    return <Loading />;
  }
  const renderSummary = (summary) => {
    // Extract specific summary values for cleaner display
    const { Late, Remaining } = summary;
    return (
      <>
        <p>Late: {Late}</p>
        <p>Remaining: {Remaining}</p>
      </>
    );
  };

  const navigateToStudentDetails = (name) => {
    navigate(`/admin/dashboard/${name}`);
  };
  if (attendanceData) {
    return (
      <>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Attendance Data</h1>
          <table className="min-w-full divide-y divide-gray-200 shadow overflow-hidden border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                {attendanceData[1].attendance?.map((date) => (
                  <th
                    key={date.data}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {date.date}
                  </th>
                ))}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Summary
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 tableData">
              {attendanceData?.map((data, index) => (
                <tr key={index}>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900"
                    onClick={() => navigateToStudentDetails(data.name)}
                  >
                    {data.name}
                  </td>
                  {data.attendance?.map((attendance, idx) => (
                    <td
                      key={idx}
                      className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500"
                      onClick={() => navigateToStudentDetails(data.name)}
                    >
                      {attendance.status}
                    </td>
                  ))}
                  <td
                    className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500"
                    key={data.name}
                    onClick={() => navigateToStudentDetails(data.name)}
                  >
                    {renderSummary(data.summary)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default AttendanceData;
