import React from "react";
import profileimage from "../../assets/images/profile.png";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="bg-[#111827] ">
      <div className="max-w-screen-lg md:max-w-screen-xl mx-auto w-full h-full px-8 py-8 md:py-32 flex flex-col-reverse sm:flex-row sm:justify-between md:flex-row md:justify-between text-white items-center">
        <div className="space-y-2 sm:space-y-2 md:space-y-5 md:w-7/12">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
            Hi, I am <span className="text-blue-500">Sandesh.</span>{" "}
          </h1>
          <h2 className="text-white text-lg sm:text-md lg:text-lg">
            Front-end Developer
          </h2>
          <h3 className="text-gray-400 text-sm sm:text-sm lg:text-md lg:text-md md:tracking-wide leading-4">
          I specialize in crafting stunning websites for your business, bringing a wealth of experience in web design and development. With a keen eye for detail and a commitment to excellence, I ensure that your online presence not only looks impressive but also functions seamlessly to enhance your brand.
          </h3>
          <div className="flex space-x-5 text-blue-500 py-10">
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
        </div>
        <div className="flex">
          <img className="w-11/12 md:w-full mx-auto" src={profileimage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
