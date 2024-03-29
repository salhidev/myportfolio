import React from "react";
import { TerminalIcon, UsersIcon, ThumbUpIcon } from "@heroicons/react/solid";
import { testimonials, feedBacks } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center"  data-aos="fade-in">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
           Testimonials
        </h1>
        <div className="flex flex-wrap m-4"  data-aos="fade-up">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded transform transition duration-500 hover:scale-105">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.role}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ThumbUpIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
           Client Testimonials
        </h1>
        <div className="flex flex-wrap m-4"  data-aos="fade-up">
          {feedBacks.map((feedBack) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded transform transition duration-500 hover:scale-105">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{feedBack.quote}</p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col">
                    <span className="title-font font-medium text-white">
                      {feedBack.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {feedBack.role}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {feedBack.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}