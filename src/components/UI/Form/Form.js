import styled, { css } from "styled-components";
import Button from "./UI/Button";
import Card from "./UI/Card";
import Input from "./Input";
import useInput from "./useInput";
import { useEffect, useState } from "react";

// style
const StyledButton = styled(Button)`
  ${({ inValid }) =>
    inValid &&
    css`
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}
`;
const StyledForm = styled(Card)`
  form {
    width: 70%;
    display: grid;
    place-items: center;
  }
`;

// form component
const Form = (props) => {
  console.log("hello");
  const [inValid, setInValid] = useState(true);

  const { state: usernameState, setState: setUsernameState } = useInput();
  const checkPassword = (val) => val.length >= 8;

  const { state: passwordState, setState: setPasswordState } = useInput();
  const checkUsername = (val) => val.includes("@");

  useEffect(() => {
    if (usernameState.isValid && passwordState.isValid) {
      return setInValid(false);
    } else setInValid(true);
  }, [usernameState.isValid, passwordState.isValid]);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (inValid) return;
    setPasswordState.reset();
    setUsernameState.reset();
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <Input
          state={usernameState}
          setState={setUsernameState}
          checkFunc={checkUsername}
          type="text"
          id="Username"
        ></Input>
        <Input
          state={passwordState}
          setState={setPasswordState}
          checkFunc={checkPassword}
          type="password"
          id="Password"
        ></Input>
        <StyledButton inValid={inValid}>Submit</StyledButton>
      </form>
    </StyledForm>
  );
};

export default Form;
