import React from "react";
import profileimage from "../../assets/images/profileIMG.webp";

function HeroSection() {
  const skillData = [
    {
      heading: "Frontend",
      titles: [
        "HTML",
        "CSS",
        "Javascript",
        "React Js",
        "Tailwind",
        "Typescript",
      ],
    },
    {
      heading: "Backend",
      titles: ["Node Js", "Express Js", "BUN Js", "Elysia"],
    },
    {
      heading: "Database",
      titles: ["Redis", "MySql", "PostgreSQL", "MongoDB"],
    },
    {
      heading: "Devops",
      titles: ["GIT", "Docker", "Terraform", "AWS"],
    },
  ];

  const getColorClass = (index) => {
    switch (index) {
      case 2:
        return "border-[0.5px] border-green-500";
      case 4:
        return "border-[0.5px] border-yellow-500";
      case 3:
        return "border-[0.5px] border-blue-500";
      default:
        return "border-[0.5px] border-white";
    }
  };

  return (
    <div className="bg-primary md:h-[90vh]">
      <div className="h-96 md:h-auto flex items-start object-center">
        <div
          className="h-44 w-full mx-auto backdrop-blur-lg"
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/decorum-furniture.appspot.com/o/portfolio%2Fcover1.webp?alt=media&token=248eb5ea-23d9-479e-8bd5-a90783b17bcb)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" md:w-full md:flex md:justify-start mx-auto items-center max-w-xl py-12 gap-12">
            <img
              src={profileimage}
              alt=""
              className=" w-60 h-60 mx-auto object-cover rounded-full border-4"
              loading="lazy"
            />
            <div>
              <h1 className="text-white text-center text-3xl sm:text-xl md:text-3xl font-monst mt-2 md:mt-0">
                Sandesh Dulawat
              </h1>
              <p className="text-gray-400 font-pop text-center md:text-left md:ml-2">
                Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* skill card */}
      <div className="h-full md:h-full w-full flex flex-col max-w-screen-lg justify-center mx-auto container py-6 ">
        <div>
          <h1 className="text-white text-lg py-4">What I know</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillData.map((card, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col gap-4 bg-secondary p-4 rounded-md shadow-lg"
            >
              <div className="text-white font-medium text-lg tracking-wider">
                {card.heading}
              </div>
              <div className="flex flex-wrap gap-2">
                {card.titles.map((title, i) => (
                  <div
                    className={`rounded-md bg-primary text-xs text-gray-400 p-2 ${getColorClass(
                      i
                    )}`}
                    key={i}
                  >
                    {title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="icon-bar hidden sm:block md:block">
        <a href="https://github.com/sandeshdulawat" class="facebook" target="_blank">
          Github <i class=" fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sandeshdulawat" class="linkedin" target="_blank">
          LinkedIn <i class=" fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/sandeshdulawat"
          class="instagram"
          target="_blank"
        >
          Instagram <i class="fab fa-instagram"></i>
        </a>
        
        <a
          href="https://youtube.com/@sandeshdulawat"
          class="youtube"
          target="_blank"
        >
          Youtube <i class=" fab fa-youtube-square"></i>
        </a>
      </div>

      <div class="mobile-icon-bar block sm:hidden md:hidden">
        <a href="https://github.com/sandeshdulawat" class="facebook" target="_blank">
          Github <i class=" fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sandeshdulawat" class="linkedin" target="_blank">
          LinkedIn <i class=" fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/sandeshdulawat"
          class="instagram"
          target="_blank"
        >
          Instagram <i class="fab fa-instagram"></i>
        </a>
        
        <a
          href="https://youtube.com/@sandeshdulawat"
          class="youtube"
          target="_blank"
        >
          Youtube <i class=" fab fa-youtube-square"></i>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
