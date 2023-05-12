import React, { FC, useContext } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ISidebarContext, SidebarContext } from "../components/SidebarContext";
import { IUserContext, UserContext } from "../components/UserContext";
import logo from "../assets/lendsqr-logo.svg";
import { RiLoader4Fill } from "react-icons/ri";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
// import { IUser } from "../components/interface";
import UserDetailsHeader from "../components/UserDetailsHeader";

const UserDetails: FC = () => {
  const { isOpen } = useContext(SidebarContext) as ISidebarContext;

  const { users } = useContext(UserContext) as IUserContext;

  const { id } = useParams();

  const user = users.find((item) => {
    return item.id === id;
  });

  if (!user) {
    return (
      <section className="h-screen flex flex-col justify-center items-center">
        <div className="h-12">
          <img src={logo} alt="logo" />
        </div>
        <div className="">
          <RiLoader4Fill className="animate-spin text-4xl text-dark-blue " />
        </div>
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

  const guarantorName: string = user.guarantor.firstName;
  const guarantorlastName: string = user.guarantor.lastName;
  const guarantorNumber: string = user.guarantor.phoneNumber;
  const guarantorGender: string = user.guarantor.gender;
  const guarantorAddress: string = user.guarantor.address;

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
          <div className="border rounded border-dark-blue/[0.06] shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)] py-4 px-6 mb-4">
            <div className="flex flex-col md:flex-row items-start md:items-center text-dark-blue  justify-start gap-8 lg:gap-16 mt-8">
              {/* avatar */}
              <div
                className="rounded-full 
            border-none h-[100px] w-[100px]"
              >
                {/* <AiOutlineUser className="text-3xl text-dark-blue" /> */}

                <img
                  src={avatar}
                  className="rounded-full object-fill"
                  alt="avatar"
                />
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
              <div className=" border-y md:border-x border-light-gray/20 p-8">
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
            <div className="md:flex justify-between mt-8 leading-[19px] hidden ">
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
          <div className="border rounded border-dark-blue/[0.06] shadow-[0_3px_5px_20px_rgba(0,0,0,0.04)] py-2 px-6">
            {/* personal info */}
            <div className="mt-8 border-b border-dark-blue/10 pb-6">
              <p className="font-[500] leading-[19px] text-dark-blue">
                Personal Information
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    full name
                  </p>
                  <p className="text-light-gray md:text-base text-sm whitespace-normal break-words font-[500]  leading-[19px]">
                    {firstName} {lastName}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    phone number
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {phoneNumber}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    email address
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {email}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    bvn
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {bvn}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    gender
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {gender}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    marital status
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    Single
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    children
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    None
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    address
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    level of education
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {level}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    employment status
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {employmentStatus}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    sector of employment
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {sector}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    duration of employment
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {duration}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    office email
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] lowercase md:text-base text-sm whitespace-normal break-words">
                    {officeEmail}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    monthly income
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    N{monthlyIncome[0]} - N{monthlyIncome[1]}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    loan repayment
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    twitter
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {twitter}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    facebook
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {facebook}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    instagram
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    full name
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {guarantorName} {guarantorlastName}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    phone number
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {guarantorNumber}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    email address
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
                    {guarantorAddress}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="uppercase text-light-gray text-xs leading-[14px]">
                    gender
                  </p>
                  <p className="text-light-gray font-[500]  leading-[19px] md:text-base text-sm whitespace-normal break-words">
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
