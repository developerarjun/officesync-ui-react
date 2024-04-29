import { FormInputInterface } from "../../../../../shared/utils/interface";

export const CHANGE_PASSWORD_FORM_FIELD : Array<FormInputInterface> = [
    {
        name: 'password',
        label: 'New Password ',
        type: 'password',
        id: 'password',
        placeholder: 'New Password',
        className: 'form-control',
        validation: {
          required: {
            value: true,
            message: 'required',
          },
          maxLength: {
            value: 30,
            message: '30 characters max',
          },
        },
      },
    {
        name: 'confirm_password',
        label: 'Confirm Password ',
        type: 'password',
        id: 'password',
        placeholder: 'Confirm Password',
        className: 'form-control',
        validation: {
          required: {
            value: true,
            message: 'required',
          },
          maxLength: {
            value: 30,
            message: '30 characters max',
          },
        },
      },
    
];


export interface QueryResetPassword {
  firstName : string;
  lastName: string;
  email: string;
  token : string;
}