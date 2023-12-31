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
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  errorStyle?: React.CSSProperties;
  inputClassName?: string;
  inputWrapperClassName?: string;
  inputWrapperStyle?: React.CSSProperties;
  postfix?: React.ReactNode;
  prefix?: React.ReactNode;
  prefixWrapperClassName?: string;
  postfixWrapperClassName?: string;
  prefixWrapperStyle?: React.CSSProperties;
  postfixWrapperStyle?: React.CSSProperties;
  fullWidth?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  disabled?: boolean;
  name?: string;
};

function Input({
  label,
  error,
  id = "input" + Date.now(),
  wrapperClassName,
  inputClassName,
  errorWrapperClassName,
  labelClassName,
  placeholder,
  intent = "primary",
  onChange,
  size,
  boldLabel,
  labelStyle,
  inputStyle,
  inputWrapperClassName,
  inputWrapperStyle,
  errorStyle,
  style,
  postfix,
  prefix,
  prefixWrapperClassName,
  postfixWrapperClassName,
  postfixWrapperStyle,
  prefixWrapperStyle,
  fullWidth = true,
  disabled,
  inputRef,
  name,
}: ComponentProps) {
  return (
    <InputField
      className={`${wrapperClassName}`}
      style={style}
      fullWidth={fullWidth}
    >
      <Label
        size={size}
        className={labelClassName}
        htmlFor={id}
        intent={intent}
        bold={boldLabel}
        style={labelStyle}
      >
        {label}
      </Label>
      <InputElement
        id={id}
        inputClassName={inputClassName}
        inputWrapperClassName={inputWrapperClassName}
        inputWrapperStyle={inputWrapperStyle}
        inputStyle={inputStyle}
        intent={intent}
        placeholder={placeholder}
        onChange={onChange}
        size={size}
        postfix={postfix}
        prefix={prefix}
        prefixWrapperClassName={prefixWrapperClassName}
        postfixWrapperClassName={postfixWrapperClassName}
        postfixWrapperStyle={postfixWrapperStyle}
        prefixWrapperStyle={prefixWrapperStyle}
        fullWidth={fullWidth}
        inputRef={inputRef}
        disabled={disabled}
        name={name}
      />
      {error && (
        <Error
          className={errorWrapperClassName}
          intent='error'
          size={size}
          style={errorStyle}
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
