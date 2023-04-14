import React from "react";
import logo from "../assets/lendsqr-logo.svg";
import heroImg from "../assets/lendsqr-hero.svg";

const Login = () => {
  return (
    <div className="mt-12 w-full h-screen mx-auto">
      {/* logo */}
      <div className="ml-24">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center mt-20 lg:justify-around lg:gap-36 flex-1 mx-16 md:gap-3">
        {/* picture */}
        <div className="">
          <img src={heroImg} alt="hero image" className="object-fill" />
        </div>
        {/* form */}
        <div className="flex flex-col gap-3 ">
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
            <button className="text-white bg-light-blue p-3 rounded-lg font-semibold text-sm w-full tracking-widest">
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
