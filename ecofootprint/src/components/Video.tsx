import React from "react";
import { Link } from "react-router-dom";

const Video: React.FC = () => {
  return (
    <div id="start" className="w-full bg-gray-50 py-24 flex-col">
      <div className="max-w-2xl mx-auto flex-col">
        <div className="">
          <h1 className="text-3xl text-center items-center pt-2 drop-shadow-lg px-2 pb-1 font-bold">
            Know what you use and safe the world.
          </h1>
          <p className="text-xl text-center items-center pt-1 drop-shadow-lg px-2 pb-4 font-bold">
            Don't know how much waste you generated? Start the test now!
          </p>
          <div className="flex">
            <div className="flex gap-5 mx-auto">
              <Link to={"/test"}>
                <button className="px-7 flex font-semibold text-white rounded-xl bg-nature text-xl py-4">
                  Start The Test
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
