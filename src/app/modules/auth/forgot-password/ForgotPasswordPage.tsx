import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FORGET_PASSSWORD_FORM_FIELD } from "../login/data-access/models/forget-password-input.model";
import InputComponent from "../../../shared/components/input/input.component";
import AuthContentComponent from "../ui/auth-content.component";
import ButtonComponent from "../../../shared/components/button/ButtonComponent";
import axiosInstance from "../../../shared/utils/interceptors/token.interceptor";
import { toast } from "../../../shared/components/alert";

function ForgotPasswordPage() {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit(async (data) => {
    await axiosInstance.post("accounts/request-change-password", {
        ...data,
      }).then(() => {
        toast.success('If your email is valid, the link has been sent, please check your email to reset your password.','Success');
        navigate('/accounts/login');
      });
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
                                <img src="/src/assets/images/office-logo.png"/>
                            </a>
                        </div>
                    </div>
                    <div className="auth-form">
                        <div className="form-head">
                            <h1 className="heading">Forget Password?</h1>
                            <p>Please enter your email</p>
                        </div>
                        <FormProvider {...methods}>
                        <form onSubmit={onSubmit} autoComplete="off">
                            <InputComponent {...FORGET_PASSSWORD_FORM_FIELD} />

                            <div className="mb-3">  
                                <div className="form-check d-flex flex-wrap justify-content-between">
                                    <div className="forgot-password">
                                        <a
                                            onClick={() => navigate("/accounts/login")}>Go Back</a>
                                    </div>
                                </div>
                            </div>
                            <ButtonComponent btnName="Submit" className="btn btn-primary" btnType="submit" isDisabled={methods.formState.isSubmitting} isLoading={methods.formState.isSubmitting}></ButtonComponent>
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

export default ForgotPasswordPage;

  