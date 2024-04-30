import { FormProvider, useForm } from 'react-hook-form';
import InputComponent from '../../../shared/components/input/input.component';
import AuthContentComponent from '../ui/auth-content.component';
import ButtonComponent from '../../../shared/components/button/ButtonComponent';
import {
  CHANGE_PASSWORD_FORM_FIELD,
  QueryResetPassword
} from './data-access/models/change-password.model';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../shared/utils/interceptors/token.interceptor';
import { toast } from '../../../shared/components/alert';

function ChangePasswordPage() {
  const methods = useForm();
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState({} as QueryResetPassword);
  const navigate = useNavigate();

  useEffect(() => {
    setParams({
      firstName: searchParams.get('firstname'),
      lastName: searchParams.get('lastname'),
      email: searchParams.get('email'),
      token: searchParams.get('token')
    } as QueryResetPassword);
    if (!searchParams.get('token')) {
      toast.info('Invalid Request', 'Info');
      navigate('/accounts/login');
    }
  }, []);

  const onSubmit = methods.handleSubmit(async (data) => {
    const payload = {
      email: params.email,
      token: params.token,
      password: data.password
    };
    await axiosInstance
      .post('accounts/change-password', {
        ...payload
      })
      .then(() => {
        toast.success('Password has been reset.', 'Success');
        navigate('/accounts/login');
      });
  });

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
                    "
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
                  <h1 className="heading">
                    Hi, {params.firstName} {params.lastName}
                  </h1>
                  <p>Create new password</p>
                </div>
                <FormProvider {...methods}>
                  <form onSubmit={onSubmit} autoComplete="off">
                    {CHANGE_PASSWORD_FORM_FIELD &&
                      CHANGE_PASSWORD_FORM_FIELD.map((field) => <InputComponent {...field} />)}
                    <ButtonComponent
                      btnName="Submit"
                      className="btn btn-primary"
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

export default ChangePasswordPage;
