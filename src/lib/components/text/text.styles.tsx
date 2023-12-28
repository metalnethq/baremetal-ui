import { cva } from "class-variance-authority";

const text = cva("text-base", {
  variants: {
    intent: {
      primary: "text-bm_gray-700",
      secondary: "text-bm_gray-600",
      danger: "text-bm_danger-600",
      success: "text-bm_success-600",
      info: "text-bm_info-600",
      warning: "text-bm_warning-600",
      light: "text-bm_gray-400",
      dark: "text-bm_gray-800",
    },
    weight: {
      default: "font-normal",
      extraBold: "font-extrabold",
      bold: "font-bold",
      semiBold: "font-semibold",
      light: "font-light",
      extraLight: "font-extralight",
      thin: "font-thin",
    },
    fontSize: {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
      p: "text-base",
      label: "text-base",
      span: "text-base",
      li: "text-base",
    },
  },
  defaultVariants: {
    intent: "primary",
    weight: "default",
  },
});

export default text;
