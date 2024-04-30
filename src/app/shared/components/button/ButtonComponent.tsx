import { ButtonInterface } from "../../utils/interface";

function ButtonComponent({
    className,
    btnType,
    isDisabled,
    btnName,
    isLoading
  }: ButtonInterface) {
  return (
    <>
         <button
            className = {className}
            disabled={isDisabled}
            type={btnType}>
            <span
                className={`${isLoading ? 'spinner-border spinner-border-sm':''}`}
                role="status"
                aria-hidden="true"
            ></span>
            { btnName }
        </button>
    </>
  );
}
  
  export default ButtonComponent;
