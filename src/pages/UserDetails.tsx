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

  const {
    userName,
    accountBalance,
    accountNumber,
    phoneNumber,
    email,
    profile: { avatar, firstName, lastName, gender, bvn, address },
  } = user;

  // const {firstName,
  //   lastName,
  //   phoneNumber,
  //   avatar,
  //   gender,
  //   bvn,
  //   address,
  //   currency} = profile;

  // const avatar = profile[0]?.avatar;
  // console.log(avatar);
  // console.log(profile);
  // console.log(user);
  console.log(avatar);

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
          <div className="border rounded border-dark-blue/[0.06] shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)] ">
            <div className="flex items-center text-dark-blue  justify-start gap-8 lg:gap-16 mt-8">
              {/* avatar */}
              <div
                className="rounded-full 
            border-none h-[100px] w-[100px]"
              >
                {/* <AiOutlineUser className="text-3xl text-dark-blue" /> */}

                <img src={avatar} className="rounded-full object-fill" />
              </div>

              {/* name */}
              <div>
                <p className="text-[22px] leading-[26px] font-[500]">
                  {userName}
                </p>
                <p className="text-light-gray text-sm leading-4 font-normal">
                  {accountNumber}
                </p>
              </div>
              {/* user tier */}
              <div className="border-x border-light-gray/20 p-8">
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
                <p className="text-[22px] leading-[26px] font-[500]">
                  N{accountBalance}
                </p>
                <p className="text-xs leading-[14px]">
                  {accountNumber}/Providus Bank
                </p>
              </div>
            </div>
            {/* Tabs */}
            <div className="flex justify-between mt-8 leading-[19px]">
              <p className="text-center px-2 border-b-2 text-light-blue border-light-blue">
                General Details
              </p>
              <p className="text-center px-2">Documents</p>
              <p className="text-center px-2">Bank Details</p>
              <p className="text-center px-2">Loans</p>
              <p className="text-center px-2">Savings</p>
              <p className="text-center px-2">App and System</p>
            </div>
          </div>
          <div>
            {/* personal info */}
            <div>
              <p>Personal Information</p>
              <div className="flex justify-normal gap-8">
                <div>
                  <p>full name</p>
                  <p>
                    {firstName} {lastName}
                  </p>
                </div>
                <div>
                  <p>phone number</p>
                  <p>{phoneNumber}</p>
                </div>
                <div>
                  <p>email address</p>
                  <p>{email}</p>
                </div>
                <div>
                  <p>bvn</p>
                  <p>{bvn}</p>
                </div>
                <div>
                  <p>gender</p>
                  <p>{gender}</p>
                </div>
                <div>
                  <p>marital status</p>
                  <p>single</p>
                </div>
                <div>
                  <p>children</p>
                  <p>none</p>
                </div>
                <div>
                  <p>type of residence</p>
                  <p>{address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
