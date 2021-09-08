import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: [],
  },
  reducers: {
    setMenu(state, action) {
      state.menu = action.payload.menu;
    },
    addToMenu(state, action) {
      state.menu.push(action.payload.menu);
    },
  },
});
export const getMenuData = function () {
  return (dispatch) => {
    const fetchData = async function () {
      const res = await fetch(
        "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/menu.json"
      );
      if (!res.ok) throw new Error("Request fail!");
      const rawData = await res.json();
      const menu = [];
      if (rawData)
        for (const item of Object.keys(rawData.menu)) {
          menu.push(rawData.menu[item]);
        }
      dispatch(menuSlice.actions.setMenu({ menu }));
    };
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
};
export const putMenuData = function (menu) {
  return (dispatch) => {
    const putData = async () => {
      const res = await fetch(
        "https://learn-react-676ec-default-rtdb.asia-southeast1.firebasedatabase.app/menu.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(menu),
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
export const menuAction = menuSlice.actions;
export default menuSlice;
