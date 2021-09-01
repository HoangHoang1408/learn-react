import { Fragment, useContext } from "react";
import AddMenu from "./components/AddMenu";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import MainContext from "./store/mainStore";

function App() {
  const ctx = useContext(MainContext);
  return (
    <Fragment>
      {ctx.cartOpen && <Cart></Cart>}
      {ctx.addMenuOpen && <AddMenu></AddMenu>}
      <NavBar></NavBar>
      <Hero></Hero>
      <Menu></Menu>
    </Fragment>
  );
}

export default App;
