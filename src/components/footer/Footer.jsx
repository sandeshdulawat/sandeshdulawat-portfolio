import React from "react";
import {
    ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#111827] text-center text-white space-y-5" id="footercontact">
      <div className="flex items-center justify-center space-x-1 py-5">
        <h1 className="text-2xl">Contact</h1>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row justify-center sm:space-x-8 text-center text-gray-300 space-y-1 items-center ">
        <div className="flex text-center justify-center items-center"><a href="/">Email Address </a><ArrowUpRight  size={16} className="text-blue-500" /></div>
        <div className="flex text-center justify-center items-center"><a href="/">Whatsapp</a><ArrowUpRight size={16} className="text-blue-500" /></div>
        <div className="flex text-center justify-center items-center"><a href="/">Download</a><ArrowUpRight size={16} className="text-blue-500" /></div>
        <div className="flex text-center justify-center items-center"><a href="/">My Aims</a><ArrowUpRight size={16} className="text-blue-500" /></div>
      </div>
      <div className="flex flex-col py-5 sm:flex-row md:flex-row space-y-3 align-center text-center justify-between sm:px-10 md:px-10 items-center">
        <div>English (INDIA)</div>
        <div className="flex text-blue-500 space-x-5 justify-center sm:pl-24 lg:pl-16">
          <Link to="https://github.com/sandeshdulawat">
            <Github />
          </Link>
          <Link to="https://www.facebook.com/sandesh.dulawat/">
            <Facebook />
          </Link>
          <Link to="https://www.instagram.com/sandeshdulawat/">
            <Instagram />
          </Link>
          <Link to="https://www.linkedin.com/in/sandeshdulawat/">
            <Linkedin />
          </Link>
        </div>
        <div>
            <p className="text-sm text-gray-400">©2023 All Right Reserved By Sandesh Dulawat.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
