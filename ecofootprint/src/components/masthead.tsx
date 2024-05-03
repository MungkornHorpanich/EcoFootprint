import React from "react";

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Put the background image here */}
      <div className="p-12 font-bold z-10 text-gray-900 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-4 text-4xl xl:text-5xl">
          Carbon footprint calculator
        </h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          Know it before it's too late.
        </h2>
      </div>
    </div>
  );
};

export default Masthead;
