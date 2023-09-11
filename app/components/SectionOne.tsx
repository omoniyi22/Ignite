import React from "react";
import FadeIn, { FadeInStagger } from "./FadeIn";

const SectionOne: React.FC = () => {
  return (
    <section className="relative bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="relative mx-auto mb-12 pt-12 pb-64 xs:pb-40 lg:pb-12 border-b">
            <h1 className="font-heading w-2/3 font-bold text-neutral-900 text-7xl  tracking-tightest">
              We Empower Africa Through
              <span className="block md:inline-block pl-2 text-indigo-500">
                STEM.
              </span>
            </h1>
            <div className="absolute text-sm text-neutral-500 justify-end bottom-0 right-0 mb-10 max-w-sm ml-auto text-right">
              {/* <span className="block mb-1 text-xs">Since</span>
            <span className="block mb-3 text-xs">1979</span> */}
              <p>
                <span className="block font-normal">
                  In line with the sustainable development goals, we design and
                  develop all our projects, activities, and partnerships to
                  achieve these goals in Africa. STEM (Science, Technology,
                  Engineering, and Mathematics) applications are imperative to
                  the achievement of the SDGs.
                </span>
                {/* <span className="block">
                focused on brand creation, rebrands, and brand
              </span>
              <span className="block">
                transformation for progressive companies.
              </span> */}
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeInStagger>
          <div className="flex  mb-10 flex-wrap -mx-3 align-items-end">
            <div className="w-full md:w-6/12 lg:w-7/12 px-3 relative">
              <div className="absolute z-10 top-0 right-0 w-44 h-44 mt-4 mr-5 flex items-center justify-center">
                <img
                  className="absolute top-0 left-0 box animate-spin"
                  style={{ animationDirection: "reverse" }}
                  src="/spin-bonus.png"
                  alt=""
                />
                <img
                  className="relative hover:rotate-45 transform transition duration-100"
                  src="https://shuffle.dev/asitrastudio-assets/headers/arrow-spin.svg"
                  alt=""
                />
              </div>
              <div className="relative">
                <img
                  className="block w-full h-64 lg:h-80 rounded-3xl object-cover"
                  src="/1.jpg"
                  alt=""
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-indigo-500 opacity-100"></div> */}
              </div>
            </div>
            <div className="hidden md:block md:w-6/12 lg:w-5/12 px-3">
              <div className="flex flex-wrap -mx-3">
                <div className="w-5/12 px-3">
                  <img
                    className="block w-full h-64 lg:h-80 rounded-3xl object-cover"
                    src="/2.jpg"
                    alt=""
                  />
                </div>
                <div className="w-7/12 px-3">
                  <img
                    className="block w-full h-64 lg:h-80 rounded-3xl object-cover"
                    src="https://pbs.twimg.com/media/Ej5LgXQWkAEncYL?format=jpg&name=4096x4096"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
};

export default SectionOne;
