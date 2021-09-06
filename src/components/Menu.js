import { useContext, useEffect, useState } from "react";
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
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/menus.json"
      );
      const data = await res.json();
      const list = [];
      for (const x in data) {
        list.push(data[x]);
      }
      setMenu(list);
    };
    fetchData();
  }, [ctx.reFetch]);
  const listMenu = menu.map((e) => (
    <MenuItem item={e} key={e.id} onAddCartItem={ctx.onAddCartItem}></MenuItem>
  ));
  return <StyledMenu>{listMenu}</StyledMenu>;
};
export default Menu;
