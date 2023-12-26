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
  inputStyles?: React.CSSProperties;
  inputWrapperStyles?: React.CSSProperties;
  prefix?: React.ReactNode;
  postfix?: React.ReactNode;
  inputClasses?: string;
  inputWrapperClasses?: string;
  prefixWrapperClasses?: string;
  postfixWrapperClasses?: string;
  postfixWrapperStyles?: React.CSSProperties;
  prefixWrapperStyles?: React.CSSProperties;
  inputRef?: React.Ref<HTMLInputElement>;
}

function InputElement({
  type = "text",
  id,
  intent,
  placeholder,
  onChange,
  size,
  inputStyles,
  inputWrapperStyles,
  prefix,
  postfix,
  inputClasses,
  inputWrapperClasses,
  prefixWrapperClasses,
  postfixWrapperClasses,
  postfixWrapperStyles,
  prefixWrapperStyles,
  fullWidth,
  inputRef,
  ...rest
}: InputElementprops) {
  return (
    <div
      className={twMerge(
        "flex items-center relative",
        wrapperStyles({
          fullWidth,
        }),
        inputWrapperClasses
      )}
      style={inputWrapperStyles}
    >
      {prefix && (
        <div
          className={twMerge(
            "absolute left-4",
            prefixPostfixStyles({
              size,
            }),
            prefixWrapperClasses
          )}
          style={prefixWrapperStyles}
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
          inputClasses
        )}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        style={inputStyles}
        ref={inputRef}
        {...rest}
      />
      {postfix && (
        <div
          className={twMerge(
            "absolute right-2",
            prefixPostfixStyles({
              size,
            }),
            postfixWrapperClasses
          )}
          style={postfixWrapperStyles}
        >
          {postfix}
        </div>
      )}
    </div>
  );
}

InputElement.DisplayName = "InputElement";

export default InputElement;
