import { cva } from "class-variance-authority";

export const inputField = cva("", {
  variants: {
    layout: {
      row: "flex flex-row",
      col: "flex flex-col",
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
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    layout: "col",
    fullWidth: true,
    size: "sm",
  },
});
