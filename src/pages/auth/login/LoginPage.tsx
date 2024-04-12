import { useEffect } from "react";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  useEffect(() => {}, []);
  const navigate = useNavigate();
  return (
    <div className="loginContainer">
      <div className="loginleftSideContainer">
        <div className="loginLeftSideContainerOverlay" />
        <div className="bgText">
          <label className="welcomeText">Welcome Back!</label>
          <label className="startText">
            Ready to
            <br />
            get Started
          </label>
        </div>
      </div>
      <div className="loginForm">
        <div className="imageWrapper">
          <img
            src="/images/office-logo.png"
            alt="app logo"
            className="appLogo"
          ></img>
        </div>
        <label className="titleText">Sign in</label>
        <label className="credText">Please enter your email and password</label>
        <label className="email">Email</label>
        <input
          type="text"
          placeholder={"Enter your email"}
          className="emailInput"
        />
        <label className="email">Password</label>

        <input
          type="password"
          placeholder={"Enter your password"}
          className="passwordInput"
        />
        <label
          className="forgotPasswordText"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </label>

        <div className="buttonWrapper">
          <button type="submit" className="submitButton">
            Sign in
          </button>
          <div className="signUpWrapper">
            <label className="noAccountText">Don’t have an account yet?</label>
            <label className="signupText">Sign up</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
