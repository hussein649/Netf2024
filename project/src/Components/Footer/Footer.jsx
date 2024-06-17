import React from 'react'
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#111111] text-white">
        <ul className="flex pl-80 max-lg:pl-24 gap-6 pt-4 text-center">
          <li>
            <FaFacebook size={25} />
          </li>
          <li>
            <SiInstagram size={25} />
          </li>
          <li>
            <RiYoutubeLine size={25} />
          </li>
          <li>
            <FaXTwitter size={25} />
          </li>
        </ul>
        <div className="flex justify-center gap-32 py-6 max-lg:gap-8 whitespace-nowrap">
          <div>
            <ul>
              <li>Audio</li>
              <li>Description</li>
              <li>Investor</li>
              <li>Relations</li>
              <li>Legal Notice</li>
              <li className="border border-white border-spacing-0 mr-16">
                Service Code
              </li>
              <li>© 1997-2024 Netflix, Inc.</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie</li>
              <li>Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate</li>
              <li>Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media</li>
              <li>Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer