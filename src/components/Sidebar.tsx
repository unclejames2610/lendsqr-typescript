import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaToolbox } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";

const Sidebar: FC = () => {
  return (
    <div className="h-screen w-[30%] max-w-[300px] shadow-xl overflow-auto flex flex-col text-dark-blue px-4 mt-6">
      <div className="flex gap-2 items-center">
        <FaToolbox />
        <span>Switch Organization</span>
        <RiArrowDropDownLine size="30px" />
      </div>
      <div className="flex gap-2 items-center">
        <FaHome />
        <span>Dashboard</span>
      </div>
      <div>CUSTOMERS</div>
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
      </div>
    </div>
  );
};

export default Sidebar;
