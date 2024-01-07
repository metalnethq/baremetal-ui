import { createElement } from "react";
import useAlert from "../hooks/alert/useAlert";

export type Props = {
  className?: string;
  children: React.ReactNode;
  visibilityTimeout?: number;
  onTick?: (remainingTime: number) => void;
  el?: keyof JSX.IntrinsicElements;
};

function BaseAlert({
  className,
  children,
  visibilityTimeout,
  onTick,
  el: El = "div",
}: Props) {
  const { isVisible, ariaAttrs, alertRef } = useAlert<HTMLDivElement>({
    visibilityTimeout,
    onTick,
  });

  if (!isVisible) {
    return null;
  }

  return createElement(El, {
    ref: alertRef,
    ...ariaAttrs,
    className: className,
    children: children,
  });
}

export default BaseAlert;
