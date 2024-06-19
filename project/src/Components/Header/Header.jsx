import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/NetflixLogo.png"
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
       import { LuMenuSquare } from "react-icons/lu";
   
const Header = () => {
  const [visible, setVisible] = useState(false)

   const [show, handleShow] = useState(false);
   const transitionNavBar = () => {
     if (window.scrollY > 100) {
       handleShow(true);
     } else {
       handleShow(false);
     }
   };

   useEffect(() => {
     window.addEventListener("scroll", transitionNavBar);
     return () => window.removeEventListener("scroll", transitionNavBar);
   }, []);
  
  const toggle = () => (
    setVisible(!visible)
  )
  return (
    <>
      <div
        className={` top-0 w-full fixed  text-white text-xl flex justify-between text-center py-2 px-10 ${
          show && "bg-black"
        }`}
      >
        <div className="flex max-lg:inline-block  max-lg:justify-start text-left gap-4 max-lg:pt">
          <img src={logo} alt="Logo" className="h-10 " />
          {visible? (
            <div>
              <button>
                <LuMenuSquare
                  size={25}
                  onClick={toggle}
                  className="hidden max-lg:block mt-4"
                />
                <div>
                  <ul className="flex gap-6 max-lg:inline-block mt-2 text-left">
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>Mylist</li>
                    <li>Browse by languages</li>
                  </ul>
                </div>
              </button>
            </div>
          ) : (
            <div className="flex max-lg:inline-block">
              <button>
                <LuMenuSquare
                  size={25}
                  onClick={toggle}
                  className="hidden max-lg:block mt-4"
                />
                <div className="block max-lg:hidden">
                  <ul className=" flex gap-6 max-lg:inline-block text-left mt-2">
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>Mylist</li>
                    <li>Browse by languages</li>
                  </ul>
                </div>
              </button>
            </div>
          )}
        </div>

        <ul className="flex justify-center gap-10 text-center  ">
          <li>
            <IoSearchSharp size={25} />
          </li>
          <li>
            <IoMdNotifications size={25} />
          </li>
          <li>
            <MdAccountBox size={25} />
          </li>
          <li>
            <IoMdArrowDropdown size={25} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header