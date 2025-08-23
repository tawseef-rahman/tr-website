import React from "react";
import image from "/public/tawseefr_2024-09.jpg";
import {
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiMoon,
  BiSun,
} from "react-icons/bi";

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="relative min-h-screen flex-1 p-10 transition-all duration-500 dark:border-gray-700 dark:bg-black dark:text-white sm:border-r">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={image} alt="" className="w-32 rectangle-full" />

          <div className="space-y-1 text-center">
            <h1 className="text-4xl font-light">
              Tawseef <span className="font-semibold">Rahman</span>
            </h1>
            <h3 className="text-xl font-light">Developer and Thinker</h3>
          </div>

          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <a
                href="mailto:tawseefr@umich.edu"
                className="hover:underline text-blue-500"
              >
                tawseefr@umich.edu
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">LINKS</h1>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <a
                href="https://github.com/tawseef-rahman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                @tawseef-rahman
              </a>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <a
                href="https://linkedin.com/in/tawseef-rahman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-500"
              >
                @tawseef-rahman
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>

          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
              <span className="font-semibold md:text-lg">
                Bachelor of Science in Engineering <br /> Computer Science
              </span>
              <span className="font-light">
                University of Michigan <br /> Ann Arbor, Michigan
              </span>
              <span className="font-light">
                Relevant Coursework: <br /> - Data Structures and Algorithms
                <br /> - Introduction to Computer Architecture
                <br /> - Web Systems
                <br /> - Practical Data Science
                <br /> - Computer Science Theory
                <br /> - Software Engineering
                <br /> - Computer Networks
                <br /> - Computational Linear Algebra
              </span>
              <span className="text-sm text-gray-400">
                Expected Graduation: May 2026
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
