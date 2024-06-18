import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Conponents/Navbar";

import Footer from "./Conponents/Footer";
// import Home from "./Pages/Home";
import AllRoutes from "./Conponents/AllRoutes";
import AuthContext from "./Context/AuthContext";

const App = () => {
  return (
    <AuthContext>

    <Router>
      <div className="bg-gray-200">
        <Navbar />
        <AllRoutes />
        <Footer />
      </div>
      
    </Router>
    </AuthContext>
  );
};

export default App;
