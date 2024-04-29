import { FormProvider, useForm } from "react-hook-form";
import InputComponent from "../../../shared/components/input/input.component";
import AuthContentComponent from "../ui/auth-content.component";
import ButtonComponent from "../../../shared/components/button/ButtonComponent";
import { CHANGE_PASSWORD_FORM_FIELD } from "./data-access/models/change-password.model";

function ChangePasswordPage() {
  const methods = useForm();
  const onSubmit = methods.handleSubmit(data => {
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
                            <h1 className="heading">Password Change</h1>
                        </div>
                        <FormProvider {...methods}>
                        <form onSubmit={onSubmit} autoComplete="off">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">New Password
                                    <span className="text-danger">*</span></label>
                                    <InputComponent {...CHANGE_PASSWORD_FORM_FIELD[0]} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Confirm New Password
                                    <span className="text-danger">*</span></label>
                                <div className="input-password position-relative">
                                    <InputComponent {...CHANGE_PASSWORD_FORM_FIELD[1]} />
                                </div>
                            </div>
                            
                            <ButtonComponent btnName="Submit" className="btn btn-primary" btnType="submit" isDisabled={false}></ButtonComponent>
                        
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

export default ChangePasswordPage;
