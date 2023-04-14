import React from "react";
import logo from "../assets/lendsqr-logo.svg";
import heroImg from "../assets/lendsqr-hero.svg";

const Login = () => {
  return (
    <div className="m-12 w-full h-screen ">
      {/* logo */}
      <div className="">
        <img src={logo} alt="logo" className="object-cover" />
      </div>
      <div className="flex flex-col md:flex-row mx-auto justify-center items-center">
        {/* picture */}
        <div>
          <img src={heroImg} alt="hero image" />
        </div>
        {/* form */}
        <div>
          <h2 className="text-[40px] leading-[54.64px] text-dark-blue ">
            Welcome!
          </h2>
          <h3 className="text-light-gray text-xl">Enter details to login.</h3>
          <div className="flex flex-col gap-6 justify-between">
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-light-gray/[0.15] p-3 text-[14px] rounded-md "
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-light-gray/[0.15] p-3 text-[14px] rounded-md "
            />
            <h5 className="text-light-blue">FORGOT PASSWORD?</h5>
            <button className="bg-light-blue">LOG IN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
