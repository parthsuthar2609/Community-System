"use client";

import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">
        {/* Column 1: Logo & About */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-extrabold tracking-wide text-white">
            My Website
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Crafting innovative solutions for a digital world. We are dedicated to delivering
            excellence and creating impactful online experiences.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 border-b-2 border-pink-500 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 border-b-2 border-cyan-500 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <LocationOnIcon className="text-cyan-400" />
              <span>1234 Web Street, Suite 567, City, State 89012</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="text-cyan-400" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center gap-3">
              <EmailIcon className="text-cyan-400" />
              <span>info@mywebsite.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 border-b-2 border-purple-500 pb-2">
            Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Stay up to date with our latest news and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:flex-1 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright and Attributions */}
      <div className="text-center mt-12 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p className="mt-2">
          Made with <span className="text-red-500">♥</span> by YourName
        </p>
      </div>
    </footer>
  );
};

export default Footer;