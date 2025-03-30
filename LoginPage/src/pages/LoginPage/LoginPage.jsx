import React, { useState } from "react";
import "./LoginPage.css";
import email from "../../assets/email.svg";
import padlock from "../../assets/padlock.svg";
import eyePassword from "../../assets/eyePassword.svg";
import closeEyePassword from "../../assets/closeEyePassword.svg";

const LoginPage = () => {
  const [viewPassword, setViewPassword] = useState(eyePassword);

  const changeViewPassword = () => {
    setViewPassword((prevState) =>
      prevState === eyePassword ? closeEyePassword : eyePassword
    );
  };
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
            <button className="btnViewPassword" onClick={changeViewPassword}>
              <img src={viewPassword} alt="" />
            </button>
          </div>

          <div className="helpForLogin">
            <div className="rememberMe">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            <div className="forgotPassword">
              <span>Forgot Password?</span>
            </div>
          </div>
        </div>

        <button className="btnSignIn">
          <span>Sign in</span>
        </button>
        <span>Don´t have an account?</span>
      </div>
    </div>
  );
};

export default LoginPage;
