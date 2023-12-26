import { ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { inputField } from "./inputField.styles";

type ComponentProps = {
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
};

interface InputFieldProps
  extends ComponentProps,
    VariantProps<typeof inputField> {}

export function InputField({
  className,
  children,
  layout,
  size,
  style,
  fullWidth,
}: InputFieldProps) {
  return (
    <div
      className={twMerge(
        inputField({
          layout,
          size,
          fullWidth,
        }),
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

InputField.DisplayName = "InputField";
