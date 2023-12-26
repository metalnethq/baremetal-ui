import { cva } from "class-variance-authority";

const inputElementStyles = cva(
  "focus:ring-1 focus:outline-none focus:ring-inset",
  {
    variants: {
      intent: {
        error:
          "border text-bm_danger-600 border-bm_danger-500 rounded focus:ring-bm_danger-500 ",
        primary:
          "border border-bm_gray-300 rounded focus:ring-bm_primary-500 focus:border-bm_primary-500",
        warning:
          "border text-bm_warning-600 border-bm_warning-500 rounded focus:ring-bm_warning-500 focus:border-bm_warning-500",
        success:
          "border text-bm_success-600 border-bm_success-500 rounded focus:ring-bm_success-500 focus:border-bm_success-500",
        info: "border  text-bm_info-600 border-bm_info-500 rounded focus:ring-bm_info-500 focus:border-bm_info-500",
      },
      size: {
        xs: "text-xs px-1 py-0.5",
        sm: "text-sm px-2 py-2",
        lg: "text-lg px-2 py-2",
        xl: "text-xl px-3 py-3",
        "2xl": "text-2xl px-4 py-3",
        "3xl": "text-3xl px-5 py-4",
        "4xl": "text-4xl px-6 py-4",
        "5xl": "text-5xl px-7 py-5",
        "6xl": "text-6xl px-8 py-6",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "sm",
      fullWidth: true,
    },
  }
);

export default inputElementStyles;
