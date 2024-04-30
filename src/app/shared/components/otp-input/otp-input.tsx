import React from 'react';

type AllowedInputTypes = 'password' | 'text' | 'number' | 'tel';

type InputProps = Required<
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    | 'value'
    | 'onChange'
    | 'onFocus'
    | 'onBlur'
    | 'onKeyDown'
    | 'onPaste'
    | 'aria-label'
    | 'autoComplete'
    | 'style'
    | 'inputMode'
    | 'onInput'
  > & {
    ref: React.RefCallback<HTMLInputElement>;
    placeholder: string | undefined;
    className: string | undefined;
    type: AllowedInputTypes;
  }
>;

interface OTPInputProps {
  value?: string;
  numInputs?: number;
  onChange: (otp: string) => void;
  onPaste?: (event: React.ClipboardEvent<HTMLDivElement>) => void;
  renderInput: (inputProps: InputProps, index: number) => React.ReactNode;
  shouldAutoFocus?: boolean;
  placeholder?: string;
  renderSeparator?: ((index: number) => React.ReactNode) | React.ReactNode;
  containerStyle?: React.CSSProperties | string;
  inputStyle?: React.CSSProperties | string;
  inputType?: AllowedInputTypes;
  skipDefaultStyles?: boolean;
}

const isStyleObject = (obj: unknown) => typeof obj === 'object' && obj !== null;

const OTPInput = ({
  value = '',
  numInputs = 4,
  onChange,
  renderInput,
  shouldAutoFocus = false,
  inputType = 'text',
  renderSeparator,
  placeholder,
  inputStyle,
  skipDefaultStyles = true
}: OTPInputProps) => {
  const [activeInput, setActiveInput] = React.useState(0);
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);

  const getOTPValue = () => (value ? value.toString().split('') : []);

  const isInputNum = inputType === 'number' || inputType === 'tel';

  React.useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, numInputs);
  }, [numInputs]);

  React.useEffect(() => {
    if (shouldAutoFocus) {
      inputRefs.current[0]?.focus();
    }
  }, [shouldAutoFocus]);

  const getPlaceholderValue = () => {
    if (typeof placeholder === 'string') {
      if (placeholder.length === numInputs) {
        return placeholder;
      }

      if (placeholder.length > 0) {
        console.error('Length of the placeholder should be equal to the number of inputs.');
      }
    }
    return undefined;
  };

  const isInputValueValid = (value: string) => {
    const isTypeValid = isInputNum ? !isNaN(Number(value)) : typeof value === 'string';
    return isTypeValid && value.trim().length === 1;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (isInputValueValid(value)) {
      changeCodeAtFocus(value);
      focusInput(activeInput + 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { nativeEvent } = event;
    const value = event.target.value;

    if (!isInputValueValid(value)) {
      // Pasting from the native autofill suggestion on a mobile device can pass
      // the pasted string as one long input to one of the cells. This ensures
      // that we handle the full input and not just the first character.
      if (value.length === numInputs) {
        const hasInvalidInput = value.split('').some((cellInput) => !isInputValueValid(cellInput));
        if (!hasInvalidInput) {
          handleOTPChange(value.split(''));
          focusInput(numInputs - 1);
        }
      }

      // @ts-expect-error - This was added previously to handle and edge case
      // for dealing with keyCode "229 Unidentified" on Android. Check if this is
      // still needed.
      if (nativeEvent.data === null && nativeEvent.inputType === 'deleteContentBackward') {
        event.preventDefault();
        changeCodeAtFocus('');
        focusInput(activeInput - 1);
      }

      // Clear the input if it's not valid value because firefox allows
      // pasting non-numeric characters in a number type input
      event.target.value = '';
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => (index: number) => {
    setActiveInput(index);
    event.target.select();
  };

  const handleBlur = () => {
    setActiveInput(activeInput - 1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const otp = getOTPValue();
    if ([event.code, event.key].includes('Backspace')) {
      event.preventDefault();
      changeCodeAtFocus('');
      focusInput(activeInput - 1);
    } else if (event.code === 'Delete') {
      event.preventDefault();
      changeCodeAtFocus('');
    } else if (event.code === 'ArrowLeft') {
      event.preventDefault();
      focusInput(activeInput - 1);
    } else if (event.code === 'ArrowRight') {
      event.preventDefault();
      focusInput(activeInput + 1);
    }
    // React does not trigger onChange when the same value is entered
    // again. So we need to focus the next input manually in this case.
    else if (event.key === otp[activeInput]) {
      event.preventDefault();
      focusInput(activeInput + 1);
    } else if (
      event.code === 'Spacebar' ||
      event.code === 'Space' ||
      event.code === 'ArrowUp' ||
      event.code === 'ArrowDown'
    ) {
      event.preventDefault();
    }
  };

  const focusInput = (index: number) => {
    const activeInput = Math.max(Math.min(numInputs - 1, index), 0);

    if (inputRefs.current[activeInput]) {
      inputRefs.current[activeInput]?.focus();
      inputRefs.current[activeInput]?.select();
      setActiveInput(activeInput);
    }
  };

  const changeCodeAtFocus = (value: string) => {
    const otp = getOTPValue();
    otp[activeInput] = value[0];
    handleOTPChange(otp);
  };

  const handleOTPChange = (otp: Array<string>) => {
    const otpValue = otp.join('');
    onChange(otpValue);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const otp = [] as any;
    let nextActiveInput = activeInput;

    // Get pastedData in an array of max size (num of inputs - current position)
    const pastedData = (event.clipboardData || window['clipboardData' as any]).getData(
      'text'
    ) as any;

    // Prevent pasting if the clipboard data contains non-numeric values for number inputs
    if (isInputNum && !/^[0-9]+$/.test(pastedData)) {
      return;
    }
    var pasteValue = pastedData.slice(0, numInputs);

    pasteValue = pasteValue.toString().replace(/\s/g, '');

    Array.from(pasteValue).forEach((c: any, idx) => {
      otp[idx] = c;
      nextActiveInput = idx + 1;
    });

    focusInput(nextActiveInput);
    handleOTPChange(otp);
  };

  return (
    <>
      {Array.from({ length: numInputs }, (_, index) => index).map((index) => (
        <React.Fragment key={index}>
          {renderInput(
            {
              value: getOTPValue()[index] ?? '',
              placeholder: getPlaceholderValue()?.[index] ?? undefined,
              ref: (element) => (inputRefs.current[index] = element),
              onChange: handleChange,
              onFocus: (event) => handleFocus(event)(index),
              onBlur: handleBlur,
              onKeyDown: handleKeyDown,
              onPaste: handlePaste,
              autoComplete: 'off',
              style: Object.assign(
                !skipDefaultStyles ? ({ width: '1em', textAlign: 'center' } as const) : {},
                isStyleObject(inputStyle) ? inputStyle : {}
              ),
              'aria-label': `Please enter OTP character ${index + 1}`,
              className: typeof inputStyle === 'string' ? inputStyle : undefined,
              type: inputType,
              inputMode: isInputNum ? 'numeric' : 'text',
              onInput: handleInputChange
            },
            index
          )}
          {index < numInputs - 1 &&
            (typeof renderSeparator === 'function' ? renderSeparator(index) : renderSeparator)}
        </React.Fragment>
      ))}
    </>
  );
};

export type { OTPInputProps, InputProps, AllowedInputTypes };
export default OTPInput;
