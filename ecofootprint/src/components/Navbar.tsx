import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="w-full p-1 m-0 mx-auto fixed">
      <div className="mx-auto max-w-3xl border border-gray-300 m-3 rounded-full">
        <div className="text-black flex flex-row justify-between p-4">
          <h1 className="text-lg ml-1">🌎 EcoFootprint</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
