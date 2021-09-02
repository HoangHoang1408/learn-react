import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2.5rem;
  border: 2px solid white;
  border-radius: 0.3rem;
  background: coral;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: white;
  &:hover {
    transform: translateY(-2px) scale(1.02);
  }
`;
const Button = (props) => {
  return (
    <StyledButton
      className={props.className}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </StyledButton>
  );
};
export default Button;
