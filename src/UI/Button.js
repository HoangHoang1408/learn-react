import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.7rem 2rem;
  background-color: rgb(180, 78, 41);
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  color: white;
  border: 1px solid white;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &:hover {
    transform: translateY(-1px) scale(1.04);
  }
`;
const Button = (props) => {
  return (
    <StyledButton className={props.className} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};
export default Button;
