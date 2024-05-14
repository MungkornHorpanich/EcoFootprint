import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Masthead from "../components/masthead";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Video from "../components/Video";

const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div>
          <Navbar />
          <Masthead />
          <Video />
          <Faq />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
