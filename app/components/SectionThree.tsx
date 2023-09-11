"use client";
import React, { useState } from "react";

const SectionThree: React.FC = () => {
  const [showParagraph1, setShowParagraph1] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);
  const [showParagraph3, setShowParagraph3] = useState(false);
  const [showParagraph4, setShowParagraph4] = useState(false);
  const [showParagraph5, setShowParagraph5] = useState(false);
  const [showParagraph6, setShowParagraph6] = useState(false);
  const [showParagraph7, setShowParagraph7] = useState(false);

  const handleButtonClick1 = () => {
    setShowParagraph1(!showParagraph1);
  };

  const handleButtonClick2 = () => {
    setShowParagraph2(!showParagraph2);
  };

  const handleButtonClick3 = () => {
    setShowParagraph3(!showParagraph3);
  };

  const handleButtonClick4 = () => {
    setShowParagraph4(!showParagraph4);
  };

  const handleButtonClick5 = () => {
    setShowParagraph5(!showParagraph5);
  };

  const handleButtonClick6 = () => {
    setShowParagraph6(!showParagraph6);
  };

  const handleButtonClick7 = () => {
    setShowParagraph7(!showParagraph7);
  };

  return (
    <section className="py-12 md:py-10 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto lg:max-w-none">
          {/* <h1 className="font-heading text-6xl sm:text-8xl md:text-10xl tracking-tighter mb-20">
            Get started quickly
          </h1> */}
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <img className="block mx-auto lg:mr-0" src="/draw2.png" alt="" />
            </div>
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-xl">
                <button
                  className="group block  text-left w-full py-10 px-4 border-b border-gray-300"
                  onClick={handleButtonClick1}
                >
                  <div className="flex w-full justify-between items-center">
                    <h5 className="text-xl md:text-3xl text-white font-semibold">
                      Innovation
                    </h5>
                    <span className="block group-hover:hidden flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 10.4346L12.9483 3.88682L6.40058 10.4346"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 22.2246L12.9453 4.06996"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="hidden group-hover:block flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 15.5659L12.9483 22.1137L6.40058 15.5659"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 3.77539L12.9453 21.93"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className={showParagraph1 ? "max-w-lg mt-8" : "hidden"}>
                    <p className="text-base font-thin text-gray-300">
                      We picture an African society where creativity and
                      inquisitiveness are valued. We are dedicated to harnessing
                      the potentials of STEM fields to create ground-breaking
                      technologies that expand the boundaries of what is
                      possible.
                    </p>
                  </div>
                </button>
                <button
                  className="group block  text-left w-full py-10 px-4 border-b border-gray-300"
                  onClick={handleButtonClick2}
                >
                  <div className="flex w-full justify-between items-center">
                    <h5 className="text-xl md:text-3xl text-white font-semibold">
                      Education and Empowerment
                    </h5>
                    <span className="block group-hover:hidden flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 10.4346L12.9483 3.88682L6.40058 10.4346"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 22.2246L12.9453 4.06996"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="hidden group-hover:block flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 15.5659L12.9483 22.1137L6.40058 15.5659"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 3.77539L12.9453 21.93"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className={showParagraph2 ? "max-w-lg mt-8" : "hidden"}>
                    <p className="text-base font-thin text-gray-300">
                      We work to educate and empower the upcoming generation of
                      thinkers, inventors, and problem solvers. Regardless of
                      background, we support promoting diversity and inclusivity
                      in the STEM community and making STEM accessible to
                      everyone.
                    </p>
                  </div>
                </button>
                <button
                  className="group block  text-left w-full py-10 px-4 border-b border-gray-300"
                  onClick={handleButtonClick3}
                >
                  <div className="flex w-full justify-between items-center">
                    <h5 className="text-xl md:text-3xl text-white font-semibold">
                      Diversity and Inclusion
                    </h5>
                    <span className="block group-hover:hidden flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 10.4346L12.9483 3.88682L6.40058 10.4346"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 22.2246L12.9453 4.06996"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="hidden group-hover:block flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 15.5659L12.9483 22.1137L6.40058 15.5659"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 3.77539L12.9453 21.93"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className={showParagraph3 ? "max-w-lg mt-8" : "hidden"}>
                    <p className="text-base font-thin text-gray-300">
                      We foster diversity and inclusion within our organization
                      through programs that inspire underrepresented groups to
                      enter STEM fields. When all voices are heard, and all
                      perspectives are valued, the possibilities for
                      groundbreaking discoveries and advancements in STEM become
                      limitless, benefiting society as a whole.
                    </p>
                  </div>
                </button>
                <button
                  className="group block  text-left w-full py-10 px-4 border-b border-gray-300"
                  onClick={handleButtonClick4}
                >
                  <div className="flex w-full justify-between items-center">
                    <h5 className="text-xl md:text-3xl text-white font-semibold">
                      Sustainability
                    </h5>
                    <span className="block group-hover:hidden flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 10.4346L12.9483 3.88682L6.40058 10.4346"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 22.2246L12.9453 4.06996"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="hidden group-hover:block flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 15.5659L12.9483 22.1137L6.40058 15.5659"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 3.77539L12.9453 21.93"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className={showParagraph4 ? "max-w-lg mt-8" : "hidden"}>
                    <p className="text-base font-thin text-gray-300">
                      In our vision of the future, STEM will be at the forefront
                      of sustainable development. In order to provide a better
                      future for future generations, our objective entails
                      leading the charge in the development of eco-aware
                      technologies that address global concerns, from
                      resource-efficient resource management to renewable energy
                      solutions.
                    </p>
                  </div>
                </button>
                <button
                  className="group block  text-left w-full py-10 px-4 border-b border-gray-300"
                  onClick={handleButtonClick5}
                >
                  <div className="flex w-full justify-between items-center">
                    <h5 className="text-xl md:text-3xl text-white font-semibold">
                      Global Collaboration
                    </h5>
                    <span className="block group-hover:hidden flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 10.4346L12.9483 3.88682L6.40058 10.4346"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 22.2246L12.9453 4.06996"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="hidden group-hover:block flex-shrink-0 ml-4">
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4961 15.5659L12.9483 22.1137L6.40058 15.5659"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9453 3.77539L12.9453 21.93"
                          stroke="white"
                          strokeWidth="1.61806"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className={showParagraph5 ? "max-w-lg mt-8" : "hidden"}>
                    <p className="text-base font-thin text-gray-300">
                      We collaborate with specialists, partners, and visionaries
                      from all over the world, transcending national boundaries.
                      We want to address global challenges collectively and
                      share knowledge that advances mankind by establishing a
                      global network of STEM leaders.
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
