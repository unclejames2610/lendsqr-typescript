import React, { FC } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const UserDetailsHeader: FC = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Link to={"/users"}>
          <HiOutlineArrowNarrowLeft className="text-light-gray text-2xl" />
        </Link>

        <span className="text-base leading-[19px] text-light-gray">
          Back to Users
        </span>
      </div>
      <div className="flex justify-between mt-8">
        <div className="font-[500] text-2xl leading-7 text-dark-blue">
          User Details
        </div>
        <div className="flex gap-4">
          <button className="border rounded-lg py-2 px-4 uppercase leading-4 text-sm text-center tracking-widest text-custom-red border-custom-red cursor-pointer">
            blacklist user
          </button>
          <button className="border rounded-lg py-2 px-4 uppercase leading-4 text-sm text-center tracking-widest text-light-blue border-light-blue cursor-pointer">
            activate user
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsHeader;
