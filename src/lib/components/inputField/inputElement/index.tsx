import prefixPostfixStyles from "./prefixPostFix.styles";
import inputElementStyles from "./inputElement.styles";
import wrapperStyles from "./wrapper.styles";
import { VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export interface InputElementprops
  extends VariantProps<typeof inputElementStyles>,
    Omit<
      React.HTMLProps<HTMLInputElement>,
      "id" | "onChange" | "prefix" | "size"
    > {
  id: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputStyle?: React.CSSProperties;
  inputWrapperStyle?: React.CSSProperties;
  prefix?: React.ReactNode;
  postfix?: React.ReactNode;
  inputClassName?: string;
  inputWrapperClassName?: string;
  prefixWrapperClassName?: string;
  postfixWrapperClassName?: string;
  postfixWrapperStyle?: React.CSSProperties;
  prefixWrapperStyle?: React.CSSProperties;
  inputRef?: React.Ref<HTMLInputElement>;
}

function InputElement({
  type = "text",
  id,
  intent,
  placeholder,
  onChange,
  size,
  inputStyle,
  inputWrapperStyle,
  prefix,
  postfix,
  inputClassName,
  inputWrapperClassName,
  prefixWrapperClassName,
  postfixWrapperClassName,
  postfixWrapperStyle,
  prefixWrapperStyle,
  fullWidth,
  inputRef,
  name,
  ...rest
}: InputElementprops) {
  return (
    <div
      className={twMerge(
        "flex items-center relative",
        wrapperStyles({
          fullWidth,
        }),
        inputWrapperClassName
      )}
      style={inputWrapperStyle}
    >
      {prefix && (
        <div
          className={twMerge(
            "absolute left-4",
            prefixPostfixStyles({
              size,
            }),
            prefixWrapperClassName
          )}
          style={prefixWrapperStyle}
        >
          {prefix}
        </div>
      )}
      <input
        className={twMerge(
          inputElementStyles({
            intent,
            size,
            fullWidth,
          }),
          inputClassName
        )}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        style={inputStyle}
        ref={inputRef}
        name={name}
        {...rest}
      />
      {postfix && (
        <div
          className={twMerge(
            "absolute right-2",
            prefixPostfixStyles({
              size,
            }),
            postfixWrapperClassName
          )}
          style={postfixWrapperStyle}
        >
          {postfix}
        </div>
      )}
    </div>
  );
}

InputElement.DisplayName = "InputElement";

export default InputElement;
