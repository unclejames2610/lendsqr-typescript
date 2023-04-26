import React, { FC, useContext, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbFileText } from "react-icons/tb";
import { ISidebarContext, SidebarContext } from "../components/SidebarContext";
import { BsPeople } from "react-icons/bs";
import { IUserContext, UserContext } from "../components/UserContext";
import { FaCoins } from "react-icons/fa";
import DashboardOutline from "../components/DashboardOutline";

const Dashboard: FC = () => {
  const { isOpen, setIsOpen, screenSize, setScreenSize } = useContext(
    SidebarContext
  ) as ISidebarContext;

  const { users, setUsers } = useContext(UserContext) as IUserContext;

  console.log(users);

  useEffect(() => {
    if (setScreenSize) {
      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener("resize", handleResize);

      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (setIsOpen) {
      if (screenSize !== undefined && screenSize <= 900) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
  }, [screenSize]);

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
        <div className="py-6 px-8 mx-auto mt-6 w-screen">
          <DashboardOutline />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
