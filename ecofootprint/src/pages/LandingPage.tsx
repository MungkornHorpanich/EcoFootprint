import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Masthead from "../components/masthead";
import Faq from "../components/Faq";
import Video from "../components/Video";
import Footer from "../components/Footer";
import { PropagateLoader } from "react-spinners";
import Support from "../components/Support";

const LandingPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="w-screen flex justify-center items-center h-screen bg-[#0f1e2f]">
          <PropagateLoader color={"#6EB0A6"} />
        </div>
      ) : (
        <div>
          <Navbar />
          <Masthead />
          <Video />
          <Faq />
          <Support />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
