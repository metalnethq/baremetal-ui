import Spinner from "../loader/spinner";
import { VariantProps } from "class-variance-authority";
import { button } from "./button.styles";
import { twMerge } from "tailwind-merge";
import { ReactNode, MouseEvent } from "react";

interface ButtonProps
  extends VariantProps<typeof button>,
    Omit<React.HTMLProps<HTMLButtonElement>, "disabled" | "size"> {
  children: React.ReactNode;
  loading?: boolean;
  loadingIcon?: ReactNode | string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  type?: "submit" | "reset" | "button";
  textWrapperClassName?: string;
}

function Button({
  children,
  intent,
  size,
  disabled,
  rounded,
  loading,
  bold,
  loadingIcon,
  onClick,
  reverseItems = false,
  style,
  type,
  borderStyle,
  className,
  fullWidth,
  selfAlign,
  textWrapperClassName,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={twMerge(
        "flex justify-center",
        button({
          intent,
          size,
          disabled: isDisabled,
          rounded,
          bold,
          reverseItems,
          borderStyle,
          fullWidth,
          selfAlign,
        }),
        className
      )}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={loading}
      style={style}
      type={type}
      {...rest}
    >
      {loading && <Spinner loadingIcon={loadingIcon} size={size} />}
      <span className={twMerge("ml-1 mr-1", textWrapperClassName)}>
        {children}
      </span>
    </button>
  );
}

Button.DisplayName = "Button";

export default Button;
