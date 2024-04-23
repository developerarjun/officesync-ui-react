import { FormInputInterface } from "../../../../../utils/interface/input-form.interface";

export const LOGIN_FORM_FIELD : Array<FormInputInterface> = [
    {
        name: 'name',
        label: 'name',
        type: 'text',
        id: 'name',
        placeholder: 'write your name ...',
        className: '',
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
        name: 'password',
        label: 'password',
        type: 'password',
        id: 'password',
        placeholder: 'type password ...',
        className: '',
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