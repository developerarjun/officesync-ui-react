import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from 'react';
import AuthContentComponent from "../ui/auth-content.component";
import ButtonComponent from "../../../shared/components/button/ButtonComponent";

function ConfirmSecurityCodePage() {
  const methods = useForm();
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>(Array(6).fill(null));

  

  useEffect(() => {
    // Focus on the first input field when the component mounts
    inputRefs.current[0].focus();
  }, []); 

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>)  => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData('text');
    const pasteDigits = pasteData.split('').slice(0, 6);
    const newInputValues = [...inputValues];
    pasteDigits.forEach((digit, index) => {
      newInputValues[index] = digit;
    });
    setInputValues(newInputValues);
    inputRefs.current[5].focus();
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !inputValues[index] && index > 0) {
      setInputValues(prevValues => {
        const newValues = [...prevValues];
        newValues[index - 1] = '';
        return newValues;
      });
      inputRefs.current[index - 1].focus();
    }
  };

 
//handle submit
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
                                    {/* <InputComponent {...CONFIM_SECURITY_CODE_FORM_FIELD[0]} /> */}
                                    {inputValues.map((value, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        value={value}
                                        onChange={(event) => handleChange(index, event)}
                                        onKeyDown={(event) => handleKeyDown(index, event)}
                                        onPaste={handlePaste} 
                                        ref={(inputRef) => (inputRefs.current[index] = inputRef!)}
                                        style={{ width: '30px', marginRight: '5px' }}
                                    />
                                    ))}
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
