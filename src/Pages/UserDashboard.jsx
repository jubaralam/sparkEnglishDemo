import React, { useContext } from 'react'
import { userCrediantial } from '../Context/AuthContext'
import StudentAttendanceTable from '../Conponents/StudentAttendanceTable'

const UserDashboard = () => {
   const {isLoggedIn, token} = useContext(userCrediantial)
   console.log(isLoggedIn)
  
  return (
    <div>
        <StudentAttendanceTable />

    <div>UserDashboard {isLoggedIn ? "True": "False"}</div>
    <p> token : {token}</p>
    </div>
  )
}

export default UserDashboard