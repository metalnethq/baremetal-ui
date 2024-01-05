import useAlert from '../hooks/alert/useAlert';

export type Props = {
  className?: string;
  children: React.ReactNode;
  visibilityTimeout?: number;
}

function BaseAlert({ className, children, visibilityTimeout }: Props) {
  const {
    isVisible,
    ariaAttrs,
    alertRef,
    remainingTime
  } = useAlert({
    visibilityTimeout
  })

  if (!isVisible) {
    return null;
  }

  return <div ref={alertRef} {...ariaAttrs} className={className}>
    {children}
    <div>{remainingTime}</div>
  </div>

}

export default BaseAlert;
