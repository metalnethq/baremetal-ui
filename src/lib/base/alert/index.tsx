import { ReactNode } from "react";
import useAlert from "../hooks/alert/useAlert";

export type Props = {
  className?: string;
  children?: ReactNode;
  visibilityTimeout?: number;
  onTick?: (remainingTime: number) => void;
  el?: React.ElementType;
  hidden?: boolean;
};

function BaseAlert({
  className,
  children,
  visibilityTimeout,
  onTick,
  el: El = "div",
  hidden = false,
}: Props) {
  const { isVisible, ariaAttrs, alertRef } = useAlert<HTMLElement>({
    visibilityTimeout,
    onTick,
  });

  if (hidden) {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <El ref={alertRef} {...ariaAttrs} className={className}>
      {children}
    </El>
  );
}

export default BaseAlert;
