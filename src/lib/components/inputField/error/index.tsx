import { VariantProps } from "class-variance-authority";
import { errorStyles } from "./error.styles";

type ComponentProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

interface ErrorProps extends ComponentProps, VariantProps<typeof errorStyles> {}

export default function Error({
  children,
  className,
  intent,
  size,
  style,
}: ErrorProps) {
  return (
    <div
      className={`${errorStyles({
        intent,
        size,
      })} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
