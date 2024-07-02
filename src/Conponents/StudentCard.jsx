// AttendanceCalendarByDay.jsx
import React, { useState, useEffect } from "react";

const jsonData = {
  className: "Mashkoor Sir",
  attendance: [
    {
      name: "Mashkoor Sir",
      attendance: [
        { date: "6/7", status: "L" },
        { date: "6/10", status: "L" },
        { date: "6/11", status: "L" },
        { date: "6/12", status: "L" },
        { date: "6/13", status: "L" },
      ],
      summary: {
        late: 4,
        excusedAbsence: 0,
        unexcusedAbsence: 0,
        remaining: 70,
        june: 40,
        total: 110,
        paid: 0,
        dueFine: 110,
      },
    },
    // Add more students here
  ],
  totals: {
    remaining: 480,
    june: 879,
    total: 71,
    dueFine: 999,
  },
};

const StudentCard = ({ studentName, attendance }) => {
  const [attendanceData, setAttendanceData] = useState([]);
  const dayNames = [ "Mon", "Tue", "Wed", "Thu", "Fri"];
  const today = new Date();
  const currentDay = dayNames[today.getDay()]; // Gets the current day name (e.g., "Tue")
  const currentDate = today.getDate(); // Gets the current date

  useEffect(() => {
    const studentData = jsonData.attendance.find(
      (student) => student.name === studentName
    );
    if (studentData) {
      setAttendanceData(studentData.attendance);
    } else {
      console.error("Student not found");
    }
  }, [studentName]);

  const organizeAttendanceByDay = () => {
    const days = {};
    dayNames.forEach((day) => (days[day] = []));

    attendanceData.forEach((entry) => {
      const dateParts = entry.date.split("/");
      const date = new Date(`June ${dateParts[1]}, ${dateParts[0]}`);
      const dayName = dayNames[date.getDay()]; // Get the day name of the date

      if (dayName) {
        days[dayName].push({
          date: entry.date,
          status: entry.status,
        });
      }
    });

    return days;
  };

  const daysData = organizeAttendanceByDay();

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Attendance Calendar
      </h1>
      <div className="mb-4 grid grid-cols-5 gap-2 text-center text-white bg-orange-400 p-2 rounded-t-lg">
        {dayNames.map((day) => (
          <div key={day} className="p-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5  gap-2 p-2">
        {attendance.map((item) => {
          console.log(item.date);
          console.log(item.status);
          return (
            <div key={item.date} className={`p-2 border border-gray-300 text-center rounded-md bg-slate-100 ${getStatusClass(item.status)}`}>
              <h2>{item.date}</h2>
              <h2>{item.status}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getStatusClass = (status) => {
  switch (status) {
    case "P":
      return "text-green-500";
    case "L":
      return "text-orange-500";
    case "U":
      return "text-red-500";
    case "E":
      return "text-blue-500";
    default:
      return "";
  }
};

export default StudentCard;
