import React, { FC } from "react";
import logo from "../assets/lendsqr-logo.svg";
import heroImg from "../assets/lendsqr-hero.svg";
import { Link } from "react-router-dom";

const Login: FC = () => {
  return (
    <div className="mt-12 w-full h-screen mx-auto">
      {/* logo */}
      <div className="ml-4 md:ml-24">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 flex-1 gap-16 md:gap-12 lg:gap-0  ">
        {/* picture */}
        <div className="ml-4 md:ml-24">
          <img src={heroImg} alt="hero" className="object-fill" />
        </div>
        {/* form */}
        <div className="flex flex-col gap-3 lg:w-[447px] mr-4 md:mr-24 lg:mr-48">
          <h2 className="text-[40px] leading-[54.64px] text-dark-blue font-bold -tracking-[0.04em]">
            Welcome!
          </h2>
          <h3 className="text-light-gray text-xl">Enter details to login.</h3>
          <div className="flex flex-col gap-6 justify-between mt-12">
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-light-gray/[0.15] p-3 text-[14px] rounded-md "
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-light-gray/[0.15] p-3 text-[14px] rounded-md w-full"
            />
            <h5 className="text-light-blue text-sm font-semibold ">
              FORGOT PASSWORD?
            </h5>
            <Link to="users">
              <button className="text-white bg-light-blue p-3 rounded-lg font-semibold text-sm w-full tracking-widest">
                LOG IN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
