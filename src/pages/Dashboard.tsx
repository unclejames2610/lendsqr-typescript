import React, { FC } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard: FC = () => {
  return (
    <div>
      <Header />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
