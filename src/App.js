import { Fragment } from "react";
// import AddMenu from "./components/AddMenu";
// import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Fragment>
      {/* <Cart></Cart> */}
      {/* <AddMenu></AddMenu> */}
      <NavBar></NavBar>
      <Hero></Hero>
      <Menu></Menu>
    </Fragment>
  );
}

export default App;
