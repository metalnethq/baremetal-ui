import { useState, useEffect, useRef } from 'react';

export type Params = {
  visibilityTimeout?: number;
  onClose?: () => void;
  externalAccessibilityProps?: Record<string, string>;
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

function useAlert({ visibilityTimeout, onClose, externalAccessibilityProps }: Params = {}): Return {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(visibilityTimeout || undefined);

  const alertRef = useRef<HTMLElement>(null);

  const handleClose = () => {
    setIsVisible(!isVisible);
    onClose && onClose();
  };

  useEffect(() => {
    if (visibilityTimeout) {
      setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime !== 0) {
            onClose && onClose();
            return Math.max(0, prevTime - 1000);
          }
        })
      }, 1000);
    }

  }, [isVisible, visibilityTimeout,]);

  const accessibilityProps = {
    role: 'alert',
    'aria-live': 'polite',
    'aria-describedby': alertRef.current?.id,
    ...(externalAccessibilityProps && { externalAccessibilityProps }),
  }


  useEffect(() => {
    if (visibilityTimeout) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose && onClose();
      }, visibilityTimeout)

      return () => clearTimeout(timer);
    }
  }, [visibilityTimeout, onClose]);

  return { isVisible, remainingTime, alertRef, handleClose, ariaAttrs: accessibilityProps }
}


export default useAlert;
