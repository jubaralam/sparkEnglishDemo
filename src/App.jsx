import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Conponents/Navbar'
import HeroSection from './Conponents/HeroSection'
import InnovativeTeachingMethods from './Conponents/InnovativeTeachingMethods'
import EngagingCurriculum from './Conponents/EngagingCurriculum '
import FacultyExcellence from './Conponents/FacultyExcellence'


const App = () => {
  return (
    <Router >

    <div className='bg-gray-200'>
       
    <Navbar />
    <HeroSection />
  < InnovativeTeachingMethods />
  <EngagingCurriculum />
  <FacultyExcellence />
    </div>
    </Router>
  )
}

export default App
