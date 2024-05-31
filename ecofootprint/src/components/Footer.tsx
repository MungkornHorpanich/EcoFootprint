import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-screen bg-[#f1f2f1] flex py-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1>
          👋 Made by{" "}
          <span>
            <a href="https://www.whiledev.site/" className="underline">
              @WhileDev
            </a>
          </span>
        </h1>
        <h1>@ 2024 Jiranthanin Horpanich. All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
