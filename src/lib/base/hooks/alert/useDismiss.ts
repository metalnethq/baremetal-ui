import { useState } from "react";

function useDismiss(autoDismissTime?: number | undefined): [boolean, () => void] {
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
