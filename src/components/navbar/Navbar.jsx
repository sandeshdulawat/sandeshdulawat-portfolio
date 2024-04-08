import React, { useState } from "react";
import { TbCircleLetterR } from "react-icons/tb";

function Navbar() {
  const navData = [
    { title: "Home", link: "#" },
    { title: "Projects", link: "#projects" },
    // { title: "Education", link: "#education" },
    { title: "About", link: "#about" },
    { title: "Contact", link: "#contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Initialize with default active index
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsOpen(false); // Close the menu after clicking on an item
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-[#1c1b23] sticky top-0 w-full shadow-sm shadow-green-400 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <a href="/" className="flex">
          <span className="self-center text-2xl font-semibold whitespace-nowrap font-protest uppercase text-white">
            Sandesh dulawat
          </span>
          <TbCircleLetterR size={16} className="text-blue-500" />
        </a>
        {isOpen ? (
          <button
            onClick={toggleMenu} // Add onClick handler to toggle menu
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          >
            <span className="sr-only">Close main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={toggleMenu} // Add onClick handler to toggle menu
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"} // Update aria-expanded based on menu state
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
        )}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute inset-0 mt-12 md:relative md:block md:w-auto bg-[#1c1b23]`} // Update visibility based on menu state
          id="navbar-default"
        >
          <ul className="bg-[#1c1b23] font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            {navData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className={`nav-link ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleItemClick(index)}
                  aria-current={activeIndex === index ? "page" : null}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
