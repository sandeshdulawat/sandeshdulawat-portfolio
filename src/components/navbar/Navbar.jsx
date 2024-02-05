import {} from "react";
import { VenetianMask } from "lucide-react";

function Navbar() {
  return (
    

<nav className="bg-[#111827] sticky top-0 w-full ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <VenetianMask size={36} className="text-blue-500"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Portfolio</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto bg-[#111827] " id="navbar-default">
      <ul className="bg-[#111827] font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
        <li>
          <a href="#" className="block py-2 px-3 bg-[#111827] text-white md:text-blue-500 md:p-0 " aria-current="page">Home</a>
        </li>
        <li>
          <a href="#about" className="block py-2 px-3  text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">About</a>
        </li>
        <li>
          <a href="#skills" className="block py-2 px-3 text-white md:hover:text-blue-700 md:p-0 ">Skills</a>
        </li>
        <li>
          <a href="#projects" className="block py-2 px-3 text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Projects</a>
        </li>
        <li>
          <a href="#footercontact" className="block py-2 px-3 text-white md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
