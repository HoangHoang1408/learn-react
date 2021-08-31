import { useContext, useEffect, useReducer, useState } from "react";
import styled, { css } from "styled-components";
import AuthContext from "../store/auth-context";
import Button from "../UI/Button";
import Card from "../UI/Card";

const StyledCard = styled(Card)`
  form {
    width: 80%;
  }
  .inputDiv {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  label {
    place-self: center end;
  }
  ${({ emailField }) =>
    emailField &&
    css`
      #email {
        background-color: rgba(255, 0, 0, 0.259);
      }
    `}
  ${({ passwordField }) =>
    passwordField &&
    css`
      #password {
        background-color: rgba(255, 0, 0, 0.259);
      }
    `}
`;

const emailReducer = function (state, action) {
  if (action.type === "BLUR") {
    const a = state.value.trim().includes("@");
    return {
      value: state.value,
      isValid: a,
      redField: !a,
    };
  }
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isValid: state.isValid,
      redField: state.redField,
    };
  }
  if (action.type === "FOCUS") {
    return {
      value: state.value,
      isValid: state.isValid,
      redField: false,
    };
  }
  return { value: "", isValid: false, redField: false };
};

// password reducer
const passwordReducer = function (state, action) {
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isValid: state.value.length >= 8,
      redField: state.value.length < 8,
    };
  }
  if (action.type === "CHANGE") {
    return {
      value: action.value,
      isValid: state.isValid,
      redField: state.redField,
    };
  }
  if (action.type === "FOCUS") {
    return {
      value: state.value,
      isValid: state.isValid,
      redField: false,
    };
  }
  return { value: "", isValid: false, redField: false };
};
const Login = function (props) {
  // context
  const ctx = useContext(AuthContext);

  //   email states
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
    redField: false,
  });

  //   password state
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
    redField: false,
  });

  // form state
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    setValidForm(passwordState.isValid && emailState.isValid);
  }, [passwordState.isValid, emailState.isValid]);

  //   email handle
  const handleEmailBlur = function (e) {
    dispatchEmail({ type: "BLUR" });
  };
  const handleEmailChange = function (e) {
    dispatchEmail({ type: "CHANGE", value: e.target.value });
  };
  const handleEmailFocus = function () {
    dispatchEmail({ type: "FOCUS" });
  };

  //   pass handle
  const handlePasswordBlur = function () {
    dispatchPassword({ type: "BLUR" });
  };
  const handlePasswordChange = function (e) {
    dispatchPassword({ type: "CHANGE", value: e.target.value });
  };
  const handlePasswordFocus = function () {
    dispatchPassword({ type: "FOCUS" });
  };

  // form handle
  const handleSubmit = function (e) {
    if (!validForm) return;
    ctx.onLogin();
  };
  return (
    <StyledCard
      emailField={emailState.redField}
      passwordField={passwordState.redField}
    >
      <form className={props.className}>
        <div className="inputDiv">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            className="usernameInput"
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            onFocus={handleEmailFocus}
          ></input>
        </div>
        <div className="inputDiv">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="passwordInput"
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
          ></input>
        </div>
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </StyledCard>
  );
};
export default Login;
