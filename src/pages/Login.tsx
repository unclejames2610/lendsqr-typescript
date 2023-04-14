import React from "react";
import logo from "../assets/lendsqr-logo.svg";
import heroImg from "../assets/lendsqr-hero.svg";

const Login = () => {
  return (
    <div>
      {/* logo */}
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        {/* picture */}
        <div>
          <img src={heroImg} alt="hero image" />
        </div>
        {/* form */}
        <div>
          <h2>Welcome!</h2>
          <h3>Enter details to login.</h3>
          <div>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <h5>FORGOT PASSWORD?</h5>
            <button>LOG IN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
