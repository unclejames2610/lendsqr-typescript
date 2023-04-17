import React, { FC } from "react";
import logo from "../assets/lendsqr-logo.svg";
import pfp from "../assets/pfp.png";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const Header: FC = () => {
  return (
    <div className="flex mt-4 w-full mx-auto justify-between flex-1 gap-4 sm:gap-0">
      {/* image logo */}
      <div className="ml-4 md:ml-12 flex items-center">
        <img src={logo} alt="logo" />
      </div>
      {/* search bar */}
      <div className="sm:flex items-center hidden">
        <input
          type="text"
          placeholder="Search for anything"
          className="px-4 py-3 border border-light-gray/[0.15] text-sm rounded-l-lg border-r-0 lg:w-[500px]"
        />
        <span className="bg-light-blue border border-light-blue text-white px-4 py-3 border-l-0 rounded-r-lg">
          <AiOutlineSearch className="text-lg" />
        </span>
      </div>
      {/* others */}
      <div className="flex items-center gap-2 sm:gap-5 mr-4 md:mr-12">
        <h2 className="text-dark-blue underline hidden sm:block ">Docs</h2>
        <div>
          <IoMdNotificationsOutline size="25px" className="text-dark-blue" />
        </div>
        <div className="flex items-center gap-2">
          <img
            src={pfp}
            alt="profile picture"
            className="rounded-full object-cover hidden sm:block"
          />
          <p className="text-dark-blue">Adedeji</p>
          <MdArrowDropDown size="20px" className="text-dark-blue" />
        </div>
      </div>
    </div>
  );
};

export default Header;
