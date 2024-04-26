import { ButtonInterface } from "../../utils/interface";

function ButtonComponent({
    className,
    btnType,
    isDisabled,
    btnName
  }: ButtonInterface) {
  return (
    <>
         <button
            className = {className}
            disabled={isDisabled}
            type={btnType}>
            <span
                className="{ 'spinner-border spinner-border-sm': isLoading }"
                role="status"
                aria-hidden="true"
            ></span>
            { btnName }
        </button>
    </>
  );
}
  
  export default ButtonComponent;
