import { VariantProps } from "class-variance-authority";

export type El =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "li"
  | "span"
  | "label";

export type ComponentProps<T extends El> = {
  el?: T;
} & JSX.IntrinsicElements[T];

export type TextProps<
  T extends El,
  U extends (...args: Parameters<U>) => ReturnType<U>
> = ComponentProps<T> & VariantProps<U>;
