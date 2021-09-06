import { useState } from "react";
const useInput = function () {
  const [redField, setRedField] = useState(false);
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(false);
  const reset = function () {
    setRedField(false);
    setInput("");
    setIsValid(false);
  };
  return {
    state: { redField, input, isValid },
    setState: { setInput, setIsValid, setRedField, reset },
  };
};
export default useInput;
