import { motion, useScroll, useSpring } from "framer-motion";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";

const Calculation: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const q1 = [
    { name: "Yes, I do.", footprint: 4.6 },
    { name: "Yes, I do but It's an electric car.", footprint: 0.4 },
    { name: "Yes, I do but It's a motorbike", footprint: 0.98 },
    { name: "No, I don't", footprint: 0.0 },
  ];

  const q2 = [
    { name: "4 Short-haul roundtrips.", footprint: 1.9 },
    { name: "12 Short-hual roundtrips.", footprint: 5.5 },
    { name: "1 Long-hual roundtrips.", footprint: 2.35 },
  ];

  const q3 = [
    { name: "Yes, I'm vegetarion.", footprint: -1.4 },
    { name: "Yes, I'm vegan.", footprint: -1.6 },
    { name: "I don't eat red meat.", footprint: -0.9 },
  ];

  const q4 = [
    { name: "Yes, I have a cat", footprint: 0.3 },
    { name: "Yes, I have a dog", footprint: 0.8 },
    { name: "Yes, I have a large dog", footprint: 2.5 },
    { name: "No, I don't", footprint: 0.0 },
  ];

  const q5 = [
    { name: "A little (13$ a month)", footprint: -0.5 },
    { name: "Average (50$ a month)", footprint: 0.0 },
    { name: "A lot (120$ a month)", footprint: 1 },
  ];

  const q6 = [
    { name: "Yes, I do." },
    { name: "Yes, I do but It's an electric car." },
    { name: "No, I don't" },
  ];

  // Q1
  const [selected1, setSelected1] = useState(q1[0]);
  const footprint1 = selected1.footprint;

  // Q2
  const [selected2, setSelected2] = useState(q2[0]);
  const footprint2 = selected2.footprint;

  // Q3
  const [selected3, setSelected3] = useState(q3[0]);
  const footprint3 = selected3.footprint;

  // Q4
  const [selected4, setSelected4] = useState(q4[0]);
  const footprint4 = selected4.footprint;

  // Q5
  const [selected5, setSelected5] = useState(q5[0]);
  const footprint5 = selected5.footprint;

  useEffect(() => {
    let sum = footprint1 + footprint2 + footprint3 + footprint4 + footprint5;
    console.log(sum.toFixed(2));
    console.log("-----------------------");
  }, [selected1, selected2, selected3, selected4, selected5]);

  return (
    <div className="py-12 w-screen px-3">
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
            value={selected1}
            onChange={setSelected1}
            aria-label="Server size"
            className="space-y-2 mt-2"
          >
            {q1.map((plan) => (
              <Radio
                key={plan.name}
                value={plan}
                className="group relative flex cursor-pointer rounded-lg bg-gray-50/5 py-4 px-5 text-black shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-500/10"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-md/6">
                    <p className="font-semibold text-black">{plan.name}</p>
                  </div>
                  <CheckCircleIcon className="size-6 fill-gray-800 opacity-0 transition group-data-[checked]:opacity-100" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
        </div>

        <div id="q2">
          <h1 className="font-bold text-2xl">
            2) How many flight how you got in 1 year?
          </h1>
          <RadioGroup
            by="name"
            value={selected2}
            onChange={setSelected2}
            aria-label="Server size"
            className="space-y-2 mt-2"
          >
            {q2.map((plan) => (
              <Radio
                key={plan.name}
                value={plan}
                className="group relative flex cursor-pointer rounded-lg bg-gray-50/5 py-4 px-5 text-black shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-500/10"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-md/6">
                    <p className="font-semibold text-black">{plan.name}</p>
                  </div>
                  <CheckCircleIcon className="size-6 fill-gray-800 opacity-0 transition group-data-[checked]:opacity-100" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
        </div>

        <div id="q3">
          <h1 className="font-bold text-2xl">
            3) Are you vegan or vegetarion?
          </h1>
          <RadioGroup
            by="name"
            value={selected3}
            onChange={setSelected3}
            aria-label="Server size"
            className="space-y-2 mt-2"
          >
            {q3.map((plan) => (
              <Radio
                key={plan.name}
                value={plan}
                className="group relative flex cursor-pointer rounded-lg bg-gray-50/5 py-4 px-5 text-black shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-500/10"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-md/6">
                    <p className="font-semibold text-black">{plan.name}</p>
                  </div>
                  <CheckCircleIcon className="size-6 fill-gray-800 opacity-0 transition group-data-[checked]:opacity-100" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
        </div>

        <div id="q4">
          <h1 className="font-bold text-2xl">4) Do you have a pet?</h1>
          <RadioGroup
            by="name"
            value={selected4}
            onChange={setSelected4}
            aria-label="Server size"
            className="space-y-2 mt-2"
          >
            {q4.map((plan) => (
              <Radio
                key={plan.name}
                value={plan}
                className="group relative flex cursor-pointer rounded-lg bg-gray-50/5 py-4 px-5 text-black shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-500/10"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-md/6">
                    <p className="font-semibold text-black">{plan.name}</p>
                  </div>
                  <CheckCircleIcon className="size-6 fill-gray-800 opacity-0 transition group-data-[checked]:opacity-100" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
        </div>

        <div id="q5">
          <h1 className="font-bold text-2xl">
            How much do you spend on clothes each month?
          </h1>
          <RadioGroup
            by="name"
            value={selected5}
            onChange={setSelected5}
            aria-label="Server size"
            className="space-y-2 mt-2"
          >
            {q5.map((plan) => (
              <Radio
                key={plan.name}
                value={plan}
                className="group relative flex cursor-pointer rounded-lg bg-gray-50/5 py-4 px-5 text-black shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-500/10"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-md/6">
                    <p className="font-semibold text-black">{plan.name}</p>
                  </div>
                  <CheckCircleIcon className="size-6 fill-gray-800 opacity-0 transition group-data-[checked]:opacity-100" />
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
