import { useFormContext } from "react-hook-form";
import { FormInputInterface, findInputError, isFormInvalid } from "../../utils";

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
     <label className="email regular-font text-neutral body-two">
          {label}
    </label>
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
