import { FadeInStagger } from "./FadeIn";

const SectionFive: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-100 overflow-hidden">
      <FadeInStagger>
        <div>
          <div className="container mx-auto px-4 mb-20">
            <h1 className="font-heading text-6xl  tracking-tighter">
              Services
            </h1>
          </div>
          <div className="px-5">
            <div className="max-w-md lg:max-w-none mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 p-0">
                  <a
                    className="relative group block w-full h-full text-left px-6 sm:pl-10 sm:pr-14 pt-32 md:pt-52 xl:pt-80 pb-10 border rounded-3xl overflow-hidden"
                    href="#"
                  >
                    <img
                      className="hidden group-hover:block absolute top-0 left-0 h-full w-full object-cover"
                      src="/one.jpg"
                      alt=""
                    />
                    <span className="absolute top-0 right-0 my-8 px-7 text-gray-600 group-hover:text-white">
                      01
                    </span>
                    <span className="relative inline-block mb-3 py-2 px-3 text-sm group-hover:text-white leading-none border border-black group-hover:border-white rounded-full transition duration-100">
                      Business
                    </span>
                    <div className="relative max-w-sm">
                      <div className="max-w-xs pr-10">
                        <h5 className="text-4xl group-hover:text-white mb-6">
                          StartUp Funding
                        </h5>
                      </div>
                      <p className="group-hover:text-white">
                        Our investment vehicles are sector-agnostic allowing us
                        to invest in outliers that are on their path to achieve
                        unprecedented growth in their respective sectors in
                        Africa.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-full lg:w-4/12 p-0">
                  <a
                    className="relative group block w-full h-full text-left px-6 sm:pl-10 sm:pr-14 pt-32 md:pt-52 xl:pt-80 pb-10 border rounded-3xl overflow-hidden"
                    href="#"
                  >
                    <img
                      className="hidden group-hover:block absolute top-0 left-0 h-full w-full object-cover"
                      src="/two.jpg"
                      alt=""
                    />
                    <span className="absolute top-0 right-0 my-8 px-7 text-gray-600 group-hover:text-white">
                      02
                    </span>
                    <span className="relative inline-block mb-3 py-2 px-3 text-sm group-hover:text-white leading-none border border-black group-hover:border-white rounded-full transition duration-100">
                      Tech
                    </span>
                    <div className="relative max-w-sm">
                      <div className="max-w-xs pr-10">
                        <h5 className="text-4xl group-hover:text-white mb-6">
                          Education
                        </h5>
                      </div>
                      <p className="group-hover:text-white">
                        Global developments have led to increased investments in
                        ICT tools to make STEM education more accessible and
                        exciting to students.
                      </p>
                    </div>
                  </a>
                </div>
                <div className="w-full lg:w-4/12 p-0">
                  <a
                    className="relative group block w-full h-full text-left px-6 sm:pl-10 sm:pr-14 pt-32 md:pt-52 xl:pt-80 pb-10 border rounded-3xl overflow-hidden"
                    href="#"
                  >
                    <img
                      className="hidden group-hover:block absolute top-0 left-0 h-full w-full object-cover"
                      src="/1.jpg"
                      alt=""
                    />
                    <span className="absolute top-0 right-0 my-8 px-7 text-gray-600 group-hover:text-white">
                      03
                    </span>
                    <span className="relative inline-block mb-3 py-2 px-3 text-sm group-hover:text-white leading-none border border-black group-hover:border-white rounded-full transition duration-100">
                      People
                    </span>
                    <div className="relative max-w-sm">
                      <div className="max-w-xs pr-10">
                        <h5 className="text-4xl group-hover:text-white mb-6">
                          Innovation Support
                        </h5>
                      </div>
                      <p className="group-hover:text-white">
                        We support individuals and organisations to smartly
                        apply innovation and technology to solve commercial and
                        social problems.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInStagger>
    </section>
  );
};

export default SectionFive;
