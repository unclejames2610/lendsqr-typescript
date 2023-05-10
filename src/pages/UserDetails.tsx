import React, { FC, useContext } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ISidebarContext, SidebarContext } from "../components/SidebarContext";
import { IUserContext, UserContext } from "../components/UserContext";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { AiOutlineUser, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../components/interface";
import UserDetailsHeader from "../components/UserDetailsHeader";

const UserDetails: FC = () => {
  const { isOpen, setIsOpen, screenSize, setScreenSize } = useContext(
    SidebarContext
  ) as ISidebarContext;

  const { users, setUsers } = useContext(UserContext) as IUserContext;

  const { id } = useParams();

  const user = users.find((item) => {
    return item.id === id;
  });

  if (!user) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  return (
    <div className="">
      <Header />

      <div className="flex">
        {isOpen ? (
          <div className="w-72">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0">
            <Sidebar />
          </div>
        )}

        {/* content */}
        <div className="py-6 px-4 md:px-8 mx-auto mt-6 w-screen">
          <UserDetailsHeader />
          <div className="flex items-center text-dark-blue  justify-around">
            {/* avatar */}
            <div className="rounded-full border-none bg-dark-blue/[0.16] p-6 mt-8">
              {/* <AiOutlineUser className="text-3xl text-dark-blue" /> */}
            </div>
            {/* name */}
            <div>
              <p className="text-[22px] leading-[26px] font-[500]">Name</p>
              <p className="text-light-gray text-sm leading-4 font-normal">
                account number
              </p>
            </div>
            {/* user tier */}
            <div>
              <p className="text-light-gray text-sm leading-4 font-normal">
                User's Tier
              </p>
              <p className="flex text-custom-gold">
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </p>
            </div>
            {/* balance */}
            <div>
              <p className="text-[22px] leading-[26px] font-[500]">N</p>
              <p className="text-xs leading-[14px]">accnumber/Providus Bank</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
