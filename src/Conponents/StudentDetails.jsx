import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import axios from "axios";
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
  const { summary } = studentDetails[0];
console.log(summary)
  return (
    <div>
      StudentDetails
      {studentName}
      {name}
      <div>
        {studentDetails[0].attendance?.map((day) => {
          return (
            <div key={day.date}>
              <p>{day.date}</p>
              <p>{day.status}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div>
         
          <p>Excused_absence: {summary.excusedAbsence}</p>
          <p>Unexcused_absence: {summary.unexcusedAbsence}</p>

          <p>Due Fine: {summary.dueFine}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
