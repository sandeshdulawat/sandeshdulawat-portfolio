import React from "react";
import Modal from "../modal/Modal";

function Navbar() {
  return (
    <nav className="bg-[#111827] sticky top-0 md:py-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Portfolio
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#111827] items-center">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded md:p-0 hover:text-blue-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-white rounded md:border-0 md:p-0 hover:text-blue-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 text-white rounded md:border-0 md:p-0 hover:text-blue-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#footercontact"
                className="block py-2 px-3 text-white rounded md:border-0 md:p-0 hover:text-blue-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#secretcode"
                className="block py-2 px-3 text-white rounded md:border-0 md:p-0 hover:text-red-700"
              >
                
<Modal />
              </a>
            </li>
            {/* <li>
          <a href="#" className="block py-2 px-3 text-white rounded md:border-0 md:p-0 hover:text-blue-700">Contact</a>
        </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
