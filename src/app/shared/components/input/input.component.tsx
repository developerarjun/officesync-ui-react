import { useFormContext } from 'react-hook-form';
import { FormInputInterface } from '../../utils/interface';
import { findInputError, isFormInvalid } from '../../utils/function';

function InputComponent({
  name,
  type,
  id,
  placeholder,
  validation,
  className,
  label
}: FormInputInterface) {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  const inputErrors = findInputError(errors, name) as any;
  const isInvalid = isFormInvalid(inputErrors);
  return (
    <>
      <div className="mb-3">
        <label htmlFor={label} className="form-label">
          {label}
          <span className="text-danger">*</span>
        </label>
        <input
          id={id}
          type={type}
          className={className}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {isInvalid && (
          <InputError message={inputErrors.error.message} key={inputErrors.error.message} />
        )}
      </div>
    </>
  );
}

const InputError = ({ message }: any) => {
  return (
    <div className="error__div error">
      <small className="error__text">{message}</small>
    </div>
  );
};

export default InputComponent;
