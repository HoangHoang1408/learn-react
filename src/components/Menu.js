import styled from "styled-components";
import MenuItem from "./MenuItem";

const StyledMenu = styled.section`
  width: 60%;
  min-height: 20rem;
  background-color: rgb(230, 230, 230);
  margin: 8rem auto 4rem;
  border-radius: 1rem;
  padding: 1.5rem;
`;
const Menu = (props) => {
  return (
    <StyledMenu>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </StyledMenu>
  );
};
export default Menu;
