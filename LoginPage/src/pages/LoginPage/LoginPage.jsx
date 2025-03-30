import React from "react";
import "./LoginPage.css";
import email from "../../assets/email.svg";
import padlock from "../../assets/padlock.svg";
import eyePassword from "../../assets/eyePassword.svg";

const LoginPage = () => {
  return (
    <div>
      <div className="central">
        <div className="title">
          <span>Login</span>
        </div>

        <div className="InputContainer">
          <div className="labelInput">
            <label htmlFor="email">Enter your email</label>
          </div>
          <div className="InputWrapper">
            <img src={email} alt="" />
            <input id="email" placeholder="Email" type="text" />
          </div>
        </div>


        <div className="InputContainer">
          <div className="labelInput">
            <label htmlFor="email">Enter your password</label>
          </div>
          <div className="InputWrapper">
            <img src={padlock} alt="" />
            <input id="email" placeholder="Password" type="text" />
            <img src={eyePassword} alt="" />
          </div>
        </div>

        <button></button>
      </div>
    </div>
  );
};

export default LoginPage;
