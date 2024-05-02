import { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className="w-full p-1 m-0 mx-auto fixed">
      <div className="mx-auto max-w-3xl border border-gray-300 m-3 rounded-full">
        <div className="text-black flex flex-row justify-between p-4">
          <h1 className="text-lg ml-1">🌎 EcoFootprint</h1>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center hover:text-green rounded-md px-2 py-1 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                About us
                <ChevronDownIcon
                  className="ml-1 -mr-1 h-5 w-5 mt-1 text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute  right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#1D334D] shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/wearelaunchingsoon"}>
                        <button
                          className={`${
                            active ? "bg-gray-200 text-black" : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2  text-sm`}
                        >
                          About EdgeGambit
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/wearelaunchingsoon"}>
                        <button
                          className={`${
                            active ? "bg-gray-200 text-black" : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Blog
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/wearelaunchingsoon"}>
                        <button
                          className={`${
                            active ? "bg-gray-200 text-black" : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Newsletter
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/wearelaunchingsoon"}>
                        <button
                          className={`${
                            active ? "bg-gray-200 text-black" : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Contact
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
