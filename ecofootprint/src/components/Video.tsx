import React from "react";

const Video: React.FC = () => {
  return (
    <div>
      <div>
        <iframe
          width="1705"
          height="968"
          src="https://www.youtube.com/embed/jAa58N4Jlos"
          title="Climate Change - A Short Film [4K]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
