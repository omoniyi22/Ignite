import React from "react";
import Container from "./Container";

function BlogHeader() {
  return (
    <div>
      <Container>
        <section className="relative rounded-3xl py-10 -mt-14 mb-10 bg-black overflow-hidden">
          <img
            className="absolute  w-full h-full object-contain"
            src="https://images.unsplash.com/photo-1498805983167-a523078d762c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmRzJTIwY29ubmVjdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="relative container mx-auto px-4">
            <div className="lg:max-w-3xl mx-auto text-center">
              <h1 className="font-bold text-5xl  text-white tracking-tighter mb-5">
                <span>Help Fund it Here</span>
              </h1>
              <a
                className="group inline-flex mb-3 sm:mb-0 sm:mr-4 py-5 px-8 text-black hover:text-white leading-none items-center justify-center bg-white hover:bg-black rounded-full transition duration-150"
                href="#"
              >
                <span className="mr-2.5">Donate here</span>
                <span className="group-hover:rotate-45 transform transition duration-75">
                  <svg
                    width={10}
                    height={11}
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1.5L1 9.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8.83571V1.5H1.66429"
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
        </section>
      </Container>
    </div>
  );
}

export default BlogHeader;
