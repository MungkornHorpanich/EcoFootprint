import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Masthead from "../components/masthead";
import Faq from "../components/Faq";

const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div>
      <Navbar />
      <Masthead />
      <Faq />
    </div>
  );
};

export default LandingPage;
