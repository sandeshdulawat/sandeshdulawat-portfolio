import React from "react";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

import firebase from 'firebase/app';
import 'firebase/storage';




function Footer() {

  const onButtonClick = async () => {
    try {
      // Replace with your Firebase configuration
      const firebaseConfig = {
        apiKey: 'AIzaSyCJU7LYDL247ZnpzJr9YtcXWfM2YWS4UdI',
        authDomain: 'https://sandeshdulawat.netlify.app/',
      };

      firebase.initializeApp(firebaseConfig);

      const storage = firebase.storage();
      const pdfRef = storage.ref('gs://decorum-furniture.appspot.com/SandeshCV.pdf'); // Replace with the actual path in your storage

      const downloadURL = await pdfRef.getDownloadURL();

      // Use the downloadURL in your application
      console.log('PDF Download URL:', downloadURL);

      // Perform any additional actions, like opening the PDF in a new window
      window.open(downloadURL, '_blank');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      className="bg-[#111827] text-center text-white space-y-5"
      id="footercontact"
    >
      <div className="flex items-center justify-center space-x-1 py-5">
        <h1 className="text-2xl">Contact</h1>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row justify-center sm:space-x-8 text-center text-gray-300 space-y-1 items-center ">
        {/* <div className="flex text-center justify-center items-center">
          <a href="/">Email Address </a>
          <ArrowUpRight size={16} className="text-blue-500" />
        </div> */}
        <div className="flex text-center justify-center items-center">
          <a href="http://wa.me/+919174799616" target="blanket">
            Whatsapp
          </a>
          <ArrowUpRight size={16} className="text-blue-500" />
        </div>
        <div className="flex text-center justify-center items-center">
        <button onClick={onButtonClick}>Download PDF</button>
          <ArrowUpRight size={16} className="text-blue-500" />
        </div>
        <div className="flex text-center justify-center items-center">
          <a href="/">My Aims</a>
          <ArrowUpRight size={16} className="text-blue-500" />
        </div>
      </div>
      <div className="flex flex-col py-5 sm:flex-row md:flex-row space-y-3 align-center text-center justify-between sm:px-10 md:px-10 items-center">
        <div>English (INDIA)</div>
        <div className="flex text-blue-500 space-x-5 justify-center sm:pl-24 lg:pl-16">
          <Link to="https://github.com/sandeshdulawat" target="blanket">
            <Github />
          </Link>
          <Link to="https://www.facebook.com/sandesh.dulawat/" target="blanket">
            <Facebook />
          </Link>
          <Link to="https://www.instagram.com/sandeshdulawat/" target="blanket">
            <Instagram />
          </Link>
          <Link
            to="https://www.linkedin.com/in/sandeshdulawat/"
            target="blanket"
          >
            <Linkedin />
          </Link>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            ©2023 All Right Reserved By Sandesh Dulawat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
