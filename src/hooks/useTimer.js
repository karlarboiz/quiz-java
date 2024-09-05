import { useState, useEffect } from "react";

export default function useTimer(time,onTimeUp) {
  const [timespan, setTimespan] = useState(time);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan((prevTimespan) => {
        if (prevTimespan <= 1) {
          clearInterval(intervalId);

          if (onTimeUp) onTimeUp();
          return 0;
        }
        return prevTimespan - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); 
  }, [time,onTimeUp]);

  return {
    timer: timespan
  };
}
