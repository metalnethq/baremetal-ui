import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import BaseAlert from "../../base/alert";
import { ReactNode } from "react";

const alert = cva("p-3", {
  variants: {
    intent: {
      primary: "border-bm_primary-300 bg-bm_primary-100 text-bm_primary-800",
      secondary:
        "border-bm_secondary-300 bg-bm_secondary-100 text-bm_secondary-800",
      danger: "border-bm_danger-300 bg-bm_danger-100 text-bm_danger-800",
      warning: "border-bm_warning-300 bg-bm_warning-100 text-bm_warning-800",
      success: "border-bm_success-300 bg-bm_success-100 text-bm_success-800",
      info: "border-bm_info-300 bg-bm_info-100 text-bm_info-800",
      light: "border-bm_light-300 bg-bm_light-100 text-bm_light-800",
      dark: "border-bm_dark-300 bg-bm_dark-100 text-bm_dark-800",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      full: "rounded-full",
    },
    alertWeight: {
      light: "border-0 font-extralight",
      normal: "border font-base",
      bold: "font-bold border-2",
    },
  },
  defaultVariants: {
    intent: "primary",
    rounded: "md",
    alertWeight: "normal",
  },
});

export interface AlertProps extends VariantProps<typeof alert> {
  children?: ReactNode;
  visibilityTimeout?: number;
  onTick?: (remainingTime: number) => void;
  hidden?: boolean;
}

function Alert({ children, visibilityTimeout, onTick, intent, alertWeight, rounded, hidden }: AlertProps) {

  return (
    <BaseAlert
      visibilityTimeout={visibilityTimeout}
      onTick={onTick}
      className={twMerge(alert({ rounded, alertWeight, intent }))}
      hidden={hidden}
    >
      {children}
    </BaseAlert>
  );
}

export default Alert;
