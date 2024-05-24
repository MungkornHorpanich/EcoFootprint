import { motion, useScroll, useSpring } from "framer-motion";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import React from "react";

const Calculation: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const q1 = [
    { name: "Startup", ram: "12GB", cpus: "6 CPUs", disk: "256GB SSD disk" },
    { name: "Business", ram: "16GB", cpus: "8 CPUs", disk: "512GB SSD disk" },
    { name: "Enterprise", ram: "32GB", cpus: "12 CPUs", disk: "1TB SSD disk" },
  ];

  const [selected, setSelected] = useState(q1[0]);

  return (
    <div className="py-12 w-screen">
      <motion.div
        className="z-100 fixed top-0 left-0 right-0 h-[10px] m-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 origin-left"
        style={{ scaleX }}
      />
      <div className="flex flex-col max-w-2xl gap-24 mx-auto mt-12">
        <div id="heading">
          <h1 className="font-bold text-3xl">
            Let's start calculating your Carbon Footprint!
          </h1>
          <p className="font-semibold text-lg tracking-tight">
            Please answer the question honestly for the best and more accurate
            result.
          </p>
        </div>

        <div id="q1">
          <h1 className="font-bold text-2xl">1) Do you have a car?</h1>
          <RadioGroup
            by="name"
            value={selected}
            onChange={setSelected}
            aria-label="Server size"
            className="space-y-2"
          >
            {q1.map((plan) => (
              <Radio
                key={plan.name}
                value={plan}
                className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">{plan.name}</p>
                    <div className="flex gap-2 text-white/50">
                      <div>{plan.ram}</div>
                      <div aria-hidden="true">&middot;</div>
                      <div>{plan.cpus}</div>
                      <div aria-hidden="true">&middot;</div>
                      <div>{plan.disk}</div>
                    </div>
                  </div>
                  <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
