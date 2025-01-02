import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            I'm Tawseef Rahman, and I'm a junior at the University of Michigan,
            College of Engineering, majoring in Computer Science. <br />
            I love technology, and I am amazed at how technology can be used to
            change the world. I love building products that deliver an impact to
            the customer. <br />
            Thank you for viewing my website! You can check out my GitHub and
            LinkedIn profiles. Feel free to contact me via email or LinkedIn.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>

          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <span className="text-lg font-semibold">
                  Mobile Application Developer
                </span>
                <span className="font-light">
                  Roots <br /> Remote
                </span>
                <span className="text-sm text-gray-400">
                  September 2024 - December 2024
                </span>
              </li>

              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <span className="text-lg font-semibold">
                  Data Analyst Intern
                </span>
                <span className="font-light">
                  eTitle Agency, Inc. <br /> Troy, Michigan
                </span>
                <span className="text-sm text-gray-400">
                  May 2024 - August 2024
                </span>
              </li>
            </ul>

            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <span className="text-lg font-semibold">
                  Project Management and Research Intern
                </span>
                <span className="font-light">
                  Global Intern Collaborative <br /> Remote
                </span>
                <span className="text-sm text-gray-400">
                  June 2023 - August 2023
                </span>
              </li>

              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <span className="text-lg font-semibold">Media Assistant I</span>
                <span className="font-light">
                  University of Michigan - LSA Technology Services <br /> Ann
                  Arbor, Michigan
                </span>
                <span className="text-sm text-gray-400">
                  September 2022 - April 2024
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>

          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <a
                  href="https://github.com/tawseef-rahman/color-finder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-semibold">ColorFinder</span>
                </a>
                <span className="font-light">
                  A user can upload a photo, and the application generate a
                  color palette of HEX codes, based off the colors from the
                  image.
                </span>
                <span className="text-sm text-gray-400">React and Next.js</span>
              </li>

              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <a
                  href="https://github.com/tawseef-rahman/expense-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-semibold">ExpenseTracker</span>
                </a>
                <span className="font-light">
                  A user can track their personal expenses and see useful
                  statistics and visualizations about their expenses.
                </span>
                <span className="text-sm text-gray-400">
                  MongoDB, Express.js, React, and Node.js
                </span>
              </li>
            </ul>

            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <a
                  href="https://github.com/tawseef-rahman/chem-quest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-semibold">ChemQuest</span>
                </a>
                <span className="font-light">
                  A user can test their knowledge on a chemistry topic of their
                  choosing: 1. Periodic Table of Elements, 2. Polyatomic Ions,
                  3. Amino Acids, 4. VSEPR Theory
                </span>
                <span className="text-sm text-gray-400">C++</span>
              </li>

              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <a
                  href="https://github.com/tawseef-rahman/tr-website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-semibold">
                    Personal Website
                  </span>
                </a>
                <span className="font-light">My personal website.</span>
                <span className="text-sm text-gray-400">
                  HTML, Tailwind, React, and Vite
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-left text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p>Last Updated: January 1, 2025</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
