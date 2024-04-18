import { useEffect } from "react";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  useEffect(() => {}, []);
  const navigate = useNavigate();
  return (
    <div className="loginContainer">
      <div className="loginleftSideContainer flex flex-row">
        <div className="loginLeftSideContainerOverlay bg-black" />
        <div className="bgText flex flex-column items-start justify-end">
          <label className=" primary-font text-white heading-one">
            Welcome Back!
          </label>
          <label className=" primary-font text-white heading-two">
            Ready to
            <br />
            get Started
          </label>
        </div>
      </div>
      <div className="loginForm flex flex-column">
        <div className="flex content-center">
          <img
            src="/images/office-logo.png"
            alt="app logo"
            className="appLogo"
          ></img>
        </div>
        <label className="titleText primary-font text-neutral heading-three">
          Sign in
        </label>
        <label className=" regular-font text-neutral body-one">
          Please enter your email and password
        </label>
        <label className="email regular-font text-neutral body-two">
          Email
        </label>
        <input
          type="text"
          placeholder={"Enter your email"}
          className="emailInput text-secondary bg-tertiary"
        />
        <label className="email">Password</label>

        <input
          type="password"
          placeholder={"Enter your password"}
          className="passwordInput text-secondary bg-tertiary"
        />
        <label
          className="forgotPasswordText secondary-font text-neutral display-one"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </label>

        <div className="buttonWrapper flex flex-column content-center">
          <button
            type="submit"
            className="submitButton text-white regular-font bg-primary display-two"
          >
            Sign in
          </button>
          <div className="signUpWrapper flex flex-row">
            <label className=" regular-font display-one">
              Don’t have an account yet?
            </label>
            <label className="signupText text-primary regular-font display-one">
              Sign up
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
