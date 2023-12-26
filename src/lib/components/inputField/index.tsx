import Label from "./label";
import InputElement from "./inputElement";
import Error from "./error";
import { InputField } from "./inputField";

export type ComponentProps = {
  label: string;
  error?: string | string[];
  id?: string;
  wrapperClassName?: string;
  errorWrapperClassName?: string;
  labelClassName?: string;
  intent?: "primary" | "error" | "warning";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  boldLabel?: boolean;
  styles?: React.CSSProperties;
  labelStyles?: React.CSSProperties;
  inputStyles?: React.CSSProperties;
  errorStyles?: React.CSSProperties;
  inputClasses?: string;
  inputWrapperClassName?: string;
  inputWrapperStyles?: React.CSSProperties;
  postfix?: React.ReactNode;
  prefix?: React.ReactNode;
  prefixWrapperClassName?: string;
  postfixWrapperClassName?: string;
  prefixWrapperStyles?: React.CSSProperties;
  postfixWrapperStyles?: React.CSSProperties;
  fullWidth?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  disabled?: boolean;
};

function Input({
  label,
  error,
  id = "input" + Date.now(),
  wrapperClassName,
  inputClasses,
  errorWrapperClassName,
  labelClassName,
  placeholder,
  intent = "primary",
  onChange,
  size,
  boldLabel,
  labelStyles,
  inputStyles,
  inputWrapperClassName,
  inputWrapperStyles,
  errorStyles,
  styles,
  postfix,
  prefix,
  prefixWrapperClassName,
  postfixWrapperClassName,
  postfixWrapperStyles,
  prefixWrapperStyles,
  fullWidth = true,
  disabled,
  inputRef,
}: ComponentProps) {
  return (
    <InputField
      className={`${wrapperClassName}`}
      style={styles}
      fullWidth={fullWidth}
    >
      <Label
        size={size}
        className={labelClassName}
        htmlFor={id}
        intent={intent}
        bold={boldLabel}
        style={labelStyles}
      >
        {label}
      </Label>
      <InputElement
        id={id}
        inputClasses={inputClasses}
        inputWrapperClasses={inputWrapperClassName}
        inputWrapperStyles={inputWrapperStyles}
        inputStyles={inputStyles}
        intent={intent}
        placeholder={placeholder}
        onChange={onChange}
        size={size}
        postfix={postfix}
        prefix={prefix}
        prefixWrapperClasses={prefixWrapperClassName}
        postfixWrapperClasses={postfixWrapperClassName}
        postfixWrapperStyles={postfixWrapperStyles}
        prefixWrapperStyles={prefixWrapperStyles}
        fullWidth={fullWidth}
        inputRef={inputRef}
        disabled={disabled}
      />
      {error && (
        <Error
          className={errorWrapperClassName}
          intent={intent}
          size={size}
          style={errorStyles}
        >
          {typeof error === "string" && error}

          {Array.isArray(error) && (
            <ul>
              {error.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
        </Error>
      )}
    </InputField>
  );
}

Input.DisplayName = "Input";

export { InputField, Label, InputElement, Error };
export default Input;
