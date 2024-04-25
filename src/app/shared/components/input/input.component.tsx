import { useFormContext } from "react-hook-form";
import { FormInputInterface } from "../../utils/interface";
import { findInputError, isFormInvalid } from "../../utils/function";

function InputComponent({
    name,
    label,
    type,
    id,
    placeholder,
    validation,
    className,
  }: FormInputInterface) {

    const {
        register,
        formState: { errors },
      } = useFormContext();
      const inputErrors = findInputError(errors, name) as any
      const isInvalid = isFormInvalid(inputErrors);
  return (
    <>
      <div className="mb-3">
          <label htmlFor="password" className="form-label">{label}
              <span className="text-danger">*</span>
          </label>
          <div className={className}>
          <input
          id={id}
          type={type}
          className={className}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {
            isInvalid && (
                <InputError message={inputErrors.error.message}
                            key={inputErrors.error.message} />
            )
        }
          </div>
      </div>
    </>
  );
}



const InputError = ({message}: any) => {
    return (
        <span className="error-text regular-font body-two">
            {message}
          </span>
    )
  }
  
  export default InputComponent;
