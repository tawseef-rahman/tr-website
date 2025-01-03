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
              <span className="font-semibold md:text-lg">Computer Science</span>
              <span className="font-light">
                University of Michigan <br /> Ann Arbor, Michigan
              </span>
              <span className="font-light">
                Relevant Coursework: <br /> - Data Structures and Algorithms
                <br /> - Intro to Computer Architecture
                <br /> - Web Systems
                <br /> - Practical Data Science
              </span>
              <span className="text-sm text-gray-400">
                Expected Graduation: May 2026
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>

          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                HTML
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                CSS
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                JavaScript
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                TypeScript
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                React
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Swift
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Python
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                MATLAB
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                C
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                C++
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Java
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                R
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Node.js
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Next.js
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                MongoDB
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                SQL
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Express.js
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Tailwind
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Vite
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Pandas
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Numpy
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                scikit-learn
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Git
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Docker
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Postman
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
