import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Navigate, useNavigate } from "react-router-dom";

const SummeryData = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [keyOfSummary, setKeyOfSummary] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getAttendanceData = async (url) => {
    try {
      const response = await axios({
        method: "get",
        url: url,
      });

      setLoading(false);
      //   console.log("from summery data", response.data.data);
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
  const renderSummary = (summary, index) => {
    // Extract specific summary values for cleaner display

    const { Late,    excusedAbsence,unexcusedAbsence, Remaining,june, total,paid, dueFine, } =
      summary;
    console.log(Late, Remaining, total, june, paid, dueFine, excusedAbsence);
    return (
      <>
        <tr key={index}>
          {/* <p>Late: {Late}</p>
          <p>Remaining: {Remaining}</p> */}

          <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
            {Late}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
            {excusedAbsence}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
            {unexcusedAbsence}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
            {Remaining}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
            {june}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
            {total}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
            {paid}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500">
            {dueFine}
          </td>
        </tr>
      </>
    );
  };

  const navigateToStudentDetails = (name) => {
    navigate(`/admin/dashboard/${name}`);
  };

  if (attendanceData) {
    console.log("attendance data", attendanceData);
    const keys = () => {
      let keys = [];
      for (const key in attendanceData[0].summary) {
        keys.push(key);
      }
      return keys;
    };

    return (
      <>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4"> Students Summery Data</h1>
          <table className="min-w-full divide-y divide-gray-200 shadow overflow-hidden border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                {keys()?.map((key, index) => {
                  return (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {key}
                    </th>
                  );
                })}

                {}

                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Summary
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 tableData">
              {attendanceData?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium text-gray-900"
                      onClick={() => navigateToStudentDetails(data.name)}
                    >
                      {data.name}
                    </td>

                    {/* <td
                      key={"idx"}
                      className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500"
                      onClick={() => navigateToStudentDetails(data.name)}
                    >
                      {attendance.late}
                    </td> */}

                    <td
                      className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500"
                      key={data.name}
                      onClick={() => navigateToStudentDetails(data.name)}
                    >
                      {renderSummary(data.summary, index)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
};

export default SummeryData;
