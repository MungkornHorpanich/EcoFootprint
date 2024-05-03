import React from "react";
import videoBackground from "../assets/wallpaper.mp4";
import { Link } from "react-router-dom";

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        src={videoBackground}
      />

      <div className="p-12 mt-7 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-4 text-4xl xl:text-5xl">
          Carbon Footprint Calculator
        </h1>
        <h2 className="mb-6 text-2xl xl:text-3xl tracking-tight">
          Know it before it's too late.
        </h2>
        <Link to={"/test"}>
          <button className="px-9 rounded-full bg-nature text-xl py-4">
            Start now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Masthead;
