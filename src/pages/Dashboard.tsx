import React, { FC, useContext, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import { ISidebarContext, SidebarContext } from "../components/SidebarContext";
import { BsPeopleFill } from "react-icons/bs";
import { IUserContext, UserContext } from "../components/UserContext";

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

      {isOpen ? <Sidebar width={72} /> : <Sidebar width={0} />}

      {/* content */}
      <div className="py-6 min-[900px]:ml-[300px] ml-4 relative">
        <div>Users</div>
        <div className="grid md:grid-cols-4 grid-cols-2 mt-6">
          <div className="flex flex-col">
            <div>
              <BsPeopleFill className="" />
            </div>
            <div className="uppercase">Users</div>
            <div className="font-bold">2,453</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
