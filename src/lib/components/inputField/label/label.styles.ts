import { cva } from "class-variance-authority";

export const label = cva("", {
  variants: {
    intent: {
      primary: "",
      error: "text-bm_danger-500 ",
      warning: "text-bm_warning-500",
      success: "text-bm_success-500",
      info: "text-bm_info-500",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
    bold: {
      true: "font-bold",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "sm",
    bold: false,
  },
});
