import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Masthead from "../components/masthead";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Video from "../components/Video";

const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div>
      <Navbar />
      <Masthead />
      <Video />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
