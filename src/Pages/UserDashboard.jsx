import React, { useContext } from 'react'
import { userCrediantial } from '../Context/AuthContext'
import AttendanceData from '../Conponents/AttendanceData'

const UserDashboard = () => {
   const {isLoggedIn, token} = useContext(userCrediantial)
   console.log(isLoggedIn)
  
  return (
    <div>
        <AttendanceData />

    <div>UserDashboard {isLoggedIn ? "True": "False"}</div>
    <p> token : {token}</p>
    </div>
  )
}

export default UserDashboard