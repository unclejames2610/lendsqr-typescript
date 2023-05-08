import React, { FC, useContext } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ISidebarContext, SidebarContext } from "../components/SidebarContext";
import { IUserContext, UserContext } from "../components/UserContext";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../components/interface";

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
          <div className="flex items-center gap-2">
            <Link to={"/users"}>
              <HiOutlineArrowNarrowLeft />
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
      </div>
    </div>
  );
};

export default UserDetails;
