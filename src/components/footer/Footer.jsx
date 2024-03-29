import { Contact, Quote } from "lucide-react";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import github from "../../assets/github.webp"
import linkedin from "../../assets/linkedin.webp"
import instagram from "../../assets/instagram.webp"


function Footer() {
  return (
    <div className=" bg-primary py-8 overflow-hidden" id="contact">
      <div className=" w-full mx-auto">
        <div className="w-full grid mx-auto items-center text-center text-white">
          <Quote className="w-full mx-auto" />
          <h1 className="text-xl">Develop a passion for learning. If you do, you will never cease to
          grow.</h1>
        </div>
        <div className="my-16 text-white">
          <div className="flex items-center justify-center gap-1">
            <Contact size={36} className=""/>
            <h1 className="uppercase text-5xl ">contact</h1>
          </div>
        </div>
        <div className=" max-w-screen-lg w-full md:flex md:justify-end items-center mx-auto my-6 md:my-32 space-y-12">
          <form  action="https://formspree.io/f/xdoqedjk" className="input flex flex-col gap-2 w-full md:w-fit px-6">
            <input
              type="text"
              placeholder="Name..."
              required
              className="p-2 md:p-3 rounded-xl  shadow bg-secondary border-none outline-none text-primary"
            />
            <input
              type="email"
              placeholder="Email..."
              required
              className="p-2 md:p-3 rounded-xl  shadow bg-secondary border-none outline-none text-primary"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message..."
              autoComplete="off"
              required
              className="rounded-xl  shadow bg-secondary border-none outline-none text-primary"
            ></textarea>
            <button type="submit" className="text-white font-bold tracking-widest bg-blue-700 py-2 rounded-xl"> SEND</button>
          </form>

          <div className="contact-list md:w-3/6 space-y-4 md:space-y-8 px-6 ">
            <div className="text-white space-y-4">
              <h1 className="border-b-4 border-darkBrown text-3xl w-fit ">Get In touch</h1>
              <p className="text-balance font-thin font-monst tracking-wide">I look forward to connecting with you and am happy to discuss any inquiries or opportunities. Feel free to reach out to me through any of the following methods.</p>
            </div>
            <div className="text-white space-y-4">
              <h1 className="border-b-4 border-darkBrown text-3xl w-fit">My Address</h1>
              <p className="text-balance flex items-center gap-2"><MdOutlineLocationOn /> krishnapuram colony, Guna (M.P)</p>
              <p className="text-balance flex items-center gap-2"><FiPhoneCall/>+91 917499616</p>
              <p className="text-balance flex items-center gap-2"><IoMailUnreadOutline/>sdulawat.work@gamil.com</p>
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto flex md:justify-center md:w-full gap-4 "> 
          <a href="https://github.com/sandeshdulawat" target="_blanket" ><img src={github} alt="" className=" w-12 hover:scale-105 duration-300 hover:-translate-y-1"/></a>
          <a href="https://www.linkedin.com/in/sandeshdulawat/" target="_blanket" ><img src={linkedin} alt="" className=" w-12 hover:scale-105 duration-300 hover:-translate-y-1"/></a>
          <a href="https://www.instagram.com/sandeshdulawat/" target="_blanket" ><img src={instagram} alt="" className=" w-12 hover:scale-105 duration-300 hover:-translate-y-1"/></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
