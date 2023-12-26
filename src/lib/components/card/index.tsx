import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Heading from "./heading";
import Body from "./body";
import Footer from "./footer";
import ShimmerLoader from "../loader/shimmer";

const card = cva("shadow rounded box-border bg-white", {
  variants: {
    width: {
      "1/4": "w-1/4",
      "1/3": "w-1/3",
      "1/2": "w-1/2",
      "2/3": "w-2/3",
      "3/4": "w-3/4",
      "60": "w-60",
      "64": "w-64",
      "72": "w-72",
      "80": "w-80",
      "96": "w-96",
      full: "w-full",
      auto: "w-auto",
      screen: "w-screen",
    },
    minWidth: {
      full: "min-w-full",
      min: "min-w-min",
      max: "min-w-max",
      fit: "min-w-fit",
      "60": "min-w-60",
      "64": "min-w-64",
      "72": "min-w-72",
      "80": "min-w-80",
      "96": "min-w-96",
    },
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
      full: "max-w-full",
      min: "max-w-min",
      max: "max-w-max",
      fit: "max-w-fit",
      prose: "max-w-prose",
      none: "max-w-none",
      "60": "max-w-60",
      "64": "max-w-64",
      "72": "max-w-72",
      "80": "max-w-80",
      "96": "max-w-96",
    },
  },
});

type ComponentProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  actionAlignment?: "left" | "right" | "evenly" | "between";
  actionWrapperClassName?: string;
  borderedActions?: boolean;
  loading?: boolean;
  bodyWrapperClassName?: string;
  headerWrapperClassName?: string;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  footerStyle?: React.CSSProperties;
  footerWrapperClassName?: string;
};

interface CardProps extends ComponentProps, VariantProps<typeof card> {}

function Card({
  children,
  className,
  style,
  title,
  actions,
  actionWrapperClassName,
  actionAlignment = "evenly",
  borderedActions,
  loading = false,
  bodyWrapperClassName,
  headerWrapperClassName,
  headerStyle,
  bodyStyle,
  footerStyle,
  footerWrapperClassName,
  width,
  minWidth,
  maxWidth,
  ...rest
}: CardProps) {
  if (loading) {
    return (
      <div className={twMerge(className)} style={style} {...rest}>
        <ShimmerLoader />
      </div>
    );
  }
  return (
    <div
      className={twMerge(
        card({
          width,
          minWidth,
          maxWidth,
        }),
        className
      )}
      style={style}
      {...rest}
    >
      {title && (
        <Heading
          el="header"
          wrapperClassName={headerWrapperClassName}
          style={headerStyle}
        >
          {title}
        </Heading>
      )}
      <Body el="div" className={bodyWrapperClassName} style={bodyStyle}>
        {children}
      </Body>
      {actions && (
        <Footer
          el="footer"
          bordered={borderedActions}
          actionWrapperClassName={actionWrapperClassName}
          wrapperClassName={footerWrapperClassName}
          align={actionAlignment}
          actions={actions}
          style={footerStyle}
        />
      )}
    </div>
  );
}

export default Card;

export { Heading, Body, Footer };
