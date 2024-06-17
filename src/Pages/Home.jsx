import React from "react";
import HeroSection from "../Conponents/HeroSection";
import InnovativeTeachingMethods from "../Conponents/InnovativeTeachingMethods";
import EngagingCurriculum from "../Conponents/EngagingCurriculum ";
import FacultyExcellence from "../Conponents/FacultyExcellence";
import CareerOpportunities from "../Conponents/CareerOpportunities";
import ContactSection from "../Conponents/ContactSection ";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <InnovativeTeachingMethods />
      <EngagingCurriculum />
      <FacultyExcellence />
      <CareerOpportunities />
      <ContactSection />
    </div>
  );
};

export default Home;
