import { cva } from "class-variance-authority";

export const errorStyles = cva("", {
  variants: {
    intent: {
      primary: "text-bm_primary-600",
      warning: "text-bm_warning-600",
      error: "text-bm_danger-600 text",
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
  },
  defaultVariants: {
    intent: "error",
    size: "sm",
  },
});
