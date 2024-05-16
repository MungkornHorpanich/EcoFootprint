import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const Support: React.FC = () => {
  return (
    <div id="support" className="py-24 bg-gray-50 mx-1 ">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl drop-shadow-lg px-2 font-bold">Support</h1>
        <p className="font-bold pl-3">
          If you like this tools. Consider helping me out for other more useful
          stuffs. If you have any suggestion please contact me on X or Discord.
        </p>
        <div className="mx-3 mt-3 flex flex-col md:gap-2 md:flex-row">
          <div className="mx-auto flex items-center md:mx-0 justify-center">
            <a href="https://www.buymeacoffee.com/whiledev">
              <img src="https://img.buymeacoffee.com/button-api/?text=Buy me some milk&emoji=🥛&slug=whiledev&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" />
            </a>
          </div>
          <a>
            <button className="bg-black mx-auto md:mt-0 mt-2 flex gap-2 text-white rounded-lg py-3 px-3 font-semibold">
              <span className="pt-[5px]">
                <FaTwitter />
              </span>{" "}
              @whiledev7
            </button>
          </a>
          <a>
            <button className="bg-[#7289da] mx-auto md:mt-0 mt-2 flex gap-2 text-white rounded-lg py-3 px-3 font-semibold">
              <span className="pt-[4px]">
                <FaDiscord size={18} />
              </span>{" "}
              @while_17
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
