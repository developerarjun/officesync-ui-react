import "./LoginPage.scss";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LOGIN_FORM_FIELD } from "./data-access/models/login-input.model";
import InputComponent from "../../../shared/components/input/input.component";

function LoginPage() {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
    methods.reset();
  })

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
     
       
      <FormProvider {...methods}>
      <form
        className="loginForm flex flex-column"
        onSubmit={onSubmit}  
        autoComplete="off"
      >
         <div className="flex items-center">
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
          {LOGIN_FORM_FIELD && LOGIN_FORM_FIELD.map(field=>
            <InputComponent {...field} />
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
      </FormProvider>
    </div>
  );
}

export default LoginPage;
