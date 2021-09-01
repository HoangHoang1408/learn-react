import { useContext } from "react";
import styled from "styled-components";
import MainContext from "../store/mainStore";
import MenuItem from "./MenuItem";

const StyledMenu = styled.section`
  width: 60%;
  min-height: 20rem;
  background-color: rgb(230, 230, 230);
  margin: 8rem auto 4rem;
  border-radius: 1rem;
  padding: 1.5rem;
`;
const Menu = () => {
  const ctx = useContext(MainContext);
  const listMenu = ctx.menu.map((e) => (
    <MenuItem item={e} key={e.id} onAddCartItem={ctx.onAddCartItem}></MenuItem>
  ));
  return <StyledMenu>{listMenu}</StyledMenu>;
};
export default Menu;
