import { FormInputInterface } from "../../../../../shared/utils/interface";

export const CONFIM_SECURITY_CODE_FORM_FIELD : Array<FormInputInterface> = [
      {
        name: 'password',
        label: 'password',
        type: 'password',
        id: 'password',
        placeholder: 'enter security code',
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
      }
];