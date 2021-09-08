import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddMenu from "./components/AddMenu";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import { getMenuData, putMenuData } from "./store/menuSlice";
import { getCartData, putCartData } from "./store/cartSlice";

function App() {
  const dispatch = useDispatch();

  const cartOpen = useSelector((state) => state.ui.cartOpen);
  const addMenuOpen = useSelector((state) => state.ui.addMenuOpen);

  const cart = useSelector((state) => state.cart);
  const menus = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenuData());
    dispatch(getCartData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(putMenuData(menus));
  }, [menus, dispatch]);
  useEffect(() => {
    dispatch(putCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {cartOpen && <Cart></Cart>}
      {addMenuOpen && <AddMenu></AddMenu>}
      <NavBar></NavBar>
      <Hero></Hero>
      <Menu></Menu>
    </Fragment>
  );
}

export default App;
