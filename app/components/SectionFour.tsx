import Container from "./Container";

const SectionFour: React.FC = () => {
  return (
    <section className="py-12  bg-neutral-900">
      <Container>
        <div className="container mx-auto px-4">
          <div className="max-w-lg lg:max-w-6xl mx-auto">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div className="max-w-md">
                  <h2 className="lg:max-w-md text-white font-semibold text-6xl sm:text-7xl mb-8">
                    Building Africa.
                  </h2>
                  <p className="text-base text-gray-300 font-thin mb-10">
                    Through Practical Solution-Based STEM Learning, Africa can
                    attain global relevance in Technological Advancements. The
                    Quality of Education has been said to have fallen over the
                    past four decades, but we are here to make a difference. YOU
                    AND I can change the narrative
                  </p>
                  <a
                    className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-white"
                    href="#"
                  >
                    <span className="mr-4 text-white">
                      Be a Volunteer Today
                    </span>
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
              <div className="w-full lg:w-1/2 px-4">
                <img className="block lg:ml-auto" src="/draw3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionFour;
