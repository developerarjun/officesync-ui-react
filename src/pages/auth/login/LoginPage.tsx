import { useEffect } from "react";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { error } from "../../../utils";

function LoginPage() {
  useEffect(() => {}, []);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(errors);
  return (
    <div className="loginContainer">
      <div className="loginleftSideContainer flex flex-row">
        <div className="loginLeftSideContainerOverlay bg-black" />
        <div className="bgText flex flex-column items-start justify-end">
          <label className="text-white heading-one text-shadow">
            Welcome Back!
          </label>
          <label className="text-white heading-two text-shadow">
            Ready to
            <br />
            get Started
          </label>
        </div>
      </div>
      <form
        className="loginForm flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex content-center">
          <img
            src="/images/office-logo.png"
            alt="app logo"
            className="appLogo"
          ></img>
        </div>
        <label className="titleText text-neutral heading-three">Sign in</label>
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
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <span className="error-text regular-font body-two">
            {error.email_required}
          </span>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <span className="error-text regular-font body-two">
            {error.email_invalid}
          </span>
        )}

        <label className="email regular-font text-neutral body-two">
          Password
        </label>

        <input
          type="password"
          placeholder={"Enter your password"}
          className="passwordInput text-secondary bg-tertiary"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="error-text regular-font body-two">
            {error.password_required}
          </span>
        )}
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
          <div className="signUpWrapper flex flex-row mt-5">
            <label className=" regular-font text-neutral display-one">
              Don’t have an account yet?
            </label>
            <label className="signupText text-primary regular-font display-one">
              Sign up
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
