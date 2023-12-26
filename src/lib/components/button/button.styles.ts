import { cva } from "class-variance-authority";

export const button = cva("cursor-pointer items-center self-start", {
  variants: {
    intent: {
      primary:
        "bg-bm_primary-600 text-white hover:bg-bm_primary-500 cursor-pointer focus-visible:outline focus-visible:outline-bm_primary-600 focus-visible:outline-offset-2",
      secondary:
        "border-bm_gray-600 bg-bm_gray-600 text-bm_gray-200 hover:bg-bm_gray-300 hover:text-bm_gray-800 focus-visible:outline focus-visible:outline-bm_gray-300 focus-visible:outline-offset-2",
      success:
        "bg-bm_success-600 text-white hover:bg-bm_success-500 hover:text-white focus-visible:outline focus-visible:outline-bm_success-600 focus-visible:outline-offset-2",
      danger:
        "bg-bm_danger-600 text-white hover:bg-bm_danger-500 hover:text-white focus-visible:outline focus-visible:outline-bm_danger-600 focus-visible:outline-offset-2",
      warning:
        "bg-bm_warning-600 text-white hover:bg-bm_warning-500 hover:text-white focus-visible:outline focus-visible:outline-bm_warning-600 focus-visible:outline-offset-2",
      info: "bg-bm_info-600 text-white hover:bg-bm_info-500 hover:text-white focus-visible:outline focus-visible:outline-bm_info-600 focus-visible:outline-offset-2",
      light:
        "bg-bm_gray-100 text-bm_gray-600 hover:bg-bm_gray-300 hover:text-bm_gray-800 focus-visible:outline focus-visible:outline-bm_gray-300 focus-visible:outline-offset-2",
      dark: "bg-bm_gray-700 text-bm_gray-100 hover:bg-bm_gray-600 hover:text-bm_gray-200 focus-visible:outline focus-visible:outline-bm_gray-600 focus-visible:outline-offset-2",
    },
    size: {
      xs: "px-2 py-0.5 text-xs",
      sm: "px-3 py-1 text-sm",
      lg: "px-4 py-2 text-base",
      xl: "px-6 py-3 text-base",
      "2xl": "px-8 py-4 text-lg",
    },
    fullWidth: {
      true: "w-full",
    },
    borderStyle: {
      dashed: "border-dashed border-2",
      double: "border-double border-2",
      dotted: "border-dotted border-2",
      solid: "border-solid border-2",
      none: "border-none",
    },
    disabled: {
      true: "opacity-50 disabled:pointer-events-none",
    },
    rounded: {
      none: "rounded-none",
      xs: "rounded-sm",
      sm: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    bold: {
      true: "font-bold",
    },
    reverseItems: {
      true: "flex-row-reverse",
    },
    selfAlign: {
      start: "self-start",
      center: "self-center",
      end: "self-end",
      stretch: "self-stretch",
      auto: "self-auto",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "lg",
    disabled: false,
    rounded: "sm",
    bold: false,
    reverseItems: true,
    borderStyle: "none",
    fullWidth: false,
  },
});
