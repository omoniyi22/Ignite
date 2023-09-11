import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-neutral-900">
      <FadeIn>
        <Container>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 mb-16">
              <div className="lg:w-8/12 px-4 mb-12 lg:mb-0">
                <h1 className="text-white font-heading text-xl md:text-5xl mb-8 tracking-tightest">
                  About us
                </h1>
                <p className="font-extralight text-base w-1/2 text-gray-100 tracking-tight">
                  <span>
                    We envision an African continent with economic growth that
                    is technologically driven.
                  </span>
                  {/* <span className="text-gray-800 pl-1">
                London, Chicago, Barcelona, Vienna, Rome, Las Vegas.
              </span> */}
                </p>
              </div>
              <div className="lg:w-4/12 px-4 text-right lg:mt-8">
                <a
                  className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-white"
                  href="#"
                >
                  <span className=" text-white mr-4">Lets talk</span>
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
                        stroke="white"
                        strokeWidth="1.3"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.5 8.83571V1.5H2.16429"
                        stroke="white"
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
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 xl:w-7/12 px-4 mb-20 xl:mb-0">
                <div className="xl:max-w-2xl">
                  <div className="flex flex-wrap -mx-4 align-items-stretch">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                      <div
                        className="flex items-end mb-4 pl-8 xl:pl-10 pr-1 pt-28 pb-10 border"
                        style={{ borderRadius: 50 }}
                      >
                        <div>
                          <h5 className=" text-white text-2xl font-light md:text-5xl tracking-tighter">
                            2014
                          </h5>
                          <span className="block font-thin text-gray-300">
                            Organization Founded
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex items-end pl-8 xl:pl-10 pr-1 pt-16 py-10 border"
                        style={{ borderRadius: 50 }}
                      >
                        <div>
                          <h5 className=" text-white text-2xl font-light md:text-5xl tracking-tighter">
                            5+
                          </h5>
                          <span className="block font-thin text-gray-300">
                            Project Done
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <div
                        className="flex items-end mb-4 pl-8 xl:pl-10 pr-1 pt-16 pb-10 border"
                        style={{ borderRadius: 50 }}
                      >
                        <div>
                          <h5 className="text-white text-2xl font-light md:text-5xl tracking-tighter">
                            <span>5+</span>
                          </h5>
                          <span className="block font-thin text-gray-300">
                            Business Partners
                          </span>
                        </div>
                      </div>
                      <div
                        className="flex items-end pl-8 xl:pl-10 pr-1 pt-28 pb-10 border"
                        style={{ borderRadius: 50 }}
                      >
                        <div>
                          <h5 className="text-white text-2xl font-light md:text-5xl tracking-tighter">
                            <span>1000+</span>
                          </h5>
                          <span className="block font-thin text-gray-300">
                            Reached Beneficiaries
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div className="lg:max-w-sm ml-auto xl:max-w-none">
                  <p className="text-white tracking-tight font-light text-base ">
                    Science Ignite is Nigerias first open living lab and
                    pre-incubation space designed to be a multi-functional,
                    multi-purpose space where work to catalyze creative social
                    tech ventures take place. The HUB is a place for
                    technologists, social entrepreneurs, government, tech
                    companies, impact investors and hackers in and around Lagos
                    to co-create new solutions to the many social problems in
                    Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </FadeIn>
    </section>
  );
};

export default AboutUs;
