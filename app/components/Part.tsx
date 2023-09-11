import React from "react";

const Part: React.FC = () => {
  return (
    <section className="py-12 md:py-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-xl lg:max-w-none mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-5/12 px-4 mb-20 lg:mb-0">
              <div className="max-w-lg">
                <span className="inline-block mb-4 py-2 px-3 text-sm font-thin text-black group-hover:text-white leading-none border border-black group-hover:bg-black rounded-full transition duration-200">
                  Meet
                </span>
                <h2 className="font-heading font-light text-6xl  tracking-tighter mb-10">
                  Meet our partners
                </h2>
                <a
                  className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black"
                  href="#"
                >
                  <span className="mr-4">I will become a sponsor</span>
                  <span className="group-hover:rotate-45 transform transition duration-100">
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 1.5L1.5 9.5"
                        stroke="black"
                        strokeWidth="1.3"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.5 8.83571V1.5H2.16429"
                        stroke="black"
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
            <div className="w-full lg:w-7/12 px-4">
              <div className="max-w-xl lg:ml-auto">
                <div className="flex flex-wrap -mx-4 -mb-4">
                  <div className="w-full xs:w-1/2 sm:w-1/3 px-4 mb-4">
                    <div className="flex h-28 p-2 items-center justify-center bg-white rounded-3xl">
                      <img
                        className="block mx-auto"
                        src="/netflix-medium.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full xs:w-1/2 sm:w-1/3 px-4 mb-4">
                    <div className="flex h-28 p-2 items-center justify-center bg-white rounded-3xl">
                      <img
                        className="block mx-auto"
                        src="/spotify-medium.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full xs:w-1/2 sm:w-1/3 px-4 mb-4">
                    <div className="flex h-28 p-2 items-center justify-center bg-white rounded-3xl">
                      <img
                        className="block mx-auto"
                        src="/ikea-medium.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full xs:w-1/2 sm:w-1/3 px-4 mb-4">
                    <div className="flex h-28 p-2 items-center justify-center bg-white rounded-3xl">
                      <img
                        className="block mx-auto"
                        src="/amazon-medium.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full xs:w-1/2 sm:w-1/3 px-4 mb-4">
                    <div className="flex h-28 p-2 items-center justify-center bg-white rounded-3xl">
                      <img
                        className="block mx-auto"
                        src="/microsoft-medium.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full xs:w-1/2 sm:w-1/3 px-4 mb-4">
                    <div className="flex h-28 p-2 items-center justify-center bg-white rounded-3xl">
                      <img
                        className="block mx-auto"
                        src="/visa-medium.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Part;
