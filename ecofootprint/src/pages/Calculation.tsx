import { motion, useScroll, useSpring } from "framer-motion";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Footer from "../components/Footer";
import Support from "../components/Support";

const Calculation: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const ref = useRef();
  const [done, setDone] = useState<boolean>(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const q1 = [
    { name: "No, I don't", footprint: 0.0 },
    { name: "Yes, I do.", footprint: 4.6 },
    { name: "Yes, I do but It's an electric car.", footprint: 0.5 },
    { name: "Yes, I do but It's a motorbike", footprint: 1 },
  ];

  const q2 = [
    { name: "4 Short-haul roundtrips.", footprint: 2.0 },
    { name: "12 Short-haul roundtrips.", footprint: 5.5 },
    { name: "1 Long-haul roundtrips.", footprint: 2.35 },
  ];

  const q3 = [
    { name: "No, I'm not", footprint: 1.2 },
    { name: "Yes, I'm vegetarian.", footprint: -1.4 },
    { name: "Yes, I'm vegan.", footprint: -1.6 },
    { name: "I don't eat red meat.", footprint: -0.9 },
  ];

  const q4 = [
    { name: "No, I don't", footprint: 0.0 },
    { name: "Yes, I have a cat", footprint: 0.5 },
    { name: "Yes, I have a dog", footprint: 1.2 },
    { name: "Yes, I have a large dog", footprint: 2.5 },
  ];

  const q5 = [
    { name: "A little (13$ a month)", footprint: -0.25 },
    { name: "Average (50$ a month)", footprint: 0.5 },
    { name: "A lot (120$ a month)", footprint: 1 },
  ];

  const q6 = [
    { name: "No, I don't", footprint: 0.4 },
    { name: "Yes, I do but not a lot.", footprint: -0.25 },
    { name: "Yes, I do but a lot.", footprint: -0.5 },
  ];

  const q7 = [
    { name: "A little (50$ a month)", footprint: -0.5 },
    { name: "Average (200$ a month)", footprint: 0.25 },
    { name: "A lot (500$ a month)", footprint: 0.5 },
  ];

  const q8 = [
    { name: "A little (135.5 liters daily)", footprint: 0.2 },
    { name: "Average (255 liters daily)", footprint: 0.3 },
    { name: "A lot (417 liters daily)", footprint: 0.5 },
  ];

  const [selected1, setSelected1] = useState(q1[0]);
  const [selected2, setSelected2] = useState(q2[0]);
  const [selected3, setSelected3] = useState(q3[0]);
  const [selected4, setSelected4] = useState(q4[0]);
  const [selected5, setSelected5] = useState(q5[0]);
  const [selected6, setSelected6] = useState(q6[0]);
  const [selected7, setSelected7] = useState(q7[0]);
  const [selected8, setSelected8] = useState(q8[0]);

  useEffect(() => {
    const sum =
      selected1.footprint +
      selected2.footprint +
      selected3.footprint +
      selected4.footprint +
      selected5.footprint +
      selected6.footprint +
      selected7.footprint +
      selected8.footprint;
    setCsum(sum);
  }, [
    selected1,
    selected2,
    selected3,
    selected4,
    selected5,
    selected6,
    selected7,
    selected8,
  ]);

  const [csum, setCsum] = useState<number>(
    selected1.footprint +
      selected2.footprint +
      selected3.footprint +
      selected4.footprint +
      selected5.footprint +
      selected6.footprint +
      selected7.footprint +
      selected8.footprint,
  );

  const data = {
    labels: ["UK", "US", "You", "World"],
    datasets: [
      {
        label: "Carbon footprint",
        data: [6.7, 18.3, csum.toFixed(2), 4.9],
        borderRadius: 5,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };

  if (done === false) {
    return (
      <div className="py-12 w-screen px-3 bg-gray-50">
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
            <h1 className="font-bold text-2xl">1) Do you have a car? 🚗</h1>
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
              2) How many flight how you got in 1 year? ✈️
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
              3) Are you vegan or vegetarion? 🥦
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
            <h1 className="font-bold text-2xl">4) Do you have a pet? 🐶</h1>
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
              5) How much do you spend on clothes each month? 👕
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

          <div id="q6">
            <h1 className="font-bold text-2xl">
              6) Do you have a solar cell? 🔋
            </h1>
            <RadioGroup
              by="name"
              value={selected6}
              onChange={setSelected6}
              aria-label="Server size"
              className="space-y-2 mt-2"
            >
              {q6.map((plan) => (
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

          <div id="q7">
            <h1 className="font-bold text-2xl">
              7) How much do you spend on services per month? 📱
            </h1>
            <p className="tracking-tighter">
              Services include health insurance, phone bills, subscriptions,
              hiring an accountant, etc. Paying a company or someone to do
              something for you falls under this category.
            </p>
            <RadioGroup
              by="name"
              value={selected7}
              onChange={setSelected7}
              aria-label="Server size"
              className="space-y-2 mt-2"
            >
              {q7.map((plan) => (
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

          <div id="q8">
            <h1 className="font-bold text-2xl">
              8) How much water do you use? 💧
            </h1>
            <RadioGroup
              by="name"
              value={selected8}
              onChange={setSelected8}
              aria-label="Server size"
              className="space-y-2 mt-2"
            >
              {q8.map((plan) => (
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
          <button
            className="text-white mt-5 bg-black text-xl py-6 rounded-xl"
            onClick={() => {
              setDone(true);
            }}
          >
            Submit!
          </button>
        </div>
      </div>
    );
  }
  if (done === true) {
    return (
      <div className="pt-10 w-screen px-3 bg-gray-50">
        <div className="flex flex-col max-w-2xl mx-auto">
          <p className="font-semibold">
            <button
              onClick={() => {
                setDone(false);
              }}
            >
              ⬅️ Back
            </button>
          </p>
          <div className="py-12 mt-12 mx-auto items-center text-center text-2xl font-semibold rounded-xl bg-gray-100 w-full">
            <p>{`Your carbon footprint is ${csum.toFixed(2)} tons of CO₂`}</p>
            <p>{`Here's what that means!`}</p>
          </div>
          <h1 className="font-semibold text-2xl my-10">
            Your carbon footprint amongs other country average.
          </h1>
          <Bar ref={ref} data={data} />
          <a
            href="https://www.ucsusa.org/"
            className="bg-nature mt-12 mb-10 py-4 w-48 text-center mx-auto text-white font-semibold rounded-lg"
          >
            Save the earth
          </a>
        </div>
        <Support />
        <Footer />
      </div>
    );
  }
};

export default Calculation;
