import React from "react";

const StudentReportCard = () => {
  const attendanceData = {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"],
    students: [
      { attendance: ["Present", "Absent", "Present", "Present", "Present"] },
      { attendance: ["Absent", "Present", "Absent", "Present", "Absent"] },
      { attendance: ["Present", "Present", "Present", "Absent", "Present"] },
    ],
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Attendance Report</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              {attendanceData.days.map((week, index) => (
                <th
                  key={index}
                  className="py-2 px-4 bg-gray-100 border-b border-gray-200"
                >
                  {week}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attendanceData.students.map((student, index) => (
              <tr key={index}>
                {student.attendance.map((attendance, idx) => (
                  <td
                    key={idx}
                    className="py-2 px-4 text-center border-b border-gray-200"
                  >
                    {attendance}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentReportCard;
