import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LOGIN_FORM_FIELD } from "./data-access/models/login-input.model";
import InputComponent from "../../../shared/components/input/input.component";
import AuthContentComponent from "../ui/auth-content.component";

function LoginPage() {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
    methods.reset();
  })

  return (
    <section className="authentication">
       <div className="container-fluid">
        <div className="row d-flex flex-wrap">
        <div className="banner-wrap">
                <AuthContentComponent 
                    className="auth-banner d-flex flex-wrap align-items-end welcome-banner"
                    bannerHeader="Welcome Back!"
                    bannerDesc="
                        Enjoy a seamless experience tailored just for you. Your journey continues – simply sign in to pick up where you left off. Let\'s make every interaction effortless and secure.
                    "></AuthContentComponent>
          </div>
          <div className="auth-form form-pwd-change">
                <div
                    className="auth-section d-flex flex-wrap height-full flex-column justify-content-center position-relative"
                >
                    <div className="header position-absolute">
                        <div className="logo">
                            <a>
                                <img src="src/assets/images/office-logo.png"/>
                            </a>
                        </div>
                    </div>
                    <div className="auth-form">
                        <div className="form-head">
                            <h1 className="heading">Sign In</h1>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email
                                    <span className="text-danger">*</span></label>
                                {/* <app-input
                                    #appInput
                                    [inputType]="'email'"
                                    [inputClassName]="'form-control'"
                                    [control]="getControl('email')"
                                    [displayError]="displayMessage?.['email']"
                                >
                                </app-input> */}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password
                                    <span className="text-danger">*</span></label>
                                <div className="input-password position-relative">
                                    {/* <app-input
                                        #appInput
                                        [inputType]="
                                            isShowPassword ? 'text' : 'password'
                                        "
                                        [inputClassName]="'form-control'"
                                        [control]="getControl('password')"
                                        [displayError]="
                                            displayMessage?.['password']
                                        "
                                    >
                                        <app-icon
                                            [className]="
                                                'eye-open position-absolute'
                                            "
                                            [customclass]="
                                                isShowPassword
                                                    ? 'pwd-hide'
                                                    : 'pwd-view'
                                            "
                                            (iconClickEvent)="
                                                showHidePassword()
                                            "
                                        ></app-icon>
                                    </app-input> */}
                                </div>
                            </div>
                            <div className="mb-3">
                                <div
                                    className="form-check d-flex flex-wrap justify-content-between"
                                >
                                    <div className="forgot-password">
                                        {/* <a
                                            routerLink="/accounts/forgot-password"
                                            >Forgot Password</a
                                        > */}
                                    </div>
                                </div>
                            </div>
                            {/* <app-button
                                [isLoading]="isSubmitted"
                                [btnType]="'submit'"
                                [btnClassName]="'btn btn-primary'"
                                [btnText]="'Sign in'"
                                [isDisabled]="isSubmitted"
                            >
                            </app-button> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </section>

    // <div className="loginContainer">
    //   <div className="loginleftSideContainer flex flex-row">
    //     <div className="loginLeftSideContainerOverlay bg-black" />
    //     <div className="bgText flex flex-column items-start justify-end">
    //       <label className="text-white heading-one text-shadow">
    //         Welcome Back!
    //       </label>
    //       <label className="text-white heading-two text-shadow">
    //         Ready to
    //         <br />
    //         get Started
    //       </label>
    //     </div>
    //   </div>
     
    //     <div className="flex content-center">
    //       <img
    //         src="/images/office-logo.png"
    //         alt="app logo"
    //         className="appLogo"
    //       ></img>
    //     </div>
    //   <FormProvider {...methods}>
    //   <form
    //     className="loginForm flex flex-column"
    //     onSubmit={onSubmit}  
    //     autoComplete="off"
    //   >
    //     <label className="titleText text-neutral heading-three">Sign in</label>
    //     <label className=" regular-font text-neutral body-one">
    //       Please enter your email and password
    //     </label>
    //       {LOGIN_FORM_FIELD && LOGIN_FORM_FIELD.map(field=>
    //         <InputComponent {...field} />
    //       )}
    //     <label
    //       className="forgotPasswordText secondary-font text-neutral display-one"
    //       onClick={() => navigate("/forgot-password")}
    //     >
    //       Forgot Password?
    //     </label>

    //     <div className="buttonWrapper flex flex-column content-center">
    //       <button
    //         type="submit"
    //         className="submitButton text-white regular-font bg-primary display-two"
    //       >
    //         Sign in
    //       </button>
    //       <div className="signUpWrapper flex flex-row mt-5">
    //         <label className=" regular-font text-neutral display-one">
    //           Don’t have an account yet?
    //         </label>
    //         <label className="signupText text-primary regular-font display-one">
    //           Sign up
    //         </label>
    //       </div>
    //     </div>
    //   </form>
    //   </FormProvider>
    // </div>
  );
}

export default LoginPage;
