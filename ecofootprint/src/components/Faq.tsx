import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const Faq: React.FC = () => {
  return (
    <div id="faq" className="w-full bg-gray-50 polka">
      <div className="py-24 max-w-2xl mx-auto">
        <h1 className="text-3xl drop-shadow-lg px-2 font-bold">
          Frequently Asked Questions (FAQ)
        </h1>
        <div className="w-full mt-3 max-w-2xl rounded-xl bg-gray-50 p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-md font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>What is a carbon footprint?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 mt-[2px] text-green-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-500">
                  A carbon footprint is the total amount of greenhouse gases
                  (including carbon dioxide and methane) that are generated by
                  our actions. The average carbon footprint for a person in the
                  United States is 16 tons, one of the highest rates in the
                  world. Globally, the average carbon footprint is closer to 4
                  tons.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-md font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>
                    What factors contribute to a person's carbon footprint?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 mt-[2px] text-green-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-500">
                  Several factors contribute to an individual's carbon
                  footprint, including:
                  <p>
                    1. Energy Efficiency: Use energy-efficient appliances, LED
                    lighting, and renewable energy sources like solar or wind
                    power.
                  </p>
                  <p>
                    2. Transportation: Opt for public transport, carpooling,
                    cycling, or walking. Choose fuel-efficient vehicles or
                    electric cars.
                  </p>
                  <p>
                    3. Diet: Reduce meat consumption, choose locally sourced and
                    seasonal foods, and minimize food waste.
                  </p>
                  <p>
                    4. Waste Management: Recycle, compost, and reduce single-use
                    plastics and packaging.
                  </p>
                  <p>
                    5. Consumer Choices: Purchase eco-friendly products, support
                    sustainable brands, and reduce overall consumption.
                  </p>
                  <p>
                    6. Housing: Improve insulation, use smart thermostats, and
                    consider green building practices.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-md font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>Why is reducing carbon footprint important?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 mt-[2px] text-green-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-500">
                  Reducing carbon footprint is crucial for mitigating climate
                  change and its adverse effects. By lowering greenhouse gas
                  emissions, we can reduce air pollution, preserve natural
                  resources, protect ecosystems, and create a more sustainable
                  future for generations to come.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Faq;
