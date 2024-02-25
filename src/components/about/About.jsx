import React from "react";

function About() {
  return (
    <div className="bg-primary md:py-16" id="about">
      <div className=" px-5 py-10 space-y-10 md:px-0 md:max-w-5xl mx-auto md:flex md:justify-between border-b-2 border-gray-600">
        <div className="prose ">
          <h1 className=" font-bold text-white">About me</h1>
          <p className="text-gray-500">
            <span className=" text-white tracking-wider">I,m</span>{" "}
            a Web Developer from (M.P), India, equipped with a Full Stack Developer certification from{" "}
            <span><a href="https://www.codingninjas.com/" target="blank_" className="text-blue-800 underline">Coding-Ninjas.</a></span> Having successfully delivered various freelance projects, I am currently enhancing my skills through an advanced course with {" "}
            <span><a href="https://www.codingninjas.com/" target="blank_" className="text-blue-800 underline">Coding-Ninjas</a></span>.
          </p>
          <p className="text-gray-500">
            I am eager to kickstart my career and am actively seeking both {" "}
            <span className="text-gray-400">job opportunities and internships </span>{" "}
            in Web Development. Your consideration for a position at your esteemed company would be greatly appreciated.
          </p>
        </div>
        <div className="space-y-5">
          <div>
            <a href="https://www.linkedin.com/in/sandeshdulawat/" target="blank_">
              <h1 className="text-blue-500">LinkedIn_</h1>
            </a>
            <p className="text-gray-500">@sandesh-dulawat</p>
          </div>
          <div>
            <a href="https://www.instagram.com/sandeshdulawat/" target="blank_">
              <h1 className="text-blue-500">Instagram_</h1>
            </a>
            <p className="text-gray-500">@Sandeshdulawat</p>
          </div>
          <div>
            <a href="">
              <h1 className="text-blue-500">Mail_</h1>
              <p className="text-gray-500">sdulawat.work@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
