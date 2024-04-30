import { FormInputInterface } from '../../../../../shared/utils/interface';

export const LOGIN_FORM_FIELD: Array<FormInputInterface> = [
  {
    name: 'email',
    label: 'Email ',
    type: 'text',
    id: 'name',
    placeholder: 'Email or username',
    className: 'form-control',
    validation: {
      required: {
        value: true,
        message: 'required'
      },
      maxLength: {
        value: 30,
        message: '30 characters max'
      }
    }
  },
  {
    name: 'password',
    label: 'Password ',
    type: 'password',
    id: 'password',
    placeholder: 'Password',
    className: 'form-control',
    validation: {
      required: {
        value: true,
        message: 'required'
      },
      maxLength: {
        value: 30,
        message: '30 characters max'
      }
    }
  }
];
