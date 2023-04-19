import React, { FC, useContext } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { ISidebarContext, SidebarContext } from "../components/SidebarContext";

const Dashboard: FC = () => {
  const { isOpen, handleClose, setIsOpen } = useContext(
    SidebarContext
  ) as ISidebarContext;

  return (
    <div>
      <Header />

      <Sidebar />
    </div>
  );
};

export default Dashboard;
