import React, { FC, useContext, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import { ISidebarContext, SidebarContext } from "../components/SidebarContext";

const Dashboard: FC = () => {
  const { isOpen, setIsOpen, screenSize, setScreenSize } = useContext(
    SidebarContext
  ) as ISidebarContext;

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
    <div>
      <Header />
      {isOpen ? (
        <div className="w-72 fixed">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
