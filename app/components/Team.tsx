import React from "react";

const Team: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-5/12 xl:w-1/3 px-4 mb-20 lg:mb-0">
            <div>
              <h1 className="font-heading text-7xl font-light tracking-tighter mb-10">
                Meet the team
              </h1>
              <a
                className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black"
                href="#"
              >
                <span className="mr-4">See more people</span>
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
          <div className="w-full lg:w-7/12 xl:w-8/12 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 px-4 mb-12">
                <div>
                  <img
                    className="block mb-6"
                    src="https://shuffle.dev/asitrastudio-assets/team/team-avatar1.png"
                    alt=""
                  />
                  <span className="block mb-2 text-sm font-thin text-gray-600">
                    President
                  </span>
                  <span className="block  font-light sm:text-3xl tracking-tight">
                    Deolu Adediran
                  </span>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 px-4 mb-12">
                <div>
                  <img
                    className="block mb-6"
                    src="https://shuffle.dev/asitrastudio-assets/team/team-avatar2.png"
                    alt=""
                  />
                  <span className="block mb-2 text-sm font-thin text-gray-600">
                    Director of STEM
                  </span>
                  <span className="block font-light sm:text-3xl tracking-tight">
                    Joshua Ojerinde
                  </span>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 px-4 mb-12">
                <div>
                  <img
                    className="block mb-6"
                    src="https://shuffle.dev/asitrastudio-assets/team/team-avatar3.png"
                    alt=""
                  />
                  <span className="block mb-2 text-sm font-thin text-gray-600">
                    Public Relations
                  </span>
                  <span className="block font-light sm:text-3xl tracking-tight">
                    Olamide Akinola
                  </span>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 px-4 mb-12">
                <div>
                  <img
                    className="block mb-6"
                    src="https://shuffle.dev/asitrastudio-assets/team/team-avatar4.png"
                    alt=""
                  />
                  <span className="block mb-2 text-sm font-thin text-gray-600">
                    Logistics Team Lead
                  </span>
                  <span className="block font-light sm:text-3xl tracking-tight">
                    Kemi Falola
                  </span>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 px-4 mb-12">
                <div>
                  <img
                    className="block mb-6"
                    src="https://shuffle.dev/asitrastudio-assets/team/team-avatar5.png"
                    alt=""
                  />
                  <span className="block mb-2 text-sm font-thin text-gray-600">
                    Health and Safety Consultant
                  </span>
                  <span className="block font-light sm:text-3xl tracking-tight">
                    Bolaji Ogunbunmi
                  </span>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 px-4 mb-12">
                <div>
                  <img
                    className="block mb-6"
                    src="https://shuffle.dev/asitrastudio-assets/team/team-avatar6.png"
                    alt=""
                  />
                  <span className="block mb-2 text-sm font-thin text-gray-600">
                    Quality Control
                  </span>
                  <span className="block font-light sm:text-3xl tracking-tight">
                    Favour Akinsanya
                  </span>
                </div>
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 px-4 mb-12">
                <div>
                  <img
                    className="block mb-6"
                    src="https://shuffle.dev/asitrastudio-assets/team/team-avatar2.png"
                    alt=""
                  />
                  <span className="block mb-2 text-sm font-thin text-coolGray-600">
                    Information Technology
                  </span>
                  <span className="block font-light sm:text-3xl tracking-tight">
                    Tolu Thomas
                  </span>
                </div>
              </div>
              {/* <div className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 px-4 mb-12">
                <div>
                  <img
                    className="block mb-6"
                    src="https://shuffle.dev/asitrastudio-assets/team/team-avatar3.png"
                    alt=""
                  />
                  <span className="block mb-2 font-thin text-sm text-gray-600">
                    Executive Chairman
                  </span>
                  <span className="block font-light sm:text-3xl tracking-tight">
                    Annette Black
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
