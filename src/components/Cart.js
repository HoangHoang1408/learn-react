import React, { Fragment } from "react";
import reactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { uiAction } from "../store/uiSlice";
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
    width: 60vw;
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
  h2 {
    text-align: center;
  }
  ${({ orderAvailable }) =>
    !orderAvailable &&
    css`
      .button {
        opacity: 0.6;
      }
      .button:hover {
        transform: none;
      }
    `}
`;
const Cart = function () {
  const dispatch = useDispatch();
  const hanleCloseCart = () => {
    dispatch(uiAction.closeCart());
  };
  const items = useSelector((e) => e.cart.items);
  const listItem = items.map((e) => <CartItem key={e.id} item={e}></CartItem>);
  const totalPrice = items.reduce(
    (totalPrice, e) => (totalPrice += e.price * e.quantity),
    0
  );
  return (
    <Fragment>
      {reactDom.createPortal(
        <StyledCart orderAvailable={items.length !== 0}>
          <div className="overlay" onClick={hanleCloseCart}></div>
          <div className="cart">
            {items.length === 0 && <h2>No item added!</h2>}
            {listItem}
            <div className="cart__body part">
              <h1>Total Price</h1>
              <h2 className="price">${totalPrice}</h2>
            </div>
            <div className="cart__bottom part">
              <Button className="button">Order</Button>
              <Button onClick={hanleCloseCart}>Close</Button>
            </div>
          </div>
        </StyledCart>,
        document.getElementById("cart-root")
      )}
    </Fragment>
  );
};
export default Cart;
