import React, { FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaToolbox } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link, links, Section } from "../data/dummy";
import { ISidebarContext, SidebarContext } from "../components/SidebarContext";

const Sidebar: FC = () => {
  const { handleClose } = useContext(SidebarContext) as ISidebarContext;

  const activeLink =
    "flex gap-2 cursor-pointer w-full bg-light-blue/[0.06] border-l-[3px] border-light-blue px-4";

  const normalLink = "flex gap-2 cursor-pointer w-full px-4 opacity-60";
  return (
    <div
      className={`h-screen shadow-xl overflow-auto flex flex-col text-dark-blue  mt-6 gap-4 `}
    >
      <div className="flex gap-2 items-center w-full px-4 ">
        <FaToolbox className="cursor-pointer" />
        <span className="cursor-pointer">Switch Organization</span>
        <RiArrowDropDownLine size="30px" className="cursor-pointer" />
        <div
          className="cursor-pointer rounded-full p-1 hover:bg-light-gray/10 min-[900px]:hidden"
          onClick={handleClose}
        >
          <AiOutlineClose className="text-lg font-bold" />
        </div>
      </div>
      {links.map((item: Section) => (
        <div
          className="flex flex-col gap-3 items-start w-full"
          key={item.title}
        >
          <p className="uppercase cursor-pointer text-xs leading-[14px] font-[500] px-4">
            {item.title}
          </p>
          {item.links.map((link: Link) => (
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
