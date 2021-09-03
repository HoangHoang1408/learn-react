import { useState, useCallback } from "react";

const useSendRequest = function () {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const sendRequest = useCallback(async function (reqConfig, applyData) {
    setIsLoading(true);
    setErr(null);
    try {
      const response = await fetch(reqConfig.url, {
        method: reqConfig.method ? reqConfig.method : "GET",
        headers: reqConfig.headers ? reqConfig.headers : {},
        body: reqConfig.body ? JSON.stringify(reqConfig.body) : null,
      });
      if (!response.ok) throw new Error("Request fail!");
      const data = await response.json();
      applyData(data);
    } catch (error) {
      setErr(error.message || "Somethings went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, []);
  return { isLoading, err, sendRequest };
};
export default useSendRequest;
