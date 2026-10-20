import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            I'm Tawseef Rahman, an incoming Vehicle Dynamics Simulation
            Integration Engineer at General Motors.
            <br />
            In 2026, I graduated from the University of Michigan, College of
            Engineering with a Bachelor of Science in Engineering in Computer
            Science. Go Blue!
            <br />
            I'm passionate about building scalable, efficient software.
            <br />
            I'm especially drawn to full-stack development, applied AI/ML,
            distributed systems, information retrieval, and data analytics.
            <br />
            What excites me is seeing technology turn into products that make a
            real difference for people.
            <br />
            Thank you for visiting my website! You can check out my GitHub and
            LinkedIn profiles.
            <br />
            Feel free to contact me via email or LinkedIn.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>

          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <span className="text-lg font-semibold">
                  Incoming Vehicle Dynamics Simulation Integration Engineer
                </span>
                <span className="font-light">
                  General Motors <br /> Warren, Michigan
                </span>
                <span className="text-sm text-gray-400">
                  October 2026 - Present
                </span>
              </li>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <span className="text-lg font-semibold">
                  Software Engineer Intern
                </span>
                <span className="font-light">
                  BorgWarner <br /> Auburn Hills, Michigan
                </span>
                <span className="text-sm text-gray-400">
                  May 2025 - August 2025
                </span>
              </li>
            </ul>

            <ul>
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
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:transform before:rounded-full before:bg-black before:content-[''] dark:before:bg-white">
                <span className="text-lg font-semibold">
                  Project Management and Research Intern
                </span>
                <span className="font-light">
                  Global Intern Collaborative <br /> Long Beach, California
                  (Remote)
                </span>
                <span className="text-sm text-gray-400">
                  June 2023 - August 2023
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-left text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
          <p>Last Updated: October 19, 2026</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
