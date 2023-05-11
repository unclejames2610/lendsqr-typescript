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
    education: {
      level,
      employmentStatus,
      sector,
      duration,
      officeEmail,
      monthlyIncome,
      loanRepayment,
    },
    socials: { facebook, instagram, twitter },
  } = user;

  const guarantorName = user.guarantor.firstName;
  const guarantorlastName = user.guarantor.lastName;
  const guarantorNumber = user.guarantor.phoneNumber;
  const guarantorGender = user.guarantor.gender;
  const guarantorAddress = user.guarantor.address;

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
            <div className="mt-8 border-b border-dark-blue/10 pb-6">
              <p className="font-[500] leading-[19px] text-dark-blue">
                Personal Information
              </p>
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    full name
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {firstName} {lastName}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    phone number
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {phoneNumber}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    email address
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {email}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    bvn
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {bvn}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    gender
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {gender}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    marital status
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    Single
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    children
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    None
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    type of residence
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {address}
                  </p>
                </div>
              </div>
            </div>
            {/* education and employment */}
            <div className="mt-8 border-b border-dark-blue/10 pb-6">
              <p className="font-[500] leading-[19px] text-dark-blue">
                Education and Employment
              </p>
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    level of education
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {level}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    employment status
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {employmentStatus}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    sector of employment
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {sector}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    duration of employment
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {duration}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    office email
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {officeEmail}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    monthly income
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    N{monthlyIncome[0]} - N{monthlyIncome[1]}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    loan repayment
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    N{loanRepayment}
                  </p>
                </div>
              </div>
            </div>
            {/* socials */}
            <div className="mt-8 border-b border-dark-blue/10 pb-6">
              <p className="font-[500] leading-[19px] text-dark-blue">
                Socials
              </p>
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    twitter
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {twitter}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    facebook
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {facebook}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    instagram
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {instagram}
                  </p>
                </div>
              </div>
            </div>
            {/* guarantor */}
            <div className="mt-8 pb-6">
              <p className="font-[500] leading-[19px] text-dark-blue">
                Guarantor
              </p>
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    full name
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {guarantorName} {guarantorlastName}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    phone number
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {guarantorNumber}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    email address
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {guarantorAddress}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    gender
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px]">
                    {guarantorGender}
                  </p>
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
