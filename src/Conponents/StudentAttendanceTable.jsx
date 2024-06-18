import axios from "axios";
import React, { useState, useEffect } from "react";

const StudentAttendanceTable = () => {
  const [data, setData] = useState([]);
  const getStudentsData = async (url) => {
    try {
      const response = await axios({
        method: "get",
        url: url,
      });

      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentsData("http://localhost:3000/attendance");
  });
  return (
    <div className="overflow-x-auto w-full">
      {data?.map((student) => {
        return (
          <table className="table-auto w-full text-left" key={student.name}>
            <thead>
              <tr>
                <th className="px-4 py-2 w-48 font-medium text-gray-700">
                  {student.name}
                </th>

                <th className="px-4 py-2 text-center font-medium text-gray-700">
                  {student.Due_Fine}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Name</td>

{/* here students attendance will be displayed */}
                {/* {student.attendance?.map((day) => {
                  return <td className="text-center px-2 py-1" key={day}>
                    {day}
                  </td>;
                })} */}

                <td className="px-4 py-2 text-center"> {student.summary.Due_Fine}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default StudentAttendanceTable;
