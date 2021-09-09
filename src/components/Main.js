import styled from "styled-components";

const StyledMain = styled.main`
  border: 2px solid red;
  display: grid;
  place-items: center;
`;
const Main = (props) => {
  return <StyledMain>{props.children}</StyledMain>;
};
export default Main;
