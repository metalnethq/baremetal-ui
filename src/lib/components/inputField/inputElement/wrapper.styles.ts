import { cva } from "class-variance-authority";

const wrapperStyles = cva("", {
  variants: {
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export default wrapperStyles;
