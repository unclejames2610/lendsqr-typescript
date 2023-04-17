import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaToolbox } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { links } from "../data/dummy";

const Sidebar: FC = () => {
  const activeLink =
    "flex gap-2 cursor-pointer w-full bg-light-blue/[0.06] border-l-[3px] border-light-blue px-4";

  const normalLink = "flex gap-2 cursor-pointer w-full px-4 opacity-60";
  return (
    <div className="h-screen w-[30%] max-w-[300px] shadow-xl overflow-auto flex flex-col text-dark-blue  mt-6 gap-4">
      <div className="flex gap-2 items-center cursor-pointer w-full px-4 ">
        <FaToolbox />
        <span>Switch Organization</span>
        <RiArrowDropDownLine size="30px" />
      </div>
      {links.map((item) => (
        <div
          className="flex flex-col gap-3 items-start w-full"
          key={item.title}
        >
          <p className="uppercase cursor-pointer text-xs leading-[14px] font-[500] px-4">
            {item.title}
          </p>
          {item.links.map((link) => (
            <NavLink
              to={`/${link.name}`}
              key={link.name}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              {<link.icon />}
              <span className="capitalize">{link.name}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

{
  /* <div>CUSTOMERS</div>
      <div className="flex gap-2 items-center">
        <BsPeopleFill />
        <span>Users</span>
      </div>
      <div className="flex gap-2 items-center">
        <BsPeopleFill />
        <span>Guarantors</span>
      </div>
      <div className="flex gap-2 items-center">
        <BsPeopleFill />
        <span>Loans</span>
      </div>
      <div className="flex gap-2 items-center">
        <BsPeopleFill />
        <span>Decision Models</span>
      </div>
      <div className="flex gap-2 items-center">
        <BsPeopleFill />
        <span>Savings</span>
      </div>
      <div className="flex gap-2 items-center">
        <BsPeopleFill />
        <span>Loan Requests</span>
      </div> */
}
