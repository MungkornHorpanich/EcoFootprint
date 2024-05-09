import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Masthead from "../components/masthead";
import Faq from "../components/Faq";

const LandingPage: React.FC = () => {
  const faqRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <Navbar />
      <Masthead />
      <Faq faqRef={faqRef} />
    </div>
  );
};

export default LandingPage;
