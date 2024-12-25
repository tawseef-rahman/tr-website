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

        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Skills</h1>

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
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                React
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Python
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                C/C++
              </span>
              <span className="rounded-xl bg-black p-3 text-center text-white dark:bg-white dark:text-black">
                Java
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-left text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p>Last Updated: December 25, 2024</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
