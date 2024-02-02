import React from "react";
import decorum from "../../assets/images/decorum.webp";
import mazeStudio from "../../assets/images/mazestudio.webp";

function Projects() {
  return (
    <div className="bg-[#111827] items-center"> 
      <div className=" py-10 md:pt-32 md:max-w-5xl items-center mx-auto border-b-2 border-gray-600" id="projects">
        <div className="px-5 md:px-0">
          <h1 className="font-bold text-white text-4xl ">Projects</h1>
        </div>
        <div className="flex flex-col items-center px-5 md:px-0">
          <a className="flex flex-col  rounded-lg shadow md:flex-row  bg-[#1f2937] my-10">
            <div className="w-12/12 h-72 overflow-hidden  rounded-lg">
              <img className="hover:animate-scrollDown" src={decorum} alt="" />
            </div>

            {/* decorum furniture project */}
            <div className="flex flex-col justify-between px-4 leading-normal bg-[#1f2937] space-y-5 rounded-lg py-5">
              <div>
                <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 text-white ">
                  Decorum Furniture 2023
                </h5>
                <h5 className="mb-2 md:text-md tracking-tight text-gray-900 text-white ">
                  E-Commerce website
                </h5>
              </div>
              <p className="mb-3 md:text-sm text-gray-400">
                Complete website for a furniture store. This website is built
                with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
                The website is responsive and has a clean & modern design.
              </p>
              <div className="space-x-3">
                <a
                  href="https://react-complete-project-1001.netlify.app/" target="blank_"
                  className="inline-flex items-center px-2 py-2 md:px-3 md:py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 align-center"
                >
                  Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/sandeshdulawat/project-1001-react" target="blank_"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Source Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 30"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>

            
          </a>
        </div>
        <div className="flex flex-col items-center px-5 md:px-0">
          <a className="flex flex-col  rounded-lg shadow md:flex-row  bg-[#1f2937] my-10">
            <div className="w-12/12 h-72 overflow-hidden  rounded-lg">
              <img className="hover:animate-scrollDown" src={mazeStudio} alt="" />
            </div>

            {/* maze studio project */}
            <div className="flex flex-col justify-between px-4 leading-normal bg-[#1f2937] space-y-5 rounded-lg py-5">
              <div>
                <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 text-white ">
                  Design Studio 2023
                </h5>
                <h5 className="mb-2 md:text-md tracking-tight text-gray-900 text-white ">
                  Architecture Design
                </h5>
              </div>
              <p className="mb-3 md:text-sm text-gray-400">
                Complete website for a Architecture firm. This website is built
                with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
                The website is responsive and has a clean & modern design.
              </p>
              <div className="space-x-3">
                {/* <a
                  href="https://www.mazestudio.in/" target="blank_"
                  className="inline-flex items-center px-2 py-2 md:px-3 md:py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 align-center"
                >
                  Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 32 32"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a> */}
                <a
                  href="https://github.com/sandeshdulawat/project-1001-react" target="blank_"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Source Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 30 30"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>

            
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
