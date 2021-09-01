import React, { useReducer } from "react";
const MainContext = React.createContext({
  cartOpen: undefined,
  addMenuOpen: undefined,
  onCartOpen: undefined,
  onCartClose: undefined,
  onAddMenuClose: undefined,
  onAddMenuOpen: undefined,
  onAddNewMenu: undefined,
  menu: undefined,
  cartItem: undefined,
  onAddCartItem: undefined,
  onAddAmount: undefined,
  onDecreaseAmount: undefined,
});

const dummyMenu = [
  {
    title: "Shushi 1",
    descript: "Delicious 1",
    price: 199,
    id: "s1",
  },
  {
    title: "Shushi 2",
    descript: "Delicious 2",
    price: 299,
    id: "s2",
  },
  {
    title: "Shushi 3",
    descript: "Fucking Delicious 3",
    price: 399,
    id: "s3",
  },
  {
    title: "Shushi 3",
    descript: "Fucking Delicious 3",
    price: 399,
    id: "s4",
  },
];
const DefaultState = {
  menu: dummyMenu,
  cartItem: [],
  cartOpen: false,
  addMenuOpen: false,
};
const MainReducer = (state, action) => {
  if (action.type === "CART_OPEN") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.cartOpen = true;
    return newState;
  }
  if (action.type === "CART_CLOSE") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.cartOpen = false;
    return newState;
  }
  if (action.type === "ADDMENU_CLOSE") {
    const newState = { ...state };
    newState.addMenuOpen = false;
    return newState;
  }
  if (action.type === "ADDMENU_OPEN") {
    const newState = { ...state };
    newState.addMenuOpen = true;
    return newState;
  }
  if (action.type === "ADDCARTITEM") {
    const newState = JSON.parse(JSON.stringify(state));
    let exist = false;
    newState.cartItem.forEach((e) => {
      if (e.id === action.item.id) {
        e.amount += action.amount;
        exist = true;
      }
    });
    if (!exist) {
      action.item.amount = action.amount;
      newState.cartItem.push(action.item);
    }
    return newState;
  }
  if (action.type === "ADDAMOUNT") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.cartItem.forEach((e) => {
      if (e.id === action.item.id) {
        e.amount += 1;
      }
    });
    return newState;
  }
  if (action.type === "DESAMOUNT") {
    const newState = JSON.parse(JSON.stringify(state));
    const index = newState.cartItem.findIndex((e) => e.id === action.item.id);
    newState.cartItem[index].amount -= 1;
    if (newState.cartItem[index].amount === 0)
      newState.cartItem.splice(index, 1);
    return newState;
  }
  if (action.type === "ADDNEWMENU") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.menu.push(action.menu);
    return newState;
  }
};
export const MainContextProvider = (props) => {
  const [state, dispatchStateAction] = useReducer(MainReducer, DefaultState);

  const handleAddCartItem = function (item, amount) {
    dispatchStateAction({ type: "ADDCARTITEM", item, amount });
  };
  const handleAddAmount = function (item) {
    dispatchStateAction({ type: "ADDAMOUNT", item });
  };
  const handleDecreaseAmount = function (item) {
    dispatchStateAction({ type: "DESAMOUNT", item });
  };
  // open and close state
  const handleCartOpen = function () {
    dispatchStateAction({ type: "CART_OPEN", cartOpen: true });
  };
  const handleCartClose = function () {
    dispatchStateAction({ type: "CART_CLOSE", cartOpen: false });
  };
  const handleAddMenuOpen = function () {
    dispatchStateAction({ type: "ADDMENU_OPEN", addMenuOpen: true });
  };
  const handleAddMenuClose = function () {
    dispatchStateAction({ type: "ADDMENU_CLOSE", addMenuOpen: false });
  };
  const handleAddNewMenu = function (menu) {
    dispatchStateAction({ type: "ADDNEWMENU", menu });
  };

  return (
    <MainContext.Provider
      value={{
        menu: state.menu,
        cartItem: state.cartItem,
        cartOpen: state.cartOpen,
        addMenuOpen: state.addMenuOpen,
        //
        onCartOpen: handleCartOpen,
        onCartClose: handleCartClose,
        onAddMenuClose: handleAddMenuClose,
        onAddMenuOpen: handleAddMenuOpen,
        onAddNewMenu: handleAddNewMenu,
        onAddCartItem: handleAddCartItem,
        onAddAmount: handleAddAmount,
        onDecreaseAmount: handleDecreaseAmount,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
export default MainContext;
