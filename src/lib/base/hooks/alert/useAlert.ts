import { useState, useEffect, useRef, useCallback } from "react";

export type Params = {
  visibilityTimeout?: number;
  onClose?: () => void;
  accessibilityProps?: Record<string, string>;
  onTick?: (remainingTime: number) => void;
};

export type Return = {
  isVisible: boolean;
  remainingTime?: number;
  alertRef: React.RefObject<HTMLElement>;
  handleClose: () => void;
  ariaAttrs?: {
    role: "alert";
    "aria-live"?: "polite" | "assertive" | "off";
  };
  resetRemainingTime: () => void;
};

function useAlert<T extends HTMLElement>({
  visibilityTimeout,
  onClose,
  accessibilityProps: externalAccessibilityProps,
  onTick,
}: Params = {}): Return {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(visibilityTimeout);

  const alertRef = useRef<T>(null);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    onClose?.();
  }, [onClose]);

  const resetRemainingTime = useCallback(() => {
    setRemainingTime(visibilityTimeout);
  }, []);

  useEffect(() => {
    if (visibilityTimeout && isVisible) {
      const interval = setInterval(() => {
        setRemainingTime((prevTime) => {
          const newTime = Math.max(0, (prevTime ?? 0) - 1000);
          onTick?.(newTime);
          if (newTime === 0) {
            clearInterval(interval);
            handleClose();
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isVisible, visibilityTimeout, onTick, handleClose]);

  const accessibilityProps = {
    role: "alert" as const,
    "aria-live": "polite" as const,
    ...externalAccessibilityProps,
  };

  return {
    isVisible,
    remainingTime,
    alertRef,
    handleClose,
    ariaAttrs: accessibilityProps,
    resetRemainingTime,
  };
}

export default useAlert;
