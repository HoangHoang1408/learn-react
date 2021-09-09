import { useCallback, useReducer } from "react";

const httpReducer = function (state, action) {
  if (action.type === "send") {
    return {
      status: "pending",
      data: null,
      error: null,
    };
  }
  if (action.type === "success") {
    return {
      status: "completed",
      data: action.resData,
      error: null,
    };
  }
  if (action.type === "error") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage,
    };
  }
};

const useHttp = (requestFunc, startWithPending) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });
  const sendRequest = useCallback(async function (data) {
    dispatch({ type: "send" });
    try {
      const resData = await requestFunc(data);
      dispatch({ type: "success", resData });
    } catch (err) {
      dispatch({
        type: "error",
        errorMessage: err.message || "Something went wrong",
      });
    }
  },[requestFunc]);
  return {
    sendRequest,
    ...httpState,
  };
};
export default useHttp;
