import React from "react";

const MyComponent: React.FC = () => {
  return (
    <section className="py-12 md:py-10 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* <h1 className="font-heading text-6xl sm:text-8xl md:text-5xl tracking-tighter mb-20">
          Our Key Focus SDGs
        </h1> */}
        <div className="pb-10 pt-20 lg:pt-10 px-8 sm:px-12 xl:px-32 bg-[#212121] rounded-3xl">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-lg mx-auto">
                <h3 className="text-white font-semibold text-3xl lg:text-4xl tracking-tight mb-6">
                  The Vision and Pillars of Science Ignite Africa
                </h3>
                <p className="max-w-sm font-light text-base text-neutral-500 mb-10">
                  Our vision is to be the pioneering force in African
                  transformation through the limitless potential of science,
                  technology, engineering, and mathematics (STEM), leading the
                  way in innovation, education, and sustainable progress in
                  order to drive positive change for humanity and the planet.
                </p>
                <a
                  className="group inline-flex py-5 px-8 items-center justify-center leading-none font-medium text-white hover:text-black border border-white rounded-full hover:bg-white transition duration-200"
                  href="#"
                >
                  <span className="mr-2">Get consultation</span>
                  <span className="group-hover:rotate-45 transform transition duration-100">
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L1 9"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 8.33571V1H1.66429"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img className="hidden md:block" src="/draw1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
