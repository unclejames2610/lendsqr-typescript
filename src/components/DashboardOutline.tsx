import React, { FC } from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbFileText } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";

const DashboardOutline: FC = () => {
  return (
    <>
      <div className="font-medium text-2xl text-dark-blue">Users</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4  gap-4 mt-6">
        <div className="flex flex-col gap-5 p-4 border rounded border-dark-blue/[0.06] shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)]">
          <div className="text-hot-pink text-xl rounded-full bg-hot-pink/[0.1] p-2 flex items-center justify-center w-10 h-10">
            <BsPeople />
          </div>
          <div className="uppercase font-medium text-sm leading-[16px] text-light-gray">
            Users
          </div>
          <div className="font-semibold text-2xl leading-[28px] text-dark-blue">
            2,453
          </div>
        </div>
        <div className="flex flex-col gap-5 p-4 border rounded border-dark-blue/[0.06] shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)]">
          <div className="text-purple text-xl rounded-full bg-purple/[0.1] p-2 flex items-center justify-center w-10 h-10">
            <HiOutlineUserGroup />
          </div>
          <div className="uppercase font-medium text-sm leading-[16px] text-light-gray">
            Active Users
          </div>
          <div className="font-semibold text-2xl leading-[28px] text-dark-blue">
            2,453
          </div>
        </div>
        <div className="flex flex-col gap-5 p-4 border rounded border-dark-blue/[0.06] shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)]">
          <div className="text-orange text-xl rounded-full bg-orange/[0.1] p-2 flex items-center justify-center w-10 h-10">
            <TbFileText />
          </div>
          <div className="uppercase font-medium text-sm leading-[16px] text-light-gray">
            Users with loans
          </div>
          <div className="font-semibold text-2xl leading-[28px] text-dark-blue">
            12,453
          </div>
        </div>
        <div className="flex flex-col gap-5 p-4 border rounded border-dark-blue/[0.06] shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)]">
          <div className="text-custom-pink text-xl rounded-full bg-custom-pink/[0.1] p-2 flex items-center justify-center w-10 h-10">
            <FaCoins />
          </div>
          <div className="uppercase font-medium text-sm leading-[16px] text-light-gray">
            Users with savings
          </div>
          <div className="font-semibold text-2xl leading-[28px] text-dark-blue">
            102,453
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOutline;
