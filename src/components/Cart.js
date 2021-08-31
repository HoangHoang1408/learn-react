import React, { Fragment } from "react";
import reactDom from "react-dom";
import styled from "styled-components";
import Button from "../UI/Button";

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
    height: 40vh;
    color: black;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
  }
  .button {
    margin-right: 0.5rem;
  }
  .part {
    display: flex;
    justify-content: space-between;
  }
  .cart__top {
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .cart__bottom {
    justify-content: flex-end;
  }
  .a1 {
    display: flex;
    justify-content: space-between;
    width: 200%;
  }
  .price {
    color: rgb(117, 46, 19);
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;
const Cart = function (props) {
  return (
    <Fragment>
      {reactDom.createPortal(
        <StyledCart>
          <div className="overlay"></div>
          <div className="cart">
            <div className="cart__top part">
              <div>
                <h1>Title</h1>
                <div class="a1">
                  <p className="price">$100</p>
                  <p>x 2</p>
                </div>
              </div>
              <div>
                <Button className="button">+</Button>
                <Button>-</Button>
              </div>
            </div>
            <div className="cart__body part">
              <h1>Total Amount</h1>
              <h2 className="price">$200</h2>
            </div>
            <div className="cart__bottom part">
              <Button className="button">Order</Button>
              <Button>Close</Button>
            </div>
          </div>
        </StyledCart>,
        document.getElementById("cart-root")
      )}
    </Fragment>
  );
};
export default Cart;
