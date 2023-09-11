const Testi: React.FC = () => {
  return (
    <section>
      <div className="py-18 md:py-20 px-5 pb-5 bg-gray-100 rounded-5xl">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block mb-10 py-2 px-3 text-sm leading-none border border-black group-hover:bg-black group-hover:text-white rounded-full transition duration-200">
              Testimonials
            </span>
            <p className="text-xl font-thin md:text-2xl  mb-10">
              <span className="leading-snug">
                “I am truly amazed by the impact that the tech NGO has made in
                the community. Their dedication to using technology for social
                good is inspiring. As a client, I have witnessed firsthand how
                their innovative solutions have transformed the lives of
                individuals and communities.
              </span>
              <span className="italic leading-snug text-coolGray-600">
                The tech NGOs commitment to providing quality education,
                bridging the digital divide, and empowering marginalized groups
                through technology is commendable.
              </span>
              <span className="leading-snug">
                Their passion, expertise, and collaborative approach have
                created a positive and inclusive environment for learning and
                growth. I highly recommend the tech NGO to anyone looking to
                make a meaningful difference through technology.
              </span>
            </p>
            <div className="flex mb-16 items-center text-left justify-center">
              <img
                className="h-15 w-15 mr-4 rounded-full"
                src="asitrastudio-assets/testimonials/avatar-men.png"
                alt=""
              />
              <div>
                <span className="block">Wade Warren</span>
                <span className="block text-sm text-coolGray-600">
                  CEO, Tince Industry
                </span>
              </div>
            </div>
            <div>
              <a
                className="inline-flex h-16 sm:h-18 w-16 sm:w-18 mr-6 sm:mr-9 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200"
                href="#"
              >
                <svg
                  width={27}
                  height={27}
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7051 7.12817L4.15732 13.6759L10.7051 20.2237"
                    stroke="currentColor"
                    strokeWidth="1.61806"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.4941 13.6759H4.33949"
                    stroke="currentColor"
                    strokeWidth="1.61806"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className="inline-flex h-16 sm:h-18 w-16 sm:w-18 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200"
                href="#"
              >
                <svg
                  width={27}
                  height={27}
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2949 7.12817L22.8427 13.6759L16.2949 20.2237"
                    stroke="currentColor"
                    strokeWidth="1.61806"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.50586 13.6759H22.6605"
                    stroke="currentColor"
                    strokeWidth="1.61806"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testi;
