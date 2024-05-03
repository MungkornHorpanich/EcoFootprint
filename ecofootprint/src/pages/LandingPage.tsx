import React from "react";
import Navbar from "../components/Navbar";
import Masthead from "../components/masthead";
import Faq from "../components/Faq";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Masthead />
      <Faq />
    </div>
  );
};

export default LandingPage;
