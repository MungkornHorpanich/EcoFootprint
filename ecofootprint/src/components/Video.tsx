import React from "react";
import { Link } from "react-router-dom";

const Video: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 pt-24 pb-16 flex-col">
      <div className="max-w-2xl mx-auto flex-col">
        <h1 className="text-3xl drop-shadow-lg px-2 pb-4 font-bold">
          What will happen if we don't stop generate greenhouse gases.
        </h1>
        <iframe
          width="672"
          height="370"
          src="https://www.youtube.com/embed/jAa58N4Jlos"
          title="Climate Change - A Short Film [4K]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-2xl"
        ></iframe>
        <p className="pl-2 pt-1 font-bold">
          Video from{" "}
          <span>
            <a href="https://www.youtube.com/@djicaptures7369">@DJI Captures</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Video;
