import { cva } from "class-variance-authority";

export const loadingIconStyles = cva("", {
  variants: {
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      lg: "w-5 h-5",
      xl: "w-6 h-6",
      "2xl": "w-7 h-7",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});
