import React from "react";
import { Contact, Quote } from "lucide-react";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <>
      <div className=" bg-primary py-8 overflow-hidden" id="contact">
        <div className=" w-full mx-auto">
          <div className="w-full grid mx-auto items-center text-center text-white">
            <Quote className="w-full mx-auto" />
            <h1 className="text-xl">
              Develop a passion for learning. If you do, you will never cease to
              grow.
            </h1>
          </div>
          <div className="my-16 text-white">
            <div className="flex items-center justify-center gap-1">
              <Contact size={36} className="" />
              <h1 className="uppercase text-5xl ">contact</h1>
            </div>
          </div>
          <div className=" max-w-screen-lg w-full md:flex md:justify-end items-center mx-auto my-6 md:my-16 space-y-12">
            <form
              action="https://formspree.io/f/xdoqedjk"
              method="POST"
              className="input flex flex-col gap-2 w-full md:w-fit px-6"
            >
              <input
                type="text"
                placeholder="Name..."
                required
                className="p-2 md:p-3 rounded-xl  shadow bg-secondary border-none outline-none text-white"
              />
              <input
                type="email"
                placeholder="Email..."
                required
                className="p-2 md:p-3 rounded-xl  shadow bg-secondary border-none outline-none text-white"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Message..."
                autoComplete="off"
                required
                className="rounded-xl  shadow bg-secondary border-none outline-none text-white"
              ></textarea>
              <button
                type="submit"
                className="text-white font-bold tracking-widest bg-blue-700 py-2 rounded-xl"
              >
                {" "}
                SEND
              </button>
            </form>

            <div className="contact-list md:w-3/6 space-y-4 md:space-y-8 px-6 ">
              <div className="text-white space-y-4">
                <h1 className="border-b-4 border-blue-600 text-3xl w-fit ">
                  Get In touch
                </h1>
                <p className="text-balance font-thin font-monst tracking-wide">
                  I look forward to connecting with you and am happy to discuss
                  any inquiries or opportunities. Feel free to reach out to me
                  through any of the following methods.
                </p>
              </div>
              <div className="text-white space-y-4">
                <h1 className="border-b-4 border-blue-600 text-3xl w-fit">
                  My Address
                </h1>
                {/* <p className="text-balance flex items-center gap-2">
                  <MdOutlineLocationOn /> krishnapuram colony, Guna (M.P)
                </p> */}
                <p className="text-balance flex items-center gap-2">
                  <FiPhoneCall />
                  +91 9174799616
                </p>
                <p className="text-balance flex items-center gap-2">
                  <IoMailUnreadOutline />
                  sdulawat.work@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xs text-center">© portfolio @ 2023. Developed by Sandesh Dulawat</h1>
      </div>
    </>
  );
}

export default Footer;
