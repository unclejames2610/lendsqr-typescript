import React, { FC, useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="users" element={<Dashboard />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
