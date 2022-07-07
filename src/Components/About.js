
import React, { useEffect } from "react";
import picture from "../profile.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 1200,
      once: false,
    })
    AOS.refresh();
  }, []);

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center " data-aos="fade-right">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Ayoub.
                <br className="hidden lg:inline-block" /> I love to build amazing
                apps.
              </h1>
              <p className="mb-8 leading-relaxed">
              Looking to join a collaborative organization to achieve high-quality customer-focused results with cutting edge technologies in a timely manner with a strong desire for everyone to learn and grow as a team. I have over 10 years of experience in software development, and experience with running point for multiple development projects. I have been instrumental in team collaboration with project management and source control and a keen eye for developing technical documentation.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg " data-aos="fade-left">
              <img
                className="object-cover object-center rounded rounded-full ring-2 ring-white"
                alt="profilePic"
                src={picture}
              />
            </div>
          </div>
        </section>
      );
}
