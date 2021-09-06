import styled, { css } from "styled-components";

const StyledInput = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  place-items: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: coral;
  label {
    place-self: center end;
  }
  input {
    font-weight: 600;
    width: 80%;
    padding: 0.5rem;
    border: 3px solid coral;
    outline: none;
    color: coral;
  }
  ${({ red }) =>
    red &&
    css`
      input {
        background-color: rgba(255, 0, 0, 0.1);
      }
    `}
`;

const Input = (props) => {
  return (
    <StyledInput className={props.className} red={props.state.redField}>
      <label htmlFor={props.id}>{props.id}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.state.input}
        onChange={(e) => {
          props.setState.setInput(e.target.value);
          props.setState.setIsValid(props.checkFunc(e.target.value));
        }}
        onBlur={() => props.setState.setRedField(!props.state.isValid)}
        onFocus={() => props.setState.setRedField(false)}
      ></input>
    </StyledInput>
  );
};

export default Input;
