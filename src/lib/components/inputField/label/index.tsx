import Text from "../../text";
import { VariantProps } from "class-variance-authority";
import { label } from "./label.styles";
import { twMerge } from "tailwind-merge";

export type ComponentProps = {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
  style?: React.CSSProperties;
};

export interface LabelProps
  extends VariantProps<typeof label>,
    ComponentProps {}

export default function Label({
  children,
  htmlFor,
  className,
  intent,
  bold,
  size,
  style,
}: LabelProps) {
  return (
    <Text
      el="label"
      className={twMerge(
        label({
          intent,
          size,
          bold,
        }),
        className
      )}
      htmlFor={htmlFor}
      style={style}
    >
      {children}
    </Text>
  );
}
