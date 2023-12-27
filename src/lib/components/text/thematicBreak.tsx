import Text from "./text";
import { type TextProps, type El } from "./text.types";
import text from "./text.styles";
import { twMerge } from "tailwind-merge";

interface ThematicBreakProps
  extends Omit<TextProps<Exclude<El, "li">, typeof text>, "className"> {
  lineClassName?: string;
  wrapperClassName?: string;
  textClassName?: string;
  lineWrapperClassName?: string;
}

function ThematicBreak({
  el,
  children,
  wrapperClassName,
  textClassName,
  lineClassName,
  lineWrapperClassName,
  intent,
  weight,
  ...rest
}: ThematicBreakProps) {
  return (
    <div className={twMerge("relative text-center", wrapperClassName)}>
      <span
        className={twMerge(
          "absolute w-full flex justify-center items-center inset-0",
          lineWrapperClassName
        )}
      >
        <span
          className={twMerge("h-0.5 w-full border-b", lineClassName)}
        ></span>
      </span>
      <Text
        el={el}
        className={twMerge(
          "relative bg-white inline-block px-6 ",
          textClassName
        )}
        intent={intent}
        weight={weight}
        {...rest}
      >
        {children}
      </Text>
    </div>
  );
}

export default ThematicBreak;
