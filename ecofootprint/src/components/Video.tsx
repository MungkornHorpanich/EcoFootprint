import React from "react";

const Video: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 py-24 flex-col">
      <div className="max-w-2xl mx-auto flex-col">
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
        <p className="font-bold">
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
