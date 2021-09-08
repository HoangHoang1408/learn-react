import { useSelector } from "react-redux";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const StyledMenu = styled.section`
  width: 60%;
  min-height: 20rem;
  background-color: rgb(230, 230, 230);
  margin: 8rem auto 4rem;
  border-radius: 1rem;
  padding: 1.5rem;
  h1 {
    color: coral;
    text-align: center;
  }
`;
const Menu = () => {
  const menu = useSelector((state) => state.menu.menu);
  if (menu.length === 0)
    return (
      <StyledMenu>
        <h1>
          No menu avalable!<br></br>
          Please come later...
        </h1>
      </StyledMenu>
    );
  const listMenu = menu.map((e) => <MenuItem key={e.id} item={e}></MenuItem>);
  return <StyledMenu>{listMenu}</StyledMenu>;
};
export default Menu;
