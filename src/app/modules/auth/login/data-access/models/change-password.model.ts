import { FormInputInterface } from "../../../../../shared/utils/interface";

export const CHANGE_PASSWORD_FORM_FIELD : Array<FormInputInterface> = [
    {
        name: 'password',
        label: 'password',
        type: 'password',
        id: 'password',
        placeholder: 'Enter New Password',
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
        label: 'confirm_password',
        type: 'password',
        id: 'password',
        placeholder: 'Retype New Password',
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