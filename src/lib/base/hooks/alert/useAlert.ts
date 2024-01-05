
import { useState, useEffect, useRef, useCallback } from 'react';

export type Params = {
  visibilityTimeout?: number;
  onClose?: () => void;
  externalAccessibilityProps?: Record<string, string>;
  onTick?: (remainingTime: number) => void;
}

export type Return = {
  isVisible: boolean;
  remainingTime?: number;
  alertRef: React.RefObject<HTMLElement>;
  handleClose: () => void;
  ariaAttrs?: {
    role: string;
    'aria-live': string;
    'aria-describedby'?: string;
  }
}

function useAlert({ visibilityTimeout, onClose, externalAccessibilityProps, onTick }: Params = {}): Return {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(visibilityTimeout);

  const alertRef = useRef<HTMLElement>(null);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    onClose && onClose();
  }, [onClose]);

  useEffect(() => {
    if (visibilityTimeout && isVisible) {
      const interval = setInterval(() => {
        setRemainingTime(prevTime => {
          const newTime = Math.max(0, (prevTime ?? 0) - 1000);
          onTick && onTick(newTime);
          if (newTime === 0) {
            clearInterval(interval); handleClose();
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isVisible, visibilityTimeout, onTick, handleClose]);

  const accessibilityProps = {
    role: 'alert',
    'aria-live': 'polite',
    'aria-describedby': alertRef.current?.id,
    ...externalAccessibilityProps,
  }

  return {
    isVisible,
    remainingTime,
    alertRef,
    handleClose,
    ariaAttrs: accessibilityProps,
  }
}

export default useAlert;

