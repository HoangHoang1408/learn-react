import styled from "styled-components";
const StyledButton = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: coral;
  color: white;
  border: 2px solid white;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: translateY(-1px) scale(1.02);
  }
`;
const Button = function (props) {
  return (
    <StyledButton
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      className={props.className}
    >
      {props.children}
    </StyledButton>
  );
};
export default Button;
