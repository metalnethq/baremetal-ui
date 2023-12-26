import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const form = cva("", {
  variants: {
    layout: {
      inline: "flex flex-row justify-center items-center",
      stacked: "flex flex-col",
    },
  },
  defaultVariants: {
    layout: "stacked",
  },
});

export interface ComponentProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

export interface FormProps extends ComponentProps, VariantProps<typeof form> {}

export default function Form({ children, name, layout, ...rest }: FormProps) {
  return (
    <form
      name={name}
      className={twMerge(
        form({
          layout,
        })
      )}
      {...rest}
    >
      {children}
    </form>
  );
}
