import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LOGIN_FORM_FIELD } from './data-access/models/login-input.model';
import InputComponent from '../../../shared/components/input/input.component';
import AuthContentComponent from '../ui/auth-content.component';
import ButtonComponent from '../../../shared/components/button/ButtonComponent';
import axiosInstance from '../../../shared/utils/interceptors/token.interceptor';

function LoginPage() {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit(async (data) => {
    await axiosInstance
      .post('accounts/request-change-password', {
        ...data
      })
      .then(() => {
        navigate('/dashboard');
      });
  });

  return (
    <section className="authentication">
      <div >
        <div className="d-flex flex-md-row flex-column">
          <div >
            <AuthContentComponent
              className="auth-banner d-flex flex-wrap align-items-end welcome-banner lh-base"
              bannerHeader="Welcome Back!"
              bannerDesc="
                        Enjoy a seamless experience tailored just for you. Your journey continues – simply sign in to pick up where you left off. Let's make every interaction effortless and secure.
                    "
            ></AuthContentComponent>
          </div>
          <div className="pe-md-5">
            <div className="auth-section display-flex height-full flex-column justify-content-center position-relative auth-form form-pwd-change">
              <div className="logo header position-absolute">
                  <a>
                    <img src="/src/assets/images/office-logo.png" />
                  </a>
                </div>
              <div className="auth-form">
                <div className="form-head">
                  <h1 className="heading">Sign In</h1>
                </div>
                <FormProvider {...methods}>
                  <form onSubmit={onSubmit} autoComplete="off">
                    {LOGIN_FORM_FIELD &&
                      LOGIN_FORM_FIELD.map((field) => <InputComponent {...field} />)}
                    <div className="mb-3">
                      <div className="form-check d-flex flex-wrap justify-content-between">
                        <div className="forgot-password">
                          <a onClick={() => navigate('/accounts/forgot-password')}>
                            Forgot Password
                          </a>
                        </div>
                      </div>
                    </div>
                    <ButtonComponent
                      btnName="Login"
                      className="btn btn-primary"
                      btnType="submit"
                      isDisabled={false}
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

export default LoginPage;
