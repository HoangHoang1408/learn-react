import React, { Fragment, useContext } from "react";
import reactDom from "react-dom";
import styled from "styled-components";
import MainContext from "../store/mainStore";
import CartItem from "./CartItem";
import Button from "./UI/Button";

const StyledCart = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  .overlay {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .cart {
    padding: 2rem 2rem 1rem;
    position: absolute;
    z-index: 6;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    background-color: white;
    width: 50vw;
    color: black;
    display: grid;
  }
  .button {
    margin-right: 0.5rem;
  }
  .part {
    display: flex;
    justify-content: space-between;
  }
  .cart__body {
  }
  .cart__bottom {
    justify-content: flex-end;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;
const Cart = function () {
  const ctx = useContext(MainContext);
  let totalPrice = 0;
  const cartItems = ctx.cartItem.map((e) => {
    totalPrice += e.price * e.amount;
    return <CartItem item={e} key={e.id}></CartItem>;
  });

  return (
    <Fragment>
      {reactDom.createPortal(
        <StyledCart>
          <div className="overlay" onClick={ctx.onCartClose}></div>
          <div className="cart">
            {cartItems}
            <div className="cart__body part">
              <h1>Total Price</h1>
              <h2 className="price">${totalPrice}</h2>
            </div>
            <div className="cart__bottom part">
              <Button className="button">Order</Button>
              <Button onClick={ctx.onCartClose}>Close</Button>
            </div>
          </div>
        </StyledCart>,
        document.getElementById("cart-root")
      )}
    </Fragment>
  );
};
export default Cart;
