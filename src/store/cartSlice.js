import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    setCart(state, action) {
      state.items = action.payload.items;
    },
    addCartItem(state, action) {
      const item = state.items.find((e) => e.id === action.payload.item.id);
      if (!item) {
        state.items.push(
          Object.assign(
            {
              totalPrice: action.payload.item.price * action.payload.amount,
              quantity: action.payload.amount,
            },
            action.payload.item
          )
        );
      } else {
        item.quantity += action.payload.amount;
        item.totalPrice += action.payload.amount * item.price;
      }
    },
    removeCartItem(state, action) {
      const item = state.items.find((e) => e.id === action.payload.id);
      if (item.quantity === 1)
        state.items = state.items.filter((e) => e.id !== action.payload.id);
      else item.quantity--;
    },
  },
});
export const putCartData = function (cart) {
  return (dispatch) => {
    const putData = async () => {
      const res = await fetch(
        "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );
      if (!res.ok) throw new Error("Request fail!");
    };
    try {
      putData();
    } catch (err) {
      console.log(err);
    }
  };
};
export const getCartData = function () {
  return (dispatch) => {
    const fetchData = async function () {
      const res = await fetch(
        "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!res.ok) throw new Error("Request fail!");
      const rawData = await res.json();
      const items = [];
      if (rawData)
        for (const item of Object.keys(rawData.items)) {
          items.push(rawData.items[item]);
        }
      dispatch(cartSlice.actions.setCart({ items }));
    };
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
};
export const cartAction = cartSlice.actions;
export default cartSlice;
