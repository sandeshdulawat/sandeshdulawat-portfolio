import {} from "react";
import decorum from "../../assets/images/decorum.webp";
import mazeStudio from "../../assets/images/mazestudio.webp";
import archazine from "../../assets/images/archazine-fullpage.webp";
import lodha from "../../assets/images/lodhabellevues-fullpage.webp";
import isanction from "../../assets/images/isanction.webp";

function Projects() {
  return (
    <div className="bg-primary items-center">
      <div
        className=" py-10 md:pt-32 md:max-w-screen-lg items-center mx-auto border-b-2 border-gray-600"
        id="projects"
      >
        <div className="px-5 md:px-0">
          <h1 className="font-bold text-white text-4xl ">Projects</h1>
        </div>

        {/* isanction project  */}
        <div className="flex flex-col items-center px-5 md:px-0 relative">
          <a className="flex flex-col rounded-lg shadow md:flex-row  bg-secondary my-10">
            <div className="w-full h-72 overflow-hidden rounded-lg">
              <img
                className="hover:animate-scrollDown bg-cover"
                src={isanction}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between px-4 leading-normal bg-secondary space-y-5 rounded-lg py-5">
              <div>
                <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight  text-white ">
                  Isanction Financial services Private Limited
                </h5>
                <h5 className="mb-2 md:text-md tracking-tight  text-white ">
                  Financial services
                </h5>
              </div>
              <p className="mb-3 md:text-sm text-gray-400">
                Complete website for a Financial services. This website is built
                with React.js, Node.js, Express.js, MongoDB, Tailwind CSS and
                firestore for database. The website is responsive and has a
                clean & modern design.
              </p>
              <div className="space-x-3">
                <a
                  href="https://chimerical-cuchufli-30d726.netlify.app/"
                  target="blank_"
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
                  href="https://github.com/sandeshdulawat/"
                  target="blank_"
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
          <div className="absolute top-0 right-0">
            <span class="flex text-lg md:flex items-center text-red-700 font-bold uppercase">
              <span class="w-3 h-3 mr-3 relative live_icon"></span> Live
            </span>
          </div>
        </div>

        {/* lodhabellevue project */}
        <div className="flex flex-col items-center px-5 md:px-0 relative">
          <a className="flex flex-col rounded-lg shadow md:flex-row  bg-secondary  my-10">
            <div className="w-full h-72 overflow-hidden rounded-lg">
              <img
                className="hover:animate-scrollDown bg-cover"
                src={lodha}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between px-4 leading-normal bg-secondary  space-y-5 rounded-lg py-5">
              <div>
                <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight  text-white ">
                  Lodha Bellevue
                </h5>
                <h5 className="mb-2 md:text-md tracking-tight  text-white ">
                  Real-state Website
                </h5>
              </div>
              <p className="mb-3 md:text-sm text-gray-400">
                Complete website for a Real-state Website. This website is built
                with React.js, Node.js, Express.js, MongoDB, Tailwind CSS and
                firestore for database. The website is responsive and has a
                clean & modern design.
              </p>
              <div className="space-x-3">
                <a
                  href="https://lodhabellevues.com/#"
                  target="blank_"
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
                  href="https://github.com/sandeshdulawat/project-1001-react"
                  target="blank_"
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
          <div className="absolute top-0 right-0">
            <span class="flex text-lg md:flex items-center text-red-700 font-bold uppercase">
              <span class="w-3 h-3 mr-3 relative live_icon"></span> Live
            </span>
          </div>
        </div>

        {/* archazine project */}
        <div className="flex flex-col items-center px-5 md:px-0 relative">
          <a className="flex flex-col rounded-lg shadow md:flex-row  bg-secondary my-10">
            <div className="w-full h-72 overflow-hidden rounded-lg">
              <img
                className="hover:animate-scrollDown bg-cover"
                src={archazine}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between px-4 leading-normal bg-secondary space-y-5 rounded-lg py-5">
              <div>
                <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight  text-white ">
                  Archazine
                </h5>
                <h5 className="mb-2 md:text-md tracking-tight  text-white ">
                  Educational Website
                </h5>
              </div>
              <p className="mb-3 md:text-sm text-gray-400">
                Complete website for a Educational. This website is built with
                React.js, Node.js, Express.js, MongoDB, Tailwind CSS and
                firestore for database. The website is responsive and has a
                clean & modern design.
              </p>
              <div className="space-x-3">
                <a
                  href="https://archazine-project.netlify.app/"
                  target="blank_"
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
                  href="https://github.com/sandeshdulawat/project-1001-react"
                  target="blank_"
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
          {/* <div className="absolute top-0 right-0">
            <span class="flex text-lg md:flex items-center text-red-700 font-bold uppercase">
              <span class="w-3 h-3 mr-3 relative live_icon"></span> Live
            </span>
          </div> */}
        </div>

        {/* maze studio project */}
        <div className="flex flex-col items-center px-5 md:px-0 relative">
          <a className="flex flex-col  rounded-lg shadow md:flex-row  bg-secondary my-10">
            <div className="w-full h-72 overflow-hidden  rounded-lg">
              <img
                className="hover:animate-scrollDown"
                src={mazeStudio}
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between px-4 leading-normal bg-secondary space-y-5 rounded-lg py-5">
              <div>
                <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white ">
                  Design Studio 2023
                </h5>
                <h5 className="mb-2 md:text-md tracking-tight text-white ">
                  Architecture Design
                </h5>
              </div>
              <p className="mb-3 md:text-sm text-gray-400">
                Complete website for a Architecture firm. This website is built
                with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
                The website is responsive and has a clean & modern design.
              </p>
              <div className="space-x-3">
                <a
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
                </a>
                <a
                  href="https://github.com/sandeshdulawat/project-1001-react"
                  target="blank_"
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
          <div className="absolute top-0 right-0">
            <span class="flex text-lg md:flex items-center text-red-700 font-bold uppercase">
              <span class="w-3 h-3 mr-3 relative live_icon"></span> Live
            </span>
          </div>
        </div>

        {/* decorum furniture project */}
        <div className="flex flex-col items-center px-5 md:px-0">
          <a className="flex flex-col  rounded-lg shadow md:flex-row  bg-secondary  my-10">
            <div className="w-full h-72 overflow-hidden  rounded-lg">
              <img className="hover:animate-scrollDown" src={decorum} alt="" />
            </div>
            <div className="flex flex-col justify-between px-4 leading-normal bg-secondary  space-y-5 rounded-lg py-5">
              <div>
                <h5 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight  text-white ">
                  Decorum Furniture 2023
                </h5>
                <h5 className="mb-2 md:text-md tracking-tight  text-white ">
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
                  href="https://react-complete-project-1001.netlify.app/"
                  target="blank_"
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
                  href="https://github.com/sandeshdulawat/project-1001-react"
                  target="blank_"
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
