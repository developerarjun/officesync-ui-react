import { FormInputInterface } from "../../../../../shared/utils/interface";

export const FORGET_PASSSWORD_FORM_FIELD : Array<FormInputInterface> = [
    {
        name: 'email',
        label: 'email',
        type: 'text',
        id: 'email',
        placeholder: 'Email',
        className: 'form-control',
        validation: {
          required: {
            value: true,
            message: 'required',
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email address',
        },
        },
      },
];