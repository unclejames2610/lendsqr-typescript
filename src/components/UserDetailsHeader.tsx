import React, { FC } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const UserDetailsHeader: FC = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Link to={"/users"}>
          <HiOutlineArrowNarrowLeft className="text-light-gray lg:text-2xl text-base" />
        </Link>

        <span className="text-sm md:text-base md:leading-[19px] text-light-gray">
          Back to Users
        </span>
      </div>
      <div className="flex justify-between gap-1 mt-8 items-center">
        <div className="font-[500] text-[17px] md:text-2xl md:leading-7 text-dark-blue">
          User Details
        </div>
        <div className="flex gap-4 flex-col md:flex-row">
          <button className="border rounded-lg py-2 px-1 md:px-4 uppercase leading-4 md:text-sm text-xs text-center tracking-widest text-custom-red border-custom-red cursor-pointer">
            blacklist user
          </button>
          <button className="border rounded-lg py-2 px-1 md:px-4 uppercase leading-4 md:text-sm text-xs text-center tracking-widest text-light-blue border-light-blue cursor-pointer">
            activate user
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsHeader;
