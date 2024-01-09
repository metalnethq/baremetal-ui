import Alert from "../../lib/components/alert";
import React from "react";
import useAlert from "../../lib/base/hooks/alert/useAlert";
import "../../index.css";
import Button from "../../lib/components/button";

function RemainingTime() {
  const { remainingTime = 0, resetRemainingTime } = useAlert({
    visibilityTimeout: 5000,
  });

  if (remainingTime === null) {
    return null;
  }

  const timeInSeconds = Math.ceil(remainingTime / 1000);

  return (
    <>
      {" "}
      <Alert hidden={!remainingTime}>
        <div>
          This is an alert. It will dissapear in {timeInSeconds} seconds.
        </div>
      </Alert>
      <Button
        onClick={() => {
          resetRemainingTime();
        }}
        className="mt-4"
      >
        {timeInSeconds ? "Reset timer" : "Show alert"}
      </Button>
    </>
  );
}

export default RemainingTime;
