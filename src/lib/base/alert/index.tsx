import useAlert from '../hooks/alert/useAlert';

export type Props = {
  className?: string;
  children: React.ReactNode;
  visibilityTimeout?: number;
  onTick?: (remainingTime: number) => void;
}

function BaseAlert({ className, children, visibilityTimeout, onTick }: Props) {
  const {
    isVisible,
    ariaAttrs,
    alertRef,
    remainingTime,
  } = useAlert({
    visibilityTimeout,
    onTick
  })

  if (!isVisible) {
    return null;
  }
  return <div ref={alertRef} {...ariaAttrs} className={className}>
    {children}
  </div>

}

export default BaseAlert;
