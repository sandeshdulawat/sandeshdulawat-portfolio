import {} from "react";

import "../../index.css";

function Contact() {
  return (
    <div className=" bg-[#111827]">
      <div className="container w-full mx-auto py-16 md:py16">
        <div className="contact-form px-6">
          <form action="https://formspree.io/f/xdoqedjk" method="POST" className="contact-inputs gap-6 md:gap-8">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
              className="bg-[#1f2937] text-white placeholder:text-white shadow-md shadow-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              autoComplete="off"
              required
              className="bg-[#1f2937] text-white placeholder:text-white shadow-md shadow-gray-300 rounded-lg"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message..."
              autoComplete="off"
              required
              className="bg-[#1f2937] text-white placeholder:text-white shadow-md shadow-gray-300 rounded-lg"
            ></textarea>
            <div className="text-center">
              <input
                type="submit"
                value="Send Message"
                className="inline-flex items-center px-2 py-2 md:px-4 md:py-4 text-sm font-bold tracking-widest  text-white bg-blue-700 rounded-lg hover:bg-blue-800 align-center"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
