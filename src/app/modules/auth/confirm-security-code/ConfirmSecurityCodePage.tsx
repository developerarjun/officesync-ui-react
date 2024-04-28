import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CONFIM_SECURITY_CODE_FORM_FIELD } from "../login/data-access/models/confirm-security-code.model";
import InputComponent from "../../../shared/components/input/input.component";
import AuthContentComponent from "../ui/auth-content.component";
import ButtonComponent from "../../../shared/components/button/ButtonComponent";

function ConfirmSecurityCodePage() {
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
                            <h1 className="heading">Verification</h1>
                            <small className="dark">Please complete the following procedure to verify your account.</small>
                        </div>
                       <div className="form-sub-heading mb-4">
                            <h3>An email has been sent to you</h3>
                            <small>Please enter the 6-digit code that has been sent to your associated email.</small>
                       </div>
                     

                        <FormProvider {...methods}>
                        <form onSubmit={onSubmit} autoComplete="off">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Verification Code
                                    <span className="text-danger">*</span></label>
                                    <InputComponent {...CONFIM_SECURITY_CODE_FORM_FIELD[0]} />
                            </div>
                            <ButtonComponent btnName="Go Back" className="btn btn-primary" btnType="submit" isDisabled={false}></ButtonComponent>
                            <ButtonComponent btnName="Verify Account" className="btn btn-primary mx-3" btnType="submit" isDisabled={false}></ButtonComponent>
                            
                        </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </section>
  );
}

export default ConfirmSecurityCodePage;
