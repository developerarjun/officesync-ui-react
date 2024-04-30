import { FormInputInterface } from '../../../../../shared/utils/interface';

export const CONFIM_SECURITY_CODE_FORM_FIELD: Array<FormInputInterface> = [
  {
    name: 'confirm_verification_code',
    label: 'Verification Code',
    type: 'text',
    id: 'password',
    placeholder: '-',
    className: 'form-control',
    validation: {
      required: {
        value: true,
        message: 'required'
      }
    }
  }
];
