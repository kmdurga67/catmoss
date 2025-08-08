import React from "react";
import { Link } from "react-router-dom";
import { contactInfo } from "../constants/constant";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Catalysis Research Lab</h3>
            <p className="text-gray-400">Advancing the science of catalytic processes for a sustainable future.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/research-topics" className="text-gray-400 hover:text-white transition">Research</Link></li>
              <li><Link to="/publications" className="text-gray-400 hover:text-white transition">Publications</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400">
              <p>Address: {contactInfo.address}</p>
               <p>{contactInfo.address1}</p>
                <p>{contactInfo.address2}</p>
              <p className="mt-2">Email: {contactInfo.email}</p>
              <p>Phone: {contactInfo.phone}</p>
            </address>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://ncl.irins.org/profile/224950" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="https://scholar.google.com/citations?user=0rs51lcAAAAJ&hl=en" className="text-gray-400 hover:text-white transition" aria-label="Google Scholar">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Dr. Vinod C Prabhakaran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;