import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 1rem 1.5rem;
  background: coral;
  border-radius: 1rem;
  color: white;
  margin: 2rem auto;
  outline: none;
  border: 2px solid white;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  &:hover {
    transform: scale(1.03) translateY(-2px);
  }
`;
const Button = function (props) {
  return (
    <StyledButton
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      className={props.className}
      type="button"
    >
      {props.children}
    </StyledButton>
  );
};
export default Button;
