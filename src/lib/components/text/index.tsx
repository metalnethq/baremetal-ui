import text from "./text.styles";
import { createElement } from "react";
import { twMerge } from "tailwind-merge";
import { type El, type TextProps } from "./text.types";

function Text<T extends El>({
  el,
  children,
  className,
  intent,
  weight,
  ...props
}: TextProps<T, typeof text>) {
  // using return <El {...props}>{children}</El>; does not work as the compiler
  // complain about type mismatch due to the dynamic nature of the element type
  // (generic T). So decided to use React.createElement instead.
  const Element = el || "p";
  return createElement(
    Element,
    {
      ...props,
      className: twMerge(
        text({
          intent: intent,
          weight: weight,
          fontSize: Element,
        }),
        className
      ),
    },
    children
  );
}

export default Text;
