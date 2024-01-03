import { useState } from "react";

function useDismiss(autoDismissTime: number | undefined) {
  const [isDismissed, setIsDismiss] = useState(false)

  if (autoDismissTime) {
    setTimeout(() => {
      setIsDismiss(true)
    }, autoDismissTime)
  }

  const handleDismiss = () => {
    setIsDismiss(true)
  }

  return [
    isDismissed,
    handleDismiss
  ]
}

export default useDismiss;
