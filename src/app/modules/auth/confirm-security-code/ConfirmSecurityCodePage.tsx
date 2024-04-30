import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import AuthContentComponent from '../ui/auth-content.component';
import ButtonComponent from '../../../shared/components/button/ButtonComponent';
import OTPInput from '../../../shared/components/otp-input/otp-input';

function ConfirmSecurityCodePage() {
  const methods = useForm();
  const navigate = useNavigate();
  const [{ otp, numInputs, placeholder, inputType }, setConfig] = React.useState({
    otp: '',
    numInputs: 6,
    minLength: 0,
    maxLength: 40,
    placeholder: '',
    inputType: 'number' as const
  });

  const handleOTPChange = (otp: string) => {
    setConfig((prevConfig) => ({ ...prevConfig, otp }));
  };

  return (
    <section className="authentication">
      <div className="container-fluid">
        <div className="row d-flex flex-wrap">
          <div className="banner-wrap">
            <AuthContentComponent
              className="auth-banner d-flex flex-wrap align-items-end welcome-banner"
              bannerHeader="Confirmation Code Entry"
              bannerDesc="Secure your account by entering the 6-digit code. Complete the process to finalize your account creation and enjoy a worry-free experience."
            ></AuthContentComponent>
          </div>
          <div className="auth-form form-pwd-change">
            <div className="auth-section d-flex flex-wrap height-full flex-column justify-content-center position-relative">
              <div className="header position-absolute">
                <div className="logo">
                  <a>
                    <img src="/src/assets/images/office-logo.png" />
                  </a>
                </div>
              </div>
              <div className="auth-form">
                <div className="form-head">
                  <h1 className="heading">Verification</h1>
                  <p>Please enter the 6-digit code that has been sent to your associated email.</p>
                </div>
                <FormProvider {...methods}>
                  <form autoComplete="off">
                    <div className="mb-3 d-flex flex-nowrap gap-2 flex-row justify-content-between">
                      <OTPInput
                        inputStyle="inputStyle"
                        numInputs={numInputs}
                        onChange={handleOTPChange}
                        value={otp}
                        placeholder={placeholder}
                        inputType={inputType}
                        renderInput={(props) => (
                          <input {...props} className="form-control seurity-code" />
                        )}
                        shouldAutoFocus
                      />
                    </div>

                    <div className="error__div error">
                      <small className="error__text">Invalid Code</small>
                    </div>
                    <div className="mt-4">
                      <label>
                        Didn't got Code?
                        <a className="light-bold ms-2" onClick={() => navigate('/accounts/login')}>
                          Resend
                        </a>
                      </label>
                    </div>
                    <ButtonComponent
                      btnName="Verify"
                      className="btn btn-full btn-primary mb-5"
                      btnType="submit"
                      isDisabled={methods.formState.isSubmitting}
                      isLoading={methods.formState.isSubmitting}
                    ></ButtonComponent>
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
