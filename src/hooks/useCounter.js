import { useEffect, useState } from "react";

const useCounter = function (forward = true) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (forward) setCounter((pre) => pre + 1);
      else setCounter((pre) => pre - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [forward]);
  return counter;
};
export default useCounter;
