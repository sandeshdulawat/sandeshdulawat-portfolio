import { Contact, Quote } from "lucide-react";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import github from "../../assets/github.gif"
import linkedin from "../../assets/linkedin.gif"
import twitter from "../../assets/twitter.gif"


function Footer() {
  return (
    <div className=" bg-tertiary py-8" id="contact">
      <div className="container ">
        <div className="w-full grid mx-auto items-center text-center text-primary">
          <Quote className="w-full mx-auto" />
          <h1 className="text-xl">Develop a passion for learning. If you do, you will never cease to
          grow.</h1>
        </div>
        <div className="my-16 text-primary">
          <div className="flex items-center justify-center gap-1">
            <Contact size={36} className=""/>
            <h1 className="uppercase text-5xl ">contact</h1>
          </div>
        </div>
        <div className=" grid md:flex justify-evenly items-center md:space-x-32 mx-auto my-6 md:my-32 gap-16">
          <form  action="https://formspree.io/f/xdoqedjk" className="input flex flex-col gap-2 w-96 px-6">
            <input
              type="text"
              placeholder="Name..."
              required
              className="p-2 md:p-3 rounded-xl shadow-darkBrown shadow-sm bg-transparent border-none outline-none text-primary"
            />
            <input
              type="email"
              placeholder="Email..."
              required
              className="p-2 md:p-3 rounded-xl shadow-darkBrown shadow-sm bg-transparent border-none outline-none text-primary"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message..."
              autoComplete="off"
              required
              className="rounded-xl shadow-darkBrown shadow-sm bg-transparent border-none outline-none text-primary"
            ></textarea>
            <button type="submit" className="text-primary bg-darkBrown py-2 rounded-xl tracking-widest"> SEND</button>
          </form>

          <div className="contact-list md:w-3/6 md:space-y-8 px-6">
            <div className="text-primary space-y-4">
              <h1 className="border-b-4 border-darkBrown text-3xl">Get In touch</h1>
              <p className="text-balance font-thin font-monst tracking-wide">I look forward to connecting with you and am happy to discuss any inquiries or opportunities. Feel free to reach out to me through any of the following methods.</p>
            </div>
            <div className="text-primary space-y-4">
              <h1 className="border-b-4 border-darkBrown text-3xl">My Address</h1>
              <p className="text-balance flex items-center gap-2"><MdOutlineLocationOn /> krishnapuram colony, Guna (M.P)</p>
              <p className="text-balance flex items-center gap-2"><FiPhoneCall/>+91 917499616</p>
              <p className="text-balance flex items-center gap-2"><IoMailUnreadOutline/>sdulawat.work@gamil.com</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <a href=""><img src={github} alt="" className="rounded-full shadow-md shadow-darkBrown border-8 border-primary"/></a>
          <a href=""><img src={linkedin} alt="" className="rounded-lg shadow-md shadow-darkBrown border-8 border-primary"/></a>
          <a href=""><img src={twitter} alt="" className="rounded-full shadow-md shadow-darkBrown border-8 border-primary"/></a>
        
        
        
        </div>
      </div>
    </div>
  );
}

export default Footer;
